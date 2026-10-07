export type Phase = "voting_time" | "post_voting_collation";

export type Choice = {
  id: string;
  label: string;
  detail: string;
  points: number;
  integrity: number;
  courage: number;
  rewardMoney?: number;
  fineMoney?: number;
  result: string;
  flag?: string;
  isRiggingThreat?: boolean;
};

export type Activity = {
  id: string;
  phase: Phase;
  title: string;
  place: string;
  summary: string;
  lead: (flags: ReadonlySet<string>) => string;
  choices: (flags: ReadonlySet<string>) => Choice[];
  riggingScenario?: {
    culprit: string;
    offence: string;
    evidence: string;
    reward: number;
  };
};

export type LogEntry = {
  activityId: string;
  choiceId: string;
  title: string;
  phase: Phase;
  label: string;
  points: number;
  integrity: number;
  courage: number;
  result: string;
};

export const PHASES: { id: Phase; label: string; hint: string }[] = [
  { id: "voting_time", label: "Voting Hours (8:30 AM - 2:30 PM)", hint: "Accreditation, BVAS queues, ballot secrecy, and rejecting bribes" },
  { id: "post_voting_collation", label: "Result Counting & Collation (After Voting)", hint: "Public ballot count, Form EC8A photo upload, and following results to collation centre" },
];

