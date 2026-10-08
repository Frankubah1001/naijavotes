import { useEffect, useMemo, useState } from "react";
import { 
  RotateCcw, 
  ShoppingBag, 
  Vote, 
  ShieldCheck, 
  Coins, 
  MapPin, 
  IdCard, 
  Award, 
  AlertTriangle, 
  Sparkles,
  User,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  TrendingUp,
  Share2,
  Dice5,
  LogOut,
  Siren,
  ArrowRight
} from "lucide-react";
import {
  VOTING_TIME_ACTIVITIES,
  POST_VOTING_ACTIVITIES,
  ALL_ACTIVITIES,
  PHASES,
  standing,
  totals,
  wardBoard,
  yourPlace,
  type Choice,
  type LogEntry,
  type Activity,
  type Phase,
} from "@/lib/election/flow";
import { VoterRegistrationModal, type RegisteredVoter } from "./VoterRegistration";
import { Avatar3D } from "./Avatar3D";
import { RealMonopolyBoard, NAIJA_BOARD_TILES, type NaijaBoardTile } from "./RealMonopolyBoard";
import { CivicEconomyHub, ELECTION_ITEMS, type MarketItem, type FineRecord } from "./CivicShop";
import { BallotBoothModal } from "./BallotBooth";
import { MoneySplashOverlay, type MoneyEffect } from "./MoneySplash";
import { DynamicActivityStage } from "./DynamicActivityStage";
import { SecurityRiggingModal, type SecurityReport } from "./SecurityRiggingModal";
import { AVATAR_PRESETS } from "@/lib/election/avatars";

type Screen = "register" | "board" | "decision" | "beat" | "market" | "result";

const STORAGE_KEY_VOTER = "naija-voter-profile-2027";
const REQUIRED_CORRECT_VOTING_ACTIVITIES = 4; // Exactly 4 correct voting activities required to vote

