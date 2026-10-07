import React from "react";
import { Avatar3D } from "./Avatar3D";
import type { AvatarStyle } from "@/lib/election/avatars";
import { Real3DDice } from "./MonopolyDice";
import { ShoppingBag, Vote, AlertTriangle, ShieldCheck, Zap, Siren } from "lucide-react";

export interface NaijaBoardTile {
  id: string;
  name: string;
  subtitle: string;
  type: "corner" | "property" | "chance" | "community" | "tax";
  colorBar?: string;
  icon: string;
  activityIndex?: number;
}

// 16-Tile Naija Real Election Day Board
export const NAIJA_BOARD_TILES: NaijaBoardTile[] = [
  // Tile 0: Bottom-Left Corner (POLLING UNIT GATE / START)
  {
    id: "gate",
    name: "POLLING UNIT GATE",
    subtitle: "Accreditation & Queue Open",
    type: "corner",
    icon: "🏫",
    activityIndex: 0,
  },
  // Tile 1: Left-Column 1
  {
    id: "unit_arrival",
    name: "Morning Arrival",
    subtitle: "Queue Order Defense",
    type: "property",
    colorBar: "#92400e", // Brown
    icon: "👥",
    activityIndex: 0,
  },
  // Tile 2: Left-Column 2
  {
    id: "bvas_verification",
    name: "BVAS Biometrics",
    subtitle: "Thumb & Face Verification",
    type: "property",
    colorBar: "#92400e", // Brown
    icon: "📱",
    activityIndex: 1,
  },
  // Tile 3: Left-Column 3
  {
    id: "chance_1",
    name: "CIVIC CHANCE",
    subtitle: "Observer Alert Circular",
    type: "chance",
    icon: "❓",
  },
  // Tile 4: Top-Left Corner (EFCC & POLICE DETENTION CELL)
  {
    id: "jail",
    name: "EFCC DETENTION CELL",
    subtitle: "Rigging Interception Zone",
    type: "corner",
    icon: "⛓️",
  },
  // Tile 5: Top-Row 1
  {
    id: "secret_cubicle",
    name: "Ballot Secrecy",
    subtitle: "Cubicle Orientation Guard",
    type: "property",
    colorBar: "#0284c7", // Sky Blue
    icon: "🗳️",
    activityIndex: 2,
  },
  // Tile 6: Top-Row 2
  {
    id: "cash_vote_offer",
    name: "Vote Buying Trap",
    subtitle: "See-and-Buy Exposure",
    type: "property",
    colorBar: "#0284c7", // Sky Blue
    icon: "💵",
    activityIndex: 3,
  },
  // Tile 7: Top-Row 3
  {
    id: "thug_intimidation",
    name: "Thuggery Attack",
    subtitle: "Solidarity Box Defense",
    type: "property",
    colorBar: "#ea580c", // Orange
    icon: "🏍️",
    activityIndex: 4,
  },
  // Tile 8: Top-Right Corner (CIVIC OBSERVER HUB)
  {
    id: "observer_hub",
    name: "CIVIC OBSERVER HUB",
    subtitle: "Free Rapid Rest Area",
    type: "corner",
    icon: "🛡️",
  },
  // Tile 9: Right-Column 1
  {
    id: "cast_ballot_tile",
    name: "THE BALLOT BOOTH",
    subtitle: "Cast Official Vote",
    type: "property",
    colorBar: "#dc2626", // Red
    icon: "📥",
  },
  // Tile 10: Right-Column 2
  {
    id: "public_sorting",
    name: "Public Loud Count",
    subtitle: "Open Table Verification",
    type: "property",
    colorBar: "#dc2626", // Red
    icon: "📢",
    activityIndex: 5,
  },
  // Tile 11: Right-Column 3
  {
    id: "chance_2",
    name: "CIVIC CHANCE",
    subtitle: "Transmission Network",
    type: "chance",
    icon: "❓",
  },
  // Tile 12: Bottom-Right Corner (OFFENCE ARREST / TRIBUNAL JAIL)
  {
    id: "arrest_corner",
    name: "ELECTORAL ARREST",
    subtitle: "Security Taskforce Patrol",
    type: "corner",
    icon: "👮",
  },
  // Tile 13: Bottom-Row 1
  {
    id: "ec8a_irev_upload",
    name: "EC8A IReV Upload",
    subtitle: "Cloud Photo Transmission",
    type: "property",
    colorBar: "#16a34a", // Green
    icon: "📸",
    activityIndex: 6,
  },
  // Tile 14: Bottom-Row 2
  {
    id: "collation_escort",
    name: "Collation Escort",
    subtitle: "Follow Results to Ward Hall",
    type: "property",
    colorBar: "#16a34a", // Green
    icon: "🚐",
    activityIndex: 7,
  },
  // Tile 15: Bottom-Row 3
  {
    id: "result_declaration",
    name: "Final Declaration",
    subtitle: "Genuine Voice Stamped",
    type: "property",
    colorBar: "#1e40af", // Dark Blue
    icon: "🏆",
    activityIndex: 7,
  },
];

