import React, { useState, useEffect } from "react";
import { Avatar3D } from "./Avatar3D";
import type { AvatarStyle } from "@/lib/election/avatars";
import { Shield, ShieldAlert, Sparkles, AlertOctagon, HeartHandshake, CheckCircle2 } from "lucide-react";

export interface ActivityInteractiveScenario {
  id: string;
  threatTitle: string;
  threatDescription: string;
  threatIcon: string;
  threatActors: string[];
  repelledState: {
    message: string;
    repelIcon: string;
    shieldType: "courage" | "law" | "integrity" | "crowd";
  };
  bribedState: {
    message: string;
    compromiseIcon: string;
  };
}

export const ACTIVITY_SCENARIOS: Record<string, ActivityInteractiveScenario> = {
  unit_arrival: {
    id: "unit_arrival",
    threatTitle: "Queue Touts & Line Disrupters",
    threatDescription: "Political touts are trying to push their friends to the front of the queue ahead of elders and pregnant women.",
    threatIcon: "👥",
    threatActors: ["🏃‍♂️", "📋", "😠"],
    repelledState: {
      message: "Order restored! You and other citizens insisted on sequential numbers, and the officer restored peace.",
      repelIcon: "🛡️",
      shieldType: "courage",
    },
    bribedState: {
      message: "Queue was disrupted and innocent voters were pushed back.",
      compromiseIcon: "⚠️",
    },
  },
  bvas_verification: {
    id: "bvas_verification",
    threatTitle: "Proxy PVC & Unverified Card Attempt",
    threatDescription: "A party agent is pressuring the officer to tick an absent voter who sent a borrowed PVC card.",
    threatIcon: "📱",
    threatActors: ["🕵️‍♂️", "💳", "👀"],
    repelledState: {
      message: "No BVAS, No Voting! You upheld the rule of law and stopped illegal proxy accreditation.",
      repelIcon: "🪪",
      shieldType: "law",
    },
    bribedState: {
      message: "Illegal proxy voting was permitted on the table.",
      compromiseIcon: "🚨",
    },
  },
  secret_cubicle: {
    id: "secret_cubicle",
    threatTitle: "Prying Eyes Behind Voting Screen",
    threatDescription: "Political agents standing behind the booth trying to inspect which candidate you mark on your paper.",
    threatIcon: "🗳️",
    threatActors: ["👀", "👥", "📵"],
    repelledState: {
      message: "Cubicle turned toward the wall! Your ballot remains completely private and protected.",
      repelIcon: "🛡️",
      shieldType: "integrity",
    },
    bribedState: {
      message: "Ballot was exposed to partisan observers.",
      compromiseIcon: "👁️",
    },
  },
  cash_vote_offer: {
    id: "cash_vote_offer",
    threatTitle: "Cash-for-Vote ₦10,000 Bribe",
    threatDescription: "A vote buyer is waving cash behind the building, offering money in exchange for photos of marked ballots.",
    threatIcon: "💵",
    threatActors: ["💵", "🤝", "🤫"],
    repelledState: {
      message: "Bribe rejected in public daylight! The vote-buyer panicked and fled from the polling station.",
      repelIcon: "⚡",
      shieldType: "integrity",
    },
    bribedState: {
      message: "Accepted cash for vote. Heavy Electoral Act penalty fine deducted.",
      compromiseIcon: "💸",
    },
  },
  thug_intimidation: {
    id: "thug_intimidation",
    threatTitle: "Thugs Attempting Ballot Box Snatching",
    threatDescription: "Four armed men on motorcycles revving engines to scatter the crowd and snatch the ballot box.",
    threatIcon: "🏍️",
    threatActors: ["🏍️", "⚔️", "🔥"],
    repelledState: {
      message: "Community solidarity! Citizens linked arms around the box, and the thugs were forced to flee.",
      repelIcon: "🛡️",
      shieldType: "crowd",
    },
    bribedState: {
      message: "Voters scattered in fear, leaving the ballot box vulnerable.",
      compromiseIcon: "🏃‍♂️",
    },
  },
  public_sorting: {
    id: "public_sorting",
    threatTitle: "Loud Count & Ballot Disqualification Dispute",
    threatDescription: "An agent is attempting to falsely cancel a valid vote for an opponent on the counting table.",
    threatIcon: "📢",
    threatActors: ["🤬", "📑", "📢"],
    repelledState: {
      message: "Vigilant public scrutiny! You demanded to see the paper, and the officer counted it correctly.",
      repelIcon: "👁️",
      shieldType: "law",
    },
    bribedState: {
      message: "A valid vote was wrongfully cancelled.",
      compromiseIcon: "❌",
    },
  },
  ec8a_irev_upload: {
    id: "ec8a_irev_upload",
    threatTitle: "Obstruction of IReV Cloud Upload",
    threatDescription: "A man is trying to stop the officer from photographing and transmitting the signed Form EC8A result to the online portal.",
    threatIcon: "📸",
    threatActors: ["📱", "🗣️", "🎭"],
    repelledState: {
      message: "IReV Transmission Successful! The official result was uploaded live to the cloud and posted on the wall.",
      repelIcon: "📸",
      shieldType: "law",
    },
    bribedState: {
      message: "Results were taken away without being uploaded, creating high risk of tampering.",
      compromiseIcon: "⚠️",
    },
  },
  collation_escort: {
    id: "collation_escort",
    threatTitle: "Collation Vehicle Diversion Squad",
    threatDescription: "An unmarked vehicle attempting to detour the official bus carrying results to the Ward Collation Hall.",
    threatIcon: "🚐",
    threatActors: ["🚗", "🕶️", "⚠️"],
    repelledState: {
      message: "Escort Convoy Secured! You followed the results vehicle safely inside the Collation Hall.",
      repelIcon: "🏆",
      shieldType: "crowd",
    },
    bribedState: {
      message: "Convoy was diverted and figures were altered during transit.",
      compromiseIcon: "🚨",
    },
  },
};

