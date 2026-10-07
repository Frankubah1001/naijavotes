import React, { useState } from "react";
import { ShieldAlert, Siren, CheckCircle2, AlertTriangle, Radio, Send, X } from "lucide-react";

export interface SecurityReport {
  id: string;
  culprit: string;
  offence: string;
  evidence: string;
  location: string;
  timestamp: string;
  bountyEarned: number;
}

interface SecurityRiggingModalProps {
  currentActivityTitle: string;
  location: string;
  culprit?: string;
  offence?: string;
  evidence?: string;
  bountyAmount?: number;
  onReportDispatched: (report: SecurityReport) => void;
  onClose: () => void;
}

export function SecurityRiggingModal({
  currentActivityTitle,
  location,
  culprit = "Suspicious Political Agent",
  offence = "Electoral Act Sec 126: Attempted vote buying and electoral disruption",
  evidence = "Live photo/video eyewitness testimony captured at polling station",
  bountyAmount = 4000,
  onReportDispatched,
  onClose,
}: SecurityRiggingModalProps) {
  const [reportState, setReportState] = useState<"compose" | "dispatching" | "arrested">("compose");
  const [unitNotes, setUnitNotes] = useState("");

  const handleSendReport = () => {
    setReportState("dispatching");
    setTimeout(() => {
      setReportState("arrested");
      const rep: SecurityReport = {
        id: Math.random().toString(),
        culprit,
        offence,
        evidence: unitNotes.trim() ? `${evidence} - Details: "${unitNotes.trim()}"` : evidence,
        location,
        timestamp: new Date().toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" }),
        bountyEarned: bountyAmount,
      };
      onReportDispatched(rep);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none">
      <div className="w-full max-w-lg bg-slate-900 border-4 border-red-600 rounded-3xl p-6 shadow-2xl animate-in fade-in zoom-in-95 text-white space-y-5 relative overflow-hidden">
        
        {/* Background Alert Accents */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-red-500/40 pb-3">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-900/50 animate-pulse">
              <Siren className="size-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase font-black">
                INEC & JOINT SECURITY TASKFORCE (JTF)
              </span>
              <h3 className="font-display text-xl font-black text-white">
                Emergency Electoral Rigging Report
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* STEP 1: COMPOSE RIGGING REPORT */}
        {reportState === "compose" && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-2xl bg-red-950/60 border border-red-500/50 flex items-start gap-3">
              <AlertTriangle className="size-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-bold text-amber-300">Live Electoral Offence Detected!</p>
                <p className="text-slate-300">
                  Location: <strong className="text-white">{location}</strong> ({currentActivityTitle})
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Suspect / Offender</span>
                <p className="text-sm font-bold text-red-300">{culprit}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Statutory Infraction</span>
                <p className="text-xs font-semibold text-slate-200">{offence}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Attached Eyewitness Evidence</span>
                <p className="text-xs text-slate-300">{evidence}</p>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                  Additional Eyewitness Observations (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Suspect in black cap handing bundles near tree..."
                  value={unitNotes}
                  onChange={(e) => setUnitNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-left">
                <span className="text-[10px] text-emerald-400 font-bold block uppercase">Bounty Reward</span>
                <p className="text-sm font-mono font-black text-emerald-300">+₦{bountyAmount.toLocaleString()}</p>
              </div>

              <button
                type="button"
                onClick={handleSendReport}
                className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-red-900/60 transition-transform active:scale-95"
              >
                <Send className="size-4" /> Dispatch Security Alert
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DISPATCHING IN PROGRESS */}
        {reportState === "dispatching" && (
          <div className="text-center py-8 space-y-4">
            <div className="size-20 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto shadow-2xl animate-spin">
              <Radio className="size-10" />
            </div>
            <div>
              <h4 className="font-display text-xl font-black text-white">Transmitting Encrypted Signal...</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Alerting Joint Security Patrol (Police, EFCC, Civil Defence) to intercept suspect at {location}.
              </p>
            </div>
          </div>
        )}

        {/* STEP 3: ARRESTED & SITUATION SECURED */}
        {reportState === "arrested" && (
          <div className="text-center py-6 space-y-5">
            <div className="size-20 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-2xl shadow-emerald-950/60">
              <CheckCircle2 className="size-10" />
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500">
                SITUATION INTERCEPTED & ARREST EXECUTED!
              </span>
              <h4 className="font-display text-2xl font-black text-white mt-2">
                Perpetrators Apprehended!
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto leading-relaxed">
                Armed officers neutralized the rigging threat at {location}. The suspect has been detained, and your civic vigilance was rewarded!
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 max-w-xs mx-auto text-center">
              <span className="text-[10px] text-emerald-400 font-bold block uppercase">Civic Vigilance Bounty Paid</span>
              <p className="font-mono text-2xl font-black text-emerald-300">+₦{bountyAmount.toLocaleString()}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider mx-auto block shadow-xl shadow-emerald-950/50"
            >
              Return to Election Board
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