interface NaijaBoardProps {
  currentTileIndex: number;
  playerAvatar: AvatarStyle;
  playerName: string;
  walletBalance: number;
  isVoteEligible: boolean;
  correctAnswersCount: number;
  hasVoted: boolean;
  phase: "voting_time" | "post_voting_collation";
  showRiggingButton?: boolean;
  onTileClick: (tile: NaijaBoardTile, index: number) => void;
  onRollDice: (d1: number, d2: number, total: number) => void;
  onOpenMarket: () => void;
  onOpenBallot: () => void;
  onTriggerSecurityReport: () => void;
  isMovingAvatar?: boolean;
}

export function RealMonopolyBoard({
  currentTileIndex,
  playerAvatar,
  playerName,
  walletBalance,
  isVoteEligible,
  correctAnswersCount,
  hasVoted,
  phase,
  showRiggingButton = false,
  onTileClick,
  onRollDice,
  onOpenMarket,
  onOpenBallot,
  onTriggerSecurityReport,
  isMovingAvatar = false,
}: NaijaBoardProps) {
  const gridTileMap: (number | null)[][] = [
    [4, 5, 6, 7, 8],
    [3, null, null, null, 9],
    [2, null, null, null, 10],
    [1, null, null, null, 11],
    [0, 15, 14, 13, 12],
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl border-8 border-[#133c2a] bg-[#d3ebd9] shadow-2xl p-3 sm:p-5 select-none relative overflow-hidden font-sans">
      {/* 5x5 BOARD GRID */}
      <div className="grid grid-cols-5 grid-rows-5 gap-1.5 sm:gap-2 aspect-square max-h-[760px] w-full mx-auto relative bg-[#e7f5ec] rounded-2xl p-1.5 sm:p-2 border-2 border-[#133c2a] shadow-inner">
        {gridTileMap.map((row, rIdx) =>
          row.map((tileIndex, cIdx) => {
            if (tileIndex === null) {
              if (rIdx === 1 && cIdx === 1) {
                return (
                  <div
                    key="center-board"
                    className="col-span-3 row-span-3 rounded-2xl bg-gradient-to-br from-[#d4eadc] via-[#bce0c9] to-[#99c7aa] border-4 border-[#0e3b25] p-3 sm:p-5 flex flex-col items-center justify-between shadow-xl relative overflow-hidden"
                  >
                    {/* Watermark Logo */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <span className="text-8xl font-black rotate-[-25deg] text-[#008751]">
                        NAIJA
                      </span>
                    </div>

                    {/* Center Header */}
                    <div className="text-center z-10">
                      <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#008751] text-white font-black text-xs sm:text-sm tracking-widest uppercase shadow-lg border border-emerald-300">
                        <span>★ {phase === "voting_time" ? "PHASE 1: VOTING TIME ENCOUNTERS" : "PHASE 2: COLLATION & RESULTS GUARDING"} ★</span>
                      </div>
                      <h2 className="font-display text-xl sm:text-3xl font-extrabold text-[#0d2a1b] mt-1 tracking-tight">
                        ELECTION DAY BOARD: 2027
                      </h2>
                      <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="text-[10px] sm:text-xs font-extrabold px-3 py-0.5 rounded-full bg-slate-900 text-white shadow-sm">
                          {phase === "voting_time"
                            ? `Correct Civic Actions: ${correctAnswersCount}/4 Needed to Vote`
                            : "Escorting Collation & Guarding Results"}
                        </span>
                      </div>
                    </div>

                    {/* 3D Rolling Dice & Player Controls */}
                    <div className="my-1 z-10 flex flex-col items-center">
                      <Real3DDice onRollComplete={onRollDice} />
                    </div>

                    {/* Center Action Buttons */}
                    <div className="z-10 flex flex-wrap items-center justify-center gap-2 w-full">
                      <button
                        type="button"
                        onClick={onOpenMarket}
                        className="px-3.5 py-2 rounded-xl bg-[#0e3b25] hover:bg-[#072416] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg transition-transform active:scale-95 border border-emerald-500/30"
                      >
                        <ShoppingBag className="size-3.5 text-amber-400" />
                        Market (₦{walletBalance.toLocaleString()})
                      </button>

                      {/* Vote Booth CTA button: Only when exactly 4 correct voting activities achieved */}
                      {isVoteEligible && !hasVoted && (
                        <button
                          type="button"
                          onClick={onOpenBallot}
                          className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black flex items-center gap-1.5 shadow-xl shadow-red-900/60 animate-bounce active:scale-95 border-2 border-amber-300"
                        >
                          <Vote className="size-4 text-white" />
                          👉 STEP INTO BALLOT BOOTH NOW!
                        </button>
                      )}

                      {/* Rigging Report Emergency Button: ONLY shown if activity is rigging-related */}
                      {showRiggingButton && (
                        <button
                          type="button"
                          onClick={onTriggerSecurityReport}
                          className="px-3.5 py-2 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-black flex items-center gap-1.5 shadow-lg active:scale-95 border border-red-400 animate-pulse"
                        >
                          <Siren className="size-3.5 text-amber-300" />
                          Report Rigging to Security 🚨
                        </button>
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            }

            const tile = NAIJA_BOARD_TILES[tileIndex];
            const isCurrent = currentTileIndex === tileIndex;
            const isCorner = tile.type === "corner";

            return (
              <div
                key={tile.id}
                onClick={() => onTileClick(tile, tileIndex)}
                className={`relative rounded-xl sm:rounded-2xl border-2 flex flex-col justify-between p-1 sm:p-2 cursor-pointer transition-all duration-300 ${
                  isCurrent
                    ? "border-[#008751] bg-amber-100 ring-4 ring-[#008751] shadow-2xl scale-105 z-30"
                    : isCorner
                      ? "border-[#133c2a] bg-[#b8dec0] hover:bg-[#a6d1af]"
                      : "border-slate-400 bg-white hover:border-slate-600 hover:shadow-md"
                }`}
              >
                {/* Color Header Bar for Property Stations */}
                {tile.colorBar && (
                  <div
                    className="w-full h-3 sm:h-4 rounded-t-lg border-b border-black/30 shadow-inner flex items-center justify-center"
                    style={{ backgroundColor: tile.colorBar }}
                  >
                    <span className="text-[7px] font-bold text-white uppercase tracking-tighter opacity-90 truncate px-1">
                      #{tileIndex}
                    </span>
                  </div>
                )}

                {/* 3D AVATAR MOVING PAWN PIECE */}
                {isCurrent && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none bg-emerald-500/20 backdrop-blur-[1px] rounded-xl animate-bounce">
                    <Avatar3D
                      avatar={playerAvatar}
                      size={52}
                      interactive={false}
                      animated={true}
                      actionState={isMovingAvatar ? "walking" : "idle"}
                    />
                    <span className="text-[7px] sm:text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-[#008751] text-white shadow-md">
                      YOU DEY HERE
                    </span>
                  </div>
                )}

                {/* Tile Icon & Title */}
                <div className="flex flex-col items-center justify-center text-center my-auto px-0.5">
                  <span className="text-xl sm:text-2xl drop-shadow-sm">{tile.icon}</span>
                  <h4 className="font-extrabold text-[8px] sm:text-[11px] text-slate-900 leading-tight mt-0.5 line-clamp-2">
                    {tile.name}
                  </h4>
                  <p className="text-[7px] sm:text-[8px] text-slate-600 font-medium line-clamp-1">
                    {tile.subtitle}
                  </p>
                </div>

                {/* Bottom Footer on Tile */}
                <div className="text-center border-t border-black/10 pt-0.5">
                  <span className="text-[7px] sm:text-[8px] font-mono font-bold text-emerald-800">
                    {tile.type === "corner" ? "CIVIC ZONE" : `STATION`}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
