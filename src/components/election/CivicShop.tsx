import React, { useState } from "react";
import { 
  ShoppingBag, 
  Droplet, 
  Coffee, 
  BatteryCharging, 
  ShieldAlert, 
  Check, 
  AlertTriangle, 
  Coins, 
  PlusCircle, 
  Sparkles,
  Award,
  HelpCircle
} from "lucide-react";

export interface MarketItem {
  id: string;
  name: string;
  category: "hydration" | "energy" | "civic_kit" | "media";
  price: number;
  effectLabel: string;
  integrityBonus: number;
  courageBonus: number;
  staminaBonus: number;
  icon: string;
  description: string;
}

export const ELECTION_ITEMS: MarketItem[] = [
  {
    id: "pure_water",
    name: "Cold Pure Water (Sachet)",
    category: "hydration",
    price: 150,
    effectLabel: "+10 Stamina & Heat Resistance in Queue",
    integrityBonus: 0,
    courageBonus: 1,
    staminaBonus: 10,
    icon: "💧",
    description: "Ice cold sachet water to beat the scorching afternoon sun under the almond tree.",
  },
  {
    id: "bottled_water",
    name: "Eva Bottled Water (75cl)",
    category: "hydration",
    price: 400,
    effectLabel: "+25 Stamina, Prevents Dehydration Fatigue",
    integrityBonus: 1,
    courageBonus: 1,
    staminaBonus: 25,
    icon: "🧴",
    description: "Clean sealed bottled water to sustain long hours on the BVAS queue.",
  },
  {
    id: "gala_drink",
    name: "Gala Sausage & Cold Malt",
    category: "energy",
    price: 950,
    effectLabel: "+35 Stamina, Resists Food Bribe Temptation",
    integrityBonus: 2,
    courageBonus: 2,
    staminaBonus: 35,
    icon: "🌭",
    description: "Self-funded quick meal so you don't take politician's rice packages at rallies.",
  },
  {
    id: "power_bank",
    name: "Fast-Charging Power Bank",
    category: "media",
    price: 3500,
    effectLabel: "+10% Photo Evidence Reliability at Count",
    integrityBonus: 3,
    courageBonus: 3,
    staminaBonus: 15,
    icon: "🔋",
    description: "Ensures your phone stays alive to snap the pasted Form EC8A result sheet.",
  },
  {
    id: "civic_whistle",
    name: "Civic Monitor Whistle & Cap",
    category: "civic_kit",
    price: 1200,
    effectLabel: "+4 Courage against intimidation & queue jumpers",
    integrityBonus: 3,
    courageBonus: 4,
    staminaBonus: 10,
    icon: "📣",
    description: "Official non-partisan observer whistle to alert crowd when someone cuts in or tries snatching.",
  },
  {
    id: "hand_fan",
    name: "Foldable Hand Fan & Umbrella",
    category: "energy",
    price: 800,
    effectLabel: "+20 Stamina in crowded open fields",
    integrityBonus: 1,
    courageBonus: 1,
    staminaBonus: 20,
    icon: "☂️",
    description: "Shade against the sun or sudden election day rain showers.",
  }
];

export interface FineRecord {
  id: string;
  reason: string;
  amount: number;
  timestamp: string;
  code: string;
}

interface CivicShopProps {
  walletBalance: number;
  inventory: string[];
  onPurchase: (item: MarketItem) => boolean;
  fines: FineRecord[];
  onTopUp: (amount: number) => void;
}