export const VOTING_TIME_ACTIVITIES: Activity[] = [
  {
    id: "unit_arrival",
    phase: "voting_time",
    title: "Morning Queue & Order",
    place: "Polling Unit Gate (8:30 AM)",
    summary:
      "A large crowd has arrived at the polling unit. A political tout is trying to push his friends to the front of the line ahead of pregnant women and elderly people who have been standing since 7:00 AM.",
    lead: () =>
      "You arrive at your polling station with your PVC card. A tout is trying to disrupt the line and put his allies in front.",
    choices: () => [
      {
        id: "organize",
        label: "Tell everyone to maintain order using sequential numbers",
        detail: "Join other voters to insist on a first-come, first-served queue.",
        points: 12,
        integrity: 3,
        courage: 3,
        rewardMoney: 2000,
        result: "The presiding officer agrees immediately! Line numbers are shared and peace returns to the queue.",
        flag: "orderly_queue",
      },
      {
        id: "silent",
        label: "Stay quiet and hold your position in line",
        detail: "Avoid any argument and just wait for your turn.",
        points: 6,
        integrity: 1,
        courage: 0,
        result: "You keep your spot, but queue jumpers push other innocent voters back.",
      },
      {
        id: "jump",
        label: "Pay the tout ₦1,000 to push you to the front",
        detail: "Bypass the crowd to vote quickly and leave the hot sun.",
        points: 2,
        integrity: -3,
        courage: -1,
        fineMoney: 2000,
        result: "Voters boo you loudly! Electoral officials flag your name for queue jumping.",
        flag: "queue_jumper",
      },
    ],
    riggingScenario: {
      culprit: "Party Queue Tout (Area Boy)",
      offence: "Electoral Act Sec 126: Line disruption and voter intimidation",
      evidence: "Physical pushing and rough treatment of voters at the gate",
      reward: 3000,
    },
  },
  {
    id: "bvas_verification",
    phase: "voting_time",
    title: "BVAS Fingerprint & Face Verification",
    place: "INEC Accreditation Desk",
    summary:
      "The BVAS machine is checking voters' PVC cards, fingerprints, and facial scans. A party agent is arguing with the presiding officer, demanding that an absent man be allowed to vote using his brother's card.",
    lead: () =>
      "As you reach the BVAS table, the party agent is leaning over the officer: 'Just tick this name on the register, he sent his card!'",
    choices: () => [
      {
        id: "insist_bvas",
        label: "Insist on 'No BVAS verification, No voting' for everyone",
        detail: "Remind the official that proxy voting is strictly illegal under the law.",
        points: 15,
        integrity: 4,
        courage: 3,
        rewardMoney: 2500,
        result: "The presiding officer refuses the proxy card! Only voters verified in person by BVAS are given ballot papers.",
        flag: "bvas_verified",
      },
      {
        id: "observe_quiet",
        label: "Scan your thumb and face quietly, then take your ballot",
        detail: "Complete your own accreditation and proceed to vote.",
        points: 8,
        integrity: 1,
        courage: 1,
        result: "The BVAS scanner matches your face and thumb, clearing you to vote.",
      },
      {
        id: "collude",
        label: "Tell the officer to allow the card so the line moves faster",
        detail: "Support proxy voting to save time.",
        points: 1,
        integrity: -4,
        courage: 0,
        fineMoney: 3000,
        result: "Electoral Act violation! Section 47 strictly forbids voting on behalf of another person.",
      },
    ],
    riggingScenario: {
      culprit: "Proxy Voting Agent",
      offence: "Electoral Act Sec 47: Attempting to vote with another person's PVC card",
      evidence: "Borrowed PVC presented without the real owner present",
      reward: 4000,
    },
  },
  {
    id: "secret_cubicle",
    phase: "voting_time",
    title: "Ballot Secrecy in the Voting Booth",
    place: "Voting Cubicle Under the Tree",
    summary:
      "Voters are marking their ballots inside the cardboard cubicle. However, the booth is turned toward the road where party agents can see where voters place their purple ink thumbprint.",
    lead: () =>
      "As you enter the cubicle, you notice two political agents standing behind, trying to see which candidate you are marking.",
    choices: () => [
      {
        id: "turn_cubicle",
        label: "Ask electoral officials to turn the cubicle toward the wall",
        detail: "Your vote is your secret right! No one is allowed to watch your choice.",
        points: 14,
        integrity: 4,
        courage: 3,
        rewardMoney: 2000,
        result: "Officials turn the booth toward the wall immediately! Full privacy is restored for you and all other voters.",
        flag: "secret_protected",
      },
      {
        id: "cover_ballot",
        label: "Use your body and elbow to cover your ballot paper only",
        detail: "Protect your own paper, but leave the cubicle position unchanged.",
        points: 8,
        integrity: 1,
        courage: 1,
        result: "Your choice remains private, but voters after you remain exposed to prying eyes.",
      },
      {
        id: "show_ballot",
        label: "Show your marked ballot to the agents for a cash promise",
        detail: "Display your marked thumbprint to prove who you voted for.",
        points: 0,
        integrity: -5,
        courage: -2,
        fineMoney: 3500,
        result: "Severe penalty! Section 122 of the Electoral Act strictly forbids showing a marked ballot paper.",
      },
    ],
    riggingScenario: {
      culprit: "Peeping Party Agents",
      offence: "Electoral Act Sec 122: Violating ballot secrecy and monitoring voters' choices",
      evidence: "Standing behind the voting screen to inspect marked ballots",
      reward: 3500,
    },
  },
  {
    id: "cash_vote_offer",
    phase: "voting_time",
    title: "The Cash-for-Vote Offer",
    place: "Behind the Generator Shed",
    summary:
      "A party coordinator is standing behind the generator with crisp naira notes and food packs. He signals voters: 'Show me a photo of your marked ballot on your phone, and collect ₦10,000 cash on the spot.'",
    lead: () =>
      "A local agent pulls you aside: 'Vote for our candidate, show me the photo on your phone, and take ₦10,000 cash right now.'",
    choices: () => [
      {
        id: "reject_expose",
        label: "Refuse the cash publicly and alert observers that your vote is not for sale",
        detail: "Reject the bribe in daylight to protect honest governance in your community.",
        points: 15,
        integrity: 5,
        courage: 4,
        rewardMoney: 3000,
        result: "The crowd supports you loudly! The vote-buyer panics, grabs his bag, and runs away from the station.",
        flag: "vote_buyer_repelled",
      },
      {
        id: "walk_away",
        label: "Firmly shake your head and walk straight to the ballot box",
        detail: "Quietly reject the bribe and cast an honest vote.",
        points: 9,
        integrity: 3,
        courage: 1,
        result: "You keep your hands clean and drop your ballot into the box.",
      },
      {
        id: "accept_cash",
        label: "Take the ₦10,000 cash and vote as instructed",
        detail: "Sell your vote for immediate money.",
        points: 0,
        integrity: -5,
        courage: 0,
        fineMoney: 5000,
        result: "Vote-buying felony! A heavy penalty fine is deducted under Section 121 of the Electoral Act.",
        flag: "corrupt_vote",
      },
    ],
    riggingScenario: {
      culprit: "Vote-Buying Cash Handler",
      offence: "Electoral Act Sec 121: Direct vote buying and voter bribery",
      evidence: "Bundles of cash notes and voter payment lists behind the building",
      reward: 5000,
    },
  },
  {
    id: "thug_intimidation",
    phase: "voting_time",
    title: "Thugs Attempting Ballot Box Snatching",
    place: "Road Near the Polling Station",
    summary:
      "Four young men on two motorcycles armed with wooden clubs and teargas canisters arrive shouting, trying to scatter the crowd and snatch the ballot box.",
    lead: () =>
      "Shouting breaks out as the motorcycles rev their engines near the officials' table. Frightened voters begin to back away.",
    choices: () => [
      {
        id: "unite_queue",
        label: "Call on youth and elders to link arms and form a human wall around the box",
        detail: "Stand together peacefully to protect the ballot box without weapons.",
        points: 18,
        integrity: 5,
        courage: 5,
        rewardMoney: 4000,
        result: "Over 50 citizens surround the election officials! Outnumbered by the peaceful crowd, the thugs turn their bikes and speed away!",
        flag: "thugs_repelled",
      },
      {
        id: "call_security",
        label: "Blow your whistle and call the Police patrol team at the junction",
        detail: "Alert armed security officers to intercept the attackers.",
        points: 14,
        integrity: 4,
        courage: 3,
        rewardMoney: 2500,
        result: "A police patrol vehicle arrives within two minutes and arrests the attackers on the spot!",
        flag: "police_alerted",
      },
      {
        id: "flee_home",
        label: "Run home and lock your gate",
        detail: "Flee from the polling station and abandon the process.",
        points: 3,
        integrity: 0,
        courage: -2,
        result: "You are safe at home, but your polling unit was left defenseless.",
      },
    ],
    riggingScenario: {
      culprit: "Ballot Box Snatching Gang",
      offence: "Electoral Act Sec 126: Violent disruption and attempted theft of ballot box",
      evidence: "Weapons and physical attempt to seize the transparent ballot box",
      reward: 6000,
    },
  },
];

