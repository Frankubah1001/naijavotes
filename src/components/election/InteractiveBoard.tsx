import React from "react";
import { Check, Shield, AlertTriangle, Dice5, Trophy, ArrowRight, Zap } from "lucide-react";
import { ALL_ACTIVITIES, PHASES, type Activity, type Phase } from "@/lib/election/flow";
import { Avatar3D } from "./Avatar3D";
import type { AvatarStyle } from "@/lib/election/avatars";

interface InteractiveBoardProps {
  currentStep: number;
  completedSteps: number[];
  playerAvatar: AvatarStyle;
  onSelectTile: (index: number) => void;
  canRollDice?: boolean;
  onRollDice?: () => void;
  diceValue?: number | null;
  isRolling?: boolean;
}

export function InteractiveElectionBoard({
  currentStep,
  completedSteps,
  playerAvatar,
  onSelectTile,
  canRollDice = false,
  onRollDice,
  diceValue,
  isRolling = false,
}: InteractiveBoardProps) {
  return (
    <div className="rounded-3xl border border-line bg-card p-4 sm:p-7 shadow-2xl relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4 mb-6">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#008751] text-white text-[10px] font-bold uppercase tracking-wider">
            CIVIC ELECTION BOARD JOURNEY
          </span>
          <h3 className="font-display text-2xl font-bold text-ink mt-0.5">
            Election Day Real-Time Stations
          </h3>
        </div>

        <div className="flex items-center gap-3">
          {onRollDice && (
            <button
              type="button"
              onClick={onRollDice}
              disabled={isRolling || !canRollDice}
              className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95 ${
                canRollDice
                  ? "bg-[#008751] hover:bg-emerald-700 text-white shadow-emerald-950/25 animate-pulse"
                  : "bg-paper text-muted border border-line cursor-not-allowed"
              }`}
            >
              <Dice5 className={`size-4 ${isRolling ? "animate-spin" : ""}`} />
              {isRolling ? "Rolling..." : diceValue ? `Rolled ${diceValue}! Move Tile` : "Roll Civic Dice"}
            </button>
          )}

          <div className="px-3.5 py-2 rounded-2xl bg-paper border border-line flex items-center gap-2 text-xs font-bold text-ink">
            <span>Tile:</span>
            <span className="font-mono text-leaf text-sm">{currentStep + 1} / {ALL_ACTIVITIES.length}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 relative">
        {ALL_ACTIVITIES.map((activity, index) => {
          const isCurrent = index === currentStep;
          const isDone = completedSteps.includes(index);
          const isLocked = index > currentStep && !isDone;

          return (
            <div
              key={activity.id}
              onClick={() => {
                if (!isLocked) onSelectTile(index);
              }}
              className={`relative rounded-2xl p-4 border-2 transition-all duration-300 flex flex-col justify-between select-none ${
                isCurrent
                  ? "border-[#008751] bg-gradient-to-b from-card to-emerald-100 shadow-xl ring-4 ring-emerald-500/20 scale-[1.02] z-20"
                  : isDone
                    ? "border-leaf/70 bg-gradient-to-b from-card to-leaf-soft/40 shadow-md hover:border-leaf cursor-pointer"
                    : "border-line/70 bg-paper/60 opacity-70 hover:opacity-90 cursor-pointer"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-black px-2 py-0.5 rounded-md bg-ink text-paper">
                  #{String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-paper border border-line text-muted capitalize">
                  {activity.phase === "voting_time" ? "Voting Hours" : "Collation Guard"}
                </span>
              </div>

              {isCurrent && (
                <div className="my-1 flex flex-col items-center justify-center p-1 bg-paper/80 backdrop-blur-sm rounded-2xl border border-emerald-500/30 shadow-inner">
                  <Avatar3D avatar={playerAvatar} size={90} interactive={false} animated={true} actionState="walking" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#008751] mt-0.5 flex items-center gap-1">
                    <Zap className="size-3" /> You are here
                  </span>
                </div>
              )}

              <div>
                <h4 className="font-bold text-ink text-sm sm:text-base leading-snug">
                  {activity.title}
                </h4>
                <p className="text-[11px] text-muted line-clamp-2 leading-relaxed mt-0.5">
                  {activity.place}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-line/60 flex items-center justify-between text-[11px]">
                {isDone ? (
                  <span className="font-bold text-leaf flex items-center gap-1">
                    <Check className="size-3.5 stroke-[3]" /> Completed
                  </span>
                ) : isCurrent ? (
                  <span className="font-bold text-[#008751] flex items-center gap-1">
                    Active Challenge <ArrowRight className="size-3 animate-pulse" />
                  </span>
                ) : (
                  <span className="text-muted/80">Pending</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