export function ElectionGame() {
  const [screen, setScreen] = useState<Screen>("register");
  const [boardTileIdx, setBoardTileIdx] = useState(0); // 0 to 15 on square board
  
  // Game Phase: Phase 1 (voting_time) -> Cast Vote -> Phase 2 (post_voting_collation)
  const [currentPhase, setCurrentPhase] = useState<Phase>("voting_time");
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  const [log, setLog] = useState<LogEntry[]>([]);
  const [flags, setFlags] = useState<string[]>([]);
  const [pending, setPending] = useState<Choice | null>(null);
  
  // Registration & Voter Profile (Must be done before accessing the board!)
  const [voter, setVoter] = useState<RegisteredVoter | null>(null);

  // Economic System (Wallet, Inventory, Fines, Money Splash Effects)
  const [wallet, setWallet] = useState<number>(15000);
  const [inventory, setInventory] = useState<string[]>([]);
  const [fines, setFines] = useState<FineRecord[]>([]);
  const [fineAlert, setFineAlert] = useState<FineRecord | null>(null);
  const [moneyEffects, setMoneyEffects] = useState<MoneyEffect[]>([]);

  // Moving Avatar Pawn State
  const [isMovingPawn, setIsMovingPawn] = useState(false);

  // Voting Booth & Cast Ballot State
  const [showBallotBooth, setShowBallotBooth] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [castVoteParty, setCastVoteParty] = useState<{ code: string; name: string; candidate: string } | null>(null);

  // Security Rigging Modal State
  const [showRiggingModal, setShowRiggingModal] = useState(false);
  const [securityReports, setSecurityReports] = useState<SecurityReport[]>([]);

  // Logout confirmation modal state
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Load saved voter if available
  useEffect(() => {
    try {
      const savedVoter = localStorage.getItem(STORAGE_KEY_VOTER);
      if (savedVoter) {
        const parsed = JSON.parse(savedVoter) as RegisteredVoter;
        setVoter(parsed);
        setWallet(parsed.walletBalance || 15000);
        setScreen("board");
      }
    } catch {
      /* ignore */
    }
  }, []);

  const triggerMoneySplash = (amount: number, type: "gain" | "loss", label?: string) => {
    const newEff: MoneyEffect = {
      id: Math.random().toString(),
      amount,
      type,
      label,
    };
    setMoneyEffects((prev) => [...prev, newEff]);
    setTimeout(() => {
      setMoneyEffects((prev) => prev.filter((e) => e.id !== newEff.id));
    }, 2400);
  };

  const flagSet = useMemo(() => new Set(flags), [flags]);
  const score = totals(log);
  const place = yourPlace(score.points, score.integrity);
  const title = standing(score.points, score.integrity);

  // Active pool of activities based on Phase
  const activeActivities = currentPhase === "voting_time" ? VOTING_TIME_ACTIVITIES : POST_VOTING_ACTIVITIES;
  const currentActivity = activeActivities[currentActivityIndex] || activeActivities[0];
  const board = wardBoard(score.points, score.integrity);

  // Count correct voting time choices (points >= 10 with positive integrity)
  const correctVotingActivitiesCount = useMemo(() => {
    const votingLogs = log.filter((l) => l.phase === "voting_time");
    // Unique correct activity IDs completed
    const correctIds = new Set(
      votingLogs.filter((l) => l.points >= 10 && l.integrity > 0).map((l) => l.activityId)
    );
    return correctIds.size;
  }, [log]);

  // Check if player has achieved 4 correct voting time activities
  const isVoteEligible = correctVotingActivitiesCount >= REQUIRED_CORRECT_VOTING_ACTIVITIES && !hasVoted;

  // Check if current active activity is rigging related for the report button
  const isCurrentActivityRiggingRelated = useMemo(() => {
    if (!currentActivity) return false;
    return !!currentActivity.riggingScenario;
  }, [currentActivity]);

  // Handle Registration Complete
  const handleRegisterComplete = (newVoter: RegisteredVoter) => {
    setVoter(newVoter);
    setWallet(newVoter.walletBalance);
    try {
      localStorage.setItem(STORAGE_KEY_VOTER, JSON.stringify(newVoter));
    } catch {
      /* ignore */
    }
    triggerMoneySplash(15000, "gain", "PVC Collected & Civic Budget Granted");
    setScreen("board");
  };

  // Handle Logout / Clear User
  const handleLogout = () => {
    try {
      localStorage.removeItem(STORAGE_KEY_VOTER);
    } catch {
      /* ignore */
    }
    setVoter(null);
    setLog([]);
    setFlags([]);
    setPending(null);
    setCurrentActivityIndex(0);
    setCurrentPhase("voting_time");
    setBoardTileIdx(0);
    setFines([]);
    setInventory([]);
    setWallet(15000);
    setHasVoted(false);
    setCastVoteParty(null);
    setShowLogoutConfirm(false);
    setScreen("register");
  };

  // Step-by-Step Animated Pawn Movement
  const movePawnSteps = (steps: number) => {
    setIsMovingPawn(true);
    let count = 0;
    let current = boardTileIdx;

    const interval = setInterval(() => {
      current = (current + 1) % NAIJA_BOARD_TILES.length;
      setBoardTileIdx(current);
      count++;

      // Passed START Gate (Tile 0) -> Collect ₦3,000 Civic Allowance
      if (current === 0) {
        setWallet((w) => w + 3000);
        triggerMoneySplash(3000, "gain", "Passed Gate: Civic Allowance");
      }

      if (count >= steps) {
        clearInterval(interval);
        setIsMovingPawn(false);

        const landedTile = NAIJA_BOARD_TILES[current];
        handleLandedTile(landedTile, current);
      }
    }, 280);
  };

  const handleRollDice = (d1: number, d2: number, total: number) => {
    if (isMovingPawn) return;
    movePawnSteps(total);
  };

  const handleLandedTile = (tile: NaijaBoardTile, index: number) => {
    if (tile.id === "cast_ballot_tile") {
      if (isVoteEligible) {
        setShowBallotBooth(true);
      } else {
        triggerMoneySplash(0, "loss", `Need ${REQUIRED_CORRECT_VOTING_ACTIVITIES - correctVotingActivitiesCount} more correct voting actions to vote!`);
      }
      return;
    }

    if (tile.type === "property" && (typeof tile.activityIndex === "number" || tile.id)) {
      // Find matching activity by id first, then fallback to activityIndex
      const pool = currentPhase === "voting_time" ? VOTING_TIME_ACTIVITIES : POST_VOTING_ACTIVITIES;
      let matchedIdx = pool.findIndex((a) => a.id === tile.id);
      if (matchedIdx === -1) {
        if (typeof tile.activityIndex === "number") {
          matchedIdx = Math.min(tile.activityIndex, pool.length - 1);
        } else {
          matchedIdx = 0;
        }
      }
      setCurrentActivityIndex(matchedIdx);
      setTimeout(() => {
        setScreen("decision");
      }, 350);
    } else if (tile.type === "chance") {
      const isReward = Math.random() > 0.4;
      if (isReward) {
        const reward = 3000;
        setWallet((w) => w + reward);
        triggerMoneySplash(reward, "gain", "Civic Observer Transport Allowance!");
      } else {
        const fine = 1500;
        setWallet((w) => Math.max(0, w - fine));
        triggerMoneySplash(fine, "loss", "Fuel & Queue Logistics Expense");
      }
    } else if (tile.id === "jail" || tile.id === "arrest_corner") {
      const jailTileIdx = Math.max(0, NAIJA_BOARD_TILES.findIndex((b) => b.id === "jail"));
      setBoardTileIdx(jailTileIdx);
      setWallet((w) => Math.max(0, w - 2000));
      triggerMoneySplash(2000, "loss", "Electoral Offence Investigation Fine");
    }
  };

  // Purchase Market Item
  const handlePurchaseItem = (item: MarketItem): boolean => {
    if (wallet < item.price) return false;
    setWallet((w) => w - item.price);
    setInventory((inv) => [...inv, item.id]);
    triggerMoneySplash(item.price, "loss", `Bought ${item.name}`);
    return true;
  };

  // Top Up Wallet
  const handleTopUp = (amount: number) => {
    setWallet((w) => w + amount);
    triggerMoneySplash(amount, "gain", "Civic Wallet Top-up");
  };

  // Pick choice on activity
  const handlePickChoice = (choice: Choice) => {
    if (!currentActivity) return;
    setPending(choice);

    let fineAmount = choice.fineMoney || 0;
    let rewardAmount = choice.rewardMoney || 0;

    if (fineAmount > 0) {
      const fineRecord: FineRecord = {
        id: Math.random().toString(),
        amount: fineAmount,
        reason: `Electoral Act Offence: ${choice.label}`,
        code: "SEC-OFFENCE",
        timestamp: `Station: ${currentActivity.title}`,
      };
      setFines((prev) => [fineRecord, ...prev]);
      setWallet((w) => Math.max(0, w - fineAmount));
      setFineAlert(fineRecord);
      triggerMoneySplash(fineAmount, "loss", "Electoral Fine Deducted!");
    } else {
      setFineAlert(null);
      if (rewardAmount > 0) {
        setWallet((w) => w + rewardAmount);
        triggerMoneySplash(rewardAmount, "gain", `Vigilance Bonus! (+₦${rewardAmount.toLocaleString()})`);
      }
    }

    setLog((current) => [
      ...current,
      {
        activityId: currentActivity.id,
        choiceId: choice.id,
        title: currentActivity.title,
        phase: currentActivity.phase,
        label: choice.label,
        points: choice.points,
        integrity: choice.integrity,
        courage: choice.courage,
        result: choice.result,
      },
    ]);

    if (choice.flag) setFlags((current) => [...current, choice.flag!]);
    setScreen("beat");
  };

  const handleAdvanceFromBeat = () => {
    setPending(null);
    setFineAlert(null);

    // If player just achieved 4 correct voting activities in Phase 1
    const newCorrectCount = new Set(
      [...log, pending ? { ...pending, activityId: currentActivity.id, phase: currentActivity.phase } : null]
        .filter((l): l is LogEntry => !!l && l.phase === "voting_time" && l.points >= 10 && l.integrity > 0)
        .map((l) => l.activityId)
    ).size;

    if (currentPhase === "voting_time" && newCorrectCount >= REQUIRED_CORRECT_VOTING_ACTIVITIES && !hasVoted) {
      setShowBallotBooth(true);
      setScreen("board");
      return;
    }

    // Check if phase 2 complete
    if (currentPhase === "post_voting_collation" && log.filter((l) => l.phase === "post_voting_collation").length >= POST_VOTING_ACTIVITIES.length) {
      setScreen("result");
      return;
    }

    // Advance activity index
    setCurrentActivityIndex((idx) => (idx + 1) % activeActivities.length);
    setScreen("board");
  };

  // Handle Cast Vote Complete -> Transitions to Phase 2 (Collation Guarding)
  const handleVoteCastComplete = (party: { code: string; name: string; candidate: string }) => {
    setCastVoteParty(party);
    setHasVoted(true);
    setShowBallotBooth(false);
    triggerMoneySplash(5000, "gain", "Ballot Cast! Phase 2: Collation Escort Unlocked!");

    // Switch to Phase 2: Post-Voting Collation & Guarding
    setCurrentPhase("post_voting_collation");
    setCurrentActivityIndex(0);
    setScreen("board");
  };

  // Handle Security Rigging Report Dispatched
  const handleSecurityReportDispatched = (report: SecurityReport) => {
    setSecurityReports((prev) => [report, ...prev]);
    setWallet((w) => w + report.bountyEarned);
    triggerMoneySplash(report.bountyEarned, "gain", `Rigging Intercepted! Bounty +₦${report.bountyEarned.toLocaleString()}`);
  };

  const handleReplay = () => {
    setLog([]);
    setFlags([]);
    setPending(null);
    setCurrentActivityIndex(0);
    setCurrentPhase("voting_time");
    setBoardTileIdx(0);
    setFines([]);
    setWallet(voter?.walletBalance || 15000);
    setHasVoted(false);
    setCastVoteParty(null);
    setScreen("board");
  };

  const currentAvatar = voter?.avatar || AVATAR_PRESETS[0];

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-3 py-4 sm:px-6 sm:py-6 select-none font-sans text-ink">
      
      {/* Visual Money Splash Effect Component */}
      <MoneySplashOverlay effects={moneyEffects} />

      {/* Top Green Navigation Bar */}
      <header className="mb-4 flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-3xl bg-slate-900/95 border-2 border-emerald-500/50 text-white shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="size-11 rounded-2xl bg-gradient-to-tr from-[#008751] to-emerald-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg border border-white/20">
            ₦
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black tracking-widest text-emerald-300 uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                NAIJA ELECTION 2027 · {currentPhase === "voting_time" ? `PHASE 1 (${correctVotingActivitiesCount}/4 CORRECT TO VOTE)` : "PHASE 2 (COLLATION GUARDING)"}
              </span>
              {voter && (
                <span className="text-xs text-emerald-300 font-mono">
                  {voter.pollingUnit.puNumber}
                </span>
              )}
            </div>
            <h1 className="font-display text-xl sm:text-2xl font-black text-white leading-tight">
              Polling Unit Day: Real-Time Election & Collation Game
            </h1>
          </div>
        </div>

        {/* Player Wallet & Actions Header */}
        {voter && screen !== "register" && (
          <div className="flex items-center gap-2">
            {/* Realtime Animated Wallet */}
            <div className="px-3 py-1.5 rounded-2xl bg-[#08281a] border-2 border-[#008751] text-emerald-300 font-mono font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-lg">
              <Coins className="size-4 text-amber-400" />
              <span>₦{wallet.toLocaleString()}</span>
            </div>

            {/* Voting Booth CTA Button */}
            {!hasVoted ? (
              <button
                type="button"
                onClick={() => {
                  if (isVoteEligible) {
                    setShowBallotBooth(true);
                  } else {
                    triggerMoneySplash(0, "loss", `Roll dice & complete ${REQUIRED_CORRECT_VOTING_ACTIVITIES - correctVotingActivitiesCount} more correct actions to vote!`);
                  }
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-lg transition-all ${
                  isVoteEligible
                    ? "bg-red-600 hover:bg-red-500 text-white animate-bounce shadow-red-900/60 ring-2 ring-amber-300"
                    : "bg-slate-800 text-slate-400 border border-slate-700"
                }`}
              >
                <Vote className="size-3.5" />
                <span>{isVoteEligible ? "Cast Ballot (Ready!)" : `Vote (${correctVotingActivitiesCount}/4 Correct)`}</span>
              </button>
            ) : (
              <div className="px-3 py-1.5 rounded-xl bg-emerald-900/80 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center gap-1">
                <CheckCircle className="size-3.5" />
                <span>Voted ({castVoteParty?.code})</span>
              </div>
            )}

            {/* Emergency Rigging Report Trigger Button: Only visible if activity has a rigging scenario */}
            {isCurrentActivityRiggingRelated && (
              <button
                type="button"
                onClick={() => setShowRiggingModal(true)}
                className="px-3 py-1.5 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-bold flex items-center gap-1 shadow-lg shadow-red-950/50 active:scale-95 border border-red-400 animate-pulse"
                title="Report Rigging & Electoral Infractions to Joint Security Taskforce"
              >
                <Siren className="size-3.5 text-amber-300" />
                <span className="hidden sm:inline">Report Rigging</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setScreen("market")}
              className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition-all ${
                screen === "market"
                  ? "bg-[#008751] text-white border-emerald-400 font-black"
                  : "bg-slate-800 hover:bg-slate-700 border-slate-600 text-white"
              }`}
            >
              <ShoppingBag className="size-3.5 text-amber-400" />
              <span className="hidden md:inline">Market</span>
            </button>

            {/* Voter Avatar & Info */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-700">
              <div className="size-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center overflow-hidden">
                <Avatar3D avatar={currentAvatar} size={32} interactive={false} animated={false} />
              </div>

              {/* LOGOUT BUTTON */}
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(true)}
                title="Log out and Register New Voter"
                className="p-1.5 rounded-xl bg-red-950/80 hover:bg-red-900 border border-red-500/50 text-red-300 transition-colors shadow-sm flex items-center gap-1 text-[11px] font-bold"
              >
                <LogOut className="size-3.5" />
                <span className="hidden lg:inline">Logout</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* VIEW 1: PRE-ELECTION VOTER REGISTRATION & PVC ISSUANCE */}
      {screen === "register" && (
        <VoterRegistrationModal onComplete={handleRegisterComplete} />
      )}

      {/* VIEW 2: REAL-TIME NAIJA BOARD VIEW */}
      {screen === "board" && (
        <div className="space-y-4">
          {/* Phase Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-2 border-emerald-500/40 flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-xl bg-[#008751] flex items-center justify-center text-white font-bold text-lg">
                {currentPhase === "voting_time" ? "1️⃣" : "2️⃣"}
              </div>
              <div>
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <span>
                    {currentPhase === "voting_time"
                      ? "Phase 1: Voting Hours (Accreditation & Queue Defense)"
                      : "Phase 2: Public Count, IReV Transmission & Collation Security"}
                  </span>
                  {currentPhase === "voting_time" && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 font-extrabold font-mono">
                      {correctVotingActivitiesCount}/4 Correct Actions
                    </span>
                  )}
                </h3>
                <p className="text-[11px] text-slate-300">
                  {currentPhase === "voting_time"
                    ? isVoteEligible
                      ? "🎉 4 Correct Activities Achieved! You are now eligible to cast your vote in the Ballot Booth!"
                      : `Continue rolling the dice and selecting the right civic choices until you reach ${REQUIRED_CORRECT_VOTING_ACTIVITIES} correct actions!`
                    : "Follow your casted votes to the collation centre, verify results, and report any rigging!"}
                </p>
              </div>
            </div>

            {isVoteEligible && !hasVoted && (
              <button
                type="button"
                onClick={() => setShowBallotBooth(true)}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg animate-pulse"
              >
                <Vote className="size-4" /> Cast Your Vote Now!
              </button>
            )}
          </div>

          <RealMonopolyBoard
            currentTileIndex={boardTileIdx}
            playerAvatar={currentAvatar}
            playerName={voter?.fullName || "Player"}
            walletBalance={wallet}
            isVoteEligible={isVoteEligible}
            correctAnswersCount={correctVotingActivitiesCount}
            hasVoted={hasVoted}
            phase={currentPhase}
            showRiggingButton={isCurrentActivityRiggingRelated}
            onTileClick={handleLandedTile}
            onRollDice={handleRollDice}
            onOpenMarket={() => setScreen("market")}
            onOpenBallot={() => {
              if (isVoteEligible) {
                setShowBallotBooth(true);
              } else {
                triggerMoneySplash(0, "loss", `Achieve ${REQUIRED_CORRECT_VOTING_ACTIVITIES - correctVotingActivitiesCount} more correct actions to vote!`);
              }
            }}
            onTriggerSecurityReport={() => setShowRiggingModal(true)}
            isMovingAvatar={isMovingPawn}
          />
        </div>
      )}

      {/* VIEW 3: TILE DECISION CHALLENGE WITH MOVING THREAT ICONS STAGE */}
      {screen === "decision" && currentActivity && (
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setScreen("board")}
              className="text-xs font-bold text-white bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-600 flex items-center gap-1.5"
            >
              ← Back to Election Board
            </button>

            {/* Rigging Report Button: ONLY shown if this activity has a rigging scenario */}
            {isCurrentActivityRiggingRelated && (
              <button
                type="button"
                onClick={() => setShowRiggingModal(true)}
                className="px-3 py-1.5 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-black flex items-center gap-1.5 shadow-lg border border-red-400 active:scale-95 animate-pulse"
              >
                <Siren className="size-3.5 text-amber-300" />
                Report Rigging to Police & EFCC
              </button>
            )}
          </div>

          {/* DYNAMIC VISUAL ENCOUNTER STAGE: Threat Actors approaching voter */}
          <DynamicActivityStage
            activityId={currentActivity.id}
            avatar={currentAvatar}
            isRepelled={false}
            isCompromised={false}
          />

          <section className="rounded-3xl border-4 border-slate-900 bg-white p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="bg-[#008751] -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 p-4 text-center text-white border-b-4 border-black">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-100">
                {currentPhase === "voting_time" ? "VOTING TIME ENCOUNTER" : "POST-VOTING COLLATION & COUNT"}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black">{currentActivity.title}</h2>
              <p className="text-xs text-emerald-100 mt-0.5">{currentActivity.place}</p>
            </div>

            <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-700 leading-relaxed">{currentActivity.summary}</p>
              <p className="mt-3 text-base text-slate-900 font-bold border-t border-slate-200 pt-3">
                {currentActivity.lead(flagSet)}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
                Choose your action (Select the correct option to build toward your 4 required voting actions!):
              </p>

              <div className="grid gap-3">
                {currentActivity.choices(flagSet).map((choice) => (
                  <button
                    key={choice.id}
                    type="button"
                    onClick={() => handlePickChoice(choice)}
                    className="p-4 rounded-2xl border-2 border-slate-300 hover:border-[#008751] hover:bg-emerald-50 text-left transition-all active:scale-[0.99] group shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#008751]">
                        {choice.label}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {choice.rewardMoney && (
                          <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                            +₦{choice.rewardMoney.toLocaleString()}
                          </span>
                        )}
                        <span className="text-xs font-black px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-300">
                          +{choice.points} pts
                        </span>
                      </div>
                    </div>
                    <span className="mt-1 block text-xs text-slate-500 leading-relaxed">{choice.detail}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW 4: BEAT / OUTCOME & REPELLED EFFECT DISPLAY */}
      {screen === "beat" && pending && currentActivity && (
        <div className="max-w-3xl mx-auto space-y-4">
          {/* REPELLED ANIMATION STAGE */}
          <DynamicActivityStage
            activityId={currentActivity.id}
            avatar={currentAvatar}
            isRepelled={!fineAlert && pending.integrity >= 0}
            isCompromised={!!fineAlert}
          />

          <section className="rounded-3xl border-4 border-slate-900 bg-white p-6 sm:p-8 shadow-2xl">
            {fineAlert && (
              <div className="mb-5 p-4 rounded-2xl bg-red-600 text-white shadow-xl flex items-start gap-3 animate-bounce">
                <AlertTriangle className="size-6 shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black uppercase px-2 py-0.5 rounded bg-black/40">
                      STATUTORY FINE INCURRED
                    </span>
                    <strong className="text-sm">-₦{fineAlert.amount.toLocaleString()}</strong>
                  </div>
                  <p className="text-xs mt-1 text-red-100">{fineAlert.reason}</p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <span className="text-xs font-black tracking-widest text-[#008751] uppercase">
                Recorded Civic Action · {currentActivity.title}
              </span>
              <span className="text-xs font-mono font-bold text-slate-600">
                Tile #{boardTileIdx}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-16 rounded-2xl bg-slate-100 border border-slate-300 overflow-hidden flex items-center justify-center shrink-0">
                <Avatar3D
                  avatar={currentAvatar}
                  size={60}
                  interactive={false}
                  animated={false}
                  actionState={fineAlert ? "fined" : "celebrating"}
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-black text-slate-900">{pending.label}</h3>
                <p className="text-xs text-slate-500">{currentActivity.place}</p>
              </div>
            </div>

            <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-sm leading-relaxed text-slate-800 font-semibold">{pending.result}</p>
            </div>

            <dl className="grid grid-cols-3 gap-3 text-center my-4">
              <div className="rounded-2xl bg-slate-100 border border-slate-200 p-3">
                <dt className="text-[10px] font-black tracking-wider text-slate-500 uppercase">Points</dt>
                <dd className="font-display text-xl font-black text-slate-900">+{pending.points}</dd>
              </div>
              <div className="rounded-2xl bg-slate-100 border border-slate-200 p-3">
                <dt className="text-[10px] font-black tracking-wider text-slate-500 uppercase">Integrity</dt>
                <dd className={`font-display text-xl font-black ${pending.integrity >= 0 ? "text-emerald-700" : "text-red-600"}`}>
                  {signed(pending.integrity)}
                </dd>
              </div>
              <div className="rounded-2xl bg-slate-100 border border-slate-200 p-3">
                <dt className="text-[10px] font-black tracking-wider text-slate-500 uppercase">Correct Actions</dt>
                <dd className="font-display text-lg font-black text-emerald-800">
                  {currentPhase === "voting_time" ? `${correctVotingActivitiesCount}/4` : "Phase 2"}
                </dd>
              </div>
            </dl>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500">
                {currentPhase === "voting_time"
                  ? isVoteEligible
                    ? "✨ Ready to Vote! Stepping into Ballot Booth..."
                    : `Achieve ${REQUIRED_CORRECT_VOTING_ACTIVITIES - correctVotingActivitiesCount} more correct action(s) to vote`
                  : `Phase 2 Collation Progress: ${log.filter((l) => l.phase === currentPhase).length} encounters`}
              </span>

              <button
                type="button"
                onClick={handleAdvanceFromBeat}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#008751] hover:bg-emerald-700 font-black text-sm text-white shadow-xl shadow-emerald-950/40 active:scale-95 transition-transform"
              >
                {isVoteEligible && !hasVoted
                  ? "Enter Ballot Booth to Vote 👉"
                  : currentPhase === "post_voting_collation" && log.filter((l) => l.phase === "post_voting_collation").length >= POST_VOTING_ACTIVITIES.length
                    ? "See Final Official Declaration 🏆"
                    : "Roll Dice Again on Board"}
                <ChevronRight className="size-4" />
              </button>
            </div>
          </section>
        </div>
      )}

      {/* VIEW 5: CIVIC MARKET & FINES */}
      {screen === "market" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setScreen("board")}
              className="text-xs font-bold text-white bg-slate-800/80 hover:bg-slate-700 px-3.5 py-1.5 rounded-lg border border-slate-600 flex items-center gap-1.5"
            >
              ← Back to Election Board
            </button>
            <span className="text-xs text-emerald-300">
              Buy pure water, glucose snacks, power banks and observer kits to sustain your election journey!
            </span>
          </div>

          <CivicEconomyHub
            walletBalance={wallet}
            inventory={inventory}
            onPurchase={handlePurchaseItem}
            fines={fines}
            onTopUp={handleTopUp}
          />
        </div>
      )}

      {/* VIEW 6: FINAL RESULTS & WARD CERTIFICATION */}
      {screen === "result" && (
        <div className="grid gap-6 max-w-4xl mx-auto">
          <section className="rounded-3xl border-4 border-emerald-600 bg-white p-6 sm:p-8 shadow-2xl text-center">
            <div className="size-20 rounded-full bg-[#008751] text-white mx-auto flex items-center justify-center shadow-xl shadow-emerald-900/40 mb-4">
              <Award className="size-10" />
            </div>

            <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              OFFICIAL NAIJA CIVIC VICTORY 2027
            </span>
            <h2 className="font-display text-4xl font-black text-slate-900 mt-3">
              {voter?.fullName || "Player"}
            </h2>
            <p className="text-lg font-bold text-[#008751] mt-1">{title}</p>
            <p className="text-sm text-slate-500 mt-1">
              Polled at {voter?.pollingUnit.puName} ({voter?.pollingUnit.puNumber})
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto my-6">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold uppercase text-slate-500">Ward Rank</span>
                <p className="font-display text-2xl font-black text-slate-900">{placeOrdinal(place)}</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold uppercase text-slate-500">Points</span>
                <p className="font-display text-2xl font-black text-emerald-700">+{score.points}</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold uppercase text-slate-500">Integrity</span>
                <p className={`font-display text-2xl font-black ${score.integrity >= 0 ? "text-emerald-700" : "text-red-600"}`}>
                  {signed(score.integrity)}
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold uppercase text-slate-500">Final Wallet</span>
                <p className="font-display text-xl font-black text-emerald-800">₦{wallet.toLocaleString()}</p>
              </div>
            </div>

            {castVoteParty && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-100 border border-slate-300 text-xs font-bold text-slate-900 mb-2">
                <Vote className="size-4 text-emerald-700" />
                <span>Legitimately Cast Ballot for: {castVoteParty.name} ({castVoteParty.code})</span>
              </div>
            )}

            {securityReports.length > 0 && (
              <div className="mt-3 p-3 rounded-2xl bg-red-50 border border-red-300 text-left max-w-lg mx-auto">
                <p className="text-xs font-bold text-red-800 flex items-center gap-1.5">
                  <Siren className="size-4" /> Rigging Reports Dispatched to Security ({securityReports.length}):
                </p>
                <ul className="mt-1 text-[11px] text-slate-700 list-disc list-inside">
                  {securityReports.map((r, i) => (
                    <li key={i}>{r.culprit} apprehended for {r.offence} (Earned +₦{r.bountyEarned.toLocaleString()})</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <div className="flex flex-wrap items-center justify-center gap-4 py-2">
            <button
              type="button"
              onClick={handleReplay}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#008751] hover:bg-emerald-700 text-white font-black text-sm shadow-xl active:scale-95"
            >
              <RotateCcw className="size-4" />
              Play Naija Election Board Again
            </button>
            <button
              type="button"
              onClick={() => setShowLogoutConfirm(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-800 hover:bg-red-700 text-white font-bold text-sm shadow-xl active:scale-95 border border-red-500/40"
            >
              <LogOut className="size-4" />
              Logout & Register New Voter
            </button>
          </div>
        </div>
      )}

      {/* BALLOT BOOTH POPUP MODAL */}
      {showBallotBooth && voter && (
        <BallotBoothModal
          voterName={voter.fullName}
          pollingUnit={voter.pollingUnit}
          avatar={currentAvatar}
          onVoteCast={handleVoteCastComplete}
          onClose={() => setShowBallotBooth(false)}
        />
      )}

      {/* EMERGENCY RIGGING REPORT TO SECURITY MODAL */}
      {showRiggingModal && (
        <SecurityRiggingModal
          currentActivityTitle={currentActivity.title}
          location={currentActivity.place}
          culprit={currentActivity.riggingScenario?.culprit}
          offence={currentActivity.riggingScenario?.offence}
          evidence={currentActivity.riggingScenario?.evidence}
          bountyAmount={currentActivity.riggingScenario?.reward || 4000}
          onReportDispatched={handleSecurityReportDispatched}
          onClose={() => setShowRiggingModal(false)}
        />
      )}

      {/* LOGOUT CONFIRMATION MODAL */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-card border-2 border-red-500/40 rounded-3xl p-6 shadow-2xl animate-in fade-in zoom-in-95 text-center space-y-4">
            <div className="size-16 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center shadow-lg">
              <LogOut className="size-8" />
            </div>

            <div>
              <h3 className="font-display text-2xl font-black text-slate-900">
                Log Out Voter Profile?
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Logging out will clear your current active voter session (<strong>{voter?.fullName}</strong>) and return to the registration portal to register a new citizen or select a new Polling Unit.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(false)}
                className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-lg shadow-red-900/30 active:scale-95"
              >
                Confirm Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function signed(value: number) {
  if (value > 0) return `+${value}`;
  return String(value);
}

function placeOrdinal(place: number) {
  const mod = place % 100;
  if (mod >= 11 && mod <= 13) return `${place}th`;
  switch (place % 10) {
    case 1:
      return `${place}st`;
    case 2:
      return `${place}nd`;
    case 3:
      return `${place}rd`;
    default:
      return `${place}th`;
  }
}
