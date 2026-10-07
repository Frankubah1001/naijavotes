import React, { useEffect, useState } from "react";

export interface MoneyEffect {
  id: string;
  amount: number;
  type: "gain" | "loss";
  label?: string;
  x?: number;
  y?: number;
}

interface MoneySplashProps {
  effects: MoneyEffect[];
}

export function MoneySplashOverlay({ effects }: MoneySplashProps) {
  if (effects.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden flex items-center justify-center">
      {effects.map((eff) => (
        <div
          key={eff.id}
          className={`flex flex-col items-center justify-center animate-money-fly select-none drop-shadow-2xl ${
            eff.type === "gain" ? "text-emerald-400" : "text-red-500"
          }`}
          style={{
            transform: `translate(${eff.x || 0}px, ${eff.y || 0}px)`,
          }}
        >
          {/* Splash Burst Coins / Icons */}
          <div className="text-4xl animate-bounce mb-1">
            {eff.type === "gain" ? "💸 ✨ ₦ ✨" : "🚨 🔻 ₦ 🔻"}
          </div>

          <div
            className={`px-5 py-2.5 rounded-2xl border-2 font-mono font-black text-2xl sm:text-3xl shadow-2xl backdrop-blur-md ${
              eff.type === "gain"
                ? "bg-emerald-950/90 border-emerald-400 text-emerald-300 ring-4 ring-emerald-500/40"
                : "bg-red-950/90 border-red-500 text-red-300 ring-4 ring-red-500/40"
            }`}
          >
            {eff.type === "gain" ? `+₦${eff.amount.toLocaleString()}` : `-₦${eff.amount.toLocaleString()}`}
          </div>

          {eff.label && (
            <span
              className={`mt-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                eff.type === "gain"
                  ? "bg-emerald-900/80 text-emerald-200 border border-emerald-500/50"
                  : "bg-red-900/80 text-red-200 border border-red-500/50"
              }`}
            >
              {eff.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