export const POST_VOTING_ACTIVITIES: Activity[] = [
  {
    id: "public_sorting",
    phase: "post_voting_collation",
    title: "Public Counting and Ballot Verification",
    place: "Center Table at Polling Station (2:30 PM)",
    summary:
      "Voting has ended! Officials break the seal on the ballot box in front of everyone. The presiding officer holds up each ballot paper and reads the candidate's name aloud. A party agent tries to falsely cancel a clear ballot by claiming ink is smudged.",
    lead: () =>
      "The crowd gathers closely around the table. The agent argues that a clear vote for an opponent should be declared invalid.",
    choices: () => [
      {
        id: "scrutinize_count",
        label: "Demand that the ballot be held up for everyone to see and verify the mark",
        detail: "Make sure no legitimate citizen's vote is wrongfully cancelled.",
        points: 16,
        integrity: 5,
        courage: 4,
        rewardMoney: 3000,
        result: "The presiding officer shows the ballot to all observers and counts it correctly! The voter's voice is protected.",
        flag: "honest_count",
      },
      {
        id: "watch_silently",
        label: "Listen carefully and write down every single number in your phone notes",
        detail: "Keep an exact record of the numbers announced at the station.",
        points: 10,
        integrity: 2,
        courage: 1,
        result: "You have recorded the accurate, original figures from this polling unit.",
      },
      {
        id: "leave_early",
        label: "Leave the polling station immediately after voting finishes",
        detail: "Go home before results are counted.",
        points: 4,
        integrity: 0,
        courage: 0,
        result: "You miss the actual count and will only rely on rumors.",
      },
    ],
    riggingScenario: {
      culprit: "Partisan Counting Agent",
      offence: "Electoral Act Sec 60: Wrongful cancellation of valid votes during counting",
      evidence: "Attempting to tear or smudge a valid ballot paper on the table",
      reward: 4000,
    },
  },
  {
    id: "ec8a_irev_upload",
    phase: "post_voting_collation",
    title: "Form EC8A Signing & IReV Cloud Upload",
    place: "Polling Station Wall & BVAS Camera",
    summary:
      "The presiding officer totals all votes on the official Form EC8A result sheet. Party agents sign it. Now the officer must photograph the sheet using BVAS to upload it directly to the INEC IReV website, but a suspicious man claims there is 'no network'.",
    lead: () =>
      "Agents are signing the paper. A man is trying to stop the officer from transmitting the photo to the online portal.",
    choices: () => [
      {
        id: "ensure_irev",
        label: "Provide a flashlight and mobile hotspot to ensure the BVAS photo uploads successfully",
        detail: "Take your own clear photo of the signed Form EC8A pasted on the wall.",
        points: 18,
        integrity: 5,
        courage: 4,
        rewardMoney: 3500,
        result: "SUCCESS! Form EC8A is uploaded live to the INEC IReV portal and pasted on the wall for the community to see!",
        flag: "irev_uploaded",
      },
      {
        id: "snap_only",
        label: "Take a clear picture of the pasted sheet and share it in your community group",
        detail: "Share undeniable evidence of the authentic result with neighbors.",
        points: 12,
        integrity: 3,
        courage: 2,
        rewardMoney: 1500,
        result: "Your community now holds clear photographic evidence of the true polling unit result!",
      },
      {
        id: "allow_tamper",
        label: "Ignore the upload and let them take the paper away without a photo",
        detail: "Leave before the sheet is photographed and posted.",
        points: 2,
        integrity: -3,
        courage: 0,
        fineMoney: 2500,
        result: "High danger of result alteration during transit!",
      },
    ],
    riggingScenario: {
      culprit: "IReV Transmission Saboteur",
      offence: "Electoral Act Sec 64: Obstructing electronic transmission of election results",
      evidence: "Blocking the BVAS camera and attempting to stop online result upload",
      reward: 5000,
    },
  },
  {
    id: "collation_escort",
    phase: "post_voting_collation",
    title: "Escorting Results to the Collation Centre",
    place: "Ward Collation Hall (Town Hall)",
    summary:
      "An INEC vehicle is transporting the signed Form EC8A and BVAS machine to the Ward Collation Hall. Vigilant citizens and party observers are driving behind the vehicle to ensure nobody hijacks or diverts the bus.",
    lead: () =>
      "The official INEC vehicle starts moving. A convoy of observer vehicles lines up behind to follow the results step by step.",
    choices: () => [
      {
        id: "escort_secure",
        label: "Join the convoy and escort the vehicle directly into the collation room",
        detail: "Ensure zero diversions or stops on the road until the Returning Officer receives the sheets.",
        points: 20,
        integrity: 5,
        courage: 5,
        rewardMoney: 4500,
        result: "The results arrive safely inside the collation hall! The Returning Officer reads the exact numbers you verified at your unit!",
        flag: "collation_secured",
      },
      {
        id: "follow_social",
        label: "Follow live civil society collation updates on your smartphone",
        detail: "Monitor the collation hall progress from home.",
        points: 10,
        integrity: 2,
        courage: 1,
        result: "You keep track of the official announcements as they happen.",
      },
      {
        id: "spread_fake",
        label: "Broadcast fake victory results on social media before collation is finished",
        detail: "Announce winners ahead of the official INEC declaration.",
        points: 0,
        integrity: -5,
        courage: 0,
        fineMoney: 4000,
        result: "Illegal declaration! Section 120 of the Electoral Act strictly penalizes premature or fake result announcements.",
      },
    ],
    riggingScenario: {
      culprit: "Highway Result Diversion Squad",
      offence: "Electoral Act Sec 118: Hijacking election materials and diverting collation vehicles",
      evidence: "Unmarked vehicle attempting to force the official INEC bus off its route",
      reward: 7000,
    },
  },
];

