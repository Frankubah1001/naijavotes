import { chromium } from "playwright";

const BASE = process.env.QA_URL || "http://127.0.0.1:8080";

const run = async () => {
  const browser = await chromium.launch();
  const errors = [];
  const report = {};

  for (const [name, viewport] of [
    ["desktop", { width: 1280, height: 800 }],
    ["mobile", { width: 390, height: 844 }],
  ]) {
    const page = await browser.newPage({ viewport });
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(`[${name}] ${msg.text()}`);
    });
    page.on("pageerror", (err) => errors.push(`[${name}] pageerror: ${err.message}`));

    const overflow = async (label) => {
      const o = await page.evaluate(() => ({
        scrollW: document.documentElement.scrollWidth,
        clientW: document.documentElement.clientWidth,
      }));
      const key = `${name}/${label}`;
      report[key] = { ...o, overflowX: o.scrollW > o.clientW + 1 };
      await page.screenshot({ path: `screenshots/qa-${name}-${label}.png`, fullPage: true });
    };

    const clickText = async (text) => {
      await page.getByRole("button", { name: new RegExp(text, "i") }).first().click({ timeout: 10000 });
      await page.waitForTimeout(700);
    };

    try {
      await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(1200);
      await overflow("1-register");

      // Step 1 -> 2
      await clickText("Select LGA, Ward");
      await overflow("2-pu-select");

      // Step 2 -> 3
      await clickText("Customize 3D Avatar");
      await overflow("3-avatar");

      // Step 3 -> 4
      await clickText("Issue PVC & Wallet");
      await overflow("4-pvc");

      // Finish -> board
      await clickText("Collect PVC");
      await page.waitForTimeout(1200);
      await overflow("5-board");

      // Roll dice (Real3DDice button) if present
      try {
        const roll = page.getByRole("button", { name: /roll|dice/i }).first();
        if (await roll.isVisible({ timeout: 2000 })) {
          await roll.click({ timeout: 5000 });
          await page.waitForTimeout(4500);
        }
      } catch {
        /* dice may not expose a named button */
      }
      await overflow("6-after-roll");

      // If a decision screen opened, pick a choice -> beat screen
      const decisionVisible = await page
        .getByText(/Choose your action/i)
        .isVisible({ timeout: 2000 })
        .catch(() => false);
      if (decisionVisible) {
        await overflow("7-decision");
        const choice = page.locator("button", { hasText: /₦|pts/ }).first();
        if (await choice.isVisible({ timeout: 2000 }).catch(() => false)) {
          await choice.click({ timeout: 5000 });
          // Wait out the 2.2s MoneySplashOverlay celebration animation so the
          // screenshot captures the settled beat screen, not the splash frame.
          await page.waitForTimeout(2700);
          await overflow("8-beat");
          await clickText("Roll Dice Again|Enter Ballot|See Final");
          await overflow("9-back-board");
        }
      }

      // Market screen
      await clickText("Market").catch(() => {});
      await page.waitForTimeout(600);
      await overflow("10-market");
    } catch (e) {
      report[`${name}/flow-error`] = String(e.message || e);
      await page.screenshot({ path: `screenshots/qa-${name}-error.png`, fullPage: true }).catch(() => {});
    }

    await page.close();
  }

  console.log(JSON.stringify({ report, errors }, null, 2));
  await browser.close();
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