export function CivicEconomyHub({
  walletBalance,
  inventory,
  onPurchase,
  fines,
  onTopUp,
}: CivicShopProps) {
  const [activeTab, setActiveTab] = useState<"market" | "fines" | "rules">("market");
  const [purchaseMsg, setPurchaseMsg] = useState<{ text: string; success: boolean } | null>(null);

  const handleBuy = (item: MarketItem) => {
    const success = onPurchase(item);
    if (success) {
      setPurchaseMsg({
        text: `Purchased ${item.name} for ₦${item.price.toLocaleString()}!`,
        success: true,
      });
    } else {
      setPurchaseMsg({
        text: `Insufficient wallet balance! (₦${walletBalance.toLocaleString()})`,
        success: false,
      });
    }
    setTimeout(() => setPurchaseMsg(null), 3500);
  };

  const totalFines = fines.reduce((sum, f) => sum + f.amount, 0);

  return (
    <div className="rounded-3xl border border-line bg-card p-5 sm:p-7 shadow-xl">
      {/* Wallet Balance Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-leaf-soft via-paper to-warn-soft/40 border border-leaf/30 mb-6">
        <div className="flex items-center gap-3.5">
          <div className="size-12 rounded-2xl bg-leaf text-paper flex items-center justify-center font-extrabold text-xl shadow-lg shadow-leaf/20">
            ₦
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Civic Wallet Balance</p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              ₦{walletBalance.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onTopUp(5000)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-paper hover:bg-white border border-line text-xs font-bold text-ink shadow-sm transition-all active:scale-95"
          >
            <PlusCircle className="size-3.5 text-leaf" /> +₦5,000 Top-up
          </button>
          {fines.length > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stamp-soft text-stamp border border-stamp/30 text-xs font-bold">
              <ShieldAlert className="size-3.5" /> Fined: -₦{totalFines.toLocaleString()}
            </div>
          )}
        </div>
      </div>

      {purchaseMsg && (
        <div
          className={`p-3.5 rounded-xl mb-4 text-xs font-bold flex items-center justify-between transition-all ${
            purchaseMsg.success
              ? "bg-leaf text-paper"
              : "bg-stamp text-paper"
          }`}
        >
          <span>{purchaseMsg.text}</span>
          <span className="text-[10px] opacity-80">Auto-applied to player</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-line pb-3 mb-5">
        <button
          type="button"
          onClick={() => setActiveTab("market")}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            activeTab === "market"
              ? "bg-ink text-paper shadow-md"
              : "text-muted hover:text-ink hover:bg-paper"
          }`}
        >
          <ShoppingBag className="size-3.5" />
          Election Essentials Market ({ELECTION_ITEMS.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("fines")}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            activeTab === "fines"
              ? "bg-stamp text-paper shadow-md"
              : "text-muted hover:text-stamp hover:bg-stamp-soft/50"
          }`}
        >
          <AlertTriangle className="size-3.5" />
          Penalties & Fines Log ({fines.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("rules")}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            activeTab === "rules"
              ? "bg-ink text-paper shadow-md"
              : "text-muted hover:text-ink hover:bg-paper"
          }`}
        >
          <HelpCircle className="size-3.5" />
          Electoral Offence Fines
        </button>
      </div>

      {/* TAB 1: MARKET */}
      {activeTab === "market" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ELECTION_ITEMS.map((item) => {
            const hasPurchased = inventory.includes(item.id);
            const canAfford = walletBalance >= item.price;
            return (
              <div
                key={item.id}
                className="p-4 rounded-2xl border border-line bg-paper flex flex-col justify-between hover:border-leaf/50 transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl p-2 rounded-xl bg-card border border-line shadow-sm">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-bold text-ink text-sm group-hover:text-leaf transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-xs font-extrabold text-leaf">
                          ₦{item.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    {hasPurchased && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-leaf-soft text-leaf border border-leaf/30 flex items-center gap-1">
                        <Check className="size-2.5" /> Owned
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted mb-2.5 leading-relaxed">{item.description}</p>
                  <div className="text-[11px] font-semibold text-leaf bg-leaf-soft/60 px-2.5 py-1 rounded-lg border border-leaf/20 inline-block mb-3">
                    ⚡ {item.effectLabel}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleBuy(item)}
                  disabled={!canAfford}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    canAfford
                      ? "bg-leaf hover:bg-leaf/90 text-paper shadow-md shadow-leaf/20 active:scale-95"
                      : "bg-line text-muted cursor-not-allowed"
                  }`}
                >
                  <ShoppingBag className="size-3.5" />
                  {hasPurchased ? "Buy Additional (₦" + item.price.toLocaleString() + ")" : "Purchase Item (₦" + item.price.toLocaleString() + ")"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 2: FINES & PENALTIES LOG */}
      {activeTab === "fines" && (
        <div className="space-y-4">
          {fines.length === 0 ? (
            <div className="text-center py-10 bg-paper border border-line rounded-2xl p-6">
              <Sparkles className="size-10 text-leaf mx-auto mb-2 opacity-80" />
              <h4 className="font-bold text-ink text-base">Clean Electoral Record!</h4>
              <p className="text-xs text-muted max-w-sm mx-auto mt-1">
                You haven't committed any electoral infractions or vote-buying compromises. Keep your civic score clean!
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-stamp-soft/50 border border-stamp/30 flex items-center justify-between text-xs font-bold text-stamp">
                <span>Total Electoral Fines Incurred</span>
                <span>-₦{totalFines.toLocaleString()}</span>
              </div>
              <div className="divide-y divide-line border border-line rounded-2xl bg-paper overflow-hidden">
                {fines.map((f, i) => (
                  <div key={i} className="p-3.5 flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stamp text-paper font-bold">
                          {f.code}
                        </span>
                        <p className="font-bold text-xs text-ink">{f.reason}</p>
                      </div>
                      <p className="text-[10px] text-muted mt-1">{f.timestamp}</p>
                    </div>
                    <span className="font-mono font-bold text-sm text-stamp whitespace-nowrap">
                      -₦{f.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: ELECTORAL ACT OFFENCES REFERENCE */}
      {activeTab === "rules" && (
        <div className="space-y-3">
          <div className="bg-paper border border-line rounded-2xl p-4">
            <h4 className="font-bold text-sm text-ink mb-2">Electoral Act 2022 Statutory Penalties</h4>
            <p className="text-xs text-muted mb-4">
              In this simulation, committing electoral misconduct deducts statutory penalty fines from your wallet:
            </p>
            <div className="grid gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-card border border-line flex items-center justify-between">
                <div>
                  <strong className="text-ink">Accepting Voter Bribes (Cash / Food)</strong>
                  <p className="text-muted text-[11px]">Section 121: Bribery and corrupt voter inducement</p>
                </div>
                <span className="font-mono font-bold text-stamp">-₦2,500 Fine</span>
              </div>
              <div className="p-2.5 rounded-xl bg-card border border-line flex items-center justify-between">
                <div>
                  <strong className="text-ink">Displaying Marked Ballot in Public</strong>
                  <p className="text-muted text-[11px]">Section 122: Violation of ballot secrecy</p>
                </div>
                <span className="font-mono font-bold text-stamp">-₦1,500 Fine</span>
              </div>
              <div className="p-2.5 rounded-xl bg-card border border-line flex items-center justify-between">
                <div>
                  <strong className="text-ink">Signing Fake Result Petitions / False Claims</strong>
                  <p className="text-muted text-[11px]">Section 124: False statutory declarations & affidavit forgery</p>
                </div>
                <span className="font-mono font-bold text-stamp">-₦3,000 Fine</span>
              </div>
              <div className="p-2.5 rounded-xl bg-card border border-line flex items-center justify-between">
                <div>
                  <strong className="text-ink">Spreading Unverified Rumours / Fake Declaration</strong>
                  <p className="text-muted text-[11px]">Section 120: Unauthorized announcement of election outcome</p>
                </div>
                <span className="font-mono font-bold text-stamp">-₦2,000 Fine</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