export const ALL_ACTIVITIES = [...VOTING_TIME_ACTIVITIES, ...POST_VOTING_ACTIVITIES];

export function standing(points: number, integrity: number): string {
  if (points < 30) return "Passive Citizen";
  if (integrity <= -10) return "Electoral Compromiser";
  if (integrity < 0) return "Purchased Voter";
  if (integrity >= 25 && points >= 80) return "National Civic Guardian 🏆";
  if (integrity >= 15 && points >= 50) return "Vigilant Election Defender";
  return "Active Accredited Voter";
}

export function totals(log: LogEntry[]) {
  return log.reduce(
    (acc, entry) => ({
      points: acc.points + entry.points,
      integrity: acc.integrity + entry.integrity,
      courage: acc.courage + entry.courage,
      completed: acc.completed + 1,
    }),
    { points: 0, integrity: 0, courage: 0, completed: 0 },
  );
}

export type BoardRow = {
  name: string;
  role: string;
  points: number;
  integrity: number;
  you: boolean;
};

export const WARD_LEADERS: BoardRow[] = [
  { name: "Amina Yusuf", role: "Vigilant Civic Monitor", points: 110, integrity: 28, you: false },
  { name: "Corper Chidi", role: "Neutral Presiding Officer", points: 96, integrity: 22, you: false },
  { name: "Mama Bukky", role: "Queue Solidarity Leader", points: 88, integrity: 18, you: false },
  { name: "Tunde Balogun", role: "IReV Evidence Recorder", points: 82, integrity: 16, you: false },
  { name: "Chief Okoro", role: "Collation Escort Guard", points: 75, integrity: 14, you: false },
];

export function wardBoard(points: number, integrity: number): BoardRow[] {
  const rows: BoardRow[] = [
    ...WARD_LEADERS,
    { name: "You", role: standing(points, integrity), points, integrity, you: true },
  ];
  rows.sort((a, b) => b.points - a.points || b.integrity - a.integrity);
  return rows;
}

export function yourPlace(points: number, integrity: number): number {
  return wardBoard(points, integrity).findIndex((row) => row.you) + 1;
}
