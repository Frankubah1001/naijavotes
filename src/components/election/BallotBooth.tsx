import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Vote,
  ShieldCheck,
  Sparkles,
  Fingerprint,
  Eye,
  Lock
} from "lucide-react";
import { type PollingUnitData } from "@/lib/election/pollingUnits";
import { Avatar3D } from "./Avatar3D";
import type { AvatarStyle } from "@/lib/election/avatars";

interface BallotModalProps {
  voterName: string;
  pollingUnit: PollingUnitData;
  avatar: AvatarStyle;
  onVoteCast: (party: { code: string; name: string; candidate: string }) => void;
  onClose: () => void;
}

const PARTIES = [
  { code: "APC", name: "All Progressives Congress", candidate: "Bola Ahmed Tinubu", symbol: "🧹", color: "#16a34a" },
  { code: "NDC", name: "Nigeria Democratic Congress", candidate: "Peter Obi", symbol: "👨‍👩‍👧", color: "#dc2626" },
  { code: "ADC", name: "African Democratic Congress", candidate: "Atiku Abubakar", symbol: "☂️", color: "#2563eb" },
  { code: "SDP", name: "Social Democratic Party", candidate: "Adewole Adebayo", symbol: "🧺", color: "#ea580c" },
  { code: "AAC", name: "Action Alliance Congress", candidate: "Omoyele Sowore", symbol: "🤝", color: "#9333ea" },
  { code: "APGA", name: "All Progressives Grand Alliance", candidate: "Peter Umeadi", symbol: "🐓", color: "#059669" },
];

