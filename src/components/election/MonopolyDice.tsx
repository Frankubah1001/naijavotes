import React, { useState } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";

interface Real3DDiceProps {
  onRollComplete: (dice1: number, dice2: number, total: number) => void;
  disabled?: boolean;
}

export function Real3DDice({ onRollComplete, disabled = false }: Real3DDiceProps) {
  const [isRolling, setIsRolling] = useState(false);
  const [d1, setD1] = useState(3);
  const [d2, setD2] = useState(4);

  const handleRoll = () => {
    if (isRolling || disabled) return;
    setIsRolling(true);

    let rollCount = 0;
    const interval = setInterval(() => {
      setD1(Math.floor(Math.random() * 6) + 1);
      setD2(Math.floor(Math.random() * 6) + 1);
      rollCount++;
      if (rollCount > 10) {
        clearInterval(interval);
        const final1 = Math.floor(Math.random() * 6) + 1;
        const final2 = Math.floor(Math.random() * 6) + 1;
        setD1(final1);
        setD2(final2);
        setIsRolling(false);
        onRollComplete(final1, final2, final1 + final2);
      }
    }, 70);
  };

  const renderDiceFace = (val: number) => {
    switch (val) {
      case 1: return <Dice1 className="size-6 sm:size-12 text-[#008751] drop-shadow" />;
      case 2: return <Dice2 className="size-6 sm:size-12 text-slate-800 drop-shadow" />;
      case 3: return <Dice3 className="size-6 sm:size-12 text-slate-800 drop-shadow" />;
      case 4: return <Dice4 className="size-6 sm:size-12 text-slate-800 drop-shadow" />;
      case 5: return <Dice5 className="size-6 sm:size-12 text-slate-800 drop-shadow" />;
      default: return <Dice6 className="size-6 sm:size-12 text-[#008751] drop-shadow" />;
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      {/* 3D Dice Pair */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Die 1 */}
        <div
          className={`size-9 sm:size-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-slate-100 to-slate-200 border-2 border-emerald-600 shadow-xl flex items-center justify-center transition-all ${
            isRolling ? "animate-spin scale-110 rotate-12" : "shadow-emerald-950/40"
          }`}
        >
          {renderDiceFace(d1)}
        </div>

        {/* Die 2 */}
        <div
          className={`size-9 sm:size-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-slate-100 to-slate-200 border-2 border-emerald-600 shadow-xl flex items-center justify-center transition-all ${
            isRolling ? "animate-spin scale-110 -rotate-12" : "shadow-emerald-950/40"
          }`}
        >
          {renderDiceFace(d2)}
        </div>
      </div>

      <button
        type="button"
        onClick={handleRoll}
        disabled={isRolling || disabled}
        className={`px-3 sm:px-7 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-sm uppercase tracking-wider shadow-xl flex items-center gap-1 sm:gap-2 transition-all active:scale-95 ${
          disabled
            ? "bg-slate-700/60 text-slate-400 border border-slate-600 cursor-not-allowed"
            : isRolling
              ? "bg-amber-400 text-slate-950 animate-pulse"
              : "bg-gradient-to-r from-[#008751] via-emerald-600 to-[#005533] hover:from-emerald-500 hover:to-emerald-700 text-white ring-2 sm:ring-4 ring-emerald-400/30 shadow-emerald-950/50"
        }`}
      >
        <span>🎲</span>
        <span className="truncate">{isRolling ? "Rolling..." : `Throw Dice (${d1 + d2})`}</span>
      </button>
    </div>
  );
}