interface DynamicActivityStageProps {
  activityId: string;
  avatar: AvatarStyle;
  selectedChoiceId?: string | null;
  isRepelled?: boolean;
  isCompromised?: boolean;
}

export function DynamicActivityStage({
  activityId,
  avatar,
  selectedChoiceId,
  isRepelled = false,
  isCompromised = false,
}: DynamicActivityStageProps) {
  const scenario = ACTIVITY_SCENARIOS[activityId] || ACTIVITY_SCENARIOS.unit_arrival;

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 border-4 border-[#008751] p-4 sm:p-6 overflow-hidden shadow-2xl select-none">
      {/* Background Animated Stage Lighting */}
      <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
        isRepelled ? "bg-emerald-500/30" : isCompromised ? "bg-red-600/30" : "bg-amber-500/20"
      }`} />
      <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
        isRepelled ? "bg-emerald-400/20" : isCompromised ? "bg-red-800/30" : "bg-emerald-500/10"
      }`} />

      {/* Top Threat Alert Header */}
      <div className="flex items-center justify-between border-b border-slate-700/80 pb-3 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-red-500 animate-ping" />
          <span className="text-[10px] sm:text-xs font-black tracking-widest text-amber-300 uppercase">
            LIVE ELECTORAL ENCOUNTER
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold px-3 py-1 rounded-full bg-slate-800 border border-slate-600">
          <span>Situation:</span>
          <span className="text-amber-400">{scenario.threatTitle}</span>
        </div>
      </div>

      {/* INTERACTIVE STAGE BATTLEGROUND */}
      <div className="relative min-h-[160px] sm:h-56 flex items-center justify-between px-2 sm:px-12 py-3 border-2 border-dashed border-slate-700/60 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden">
        
        {/* LEFT SIDE: VOTER (AVATAR + CIVIC SHIELD) */}
        <div className="relative flex flex-col items-center shrink-0 z-20">
          <div className={`transition-all duration-500 rounded-full p-1 sm:p-2 ${
            isRepelled
              ? "bg-emerald-500/30 ring-4 sm:ring-8 ring-emerald-400/50 scale-105 sm:scale-110 shadow-2xl shadow-emerald-500"
              : isCompromised
                ? "bg-red-600/20 ring-2 sm:ring-4 ring-red-500/40"
                : "bg-slate-800/40 ring-2 ring-emerald-400/20"
          }`}>
            <div className="sm:hidden">
              <Avatar3D
                avatar={avatar}
                size={70}
                interactive={false}
                animated={true}
                actionState={isRepelled ? "celebrating" : isCompromised ? "fined" : "walking"}
              />
            </div>
            <div className="hidden sm:block">
              <Avatar3D
                avatar={avatar}
                size={110}
                interactive={false}
                animated={true}
                actionState={isRepelled ? "celebrating" : isCompromised ? "fined" : "walking"}
              />
            </div>
          </div>

          {isRepelled && (
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 size-7 sm:size-10 rounded-full bg-[#008751] text-white flex items-center justify-center text-sm sm:text-xl shadow-2xl animate-spin border-2 border-emerald-300">
              🛡️
            </div>
          )}

          <span className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#008751] text-white tracking-wider shadow-md whitespace-nowrap">
            VOTER (YOU)
          </span>
        </div>

        {/* CENTER INTERACTION FORCEFIELD */}
        <div className="flex flex-col items-center justify-center text-center px-1 sm:px-2 z-10 shrink min-w-0">
          {isRepelled ? (
            <div className="flex flex-col items-center animate-bounce">
              <span className="text-2xl sm:text-5xl">⚡ 💥 🛡️</span>
              <span className="mt-1 text-[9px] sm:text-xs font-black text-emerald-300 uppercase tracking-wider bg-emerald-950/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-400 whitespace-nowrap">
                THREAT REPELLED!
              </span>
            </div>
          ) : isCompromised ? (
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-4xl animate-pulse">💸 ⚠️ 🚨</span>
              <span className="mt-1 text-[9px] sm:text-xs font-black text-red-400 uppercase tracking-wider bg-red-950/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-red-500 whitespace-nowrap">
                COMPROMISED!
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-base sm:text-2xl animate-pulse text-amber-400">
                <span>⚡</span>
                <span className="text-xs sm:text-sm font-bold text-slate-300">Approaching</span>
                <span>⚡</span>
              </div>
              <span className="text-[8px] sm:text-[10px] text-slate-400 font-medium text-center line-clamp-2">Select right civic action</span>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: APPROACHING THREAT ACTORS */}
        <div className={`relative flex flex-col items-center shrink-0 z-20 transition-all duration-700 ${
          isRepelled
            ? "translate-x-12 sm:translate-x-32 opacity-20 rotate-45 scale-75"
            : isCompromised
              ? "translate-x-[-10px] sm:translate-x-[-20px] scale-105 sm:scale-110"
              : "translate-x-0 animate-pulse"
        }`}>
          <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-3 rounded-2xl bg-slate-900/90 border-2 border-red-500/60 shadow-xl">
            {scenario.threatActors.map((actor, idx) => (
              <span
                key={idx}
                className={`text-xl sm:text-4xl transform transition-transform ${
                  isRepelled ? "rotate-180 scale-50" : `hover:scale-125 animate-bounce delay-${idx * 100}`
                }`}
              >
                {actor}
              </span>
            ))}
          </div>

          <span className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-red-700 text-white tracking-wider shadow-md whitespace-nowrap">
            {isRepelled ? "REPELLED" : "THREAT"}
          </span>
        </div>
      </div>

      {/* STAGE FOOTER EXPLANATION */}
      <div className="mt-3 p-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs flex items-center justify-between">
        <p className="text-slate-300 font-medium">
          {isRepelled
            ? scenario.repelledState.message
            : isCompromised
              ? scenario.bribedState.message
              : scenario.threatDescription}
        </p>

        {isRepelled && (
          <span className="font-extrabold text-emerald-400 text-xs shrink-0 flex items-center gap-1">
            <CheckCircle2 className="size-4" /> Integrity Solid!
          </span>
        )}
      </div>
    </div>
  );
}
