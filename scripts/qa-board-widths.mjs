import { chromium } from "playwright";

const BASE = process.env.QA_URL || "http://127.0.0.1:8080";
const WIDTHS = [320, 360, 390, 430];

const run = async () => {
  const browser = await chromium.launch();
  const errors = [];
  const report = {};
  const fails = [];

  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));

  const clickText = async (text) => {
    await page.getByRole("button", { name: new RegExp(text, "i") }).first().click({ timeout: 10000 });
    await page.waitForTimeout(700);
  };

  try {
    await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(1200);

    // Registration flow -> board
    await clickText("Select LGA, Ward");
    await clickText("Customize 3D Avatar");
    await clickText("Issue PVC & Wallet");
    await clickText("Collect PVC");
    await page.waitForTimeout(1500);

    for (const width of WIDTHS) {
      await page.setViewportSize({ width, height: 844 });
      await page.waitForTimeout(600);

      const m = await page.evaluate(() => {
        const doc = document.documentElement;
        const grid = document.querySelector("main .grid.grid-cols-5");
        const board = grid ? grid.parentElement : null;
        const out = {
          overflowX: doc.scrollWidth > doc.clientWidth + 1,
          scrollW: doc.scrollWidth,
          clientW: doc.clientWidth,
          foundGrid: !!grid,
          foundBoard: !!board,
        };

        if (board) {
          const r = board.getBoundingClientRect();
          const cs = getComputedStyle(board);
          out.board = {
            left: Math.round(r.left),
            right: Math.round(r.right),
            width: Math.round(r.width),
            cssWidth: cs.width,
            cssMaxWidth: cs.maxWidth,
            boxSizing: cs.boxSizing,
            fitsViewport: r.left >= -1 && r.right <= window.innerWidth + 1,
            clipped: board.scrollHeight > board.clientHeight + 1,
          };
        }
        if (grid) {
          const gr = grid.getBoundingClientRect();
          out.grid = {
            height: Math.round(gr.height),
            clipped: grid.scrollHeight > grid.clientHeight + 1,
          };

          // tiles = direct children that are clickable tiles
          const tiles = [...grid.children].filter(
            (el) => el instanceof HTMLDivElement && el.className.includes("cursor-pointer"),
          );
          out.tileCount = tiles.length;

          // every tile inside the grid box; bottom-row footers inside board
          let tilesOutOfGrid = 0;
          let labelsOutOfBoard = 0;
          for (const t of tiles) {
            const tr = t.getBoundingClientRect();
            if (tr.left < gr.left - 1 || tr.right > gr.right + 1 || tr.top < gr.top - 1 || tr.bottom > gr.bottom + 1) {
              tilesOutOfGrid++;
            }
            if (board) {
              const br = board.getBoundingClientRect();
              const footer = t.lastElementChild;
              if (footer) {
                const fr = footer.getBoundingClientRect();
                if (fr.bottom > br.bottom + 1) labelsOutOfBoard++;
              }
            }
          }
          out.tilesOutOfGrid = tilesOutOfGrid;
          out.labelsOutOfBoard = labelsOutOfBoard;

          // active tile indicator containment + overlap with other tiles
          const active = tiles.find((t) => t.className.includes("ring-2"));
          if (active) {
            const ar = active.getBoundingClientRect();
            const overlay = active.querySelector(".pointer-events-none");
            out.active = { found: true };
            if (overlay) {
              const or = overlay.getBoundingClientRect();
              out.active.overlayInTile =
                or.left >= ar.left - 1 && or.right <= ar.right + 1 && or.top >= ar.top - 1 && or.bottom <= ar.bottom + 1;
              const canvas = overlay.querySelector("canvas");
              if (canvas) {
                const cr = canvas.getBoundingClientRect();
                out.active.avatarInTile =
                  cr.left >= ar.left - 1 && cr.right <= ar.right + 1 && cr.top >= ar.top - 1 && cr.bottom <= ar.bottom + 1;
              }
            }
            let overlapping = 0;
            for (const t of tiles) {
              if (t === active) continue;
              const tr = t.getBoundingClientRect();
              const ox = Math.min(ar.right, tr.right) - Math.max(ar.left, tr.left);
              const oy = Math.min(ar.bottom, tr.bottom) - Math.max(ar.top, tr.top);
              if (ox > 1 && oy > 1) overlapping++;
            }
            out.active.overlappingTiles = overlapping;
          } else {
            out.active = { found: false };
          }

          // progress badge should not wrap into multiple lines
          const badge = [...document.querySelectorAll("main span")].find((s) =>
            /\/4 Correct Actions/.test(s.textContent || ""),
          );
          if (badge) {
            const br = badge.getBoundingClientRect();
            const fs = parseFloat(getComputedStyle(badge).fontSize);
            out.badge = { height: Math.round(br.height), fontSize: fs, singleLine: br.height <= fs * 2.6 };
          }
        }

        // bottom whitespace under the board
        if (board) {
          const br = board.getBoundingClientRect();
          const docBottom = window.scrollY + document.documentElement.scrollHeight;
          const boardDocBottom = window.scrollY + br.bottom;
          out.whitespaceBelowBoard = Math.max(0, Math.round(docBottom - boardDocBottom));
        }
        return out;
      });

      report[width] = m;

      if (m.overflowX) fails.push(`${width}: horizontal page overflow`);
      if (!m.foundBoard) fails.push(`${width}: board not found`);
      if (m.board) {
        if (!m.board.fitsViewport) fails.push(`${width}: board exceeds viewport`);
        if (m.board.boxSizing !== "border-box") fails.push(`${width}: box-sizing != border-box`);
        if (m.board.clipped) fails.push(`${width}: board content clipped (labels outside container)`);
      }
      if (m.grid && m.grid.clipped) fails.push(`${width}: grid content clipped`);
      if (m.tilesOutOfGrid) fails.push(`${width}: ${m.tilesOutOfGrid} tiles outside grid box`);
      if (m.labelsOutOfBoard) fails.push(`${width}: ${m.labelsOutOfBoard} bottom labels outside board`);
      if (m.active && m.active.found) {
        if (m.active.overlayInTile === false) fails.push(`${width}: indicator overlay exceeds its tile`);
        if (m.active.avatarInTile === false) fails.push(`${width}: avatar exceeds its tile`);
        if (m.active.overlappingTiles > 0) fails.push(`${width}: active tile overlaps ${m.active.overlappingTiles} neighbours`);
      } else {
        fails.push(`${width}: active indicator not found`);
      }
      if (m.badge && !m.badge.singleLine) fails.push(`${width}: progress badge wraps (${m.badge.height}px)`);

      await page.screenshot({ path: `screenshots/qa-w${width}-board.png`, fullPage: true });
    }
  } catch (err) {
    fails.push(`fatal: ${err.message}`);
  }

  await browser.close();

  console.log(JSON.stringify({ report, errors, fails }, null, 2));
  if (fails.length || errors.length) process.exitCode = 1;
};

run();

