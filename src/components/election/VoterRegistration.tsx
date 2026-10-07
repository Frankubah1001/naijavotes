import React, { useState } from "react";
import { UserCheck, Shield, Sparkles, MapPin, CheckCircle2, ChevronRight, IdCard } from "lucide-react";
import { STATES_AND_LGAS, WARDS_BY_LGA, generatePollingUnits, type PollingUnitData } from "@/lib/election/pollingUnits";
import { AVATAR_PRESETS, type AvatarStyle } from "@/lib/election/avatars";
import { Avatar3D } from "./Avatar3D";

export interface RegisteredVoter {
  fullName: string;
  nin: string;
  vin: string;
  gender: string;
  avatar: AvatarStyle;
  pollingUnit: PollingUnitData;
  registrationDate: string;
  pvcCollected: boolean;
  walletBalance: number; // In Naira (₦)
  civicBudget: number; // In Naira (₦)
}

interface RegistrationFormProps {
  onComplete: (voter: RegisteredVoter) => void;
}

export function VoterRegistrationModal({ onComplete }: RegistrationFormProps) {
  const [step, setStep] = useState<"details" | "pu_select" | "avatar" | "pvc_preview">("details");
  
  // Form fields
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("male");
  const [state, setState] = useState("Lagos");
  const [lga, setLga] = useState("Ikeja");
  const [ward, setWard] = useState("Ward 01 - Alausa / Secretariat");
  const [selectedPu, setSelectedPu] = useState<PollingUnitData | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarStyle>(AVATAR_PRESETS[0]);
  const [isCollectingPVC, setIsCollectingPVC] = useState(false);
  const [pvcReady, setPvcReady] = useState(false);

  // Computed
  const availableLgas = STATES_AND_LGAS[state]?.lgas || [];
  const availableWards = WARDS_BY_LGA[lga] || [
    `Ward 01 - Central ${lga}`,
    `Ward 02 - North ${lga}`,
    `Ward 03 - South ${lga}`,
    `Ward 04 - East ${lga}`,
  ];
  const pollingUnits = generatePollingUnits(state, lga, ward);

  const vinGenerated = `90F5-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(10 + Math.random() * 90)}`;
  const ninGenerated = `2849${Math.floor(1000000 + Math.random() * 9000000)}`;

  const handleStateChange = (newState: string) => {
    setState(newState);
    const newLgas = STATES_AND_LGAS[newState]?.lgas || [];
    const firstLga = newLgas[0] || "Central";
    setLga(firstLga);
    const newWards = WARDS_BY_LGA[firstLga] || [`Ward 01 - Central ${firstLga}`];
    setWard(newWards[0]);
    setSelectedPu(null);
  };

  const handleLgaChange = (newLga: string) => {
    setLga(newLga);
    const newWards = WARDS_BY_LGA[newLga] || [
      `Ward 01 - Central ${newLga}`,
      `Ward 02 - North ${newLga}`,
    ];
    setWard(newWards[0]);
    setSelectedPu(null);
  };

  const handleFinish = () => {
    const finalPu = selectedPu || pollingUnits[0];
    const registered: RegisteredVoter = {
      fullName: fullName.trim() || "Chinedu Adebayo",
      nin: ninGenerated,
      vin: vinGenerated,
      gender,
      avatar: selectedAvatar,
      pollingUnit: finalPu,
      registrationDate: new Date().toLocaleDateString("en-NG", { year: "numeric", month: "short", day: "numeric" }),
      pvcCollected: true,
      walletBalance: 15000, // ₦15,000 Starting Civic Allowance & Daily Budget
      civicBudget: 15000,
    };
    onComplete(registered);
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl border border-line bg-card/95 backdrop-blur-xl shadow-2xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-leaf/20 border border-leaf text-leaf flex items-center justify-center font-bold">
            <Shield className="size-5" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest text-leaf uppercase">INEC CVR Portal 2027</span>
            <h2 className="font-display text-2xl font-bold text-ink">Voter Accreditation & Registration</h2>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-paper border border-line text-muted">
          Step {step === "details" ? "1/4" : step === "pu_select" ? "2/4" : step === "avatar" ? "3/4" : "4/4"}
        </div>
      </div>

      {/* STEP 1: PERSONAL DETAILS */}
      {step === "details" && (
        <div className="space-y-6">
          <div className="bg-leaf-soft/40 border border-leaf/30 rounded-2xl p-4 flex items-start gap-3">
            <UserCheck className="size-5 text-leaf shrink-0 mt-0.5" />
            <p className="text-sm text-ink leading-relaxed">
              Every eligible citizen must register on the National Register of Voters to receive their <strong>Permanent Voter Card (PVC)</strong>. Enter your official details below to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold tracking-wider text-muted uppercase mb-1.5">
                Full Name (as in NIN / Passport)
              </label>
              <input
                type="text"
                placeholder="e.g. Babatunde Ngozi Danjuma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-line bg-paper text-ink placeholder:text-muted/60 focus:outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wider text-muted uppercase mb-1.5">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-line bg-paper text-ink focus:outline-none focus:border-leaf font-medium"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider text-muted uppercase mb-1.5">
              Select Your State of Registration
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.keys(STATES_AND_LGAS).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleStateChange(s)}
                  className={`px-3 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                    state === s
                      ? "border-leaf bg-leaf text-paper shadow-md shadow-leaf/20"
                      : "border-line bg-paper text-ink hover:border-leaf/50"
                  }`}
                >
                  {s.replace("_", " ")}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={() => setStep("pu_select")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-semibold shadow-lg shadow-leaf/25 transition-transform active:scale-95"
            >
              Select Polling Unit
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: SELECT POLLING UNIT */}
      {step === "pu_select" && (
        <div className="space-y-6">
          <div className="bg-paper border border-line rounded-2xl p-4">
            <h3 className="text-xs font-semibold tracking-wider text-muted uppercase mb-2">Location Drilldown</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted font-medium mb-1 block">Local Government Area (LGA)</label>
                <select
                  value={lga}
                  onChange={(e) => handleLgaChange(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-line bg-card text-ink font-semibold"
                >
                  {availableLgas.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-muted font-medium mb-1 block">Ward (Registration Area)</label>
                <select
                  value={ward}
                  onChange={(e) => {
                    setWard(e.target.value);
                    setSelectedPu(null);
                  }}
                  className="w-full px-3 py-2.5 rounded-xl border border-line bg-card text-ink font-semibold"
                >
                  {availableWards.map((w) => (
                    <option key={w} value={w}>{w}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider">
                Available Real Polling Units ({pollingUnits.length})
              </h3>
              <span className="text-xs text-leaf font-semibold flex items-center gap-1">
                <MapPin className="size-3" /> {state.replace("_", " ")} &gt; {lga}
              </span>
            </div>

            <div className="grid gap-3">
              {pollingUnits.map((pu) => {
                const isSelected = selectedPu?.puNumber === pu.puNumber || (!selectedPu && pu === pollingUnits[0]);
                return (
                  <button
                    key={pu.puNumber}
                    type="button"
                    onClick={() => setSelectedPu(pu)}
                    className={`p-4 rounded-2xl border text-left transition-all relative ${
                      isSelected
                        ? "border-leaf bg-leaf-soft/50 ring-2 ring-leaf/30 shadow-md"
                        : "border-line bg-paper hover:border-leaf/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-ink text-paper text-xs font-mono font-bold tracking-wider mb-1.5">
                          {pu.puNumber}
                        </span>
                        <h4 className="font-semibold text-ink text-base">{pu.puName}</h4>
                        <p className="text-xs text-muted mt-1">
                          Ward: {pu.ward} · Capacity: {pu.registeredVoters} Registered Voters
                        </p>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="size-5 text-leaf shrink-0 mt-1" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-line">
            <button
              type="button"
              onClick={() => setStep("details")}
              className="px-5 py-2.5 rounded-full border border-line text-ink font-semibold text-sm hover:bg-paper"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep("avatar")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-semibold shadow-lg shadow-leaf/25"
            >
              Customize 3D Avatar
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CUSTOMIZE 3D AVATAR */}
      {step === "avatar" && (
        <div className="space-y-6">
          <div className="text-center max-w-md mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-leaf mb-1">Interactive 3D Citizen</p>
            <h3 className="font-display text-2xl font-bold text-ink">Choose Your Civic Identity</h3>
            <p className="text-sm text-muted mt-1">
              Select an avatar to represent you on the election board and in the interactive simulation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-paper border border-line rounded-3xl p-6">
            <div className="flex flex-col items-center">
              <div className="p-2 rounded-3xl bg-gradient-to-b from-card to-paper border-2 border-leaf/40 shadow-xl">
                <Avatar3D avatar={selectedAvatar} size={160} interactive={true} animated={true} />
              </div>
              <span className="mt-3 text-xs font-semibold px-3 py-1 rounded-full bg-card border border-line text-ink">
                {selectedAvatar.name}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-sm">
              {AVATAR_PRESETS.map((av) => (
                <button
                  key={av.id}
                  type="button"
                  onClick={() => setSelectedAvatar(av)}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                    selectedAvatar.id === av.id
                      ? "border-leaf bg-leaf-soft text-ink font-bold ring-2 ring-leaf/30"
                      : "border-line bg-card text-muted hover:border-leaf/40"
                  }`}
                >
                  <div
                    className="size-7 rounded-full shrink-0 border border-black/10 shadow-inner"
                    style={{ backgroundColor: av.outfitColor }}
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-ink truncate">{av.name}</p>
                    <p className="text-[10px] text-muted truncate">{av.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-line">
            <button
              type="button"
              onClick={() => setStep("pu_select")}
              className="px-5 py-2.5 rounded-full border border-line text-ink font-semibold text-sm hover:bg-paper"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep("pvc_preview")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-semibold shadow-lg shadow-leaf/25"
            >
              Issue PVC & Wallet
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: PERMANENT VOTER CARD & PVC ISSUANCE */}
      {step === "pvc_preview" && (
        <div className="space-y-6">
          <div className="text-center max-w-lg mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-leaf-soft text-leaf text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="size-3.5" /> Official INEC Issue
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">Your Permanent Voter Card (PVC)</h3>
            <p className="text-sm text-muted">
              Your biometric registration is complete. Collect your PVC to unlock voting and your election day wallet.
            </p>
          </div>

          {/* REALISTIC PVC CARD */}
          <div className="max-w-md mx-auto relative rounded-2xl overflow-hidden shadow-2xl border-2 border-leaf/60 bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22] p-5 text-white select-none">
            {/* Holographic Watermark */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-lime-400/10 rounded-full blur-2xl pointer-events-none" />

            {/* PVC Top Header */}
            <div className="flex items-center justify-between border-b border-emerald-400/30 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full bg-white flex items-center justify-center shadow-md">
                  <div className="w-5 h-5 rounded-full border border-green-700 flex items-center justify-center text-[8px] font-black text-green-800">
                    NG
                  </div>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase font-bold text-emerald-200 leading-none">
                    Federal Republic of Nigeria
                  </p>
                  <p className="text-xs font-extrabold tracking-wider text-white">INDEPENDENT NATIONAL ELECTORAL COMMISSION</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/20 text-emerald-200">
                PVC
              </span>
            </div>

            {/* PVC Card Body */}
            <div className="mt-4 flex items-center gap-4">
              {/* Photo Box */}
              <div className="size-24 rounded-xl border-2 border-emerald-300/40 bg-card overflow-hidden shadow-lg flex items-center justify-center shrink-0">
                <Avatar3D avatar={selectedAvatar} size={84} interactive={false} animated={false} />
              </div>

              {/* Voter Details */}
              <div className="space-y-1 min-w-0 flex-1">
                <div>
                  <span className="text-[9px] text-emerald-200/80 uppercase tracking-wider block">Full Name</span>
                  <p className="text-sm font-bold truncate text-white uppercase">{fullName.trim() || "Chinedu Adebayo"}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[9px] text-emerald-200/80 uppercase tracking-wider block">VIN</span>
                    <p className="text-[11px] font-mono font-bold text-emerald-100 truncate">{vinGenerated}</p>
                  </div>
                  <div>
                    <span className="text-[9px] text-emerald-200/80 uppercase tracking-wider block">Delimitation</span>
                    <p className="text-[11px] font-mono font-bold text-emerald-100 truncate">{selectedPu?.puNumber || "PU-01"}</p>
                  </div>
                </div>
                <div>
                  <span className="text-[9px] text-emerald-200/80 uppercase tracking-wider block">Polling Unit</span>
                  <p className="text-[10px] text-emerald-100 font-medium truncate">
                    {selectedPu?.puName || "Ward 01 Town Hall"}
                  </p>
                </div>
              </div>
            </div>

            {/* PVC Bottom Bar */}
            <div className="mt-4 pt-2.5 border-t border-emerald-400/25 flex items-center justify-between text-[9px] text-emerald-200 font-mono">
              <span>NIN: {ninGenerated}</span>
              <span className="flex items-center gap-1 text-emerald-300 font-bold">
                <CheckCircle2 className="size-3" /> VERIFIED & ACCREDITED
              </span>
            </div>
          </div>

          {/* Civic Budget & Water Allowance Banner */}
          <div className="max-w-md mx-auto bg-card border border-line rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-stamp/10 border border-stamp/30 flex items-center justify-center text-stamp font-bold text-lg">
                ₦
              </div>
              <div>
                <p className="text-xs font-bold text-ink">Civic Wallet Starting Balance: ₦15,000</p>
                <p className="text-[11px] text-muted">
                  Use for water, food, logistics. Avoid voter bribes or pay penal fines!
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-line">
            <button
              type="button"
              onClick={() => setStep("avatar")}
              className="px-5 py-2.5 rounded-full border border-line text-ink font-semibold text-sm hover:bg-paper"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleFinish}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-bold text-base shadow-xl shadow-leaf/30 transition-transform active:scale-95"
            >
              <IdCard className="size-5" />
              Collect PVC & Enter Election Board
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