export function BallotBoothModal({
  voterName,
  pollingUnit,
  avatar,
  onVoteCast,
  onClose,
}: BallotModalProps) {
  const [bvasState, setBvasState] = useState<"bvas" | "cubicle" | "stamped" | "thumbprint">("bvas");
  const [selectedParty, setSelectedParty] = useState<typeof PARTIES[0] | null>(null);
  const [fingerprintDone, setFingerprintDone] = useState(false);
  const [inkApplied, setInkApplied] = useState(false);

  const handleBvasAccredit = () => {
    setFingerprintDone(true);
    setTimeout(() => {
      setBvasState("cubicle");
    }, 1200);
  };

  const handleSelectParty = (party: typeof PARTIES[0]) => {
    setSelectedParty(party);
  };

  const handleThumbprint = () => {
    if (!selectedParty) return;
    setInkApplied(true);
    setTimeout(() => {
      setBvasState("stamped");
    }, 1400);
  };

  const handleFinalCast = () => {
    if (selectedParty) {
      onVoteCast(selectedParty);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 select-none">
      <div className="w-full max-w-2xl bg-card border-2 border-line rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-line bg-gradient-to-r from-leaf-soft via-paper to-card flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-2xl bg-leaf text-paper flex items-center justify-center font-black">
              <Vote className="size-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-leaf uppercase font-bold">
                INEC BVAS & BALLOT BOOTH
              </span>
              <h3 className="font-display text-xl font-bold text-ink">
                Official Ballot Paper (Form EC8A)
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-line/40 text-muted hover:text-ink transition-colors"
          >
            ✕
          </button>
        </div>

        {/* STEP 1: BVAS BIOMETRIC ACCREDITATION */}
        {bvasState === "bvas" && (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="max-w-md mx-auto">
              <div className="size-20 rounded-full bg-leaf-soft text-leaf mx-auto flex items-center justify-center mb-3">
                <Fingerprint className="size-10" />
              </div>
              <h4 className="font-display text-2xl font-bold text-ink">
                BVAS Biometric Accreditation
              </h4>
              <p className="text-sm text-muted mt-1">
                Presiding officer matches your PVC and scans your fingerprint on the BVAS tablet at{" "}
                <strong className="text-ink">{pollingUnit.puName}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-paper border border-line flex items-center justify-between max-w-sm mx-auto">
              <div className="text-left">
                <p className="text-[10px] text-muted uppercase font-bold">Voter Name</p>
                <p className="text-xs font-bold text-ink">{voterName}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-muted uppercase font-bold">PU Code</p>
                <p className="text-xs font-mono font-bold text-leaf">{pollingUnit.puNumber}</p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleBvasAccredit}
                disabled={fingerprintDone}
                className="px-8 py-3.5 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-bold text-sm shadow-xl shadow-leaf/25 flex items-center gap-2 mx-auto transition-transform active:scale-95"
              >
                <Fingerprint className="size-5" />
                {fingerprintDone ? "BVAS Matched! Entering Voting Cubicle..." : "Place Thumb on BVAS Scanner"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SECRET VOTING CUBICLE & BALLOT PAPER */}
        {bvasState === "cubicle" && (
          <div className="p-6 space-y-5">
            <div className="flex items-center justify-between bg-warn-soft/40 border border-warn/30 p-3.5 rounded-2xl">
              <div className="flex items-center gap-2 text-xs text-ink font-medium">
                <Lock className="size-4 text-warn shrink-0" />
                <span>Secret Voting Cubicle: Your mark is private. Do NOT show anyone.</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-leaf text-paper">
                Accredited
              </span>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                Mark your preferred party symbol with your purple ink thumbprint:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PARTIES.map((party) => {
                  const isSelected = selectedParty?.code === party.code;
                  return (
                    <button
                      key={party.code}
                      type="button"
                      onClick={() => handleSelectParty(party)}
                      className={`p-3.5 rounded-2xl border-2 text-left transition-all relative ${isSelected
                        ? "border-leaf bg-leaf-soft shadow-lg ring-2 ring-leaf/30"
                        : "border-line bg-paper hover:border-leaf/40"
                        }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-2xl">{party.symbol}</span>
                        <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-ink text-paper">
                          {party.code}
                        </span>
                      </div>
                      <p className="font-bold text-xs text-ink">{party.candidate}</p>
                      <p className="text-[10px] text-muted truncate">{party.name}</p>

                      {isSelected && (
                        <div className="absolute top-2 right-2 size-5 rounded-full bg-leaf text-paper flex items-center justify-center text-xs font-bold">
                          ✓
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 pt-3 border-t border-line sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-muted">
                {selectedParty ? `Selected: ${selectedParty.code}` : "Click a party to thumbprint"}
              </span>

              <button
                type="button"
                onClick={handleThumbprint}
                disabled={!selectedParty}
                className={`w-full justify-center whitespace-nowrap px-5 sm:px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 transition-all sm:w-auto ${selectedParty
                  ? "bg-stamp hover:bg-stamp/90 text-paper shadow-lg shadow-stamp/25 active:scale-95"
                  : "bg-line text-muted cursor-not-allowed"
                  }`}
              >
                <Fingerprint className="size-4" />
                Apply Indelible Thumbprint to Ballot
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: BALLOT STAMPED & BOX INSERTION */}
        {bvasState === "stamped" && (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="size-20 rounded-full bg-leaf text-paper mx-auto flex items-center justify-center shadow-xl shadow-leaf/30">
              <ShieldCheck className="size-10" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-leaf">
                BALLOT SEALED & INDELIBLE INK APPLIED
              </span>
              <h4 className="font-display text-2xl font-bold text-ink mt-1">
                Drop Ballot in the Transparent Ballot Box
              </h4>
              <p className="text-xs text-muted mt-2 max-w-sm mx-auto">
                You marked your ballot for <strong>{selectedParty?.name} ({selectedParty?.code})</strong>. Fold along the crease and place it in the center box.
              </p>
            </div>

            {/* Indelible ink finger display */}
            <div className="p-3.5 rounded-2xl bg-paper border border-line max-w-sm mx-auto flex items-center gap-3">
              <div className="size-8 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs font-bold shadow-md">
                INK
              </div>
              <div className="text-left text-xs">
                <p className="font-bold text-ink">Purple Indelible Ink Marked</p>
                <p className="text-muted text-[11px]">Prevents duplicate voting across other polling units.</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFinalCast}
              className="mx-auto flex w-full items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-extrabold text-sm shadow-xl shadow-leaf/30 active:scale-95 sm:w-auto"
            >
              <Vote className="size-5" /> Cast Ballot & Return to Board
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
