import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ChevronRight, C as Dice2, D as CircleHelp, E as CirclePlus, M as Award, O as CircleCheck, S as Dice3, T as Coins, _ as IdCard, a as Sparkles, b as Dice5, c as Shield, d as Send, f as RotateCcw, g as Lock, h as LogOut, i as TriangleAlert, j as Check, k as CircleCheckBig, l as ShieldCheck, m as MapPin, n as Vote, o as Siren, p as Radio, r as UserCheck, s as ShoppingBag, t as X, u as ShieldAlert, v as Fingerprint, w as Dice1, x as Dice4, y as Dice6 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-vVvxbJ9m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var VOTING_TIME_ACTIVITIES = [
	{
		id: "unit_arrival",
		phase: "voting_time",
		title: "Morning Queue & Order",
		place: "Polling Unit Gate (8:30 AM)",
		summary: "A large crowd has arrived at the polling unit. A political tout is trying to push his friends to the front of the line ahead of pregnant women and elderly people who have been standing since 7:00 AM.",
		lead: () => "You arrive at your polling station with your PVC card. A tout is trying to disrupt the line and put his allies in front.",
		choices: () => [
			{
				id: "organize",
				label: "Tell everyone to maintain order using sequential numbers",
				detail: "Join other voters to insist on a first-come, first-served queue.",
				points: 12,
				integrity: 3,
				courage: 3,
				rewardMoney: 2e3,
				result: "The presiding officer agrees immediately! Line numbers are shared and peace returns to the queue.",
				flag: "orderly_queue"
			},
			{
				id: "silent",
				label: "Stay quiet and hold your position in line",
				detail: "Avoid any argument and just wait for your turn.",
				points: 6,
				integrity: 1,
				courage: 0,
				result: "You keep your spot, but queue jumpers push other innocent voters back."
			},
			{
				id: "jump",
				label: "Pay the tout ₦1,000 to push you to the front",
				detail: "Bypass the crowd to vote quickly and leave the hot sun.",
				points: 2,
				integrity: -3,
				courage: -1,
				fineMoney: 2e3,
				result: "Voters boo you loudly! Electoral officials flag your name for queue jumping.",
				flag: "queue_jumper"
			}
		],
		riggingScenario: {
			culprit: "Party Queue Tout (Area Boy)",
			offence: "Electoral Act Sec 126: Line disruption and voter intimidation",
			evidence: "Physical pushing and rough treatment of voters at the gate",
			reward: 3e3
		}
	},
	{
		id: "bvas_verification",
		phase: "voting_time",
		title: "BVAS Fingerprint & Face Verification",
		place: "INEC Accreditation Desk",
		summary: "The BVAS machine is checking voters' PVC cards, fingerprints, and facial scans. A party agent is arguing with the presiding officer, demanding that an absent man be allowed to vote using his brother's card.",
		lead: () => "As you reach the BVAS table, the party agent is leaning over the officer: 'Just tick this name on the register, he sent his card!'",
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
				flag: "bvas_verified"
			},
			{
				id: "observe_quiet",
				label: "Scan your thumb and face quietly, then take your ballot",
				detail: "Complete your own accreditation and proceed to vote.",
				points: 8,
				integrity: 1,
				courage: 1,
				result: "The BVAS scanner matches your face and thumb, clearing you to vote."
			},
			{
				id: "collude",
				label: "Tell the officer to allow the card so the line moves faster",
				detail: "Support proxy voting to save time.",
				points: 1,
				integrity: -4,
				courage: 0,
				fineMoney: 3e3,
				result: "Electoral Act violation! Section 47 strictly forbids voting on behalf of another person."
			}
		],
		riggingScenario: {
			culprit: "Proxy Voting Agent",
			offence: "Electoral Act Sec 47: Attempting to vote with another person's PVC card",
			evidence: "Borrowed PVC presented without the real owner present",
			reward: 4e3
		}
	},
	{
		id: "secret_cubicle",
		phase: "voting_time",
		title: "Ballot Secrecy in the Voting Booth",
		place: "Voting Cubicle Under the Tree",
		summary: "Voters are marking their ballots inside the cardboard cubicle. However, the booth is turned toward the road where party agents can see where voters place their purple ink thumbprint.",
		lead: () => "As you enter the cubicle, you notice two political agents standing behind, trying to see which candidate you are marking.",
		choices: () => [
			{
				id: "turn_cubicle",
				label: "Ask electoral officials to turn the cubicle toward the wall",
				detail: "Your vote is your secret right! No one is allowed to watch your choice.",
				points: 14,
				integrity: 4,
				courage: 3,
				rewardMoney: 2e3,
				result: "Officials turn the booth toward the wall immediately! Full privacy is restored for you and all other voters.",
				flag: "secret_protected"
			},
			{
				id: "cover_ballot",
				label: "Use your body and elbow to cover your ballot paper only",
				detail: "Protect your own paper, but leave the cubicle position unchanged.",
				points: 8,
				integrity: 1,
				courage: 1,
				result: "Your choice remains private, but voters after you remain exposed to prying eyes."
			},
			{
				id: "show_ballot",
				label: "Show your marked ballot to the agents for a cash promise",
				detail: "Display your marked thumbprint to prove who you voted for.",
				points: 0,
				integrity: -5,
				courage: -2,
				fineMoney: 3500,
				result: "Severe penalty! Section 122 of the Electoral Act strictly forbids showing a marked ballot paper."
			}
		],
		riggingScenario: {
			culprit: "Peeping Party Agents",
			offence: "Electoral Act Sec 122: Violating ballot secrecy and monitoring voters' choices",
			evidence: "Standing behind the voting screen to inspect marked ballots",
			reward: 3500
		}
	},
	{
		id: "cash_vote_offer",
		phase: "voting_time",
		title: "The Cash-for-Vote Offer",
		place: "Behind the Generator Shed",
		summary: "A party coordinator is standing behind the generator with crisp naira notes and food packs. He signals voters: 'Show me a photo of your marked ballot on your phone, and collect ₦10,000 cash on the spot.'",
		lead: () => "A local agent pulls you aside: 'Vote for our candidate, show me the photo on your phone, and take ₦10,000 cash right now.'",
		choices: () => [
			{
				id: "reject_expose",
				label: "Refuse the cash publicly and alert observers that your vote is not for sale",
				detail: "Reject the bribe in daylight to protect honest governance in your community.",
				points: 15,
				integrity: 5,
				courage: 4,
				rewardMoney: 3e3,
				result: "The crowd supports you loudly! The vote-buyer panics, grabs his bag, and runs away from the station.",
				flag: "vote_buyer_repelled"
			},
			{
				id: "walk_away",
				label: "Firmly shake your head and walk straight to the ballot box",
				detail: "Quietly reject the bribe and cast an honest vote.",
				points: 9,
				integrity: 3,
				courage: 1,
				result: "You keep your hands clean and drop your ballot into the box."
			},
			{
				id: "accept_cash",
				label: "Take the ₦10,000 cash and vote as instructed",
				detail: "Sell your vote for immediate money.",
				points: 0,
				integrity: -5,
				courage: 0,
				fineMoney: 5e3,
				result: "Vote-buying felony! A heavy penalty fine is deducted under Section 121 of the Electoral Act.",
				flag: "corrupt_vote"
			}
		],
		riggingScenario: {
			culprit: "Vote-Buying Cash Handler",
			offence: "Electoral Act Sec 121: Direct vote buying and voter bribery",
			evidence: "Bundles of cash notes and voter payment lists behind the building",
			reward: 5e3
		}
	},
	{
		id: "thug_intimidation",
		phase: "voting_time",
		title: "Thugs Attempting Ballot Box Snatching",
		place: "Road Near the Polling Station",
		summary: "Four young men on two motorcycles armed with wooden clubs and teargas canisters arrive shouting, trying to scatter the crowd and snatch the ballot box.",
		lead: () => "Shouting breaks out as the motorcycles rev their engines near the officials' table. Frightened voters begin to back away.",
		choices: () => [
			{
				id: "unite_queue",
				label: "Call on youth and elders to link arms and form a human wall around the box",
				detail: "Stand together peacefully to protect the ballot box without weapons.",
				points: 18,
				integrity: 5,
				courage: 5,
				rewardMoney: 4e3,
				result: "Over 50 citizens surround the election officials! Outnumbered by the peaceful crowd, the thugs turn their bikes and speed away!",
				flag: "thugs_repelled"
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
				flag: "police_alerted"
			},
			{
				id: "flee_home",
				label: "Run home and lock your gate",
				detail: "Flee from the polling station and abandon the process.",
				points: 3,
				integrity: 0,
				courage: -2,
				result: "You are safe at home, but your polling unit was left defenseless."
			}
		],
		riggingScenario: {
			culprit: "Ballot Box Snatching Gang",
			offence: "Electoral Act Sec 126: Violent disruption and attempted theft of ballot box",
			evidence: "Weapons and physical attempt to seize the transparent ballot box",
			reward: 6e3
		}
	}
];
var POST_VOTING_ACTIVITIES = [
	{
		id: "public_sorting",
		phase: "post_voting_collation",
		title: "Public Counting and Ballot Verification",
		place: "Center Table at Polling Station (2:30 PM)",
		summary: "Voting has ended! Officials break the seal on the ballot box in front of everyone. The presiding officer holds up each ballot paper and reads the candidate's name aloud. A party agent tries to falsely cancel a clear ballot by claiming ink is smudged.",
		lead: () => "The crowd gathers closely around the table. The agent argues that a clear vote for an opponent should be declared invalid.",
		choices: () => [
			{
				id: "scrutinize_count",
				label: "Demand that the ballot be held up for everyone to see and verify the mark",
				detail: "Make sure no legitimate citizen's vote is wrongfully cancelled.",
				points: 16,
				integrity: 5,
				courage: 4,
				rewardMoney: 3e3,
				result: "The presiding officer shows the ballot to all observers and counts it correctly! The voter's voice is protected.",
				flag: "honest_count"
			},
			{
				id: "watch_silently",
				label: "Listen carefully and write down every single number in your phone notes",
				detail: "Keep an exact record of the numbers announced at the station.",
				points: 10,
				integrity: 2,
				courage: 1,
				result: "You have recorded the accurate, original figures from this polling unit."
			},
			{
				id: "leave_early",
				label: "Leave the polling station immediately after voting finishes",
				detail: "Go home before results are counted.",
				points: 4,
				integrity: 0,
				courage: 0,
				result: "You miss the actual count and will only rely on rumors."
			}
		],
		riggingScenario: {
			culprit: "Partisan Counting Agent",
			offence: "Electoral Act Sec 60: Wrongful cancellation of valid votes during counting",
			evidence: "Attempting to tear or smudge a valid ballot paper on the table",
			reward: 4e3
		}
	},
	{
		id: "ec8a_irev_upload",
		phase: "post_voting_collation",
		title: "Form EC8A Signing & IReV Cloud Upload",
		place: "Polling Station Wall & BVAS Camera",
		summary: "The presiding officer totals all votes on the official Form EC8A result sheet. Party agents sign it. Now the officer must photograph the sheet using BVAS to upload it directly to the INEC IReV website, but a suspicious man claims there is 'no network'.",
		lead: () => "Agents are signing the paper. A man is trying to stop the officer from transmitting the photo to the online portal.",
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
				flag: "irev_uploaded"
			},
			{
				id: "snap_only",
				label: "Take a clear picture of the pasted sheet and share it in your community group",
				detail: "Share undeniable evidence of the authentic result with neighbors.",
				points: 12,
				integrity: 3,
				courage: 2,
				rewardMoney: 1500,
				result: "Your community now holds clear photographic evidence of the true polling unit result!"
			},
			{
				id: "allow_tamper",
				label: "Ignore the upload and let them take the paper away without a photo",
				detail: "Leave before the sheet is photographed and posted.",
				points: 2,
				integrity: -3,
				courage: 0,
				fineMoney: 2500,
				result: "High danger of result alteration during transit!"
			}
		],
		riggingScenario: {
			culprit: "IReV Transmission Saboteur",
			offence: "Electoral Act Sec 64: Obstructing electronic transmission of election results",
			evidence: "Blocking the BVAS camera and attempting to stop online result upload",
			reward: 5e3
		}
	},
	{
		id: "collation_escort",
		phase: "post_voting_collation",
		title: "Escorting Results to the Collation Centre",
		place: "Ward Collation Hall (Town Hall)",
		summary: "An INEC vehicle is transporting the signed Form EC8A and BVAS machine to the Ward Collation Hall. Vigilant citizens and party observers are driving behind the vehicle to ensure nobody hijacks or diverts the bus.",
		lead: () => "The official INEC vehicle starts moving. A convoy of observer vehicles lines up behind to follow the results step by step.",
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
				flag: "collation_secured"
			},
			{
				id: "follow_social",
				label: "Follow live civil society collation updates on your smartphone",
				detail: "Monitor the collation hall progress from home.",
				points: 10,
				integrity: 2,
				courage: 1,
				result: "You keep track of the official announcements as they happen."
			},
			{
				id: "spread_fake",
				label: "Broadcast fake victory results on social media before collation is finished",
				detail: "Announce winners ahead of the official INEC declaration.",
				points: 0,
				integrity: -5,
				courage: 0,
				fineMoney: 4e3,
				result: "Illegal declaration! Section 120 of the Electoral Act strictly penalizes premature or fake result announcements."
			}
		],
		riggingScenario: {
			culprit: "Highway Result Diversion Squad",
			offence: "Electoral Act Sec 118: Hijacking election materials and diverting collation vehicles",
			evidence: "Unmarked vehicle attempting to force the official INEC bus off its route",
			reward: 7e3
		}
	}
];
[...VOTING_TIME_ACTIVITIES, ...POST_VOTING_ACTIVITIES];
function standing(points, integrity) {
	if (points < 30) return "Passive Citizen";
	if (integrity <= -10) return "Electoral Compromiser";
	if (integrity < 0) return "Purchased Voter";
	if (integrity >= 25 && points >= 80) return "National Civic Guardian 🏆";
	if (integrity >= 15 && points >= 50) return "Vigilant Election Defender";
	return "Active Accredited Voter";
}
function totals(log) {
	return log.reduce((acc, entry) => ({
		points: acc.points + entry.points,
		integrity: acc.integrity + entry.integrity,
		courage: acc.courage + entry.courage,
		completed: acc.completed + 1
	}), {
		points: 0,
		integrity: 0,
		courage: 0,
		completed: 0
	});
}
var WARD_LEADERS = [
	{
		name: "Amina Yusuf",
		role: "Vigilant Civic Monitor",
		points: 110,
		integrity: 28,
		you: false
	},
	{
		name: "Corper Chidi",
		role: "Neutral Presiding Officer",
		points: 96,
		integrity: 22,
		you: false
	},
	{
		name: "Mama Bukky",
		role: "Queue Solidarity Leader",
		points: 88,
		integrity: 18,
		you: false
	},
	{
		name: "Tunde Balogun",
		role: "IReV Evidence Recorder",
		points: 82,
		integrity: 16,
		you: false
	},
	{
		name: "Chief Okoro",
		role: "Collation Escort Guard",
		points: 75,
		integrity: 14,
		you: false
	}
];
function wardBoard(points, integrity) {
	const rows = [...WARD_LEADERS, {
		name: "You",
		role: standing(points, integrity),
		points,
		integrity,
		you: true
	}];
	rows.sort((a, b) => b.points - a.points || b.integrity - a.integrity);
	return rows;
}
function yourPlace(points, integrity) {
	return wardBoard(points, integrity).findIndex((row) => row.you) + 1;
}
var STATES_AND_LGAS = {
	Lagos: {
		code: "LA",
		lgas: [
			"Ikeja",
			"Alimosho",
			"Lagos Island",
			"Surulere",
			"Eti-Osa",
			"Kosofe",
			"Oshodi-Isolo",
			"Ikorodu",
			"Ajeromi-Ifelodun"
		]
	},
	Abuja_FCT: {
		code: "FC",
		lgas: [
			"Abuja Municipal (AMAC)",
			"Bwari",
			"Gwagwalada",
			"Kuje",
			"Kwali",
			"Abaji"
		]
	},
	Kano: {
		code: "KN",
		lgas: [
			"Kano Municipal",
			"Fagge",
			"Dala",
			"Gwale",
			"Tarauni",
			"Nassarawa",
			"Ungogo",
			"Kumbotso"
		]
	},
	Rivers: {
		code: "RV",
		lgas: [
			"Port Harcourt",
			"Obio-Akpor",
			"Eleme",
			"Ikwerre",
			"Oyigbo",
			"Degema",
			"Bonny"
		]
	},
	Anambra: {
		code: "AN",
		lgas: [
			"Awka South",
			"Onitsha North",
			"Onitsha South",
			"Nnewi North",
			"Aguata",
			"Idemili North"
		]
	},
	Oyo: {
		code: "OY",
		lgas: [
			"Ibadan North",
			"Ibadan South-West",
			"Ibadan North-East",
			"Ogbomoso North",
			"Oyo East"
		]
	},
	Kaduna: {
		code: "KD",
		lgas: [
			"Kaduna North",
			"Kaduna South",
			"Chikun",
			"Igabi",
			"Zaria",
			"Sabon Gari"
		]
	},
	Enugu: {
		code: "EN",
		lgas: [
			"Enugu North",
			"Enugu South",
			"Enugu East",
			"Nsukka",
			"Udi",
			"Oji River"
		]
	}
};
var WARDS_BY_LGA = {
	"Ikeja": [
		"Ward 01 - Alausa / Secretariat",
		"Ward 02 - Ikeja GRA",
		"Ward 03 - Computer Village / Airport Rd",
		"Ward 04 - Anifowoshe"
	],
	"Alimosho": [
		"Ward 01 - Egbeda / Akowonjo",
		"Ward 02 - Idumu / Isheri",
		"Ward 03 - Ipaja North",
		"Ward 04 - Igando"
	],
	"Surulere": [
		"Ward 01 - Adeniran Ogunsanya",
		"Ward 02 - Stadium / Ojuelegba",
		"Ward 03 - Aguda",
		"Ward 04 - Ijesha"
	],
	"Abuja Municipal (AMAC)": [
		"Ward 01 - City Centre / Garki",
		"Ward 02 - Wuse II / Maitama",
		"Ward 03 - Gwarinpa / Utako",
		"Ward 04 - Asokoro"
	],
	"Kano Municipal": [
		"Ward 01 - Kankarofi / Palace",
		"Ward 02 - Shahuchi",
		"Ward 03 - Zango",
		"Ward 04 - Yakasai"
	],
	"Port Harcourt": [
		"Ward 01 - Old GRA / Township",
		"Ward 02 - Diobu Mile 1",
		"Ward 03 - Diobu Mile 3",
		"Ward 04 - Borokiri"
	],
	"Awka South": [
		"Ward 01 - Awka I (Amaenyi)",
		"Ward 02 - Awka II (Ifite)",
		"Ward 03 - Okpuno",
		"Ward 04 - Amawbia"
	],
	"Ibadan North": [
		"Ward 01 - UI / Agbowo",
		"Ward 02 - Bodija",
		"Ward 03 - Mokola",
		"Ward 04 - Sango"
	]
};
function generatePollingUnits(state, lga, ward) {
	const code = STATES_AND_LGAS[state]?.code || "NG";
	const lgaClean = lga.substring(0, 3).toUpperCase();
	const wardNum = ward.includes("Ward 0") ? ward.substring(5, 7) : "01";
	return [
		{
			state,
			lga,
			ward,
			puNumber: `PU-${code}/${lgaClean}/${wardNum}/001`,
			puName: `Community Primary School, Gate A (${ward})`,
			registeredVoters: 750
		},
		{
			state,
			lga,
			ward,
			puNumber: `PU-${code}/${lgaClean}/${wardNum}/002`,
			puName: `Town Hall / Civic Centre Open Field (${ward})`,
			registeredVoters: 620
		},
		{
			state,
			lga,
			ward,
			puNumber: `PU-${code}/${lgaClean}/${wardNum}/003`,
			puName: `Health Centre Verandah, Market Road (${ward})`,
			registeredVoters: 840
		},
		{
			state,
			lga,
			ward,
			puNumber: `PU-${code}/${lgaClean}/${wardNum}/004`,
			puName: `Opposite Chief's Palace / Ancient Tree (${ward})`,
			registeredVoters: 510
		}
	];
}
var AVATAR_PRESETS = [
	{
		id: "patriot_agbada",
		name: "Emeka (Civic Advocate)",
		gender: "male",
		skinTone: "#8D5524",
		hairColor: "#1A1A1A",
		outfitColor: "#1B5C3A",
		capColor: "#FFFFFF",
		accessory: "agbada",
		description: "Proud voter in traditional green & white attire"
	},
	{
		id: "youth_leader",
		name: "Amina (Youth Mobilizer)",
		gender: "female",
		skinTone: "#C68642",
		hairColor: "#1A1A1A",
		outfitColor: "#9D2C24",
		accessory: "hijab",
		description: "Determined community monitor with headwrap"
	},
	{
		id: "tech_observer",
		name: "Tunde (Tech Monitor)",
		gender: "male",
		skinTone: "#E0AC69",
		hairColor: "#2A201A",
		outfitColor: "#2563EB",
		accessory: "glasses",
		description: "Equipped with smartphone verifying results"
	},
	{
		id: "market_leader",
		name: "Mama Chinyere (Market Leader)",
		gender: "female",
		skinTone: "#5C3818",
		hairColor: "#1A1A1A",
		outfitColor: "#D97706",
		accessory: "headwrap",
		description: "Experienced community pillar guarding the queue"
	},
	{
		id: "corper_officer",
		name: "Corper Halima (NYSC Official)",
		gender: "female",
		skinTone: "#A06835",
		hairColor: "#1A1A1A",
		outfitColor: "#15803D",
		accessory: "cap",
		capColor: "#166534",
		description: "Neutral presiding officer upholding the process"
	}
];
function Avatar3D({ avatar, size = 140, interactive = true, animated = true, actionState = "idle" }) {
	const canvasRef = (0, import_react.useRef)(null);
	const rotRef = (0, import_react.useRef)({
		y: .15,
		pitch: .1,
		isDragging: false,
		lastX: 0,
		lastY: 0
	});
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animId;
		let time = 0;
		const render = () => {
			time += .03;
			const width = canvas.width;
			const height = canvas.height;
			ctx.clearRect(0, 0, width, height);
			const centerX = width / 2;
			const centerY = height / 2 + 10;
			const baseScale = size / 160;
			const idleFloat = animated ? Math.sin(time * 2) * 3 : 0;
			const walkBob = actionState === "walking" ? Math.abs(Math.sin(time * 6)) * 8 : 0;
			const rotY = rotRef.current.y + (actionState === "celebrating" ? Math.sin(time * 4) * .4 : 0);
			const pitch = rotRef.current.pitch;
			ctx.save();
			ctx.translate(centerX, centerY - idleFloat + walkBob);
			ctx.scale(baseScale, baseScale);
			ctx.save();
			ctx.beginPath();
			ctx.ellipse(0, 56, 36, 12, 0, 0, Math.PI * 2);
			ctx.fillStyle = "rgba(0,0,0,0.18)";
			ctx.fill();
			ctx.restore();
			const bodyGrad = ctx.createLinearGradient(-26, 0, 26, 0);
			bodyGrad.addColorStop(0, shadeColor(avatar.outfitColor, -35));
			bodyGrad.addColorStop(.35, avatar.outfitColor);
			bodyGrad.addColorStop(.8, shadeColor(avatar.outfitColor, 20));
			bodyGrad.addColorStop(1, shadeColor(avatar.outfitColor, -40));
			ctx.beginPath();
			if (avatar.accessory === "agbada") {
				ctx.moveTo(-36, 6);
				ctx.lineTo(36, 6);
				ctx.lineTo(26, 50);
				ctx.lineTo(-26, 50);
			} else ctx.roundRect(-22, 6, 44, 46, [
				8,
				8,
				4,
				4
			]);
			ctx.closePath();
			ctx.fillStyle = bodyGrad;
			ctx.fill();
			ctx.strokeStyle = "rgba(0,0,0,0.2)";
			ctx.lineWidth = 2;
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(-10, 6);
			ctx.lineTo(0, 22);
			ctx.lineTo(10, 6);
			ctx.strokeStyle = shadeColor(avatar.outfitColor, 40);
			ctx.lineWidth = 3;
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(-10, 24, 5, 0, Math.PI * 2);
			ctx.fillStyle = "#008751";
			ctx.fill();
			ctx.beginPath();
			ctx.arc(-10, 24, 2.5, 0, Math.PI * 2);
			ctx.fillStyle = "#FFFFFF";
			ctx.fill();
			const armSwing = actionState === "walking" ? Math.sin(time * 6) * 12 : 0;
			const celebrateArm = actionState === "celebrating" ? -22 : 0;
			ctx.save();
			ctx.translate(-26, 12);
			ctx.rotate(-rotY * .2 + armSwing * Math.PI / 180 + celebrateArm * .05);
			ctx.fillStyle = bodyGrad;
			ctx.beginPath();
			ctx.roundRect(-7, 0, 14, 34, 7);
			ctx.fill();
			ctx.beginPath();
			ctx.arc(0, 36, 6, 0, Math.PI * 2);
			ctx.fillStyle = avatar.skinTone;
			ctx.fill();
			ctx.restore();
			ctx.save();
			ctx.translate(26, 12);
			ctx.rotate(rotY * .2 - armSwing * Math.PI / 180 - celebrateArm * .05);
			ctx.fillStyle = bodyGrad;
			ctx.beginPath();
			ctx.roundRect(-7, 0, 14, 34, 7);
			ctx.fill();
			ctx.beginPath();
			ctx.arc(0, 36, 6, 0, Math.PI * 2);
			ctx.fillStyle = avatar.skinTone;
			ctx.fill();
			ctx.save();
			ctx.translate(2, 36);
			ctx.rotate(-.3);
			ctx.fillStyle = "#0284C7";
			ctx.fillRect(0, -6, 15, 10);
			ctx.fillStyle = "#FFFFFF";
			ctx.fillRect(2, -4, 4, 6);
			ctx.fillStyle = "#38BDF8";
			ctx.fillRect(7, -4, 6, 2);
			ctx.restore();
			ctx.restore();
			ctx.beginPath();
			ctx.roundRect(-7, -4, 14, 14, 4);
			ctx.fillStyle = shadeColor(avatar.skinTone, -20);
			ctx.fill();
			const headX = Math.sin(rotY) * 6;
			const headY = -28 + pitch * 10;
			const headGrad = ctx.createRadialGradient(headX - 6, headY - 8, 4, headX, headY, 28);
			headGrad.addColorStop(0, shadeColor(avatar.skinTone, 25));
			headGrad.addColorStop(.6, avatar.skinTone);
			headGrad.addColorStop(1, shadeColor(avatar.skinTone, -30));
			ctx.save();
			ctx.beginPath();
			ctx.arc(headX, headY, 23, 0, Math.PI * 2);
			ctx.fillStyle = headGrad;
			ctx.shadowColor = "rgba(0,0,0,0.15)";
			ctx.shadowBlur = 6;
			ctx.shadowOffsetY = 4;
			ctx.fill();
			ctx.restore();
			if (avatar.accessory === "hijab") {
				ctx.save();
				ctx.beginPath();
				ctx.arc(headX, headY - 2, 25, 0, Math.PI * 2);
				ctx.fillStyle = avatar.outfitColor;
				ctx.fill();
				ctx.beginPath();
				ctx.ellipse(headX, headY + 2, 14, 17, 0, 0, Math.PI * 2);
				ctx.fillStyle = headGrad;
				ctx.fill();
				ctx.restore();
			} else if (avatar.accessory === "headwrap") {
				ctx.save();
				ctx.beginPath();
				ctx.ellipse(headX, headY - 14, 28, 14, .1, 0, Math.PI * 2);
				ctx.fillStyle = shadeColor(avatar.outfitColor, 20);
				ctx.fill();
				ctx.beginPath();
				ctx.ellipse(headX, headY - 18, 24, 10, -.1, 0, Math.PI * 2);
				ctx.fillStyle = avatar.outfitColor;
				ctx.fill();
				ctx.restore();
			} else if (avatar.accessory === "cap" || avatar.accessory === "agbada") {
				const capC = avatar.capColor || "#FFFFFF";
				ctx.save();
				ctx.beginPath();
				ctx.ellipse(headX, headY - 16, 22, 11, .15, 0, Math.PI * 2);
				ctx.fillStyle = capC;
				ctx.fill();
				ctx.beginPath();
				ctx.arc(headX + 6, headY - 20, 10, 0, Math.PI * 2);
				ctx.fillStyle = shadeColor(capC, -15);
				ctx.fill();
				ctx.restore();
			} else {
				ctx.save();
				ctx.beginPath();
				ctx.arc(headX, headY - 6, 23.5, Math.PI * .8, Math.PI * 2.2);
				ctx.fillStyle = avatar.hairColor;
				ctx.fill();
				ctx.restore();
			}
			const eyeOffsetX = Math.sin(rotY) * 4;
			const leftEyeX = headX - 8 + eyeOffsetX;
			const rightEyeX = headX + 8 + eyeOffsetX;
			const eyeY = headY - 1;
			ctx.fillStyle = "#1A1A1A";
			ctx.fillRect(leftEyeX - 4, eyeY - 6, 8, 2);
			ctx.fillRect(rightEyeX - 4, eyeY - 6, 8, 2);
			[leftEyeX, rightEyeX].forEach((ex) => {
				ctx.beginPath();
				ctx.arc(ex, eyeY, 3.2, 0, Math.PI * 2);
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				ctx.beginPath();
				ctx.arc(ex + Math.sin(rotY) * 1.2, eyeY, 1.8, 0, Math.PI * 2);
				ctx.fillStyle = "#1A1108";
				ctx.fill();
				ctx.beginPath();
				ctx.arc(ex - .8, eyeY - .8, .7, 0, Math.PI * 2);
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
			});
			if (avatar.accessory === "glasses") {
				ctx.strokeStyle = "#1A1A1A";
				ctx.lineWidth = 1.8;
				ctx.strokeRect(leftEyeX - 6, eyeY - 4, 11, 8);
				ctx.strokeRect(rightEyeX - 5, eyeY - 4, 11, 8);
				ctx.beginPath();
				ctx.moveTo(leftEyeX + 5, eyeY);
				ctx.lineTo(rightEyeX - 5, eyeY);
				ctx.stroke();
			}
			ctx.beginPath();
			ctx.arc(headX + eyeOffsetX, headY + 5, 2.2, 0, Math.PI * 2);
			ctx.fillStyle = shadeColor(avatar.skinTone, -25);
			ctx.fill();
			ctx.beginPath();
			if (actionState === "fined") {
				ctx.arc(headX + eyeOffsetX, headY + 14, 5, Math.PI, Math.PI * 2);
				ctx.strokeStyle = "#3A1A1A";
				ctx.lineWidth = 2;
				ctx.stroke();
			} else {
				ctx.arc(headX + eyeOffsetX, headY + 8, 7, .2, Math.PI - .2);
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				ctx.strokeStyle = "#7A2E2E";
				ctx.lineWidth = 1.5;
				ctx.stroke();
			}
			if (actionState === "voting" || actionState === "celebrating") {
				ctx.beginPath();
				ctx.arc(headX + 18, headY + 28, 4, 0, Math.PI * 2);
				ctx.fillStyle = "#6B21A8";
				ctx.fill();
			}
			ctx.restore();
			if (animated) animId = requestAnimationFrame(render);
		};
		render();
		return () => {
			cancelAnimationFrame(animId);
		};
	}, [
		avatar,
		size,
		animated,
		actionState
	]);
	const handlePointerDown = (e) => {
		if (!interactive) return;
		rotRef.current.isDragging = true;
		rotRef.current.lastX = e.clientX;
		rotRef.current.lastY = e.clientY;
	};
	const handlePointerMove = (e) => {
		if (!rotRef.current.isDragging) return;
		const dx = e.clientX - rotRef.current.lastX;
		const dy = e.clientY - rotRef.current.lastY;
		rotRef.current.y += dx * .015;
		rotRef.current.pitch = Math.max(-.3, Math.min(.3, rotRef.current.pitch + dy * .01));
		rotRef.current.lastX = e.clientX;
		rotRef.current.lastY = e.clientY;
	};
	const handlePointerUp = () => {
		rotRef.current.isDragging = false;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex flex-col items-center justify-center select-none",
		style: {
			width: size,
			height: size + 20
		},
		onPointerDown: handlePointerDown,
		onPointerMove: handlePointerMove,
		onPointerUp: handlePointerUp,
		onPointerLeave: handlePointerUp,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			width: size * 1.6,
			height: (size + 20) * 1.6,
			style: {
				width: size,
				height: size + 20,
				cursor: interactive ? "grab" : "default"
			}
		}), interactive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] text-muted tracking-tight -mt-1 opacity-70",
			children: "↔ Drag 3D Avatar"
		})]
	});
}
function shadeColor(color, percent) {
	let R = parseInt(color.substring(1, 3), 16);
	let G = parseInt(color.substring(3, 5), 16);
	let B = parseInt(color.substring(5, 7), 16);
	R = Math.min(255, Math.max(0, Math.round(R * (100 + percent) / 100)));
	G = Math.min(255, Math.max(0, Math.round(G * (100 + percent) / 100)));
	B = Math.min(255, Math.max(0, Math.round(B * (100 + percent) / 100)));
	return `#${R.toString(16).padStart(2, "0")}${G.toString(16).padStart(2, "0")}${B.toString(16).padStart(2, "0")}`;
}
function VoterRegistrationModal({ onComplete }) {
	const [step, setStep] = (0, import_react.useState)("details");
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [gender, setGender] = (0, import_react.useState)("male");
	const [state, setState] = (0, import_react.useState)("Lagos");
	const [lga, setLga] = (0, import_react.useState)("Ikeja");
	const [ward, setWard] = (0, import_react.useState)("Ward 01 - Alausa / Secretariat");
	const [selectedPu, setSelectedPu] = (0, import_react.useState)(null);
	const [selectedAvatar, setSelectedAvatar] = (0, import_react.useState)(AVATAR_PRESETS[0]);
	const [isCollectingPVC, setIsCollectingPVC] = (0, import_react.useState)(false);
	const [pvcReady, setPvcReady] = (0, import_react.useState)(false);
	const availableLgas = STATES_AND_LGAS[state]?.lgas || [];
	const availableWards = WARDS_BY_LGA[lga] || [
		`Ward 01 - Central ${lga}`,
		`Ward 02 - North ${lga}`,
		`Ward 03 - South ${lga}`,
		`Ward 04 - East ${lga}`
	];
	const pollingUnits = generatePollingUnits(state, lga, ward);
	const vinGenerated = `90F5-${Math.floor(1e3 + Math.random() * 9e3)}-${Math.floor(1e3 + Math.random() * 9e3)}-${Math.floor(10 + Math.random() * 90)}`;
	const ninGenerated = `2849${Math.floor(1e6 + Math.random() * 9e6)}`;
	const handleStateChange = (newState) => {
		setState(newState);
		const firstLga = (STATES_AND_LGAS[newState]?.lgas || [])[0] || "Central";
		setLga(firstLga);
		const newWards = WARDS_BY_LGA[firstLga] || [`Ward 01 - Central ${firstLga}`];
		setWard(newWards[0]);
		setSelectedPu(null);
	};
	const handleLgaChange = (newLga) => {
		setLga(newLga);
		const newWards = WARDS_BY_LGA[newLga] || [`Ward 01 - Central ${newLga}`, `Ward 02 - North ${newLga}`];
		setWard(newWards[0]);
		setSelectedPu(null);
	};
	const handleFinish = () => {
		const finalPu = selectedPu || pollingUnits[0];
		onComplete({
			fullName: fullName.trim() || "Chinedu Adebayo",
			nin: ninGenerated,
			vin: vinGenerated,
			gender,
			avatar: selectedAvatar,
			pollingUnit: finalPu,
			registrationDate: (/* @__PURE__ */ new Date()).toLocaleDateString("en-NG", {
				year: "numeric",
				month: "short",
				day: "numeric"
			}),
			pvcCollected: true,
			walletBalance: 15e3,
			civicBudget: 15e3
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-3xl mx-auto rounded-3xl border border-line bg-card/95 backdrop-blur-xl shadow-2xl p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-line pb-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-10 rounded-2xl bg-leaf/20 border border-leaf text-leaf flex items-center justify-center font-bold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-widest text-leaf uppercase",
						children: "INEC CVR Portal 2027"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold text-ink",
						children: "Voter Accreditation & Registration"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-paper border border-line text-muted",
					children: ["Step ", step === "details" ? "1/4" : step === "pu_select" ? "2/4" : step === "avatar" ? "3/4" : "4/4"]
				})]
			}),
			step === "details" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-leaf-soft/40 border border-leaf/30 rounded-2xl p-4 flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-5 text-leaf shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-ink leading-relaxed",
							children: [
								"Every eligible citizen must register on the National Register of Voters to receive their ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Permanent Voter Card (PVC)" }),
								". Enter your official details below to get started."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-semibold tracking-wider text-muted uppercase mb-1.5",
							children: "Full Name (as in NIN / Passport)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "e.g. Babatunde Ngozi Danjuma",
							value: fullName,
							onChange: (e) => setFullName(e.target.value),
							className: "w-full px-4 py-3 rounded-xl border border-line bg-paper text-ink placeholder:text-muted/60 focus:outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 font-medium"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-semibold tracking-wider text-muted uppercase mb-1.5",
							children: "Gender"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: gender,
							onChange: (e) => setGender(e.target.value),
							className: "w-full px-4 py-3 rounded-xl border border-line bg-paper text-ink focus:outline-none focus:border-leaf font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "male",
									children: "Male"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "female",
									children: "Female"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "other",
									children: "Prefer not to say"
								})
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-semibold tracking-wider text-muted uppercase mb-1.5",
						children: "Select Your State of Registration"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
						children: Object.keys(STATES_AND_LGAS).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => handleStateChange(s),
							className: `px-3 py-2.5 rounded-xl border text-sm font-semibold transition-all ${state === s ? "border-leaf bg-leaf text-paper shadow-md shadow-leaf/20" : "border-line bg-paper text-ink hover:border-leaf/50"}`,
							children: s.replace("_", " ")
						}, s))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end pt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setStep("pu_select"),
							className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-semibold shadow-lg shadow-leaf/25 transition-transform active:scale-95",
							children: ["Select Polling Unit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
						})
					})
				]
			}),
			step === "pu_select" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-paper border border-line rounded-2xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold tracking-wider text-muted uppercase mb-2",
							children: "Location Drilldown"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs text-muted font-medium mb-1 block",
								children: "Local Government Area (LGA)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: lga,
								onChange: (e) => handleLgaChange(e.target.value),
								className: "w-full px-3 py-2.5 rounded-xl border border-line bg-card text-ink font-semibold",
								children: availableLgas.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: l,
									children: l
								}, l))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs text-muted font-medium mb-1 block",
								children: "Ward (Registration Area)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: ward,
								onChange: (e) => {
									setWard(e.target.value);
									setSelectedPu(null);
								},
								className: "w-full px-3 py-2.5 rounded-xl border border-line bg-card text-ink font-semibold",
								children: availableWards.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: w,
									children: w
								}, w))
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold text-ink uppercase tracking-wider",
							children: [
								"Available Real Polling Units (",
								pollingUnits.length,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-leaf font-semibold flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }),
								" ",
								state.replace("_", " "),
								" > ",
								lga
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3",
						children: pollingUnits.map((pu) => {
							const isSelected = selectedPu?.puNumber === pu.puNumber || !selectedPu && pu === pollingUnits[0];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSelectedPu(pu),
								className: `p-4 rounded-2xl border text-left transition-all relative ${isSelected ? "border-leaf bg-leaf-soft/50 ring-2 ring-leaf/30 shadow-md" : "border-line bg-paper hover:border-leaf/40"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block px-2.5 py-0.5 rounded-md bg-ink text-paper text-xs font-mono font-bold tracking-wider mb-1.5",
											children: pu.puNumber
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-ink text-base",
											children: pu.puName
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted mt-1",
											children: [
												"Ward: ",
												pu.ward,
												" · Capacity: ",
												pu.registeredVoters,
												" Registered Voters"
											]
										})
									] }), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-leaf shrink-0 mt-1" })]
								})
							}, pu.puNumber);
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pt-4 border-t border-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStep("details"),
							className: "px-5 py-2.5 rounded-full border border-line text-ink font-semibold text-sm hover:bg-paper",
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setStep("avatar"),
							className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-semibold shadow-lg shadow-leaf/25",
							children: ["Customize 3D Avatar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
						})]
					})
				]
			}),
			step === "avatar" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-md mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-widest text-leaf mb-1",
								children: "Interactive 3D Citizen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold text-ink",
								children: "Choose Your Civic Identity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted mt-1",
								children: "Select an avatar to represent you on the election board and in the interactive simulation."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-center justify-center gap-8 bg-paper border border-line rounded-3xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-2 rounded-3xl bg-gradient-to-b from-card to-paper border-2 border-leaf/40 shadow-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar3D, {
									avatar: selectedAvatar,
									size: 160,
									interactive: true,
									animated: true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 text-xs font-semibold px-3 py-1 rounded-full bg-card border border-line text-ink",
								children: selectedAvatar.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-sm",
							children: AVATAR_PRESETS.map((av) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelectedAvatar(av),
								className: `p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${selectedAvatar.id === av.id ? "border-leaf bg-leaf-soft text-ink font-bold ring-2 ring-leaf/30" : "border-line bg-card text-muted hover:border-leaf/40"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-7 rounded-full shrink-0 border border-black/10 shadow-inner",
									style: { backgroundColor: av.outfitColor }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-ink truncate",
										children: av.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted truncate",
										children: av.description
									})]
								})]
							}, av.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pt-4 border-t border-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStep("pu_select"),
							className: "px-5 py-2.5 rounded-full border border-line text-ink font-semibold text-sm hover:bg-paper",
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setStep("pvc_preview"),
							className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-semibold shadow-lg shadow-leaf/25",
							children: ["Issue PVC & Wallet", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
						})]
					})
				]
			}),
			step === "pvc_preview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-lg mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-leaf-soft text-leaf text-xs font-bold uppercase tracking-wider mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), " Official INEC Issue"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold text-ink",
								children: "Your Permanent Voter Card (PVC)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Your biometric registration is complete. Collect your PVC to unlock voting and your election day wallet."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-md mx-auto relative rounded-2xl overflow-hidden shadow-2xl border-2 border-leaf/60 bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22] p-5 text-white select-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-36 h-36 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -left-10 w-36 h-36 bg-lime-400/10 rounded-full blur-2xl pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-emerald-400/30 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-8 rounded-full bg-white flex items-center justify-center shadow-md",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-5 h-5 rounded-full border border-green-700 flex items-center justify-center text-[8px] font-black text-green-800",
											children: "NG"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-widest uppercase font-bold text-emerald-200 leading-none",
										children: "Federal Republic of Nigeria"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-extrabold tracking-wider text-white",
										children: "INDEPENDENT NATIONAL ELECTORAL COMMISSION"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/20 text-emerald-200",
									children: "PVC"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-24 rounded-xl border-2 border-emerald-300/40 bg-card overflow-hidden shadow-lg flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar3D, {
										avatar: selectedAvatar,
										size: 84,
										interactive: false,
										animated: false
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1 min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9px] text-emerald-200/80 uppercase tracking-wider block",
											children: "Full Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold truncate text-white uppercase",
											children: fullName.trim() || "Chinedu Adebayo"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] text-emerald-200/80 uppercase tracking-wider block",
												children: "VIN"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-mono font-bold text-emerald-100 truncate",
												children: vinGenerated
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] text-emerald-200/80 uppercase tracking-wider block",
												children: "Delimitation"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-mono font-bold text-emerald-100 truncate",
												children: selectedPu?.puNumber || "PU-01"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9px] text-emerald-200/80 uppercase tracking-wider block",
											children: "Polling Unit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-emerald-100 font-medium truncate",
											children: selectedPu?.puName || "Ward 01 Town Hall"
										})] })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 pt-2.5 border-t border-emerald-400/25 flex items-center justify-between text-[9px] text-emerald-200 font-mono",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["NIN: ", ninGenerated] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1 text-emerald-300 font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }), " VERIFIED & ACCREDITED"]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-md mx-auto bg-card border border-line rounded-2xl p-4 flex items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-10 rounded-xl bg-stamp/10 border border-stamp/30 flex items-center justify-center text-stamp font-bold text-lg",
								children: "₦"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold text-ink",
								children: "Civic Wallet Starting Balance: ₦15,000"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted",
								children: "Use for water, food, logistics. Avoid voter bribes or pay penal fines!"
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pt-4 border-t border-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStep("avatar"),
							className: "px-5 py-2.5 rounded-full border border-line text-ink font-semibold text-sm hover:bg-paper",
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleFinish,
							className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-bold text-base shadow-xl shadow-leaf/30 transition-transform active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "size-5" }), "Collect PVC & Enter Election Board"]
						})]
					})
				]
			})
		]
	});
}
function Real3DDice({ onRollComplete, disabled = false }) {
	const [isRolling, setIsRolling] = (0, import_react.useState)(false);
	const [d1, setD1] = (0, import_react.useState)(3);
	const [d2, setD2] = (0, import_react.useState)(4);
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
	const renderDiceFace = (val) => {
		switch (val) {
			case 1: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dice1, { className: "size-12 text-[#008751] drop-shadow" });
			case 2: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dice2, { className: "size-12 text-slate-800 drop-shadow" });
			case 3: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dice3, { className: "size-12 text-slate-800 drop-shadow" });
			case 4: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dice4, { className: "size-12 text-slate-800 drop-shadow" });
			case 5: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dice5, { className: "size-12 text-slate-800 drop-shadow" });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dice6, { className: "size-12 text-[#008751] drop-shadow" });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `size-16 rounded-2xl bg-gradient-to-br from-white via-slate-100 to-slate-200 border-2 border-emerald-600 shadow-2xl flex items-center justify-center transition-all ${isRolling ? "animate-spin scale-110 rotate-12" : "shadow-emerald-950/40"}`,
				children: renderDiceFace(d1)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `size-16 rounded-2xl bg-gradient-to-br from-white via-slate-100 to-slate-200 border-2 border-emerald-600 shadow-2xl flex items-center justify-center transition-all ${isRolling ? "animate-spin scale-110 -rotate-12" : "shadow-emerald-950/40"}`,
				children: renderDiceFace(d2)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: handleRoll,
			disabled: isRolling || disabled,
			className: `px-7 py-3 rounded-2xl font-black text-sm uppercase tracking-wider shadow-2xl flex items-center gap-2 transition-all active:scale-95 ${disabled ? "bg-slate-700/60 text-slate-400 border border-slate-600 cursor-not-allowed" : isRolling ? "bg-amber-400 text-slate-950 animate-pulse" : "bg-gradient-to-r from-[#008751] via-emerald-600 to-[#005533] hover:from-emerald-500 hover:to-emerald-700 text-white ring-4 ring-emerald-400/30 shadow-emerald-950/50"}`,
			children: ["🎲 ", isRolling ? "Oya Rolling..." : `Throw Naija Electoral Dice (${d1 + d2})`]
		})]
	});
}
var NAIJA_BOARD_TILES = [
	{
		id: "gate",
		name: "POLLING UNIT GATE",
		subtitle: "Accreditation & Queue Open",
		type: "corner",
		icon: "🏫",
		activityIndex: 0
	},
	{
		id: "unit_arrival",
		name: "Morning Arrival",
		subtitle: "Queue Order Defense",
		type: "property",
		colorBar: "#92400e",
		icon: "👥",
		activityIndex: 0
	},
	{
		id: "bvas_verification",
		name: "BVAS Biometrics",
		subtitle: "Thumb & Face Verification",
		type: "property",
		colorBar: "#92400e",
		icon: "📱",
		activityIndex: 1
	},
	{
		id: "chance_1",
		name: "CIVIC CHANCE",
		subtitle: "Observer Alert Circular",
		type: "chance",
		icon: "❓"
	},
	{
		id: "jail",
		name: "EFCC DETENTION CELL",
		subtitle: "Rigging Interception Zone",
		type: "corner",
		icon: "⛓️"
	},
	{
		id: "secret_cubicle",
		name: "Ballot Secrecy",
		subtitle: "Cubicle Orientation Guard",
		type: "property",
		colorBar: "#0284c7",
		icon: "🗳️",
		activityIndex: 2
	},
	{
		id: "cash_vote_offer",
		name: "Vote Buying Trap",
		subtitle: "See-and-Buy Exposure",
		type: "property",
		colorBar: "#0284c7",
		icon: "💵",
		activityIndex: 3
	},
	{
		id: "thug_intimidation",
		name: "Thuggery Attack",
		subtitle: "Solidarity Box Defense",
		type: "property",
		colorBar: "#ea580c",
		icon: "🏍️",
		activityIndex: 4
	},
	{
		id: "observer_hub",
		name: "CIVIC OBSERVER HUB",
		subtitle: "Free Rapid Rest Area",
		type: "corner",
		icon: "🛡️"
	},
	{
		id: "cast_ballot_tile",
		name: "THE BALLOT BOOTH",
		subtitle: "Cast Official Vote",
		type: "property",
		colorBar: "#dc2626",
		icon: "📥"
	},
	{
		id: "public_sorting",
		name: "Public Loud Count",
		subtitle: "Open Table Verification",
		type: "property",
		colorBar: "#dc2626",
		icon: "📢",
		activityIndex: 5
	},
	{
		id: "chance_2",
		name: "CIVIC CHANCE",
		subtitle: "Transmission Network",
		type: "chance",
		icon: "❓"
	},
	{
		id: "arrest_corner",
		name: "ELECTORAL ARREST",
		subtitle: "Security Taskforce Patrol",
		type: "corner",
		icon: "👮"
	},
	{
		id: "ec8a_irev_upload",
		name: "EC8A IReV Upload",
		subtitle: "Cloud Photo Transmission",
		type: "property",
		colorBar: "#16a34a",
		icon: "📸",
		activityIndex: 6
	},
	{
		id: "collation_escort",
		name: "Collation Escort",
		subtitle: "Follow Results to Ward Hall",
		type: "property",
		colorBar: "#16a34a",
		icon: "🚐",
		activityIndex: 7
	},
	{
		id: "result_declaration",
		name: "Final Declaration",
		subtitle: "Genuine Voice Stamped",
		type: "property",
		colorBar: "#1e40af",
		icon: "🏆",
		activityIndex: 7
	}
];
function RealMonopolyBoard({ currentTileIndex, playerAvatar, playerName, walletBalance, isVoteEligible, correctAnswersCount, hasVoted, phase, showRiggingButton = false, onTileClick, onRollDice, onOpenMarket, onOpenBallot, onTriggerSecurityReport, isMovingAvatar = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full max-w-5xl mx-auto rounded-3xl border-8 border-[#133c2a] bg-[#d3ebd9] shadow-2xl p-3 sm:p-5 select-none relative overflow-hidden font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-5 grid-rows-5 gap-1.5 sm:gap-2 aspect-square max-h-[760px] w-full mx-auto relative bg-[#e7f5ec] rounded-2xl p-1.5 sm:p-2 border-2 border-[#133c2a] shadow-inner",
			children: [
				[
					4,
					5,
					6,
					7,
					8
				],
				[
					3,
					null,
					null,
					null,
					9
				],
				[
					2,
					null,
					null,
					null,
					10
				],
				[
					1,
					null,
					null,
					null,
					11
				],
				[
					0,
					15,
					14,
					13,
					12
				]
			].map((row, rIdx) => row.map((tileIndex, cIdx) => {
				if (tileIndex === null) {
					if (rIdx === 1 && cIdx === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-3 row-span-3 rounded-2xl bg-gradient-to-br from-[#d4eadc] via-[#bce0c9] to-[#99c7aa] border-4 border-[#0e3b25] p-3 sm:p-5 flex flex-col items-center justify-between shadow-xl relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-8xl font-black rotate-[-25deg] text-[#008751]",
									children: "NAIJA"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center z-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#008751] text-white font-black text-xs sm:text-sm tracking-widest uppercase shadow-lg border border-emerald-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"★ ",
											phase === "voting_time" ? "PHASE 1: VOTING TIME ENCOUNTERS" : "PHASE 2: COLLATION & RESULTS GUARDING",
											" ★"
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-xl sm:text-3xl font-extrabold text-[#0d2a1b] mt-1 tracking-tight",
										children: "ELECTION DAY BOARD: 2027"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-center gap-2 mt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] sm:text-xs font-extrabold px-3 py-0.5 rounded-full bg-slate-900 text-white shadow-sm",
											children: phase === "voting_time" ? `Correct Civic Actions: ${correctAnswersCount}/4 Needed to Vote` : "Escorting Collation & Guarding Results"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "my-1 z-10 flex flex-col items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Real3DDice, { onRollComplete: onRollDice })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "z-10 flex flex-wrap items-center justify-center gap-2 w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: onOpenMarket,
										className: "px-3.5 py-2 rounded-xl bg-[#0e3b25] hover:bg-[#072416] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg transition-transform active:scale-95 border border-emerald-500/30",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-3.5 text-amber-400" }),
											"Market (₦",
											walletBalance.toLocaleString(),
											")"
										]
									}),
									isVoteEligible && !hasVoted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: onOpenBallot,
										className: "px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black flex items-center gap-1.5 shadow-xl shadow-red-900/60 animate-bounce active:scale-95 border-2 border-amber-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vote, { className: "size-4 text-white" }), "👉 STEP INTO BALLOT BOOTH NOW!"]
									}),
									showRiggingButton && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: onTriggerSecurityReport,
										className: "px-3.5 py-2 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-black flex items-center gap-1.5 shadow-lg active:scale-95 border border-red-400 animate-pulse",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "size-3.5 text-amber-300" }), "Report Rigging to Security 🚨"]
									})
								]
							})
						]
					}, "center-board");
					return null;
				}
				const tile = NAIJA_BOARD_TILES[tileIndex];
				const isCurrent = currentTileIndex === tileIndex;
				const isCorner = tile.type === "corner";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => onTileClick(tile, tileIndex),
					className: `relative rounded-xl sm:rounded-2xl border-2 flex flex-col justify-between p-1 sm:p-2 cursor-pointer transition-all duration-300 ${isCurrent ? "border-[#008751] bg-amber-100 ring-4 ring-[#008751] shadow-2xl scale-105 z-30" : isCorner ? "border-[#133c2a] bg-[#b8dec0] hover:bg-[#a6d1af]" : "border-slate-400 bg-white hover:border-slate-600 hover:shadow-md"}`,
					children: [
						tile.colorBar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-3 sm:h-4 rounded-t-lg border-b border-black/30 shadow-inner flex items-center justify-center",
							style: { backgroundColor: tile.colorBar },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[7px] font-bold text-white uppercase tracking-tighter opacity-90 truncate px-1",
								children: ["#", tileIndex]
							})
						}),
						isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none bg-emerald-500/20 backdrop-blur-[1px] rounded-xl animate-bounce",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar3D, {
								avatar: playerAvatar,
								size: 52,
								interactive: false,
								animated: true,
								actionState: isMovingAvatar ? "walking" : "idle"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] sm:text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-[#008751] text-white shadow-md",
								children: "YOU DEY HERE"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center text-center my-auto px-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl sm:text-2xl drop-shadow-sm",
									children: tile.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-extrabold text-[8px] sm:text-[11px] text-slate-900 leading-tight mt-0.5 line-clamp-2",
									children: tile.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[7px] sm:text-[8px] text-slate-600 font-medium line-clamp-1",
									children: tile.subtitle
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center border-t border-black/10 pt-0.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] sm:text-[8px] font-mono font-bold text-emerald-800",
								children: tile.type === "corner" ? "CIVIC ZONE" : `STATION`
							})
						})
					]
				}, tile.id);
			}))
		})
	});
}
var ELECTION_ITEMS = [
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
		description: "Ice cold sachet water to beat the scorching afternoon sun under the almond tree."
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
		description: "Clean sealed bottled water to sustain long hours on the BVAS queue."
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
		description: "Self-funded quick meal so you don't take politician's rice packages at rallies."
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
		description: "Ensures your phone stays alive to snap the pasted Form EC8A result sheet."
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
		description: "Official non-partisan observer whistle to alert crowd when someone cuts in or tries snatching."
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
		description: "Shade against the sun or sudden election day rain showers."
	}
];
function CivicEconomyHub({ walletBalance, inventory, onPurchase, fines, onTopUp }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("market");
	const [purchaseMsg, setPurchaseMsg] = (0, import_react.useState)(null);
	const handleBuy = (item) => {
		if (onPurchase(item)) setPurchaseMsg({
			text: `Purchased ${item.name} for ₦${item.price.toLocaleString()}!`,
			success: true
		});
		else setPurchaseMsg({
			text: `Insufficient wallet balance! (₦${walletBalance.toLocaleString()})`,
			success: false
		});
		setTimeout(() => setPurchaseMsg(null), 3500);
	};
	const totalFines = fines.reduce((sum, f) => sum + f.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-line bg-card p-5 sm:p-7 shadow-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-leaf-soft via-paper to-warn-soft/40 border border-leaf/30 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-12 rounded-2xl bg-leaf text-paper flex items-center justify-center font-extrabold text-xl shadow-lg shadow-leaf/20",
						children: "₦"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted",
						children: "Civic Wallet Balance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display text-2xl sm:text-3xl font-bold text-ink",
						children: ["₦", walletBalance.toLocaleString()]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onTopUp(5e3),
						className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-paper hover:bg-white border border-line text-xs font-bold text-ink shadow-sm transition-all active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "size-3.5 text-leaf" }), " +₦5,000 Top-up"]
					}), fines.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stamp-soft text-stamp border border-stamp/30 text-xs font-bold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-3.5" }),
							" Fined: -₦",
							totalFines.toLocaleString()
						]
					})]
				})]
			}),
			purchaseMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `p-3.5 rounded-xl mb-4 text-xs font-bold flex items-center justify-between transition-all ${purchaseMsg.success ? "bg-leaf text-paper" : "bg-stamp text-paper"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: purchaseMsg.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] opacity-80",
					children: "Auto-applied to player"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-line pb-3 mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("market"),
						className: `px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${activeTab === "market" ? "bg-ink text-paper shadow-md" : "text-muted hover:text-ink hover:bg-paper"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-3.5" }),
							"Election Essentials Market (",
							ELECTION_ITEMS.length,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("fines"),
						className: `px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${activeTab === "fines" ? "bg-stamp text-paper shadow-md" : "text-muted hover:text-stamp hover:bg-stamp-soft/50"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3.5" }),
							"Penalties & Fines Log (",
							fines.length,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("rules"),
						className: `px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${activeTab === "rules" ? "bg-ink text-paper shadow-md" : "text-muted hover:text-ink hover:bg-paper"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-3.5" }), "Electoral Offence Fines"]
					})
				]
			}),
			activeTab === "market" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: ELECTION_ITEMS.map((item) => {
					const hasPurchased = inventory.includes(item.id);
					const canAfford = walletBalance >= item.price;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-2xl border border-line bg-paper flex flex-col justify-between hover:border-leaf/50 transition-all group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl p-2 rounded-xl bg-card border border-line shadow-sm",
										children: item.icon
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-ink text-sm group-hover:text-leaf transition-colors",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-extrabold text-leaf",
										children: ["₦", item.price.toLocaleString()]
									})] })]
								}), hasPurchased && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-leaf-soft text-leaf border border-leaf/30 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-2.5" }), " Owned"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted mb-2.5 leading-relaxed",
								children: item.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[11px] font-semibold text-leaf bg-leaf-soft/60 px-2.5 py-1 rounded-lg border border-leaf/20 inline-block mb-3",
								children: ["⚡ ", item.effectLabel]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => handleBuy(item),
							disabled: !canAfford,
							className: `w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${canAfford ? "bg-leaf hover:bg-leaf/90 text-paper shadow-md shadow-leaf/20 active:scale-95" : "bg-line text-muted cursor-not-allowed"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-3.5" }), hasPurchased ? "Buy Additional (₦" + item.price.toLocaleString() + ")" : "Purchase Item (₦" + item.price.toLocaleString() + ")"]
						})]
					}, item.id);
				})
			}),
			activeTab === "fines" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: fines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-10 bg-paper border border-line rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-10 text-leaf mx-auto mb-2 opacity-80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-ink text-base",
							children: "Clean Electoral Record!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted max-w-sm mx-auto mt-1",
							children: "You haven't committed any electoral infractions or vote-buying compromises. Keep your civic score clean!"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-xl bg-stamp-soft/50 border border-stamp/30 flex items-center justify-between text-xs font-bold text-stamp",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Electoral Fines Incurred" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["-₦", totalFines.toLocaleString()] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-line border border-line rounded-2xl bg-paper overflow-hidden",
						children: fines.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono px-2 py-0.5 rounded bg-stamp text-paper font-bold",
									children: f.code
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-xs text-ink",
									children: f.reason
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted mt-1",
								children: f.timestamp
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono font-bold text-sm text-stamp whitespace-nowrap",
								children: ["-₦", f.amount.toLocaleString()]
							})]
						}, i))
					})]
				})
			}),
			activeTab === "rules" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-paper border border-line rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-sm text-ink mb-2",
							children: "Electoral Act 2022 Statutory Penalties"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted mb-4",
							children: "In this simulation, committing electoral misconduct deducts statutory penalty fines from your wallet:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-xl bg-card border border-line flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: "Accepting Voter Bribes (Cash / Food)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted text-[11px]",
										children: "Section 121: Bribery and corrupt voter inducement"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-stamp",
										children: "-₦2,500 Fine"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-xl bg-card border border-line flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: "Displaying Marked Ballot in Public"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted text-[11px]",
										children: "Section 122: Violation of ballot secrecy"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-stamp",
										children: "-₦1,500 Fine"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-xl bg-card border border-line flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: "Signing Fake Result Petitions / False Claims"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted text-[11px]",
										children: "Section 124: False statutory declarations & affidavit forgery"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-stamp",
										children: "-₦3,000 Fine"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-xl bg-card border border-line flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: "Spreading Unverified Rumours / Fake Declaration"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted text-[11px]",
										children: "Section 120: Unauthorized announcement of election outcome"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-stamp",
										children: "-₦2,000 Fine"
									})]
								})
							]
						})
					]
				})
			})
		]
	});
}
var PARTIES = [
	{
		code: "APC",
		name: "All Progressives Congress",
		candidate: "Bola Ahmed Tinubu",
		symbol: "🧹",
		color: "#16a34a"
	},
	{
		code: "NDC",
		name: "Nigeria Democratic Congress",
		candidate: "Peter Obi",
		symbol: "👨‍👩‍👧",
		color: "#dc2626"
	},
	{
		code: "ADC",
		name: "African Democratic Congress",
		candidate: "Atiku Abubakar",
		symbol: "☂️",
		color: "#2563eb"
	},
	{
		code: "SDP",
		name: "Social Democratic Party",
		candidate: "Adewole Adebayo",
		symbol: "🧺",
		color: "#ea580c"
	},
	{
		code: "AAC",
		name: "Action Alliance Congress",
		candidate: "Omoyele Sowore",
		symbol: "🤝",
		color: "#9333ea"
	},
	{
		code: "APGA",
		name: "All Progressives Grand Alliance",
		candidate: "Peter Umeadi",
		symbol: "🐓",
		color: "#059669"
	}
];
function BallotBoothModal({ voterName, pollingUnit, avatar, onVoteCast, onClose }) {
	const [bvasState, setBvasState] = (0, import_react.useState)("bvas");
	const [selectedParty, setSelectedParty] = (0, import_react.useState)(null);
	const [fingerprintDone, setFingerprintDone] = (0, import_react.useState)(false);
	const [inkApplied, setInkApplied] = (0, import_react.useState)(false);
	const handleBvasAccredit = () => {
		setFingerprintDone(true);
		setTimeout(() => {
			setBvasState("cubicle");
		}, 1200);
	};
	const handleSelectParty = (party) => {
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
		if (selectedParty) onVoteCast(selectedParty);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-2xl bg-card border-2 border-line rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 sm:p-5 border-b border-line bg-gradient-to-r from-leaf-soft via-paper to-card flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-10 rounded-2xl bg-leaf text-paper flex items-center justify-center font-black",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vote, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono tracking-widest text-leaf uppercase font-bold",
							children: "INEC BVAS & BALLOT BOOTH"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-ink",
							children: "Official Ballot Paper (Form EC8A)"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-2 rounded-full hover:bg-line/40 text-muted hover:text-ink transition-colors",
						children: "✕"
					})]
				}),
				bvasState === "bvas" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8 text-center space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-20 rounded-full bg-leaf-soft text-leaf mx-auto flex items-center justify-center mb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fingerprint, { className: "size-10" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-2xl font-bold text-ink",
									children: "BVAS Biometric Accreditation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted mt-1",
									children: [
										"Presiding officer matches your PVC and scans your fingerprint on the BVAS tablet at",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-ink",
											children: pollingUnit.puName
										}),
										"."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-2xl bg-paper border border-line flex items-center justify-between max-w-sm mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted uppercase font-bold",
									children: "Voter Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-ink",
									children: voterName
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted uppercase font-bold",
									children: "PU Code"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-mono font-bold text-leaf",
									children: pollingUnit.puNumber
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleBvasAccredit,
							disabled: fingerprintDone,
							className: "px-8 py-3.5 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-bold text-sm shadow-xl shadow-leaf/25 flex items-center gap-2 mx-auto transition-transform active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fingerprint, { className: "size-5" }), fingerprintDone ? "BVAS Matched! Entering Voting Cubicle..." : "Place Thumb on BVAS Scanner"]
						}) })
					]
				}),
				bvasState === "cubicle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between bg-warn-soft/40 border border-warn/30 p-3.5 rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-ink font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4 text-warn shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Secret Voting Cubicle: Your mark is private. Do NOT show anyone." })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold px-2 py-0.5 rounded bg-leaf text-paper",
								children: "Accredited"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-wider text-muted mb-2",
							children: "Mark your preferred party symbol with your purple ink thumbprint:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
							children: PARTIES.map((party) => {
								const isSelected = selectedParty?.code === party.code;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => handleSelectParty(party),
									className: `p-3.5 rounded-2xl border-2 text-left transition-all relative ${isSelected ? "border-leaf bg-leaf-soft shadow-lg ring-2 ring-leaf/30" : "border-line bg-paper hover:border-leaf/40"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: party.symbol
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-ink text-paper",
												children: party.code
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-xs text-ink",
											children: party.candidate
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted truncate",
											children: party.name
										}),
										isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-2 right-2 size-5 rounded-full bg-leaf text-paper flex items-center justify-center text-xs font-bold",
											children: "✓"
										})
									]
								}, party.code);
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pt-3 border-t border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: selectedParty ? `Selected: ${selectedParty.code}` : "Click a party to thumbprint"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleThumbprint,
								disabled: !selectedParty,
								className: `px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 transition-all ${selectedParty ? "bg-stamp hover:bg-stamp/90 text-paper shadow-lg shadow-stamp/25 active:scale-95" : "bg-line text-muted cursor-not-allowed"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fingerprint, { className: "size-4" }), "Apply Indelible Thumbprint to Ballot"]
							})]
						})
					]
				}),
				bvasState === "stamped" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8 text-center space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-20 rounded-full bg-leaf text-paper mx-auto flex items-center justify-center shadow-xl shadow-leaf/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-widest text-leaf",
								children: "BALLOT SEALED & INDELIBLE INK APPLIED"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-2xl font-bold text-ink mt-1",
								children: "Drop Ballot in the Transparent Ballot Box"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted mt-2 max-w-sm mx-auto",
								children: [
									"You marked your ballot for ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
										selectedParty?.name,
										" (",
										selectedParty?.code,
										")"
									] }),
									". Fold along the crease and place it in the center box."
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-2xl bg-paper border border-line max-w-sm mx-auto flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-8 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs font-bold shadow-md",
								children: "INK"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-ink",
									children: "Purple Indelible Ink Marked"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted text-[11px]",
									children: "Prevents duplicate voting across other polling units."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleFinalCast,
							className: "px-8 py-3.5 rounded-full bg-leaf hover:bg-leaf/90 text-paper font-extrabold text-sm shadow-xl shadow-leaf/30 flex items-center gap-2 mx-auto active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vote, { className: "size-5" }), " Cast Ballot & Return to Board"]
						})
					]
				})
			]
		})
	});
}
function MoneySplashOverlay({ effects }) {
	if (effects.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 pointer-events-none z-50 overflow-hidden flex items-center justify-center",
		children: effects.map((eff) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex flex-col items-center justify-center animate-money-fly select-none drop-shadow-2xl ${eff.type === "gain" ? "text-emerald-400" : "text-red-500"}`,
			style: { transform: `translate(${eff.x || 0}px, ${eff.y || 0}px)` },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl animate-bounce mb-1",
					children: eff.type === "gain" ? "💸 ✨ ₦ ✨" : "🚨 🔻 ₦ 🔻"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `px-5 py-2.5 rounded-2xl border-2 font-mono font-black text-2xl sm:text-3xl shadow-2xl backdrop-blur-md ${eff.type === "gain" ? "bg-emerald-950/90 border-emerald-400 text-emerald-300 ring-4 ring-emerald-500/40" : "bg-red-950/90 border-red-500 text-red-300 ring-4 ring-red-500/40"}`,
					children: eff.type === "gain" ? `+₦${eff.amount.toLocaleString()}` : `-₦${eff.amount.toLocaleString()}`
				}),
				eff.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `mt-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${eff.type === "gain" ? "bg-emerald-900/80 text-emerald-200 border border-emerald-500/50" : "bg-red-900/80 text-red-200 border border-red-500/50"}`,
					children: eff.label
				})
			]
		}, eff.id))
	});
}
var ACTIVITY_SCENARIOS = {
	unit_arrival: {
		id: "unit_arrival",
		threatTitle: "Queue Touts & Line Disrupters",
		threatDescription: "Political touts are trying to push their friends to the front of the queue ahead of elders and pregnant women.",
		threatIcon: "👥",
		threatActors: [
			"🏃‍♂️",
			"📋",
			"😠"
		],
		repelledState: {
			message: "Order restored! You and other citizens insisted on sequential numbers, and the officer restored peace.",
			repelIcon: "🛡️",
			shieldType: "courage"
		},
		bribedState: {
			message: "Queue was disrupted and innocent voters were pushed back.",
			compromiseIcon: "⚠️"
		}
	},
	bvas_verification: {
		id: "bvas_verification",
		threatTitle: "Proxy PVC & Unverified Card Attempt",
		threatDescription: "A party agent is pressuring the officer to tick an absent voter who sent a borrowed PVC card.",
		threatIcon: "📱",
		threatActors: [
			"🕵️‍♂️",
			"💳",
			"👀"
		],
		repelledState: {
			message: "No BVAS, No Voting! You upheld the rule of law and stopped illegal proxy accreditation.",
			repelIcon: "🪪",
			shieldType: "law"
		},
		bribedState: {
			message: "Illegal proxy voting was permitted on the table.",
			compromiseIcon: "🚨"
		}
	},
	secret_cubicle: {
		id: "secret_cubicle",
		threatTitle: "Prying Eyes Behind Voting Screen",
		threatDescription: "Political agents standing behind the booth trying to inspect which candidate you mark on your paper.",
		threatIcon: "🗳️",
		threatActors: [
			"👀",
			"👥",
			"📵"
		],
		repelledState: {
			message: "Cubicle turned toward the wall! Your ballot remains completely private and protected.",
			repelIcon: "🛡️",
			shieldType: "integrity"
		},
		bribedState: {
			message: "Ballot was exposed to partisan observers.",
			compromiseIcon: "👁️"
		}
	},
	cash_vote_offer: {
		id: "cash_vote_offer",
		threatTitle: "Cash-for-Vote ₦10,000 Bribe",
		threatDescription: "A vote buyer is waving cash behind the building, offering money in exchange for photos of marked ballots.",
		threatIcon: "💵",
		threatActors: [
			"💵",
			"🤝",
			"🤫"
		],
		repelledState: {
			message: "Bribe rejected in public daylight! The vote-buyer panicked and fled from the polling station.",
			repelIcon: "⚡",
			shieldType: "integrity"
		},
		bribedState: {
			message: "Accepted cash for vote. Heavy Electoral Act penalty fine deducted.",
			compromiseIcon: "💸"
		}
	},
	thug_intimidation: {
		id: "thug_intimidation",
		threatTitle: "Thugs Attempting Ballot Box Snatching",
		threatDescription: "Four armed men on motorcycles revving engines to scatter the crowd and snatch the ballot box.",
		threatIcon: "🏍️",
		threatActors: [
			"🏍️",
			"⚔️",
			"🔥"
		],
		repelledState: {
			message: "Community solidarity! Citizens linked arms around the box, and the thugs were forced to flee.",
			repelIcon: "🛡️",
			shieldType: "crowd"
		},
		bribedState: {
			message: "Voters scattered in fear, leaving the ballot box vulnerable.",
			compromiseIcon: "🏃‍♂️"
		}
	},
	public_sorting: {
		id: "public_sorting",
		threatTitle: "Loud Count & Ballot Disqualification Dispute",
		threatDescription: "An agent is attempting to falsely cancel a valid vote for an opponent on the counting table.",
		threatIcon: "📢",
		threatActors: [
			"🤬",
			"📑",
			"📢"
		],
		repelledState: {
			message: "Vigilant public scrutiny! You demanded to see the paper, and the officer counted it correctly.",
			repelIcon: "👁️",
			shieldType: "law"
		},
		bribedState: {
			message: "A valid vote was wrongfully cancelled.",
			compromiseIcon: "❌"
		}
	},
	ec8a_irev_upload: {
		id: "ec8a_irev_upload",
		threatTitle: "Obstruction of IReV Cloud Upload",
		threatDescription: "A man is trying to stop the officer from photographing and transmitting the signed Form EC8A result to the online portal.",
		threatIcon: "📸",
		threatActors: [
			"📱",
			"🗣️",
			"🎭"
		],
		repelledState: {
			message: "IReV Transmission Successful! The official result was uploaded live to the cloud and posted on the wall.",
			repelIcon: "📸",
			shieldType: "law"
		},
		bribedState: {
			message: "Results were taken away without being uploaded, creating high risk of tampering.",
			compromiseIcon: "⚠️"
		}
	},
	collation_escort: {
		id: "collation_escort",
		threatTitle: "Collation Vehicle Diversion Squad",
		threatDescription: "An unmarked vehicle attempting to detour the official bus carrying results to the Ward Collation Hall.",
		threatIcon: "🚐",
		threatActors: [
			"🚗",
			"🕶️",
			"⚠️"
		],
		repelledState: {
			message: "Escort Convoy Secured! You followed the results vehicle safely inside the Collation Hall.",
			repelIcon: "🏆",
			shieldType: "crowd"
		},
		bribedState: {
			message: "Convoy was diverted and figures were altered during transit.",
			compromiseIcon: "🚨"
		}
	}
};
function DynamicActivityStage({ activityId, avatar, selectedChoiceId, isRepelled = false, isCompromised = false }) {
	const scenario = ACTIVITY_SCENARIOS[activityId] || ACTIVITY_SCENARIOS.unit_arrival;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full rounded-3xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 border-4 border-[#008751] p-4 sm:p-6 overflow-hidden shadow-2xl select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${isRepelled ? "bg-emerald-500/30" : isCompromised ? "bg-red-600/30" : "bg-amber-500/20"}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${isRepelled ? "bg-emerald-400/20" : isCompromised ? "bg-red-800/30" : "bg-emerald-500/10"}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-slate-700/80 pb-3 mb-4 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-red-500 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] sm:text-xs font-black tracking-widest text-amber-300 uppercase",
						children: "LIVE ELECTORAL ENCOUNTER"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-xs text-slate-300 font-bold px-3 py-1 rounded-full bg-slate-800 border border-slate-600",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Situation:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-amber-400",
						children: scenario.threatTitle
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-48 sm:h-56 flex items-center justify-between px-4 sm:px-12 border-2 border-dashed border-slate-700/60 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col items-center z-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `transition-all duration-500 rounded-full p-2 ${isRepelled ? "bg-emerald-500/30 ring-8 ring-emerald-400/50 scale-110 shadow-2xl shadow-emerald-500" : isCompromised ? "bg-red-600/20 ring-4 ring-red-500/40" : "bg-slate-800/40 ring-2 ring-emerald-400/20"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar3D, {
									avatar,
									size: 110,
									interactive: false,
									animated: true,
									actionState: isRepelled ? "celebrating" : isCompromised ? "fined" : "walking"
								})
							}),
							isRepelled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-3 -right-3 size-10 rounded-full bg-[#008751] text-white flex items-center justify-center text-xl shadow-2xl animate-spin border-2 border-emerald-300",
								children: "🛡️"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#008751] text-white tracking-wider shadow-md",
								children: "VOTER (YOU)"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col items-center justify-center text-center px-2 z-10",
						children: isRepelled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center animate-bounce",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl sm:text-5xl",
								children: "⚡ 💥 🛡️"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 text-xs font-black text-emerald-300 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-400",
								children: "THREAT REPELLED!"
							})]
						}) : isCompromised ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl animate-pulse",
								children: "💸 ⚠️ 🚨"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 text-xs font-black text-red-400 uppercase tracking-widest bg-red-950/80 px-3 py-1 rounded-full border border-red-500",
								children: "COMPROMISED!"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 text-2xl animate-pulse text-amber-400",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚡" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold text-slate-300",
										children: "Approaching"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚡" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-slate-400 font-medium",
								children: "Select the right civic action to repel"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative flex flex-col items-center z-20 transition-all duration-700 ${isRepelled ? "translate-x-32 opacity-20 rotate-45 scale-75" : isCompromised ? "translate-x-[-20px] scale-110" : "translate-x-0 animate-pulse"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 p-3 rounded-2xl bg-slate-900/90 border-2 border-red-500/60 shadow-xl",
							children: scenario.threatActors.map((actor, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-3xl sm:text-4xl transform transition-transform ${isRepelled ? "rotate-180 scale-50" : `hover:scale-125 animate-bounce delay-${idx * 100}`}`,
								children: actor
							}, idx))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-red-700 text-white tracking-wider shadow-md",
							children: isRepelled ? "REPELLED" : "APPROACHING THREAT"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 p-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-slate-300 font-medium",
					children: isRepelled ? scenario.repelledState.message : isCompromised ? scenario.bribedState.message : scenario.threatDescription
				}), isRepelled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-extrabold text-emerald-400 text-xs shrink-0 flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Integrity Solid!"]
				})]
			})
		]
	});
}
function SecurityRiggingModal({ currentActivityTitle, location, culprit = "Suspicious Political Agent", offence = "Electoral Act Sec 126: Attempted vote buying and electoral disruption", evidence = "Live photo/video eyewitness testimony captured at polling station", bountyAmount = 4e3, onReportDispatched, onClose }) {
	const [reportState, setReportState] = (0, import_react.useState)("compose");
	const [unitNotes, setUnitNotes] = (0, import_react.useState)("");
	const handleSendReport = () => {
		setReportState("dispatching");
		setTimeout(() => {
			setReportState("arrested");
			onReportDispatched({
				id: Math.random().toString(),
				culprit,
				offence,
				evidence: unitNotes.trim() ? `${evidence} - Details: "${unitNotes.trim()}"` : evidence,
				location,
				timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-NG", {
					hour: "2-digit",
					minute: "2-digit"
				}),
				bountyEarned: bountyAmount
			});
		}, 1800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg bg-slate-900 border-4 border-red-600 rounded-3xl p-6 shadow-2xl animate-in fade-in zoom-in-95 text-white space-y-5 relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-48 h-48 bg-red-600/15 rounded-full blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-red-500/40 pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-11 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-900/50 animate-pulse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono tracking-widest text-red-400 uppercase font-black",
							children: "INEC & JOINT SECURITY TASKFORCE (JTF)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-black text-white",
							children: "Emergency Electoral Rigging Report"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				reportState === "compose" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-2xl bg-red-950/60 border border-red-500/50 flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-5 text-amber-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-amber-300",
									children: "Live Electoral Offence Detected!"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-slate-300",
									children: [
										"Location: ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-white",
											children: location
										}),
										" (",
										currentActivityTitle,
										")"
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-xl bg-slate-800/90 border border-slate-700",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-slate-400 uppercase font-bold block",
										children: "Suspect / Offender"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold text-red-300",
										children: culprit
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-xl bg-slate-800/90 border border-slate-700",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-slate-400 uppercase font-bold block",
										children: "Statutory Infraction"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-slate-200",
										children: offence
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-xl bg-slate-800/90 border border-slate-700",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-slate-400 uppercase font-bold block",
										children: "Attached Eyewitness Evidence"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-300",
										children: evidence
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[10px] text-slate-400 uppercase font-bold block mb-1",
									children: "Additional Eyewitness Observations (Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "e.g. Suspect in black cap handing bundles near tree...",
									value: unitNotes,
									onChange: (e) => setUnitNotes(e.target.value),
									className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-red-500"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-emerald-400 font-bold block uppercase",
									children: "Bounty Reward"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-mono font-black text-emerald-300",
									children: ["+₦", bountyAmount.toLocaleString()]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleSendReport,
								className: "px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-red-900/60 transition-transform active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), " Dispatch Security Alert"]
							})]
						})
					]
				}),
				reportState === "dispatching" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-20 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto shadow-2xl animate-spin",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-10" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-xl font-black text-white",
						children: "Transmitting Encrypted Signal..."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-slate-400 mt-1 max-w-xs mx-auto",
						children: [
							"Alerting Joint Security Patrol (Police, EFCC, Civil Defence) to intercept suspect at ",
							location,
							"."
						]
					})] })]
				}),
				reportState === "arrested" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-6 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-20 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-2xl shadow-emerald-950/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500",
								children: "SITUATION INTERCEPTED & ARREST EXECUTED!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-2xl font-black text-white mt-2",
								children: "Perpetrators Apprehended!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-slate-300 mt-1 max-w-sm mx-auto leading-relaxed",
								children: [
									"Armed officers neutralized the rigging threat at ",
									location,
									". The suspect has been detained, and your civic vigilance was rewarded!"
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 max-w-xs mx-auto text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-emerald-400 font-bold block uppercase",
								children: "Civic Vigilance Bounty Paid"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-2xl font-black text-emerald-300",
								children: ["+₦", bountyAmount.toLocaleString()]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider mx-auto block shadow-xl shadow-emerald-950/50",
							children: "Return to Election Board"
						})
					]
				})
			]
		})
	});
}
var STORAGE_KEY_VOTER = "naija-voter-profile-2027";
var REQUIRED_CORRECT_VOTING_ACTIVITIES = 4;
function ElectionGame() {
	const [screen, setScreen] = (0, import_react.useState)("register");
	const [boardTileIdx, setBoardTileIdx] = (0, import_react.useState)(0);
	const [currentPhase, setCurrentPhase] = (0, import_react.useState)("voting_time");
	const [currentActivityIndex, setCurrentActivityIndex] = (0, import_react.useState)(0);
	const [log, setLog] = (0, import_react.useState)([]);
	const [flags, setFlags] = (0, import_react.useState)([]);
	const [pending, setPending] = (0, import_react.useState)(null);
	const [voter, setVoter] = (0, import_react.useState)(null);
	const [wallet, setWallet] = (0, import_react.useState)(15e3);
	const [inventory, setInventory] = (0, import_react.useState)([]);
	const [fines, setFines] = (0, import_react.useState)([]);
	const [fineAlert, setFineAlert] = (0, import_react.useState)(null);
	const [moneyEffects, setMoneyEffects] = (0, import_react.useState)([]);
	const [isMovingPawn, setIsMovingPawn] = (0, import_react.useState)(false);
	const [showBallotBooth, setShowBallotBooth] = (0, import_react.useState)(false);
	const [hasVoted, setHasVoted] = (0, import_react.useState)(false);
	const [castVoteParty, setCastVoteParty] = (0, import_react.useState)(null);
	const [showRiggingModal, setShowRiggingModal] = (0, import_react.useState)(false);
	const [securityReports, setSecurityReports] = (0, import_react.useState)([]);
	const [showLogoutConfirm, setShowLogoutConfirm] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const savedVoter = localStorage.getItem(STORAGE_KEY_VOTER);
			if (savedVoter) {
				const parsed = JSON.parse(savedVoter);
				setVoter(parsed);
				setWallet(parsed.walletBalance || 15e3);
				setScreen("board");
			}
		} catch {}
	}, []);
	const triggerMoneySplash = (amount, type, label) => {
		const newEff = {
			id: Math.random().toString(),
			amount,
			type,
			label
		};
		setMoneyEffects((prev) => [...prev, newEff]);
		setTimeout(() => {
			setMoneyEffects((prev) => prev.filter((e) => e.id !== newEff.id));
		}, 2400);
	};
	const flagSet = (0, import_react.useMemo)(() => new Set(flags), [flags]);
	const score = totals(log);
	const place = yourPlace(score.points, score.integrity);
	const title = standing(score.points, score.integrity);
	const activeActivities = currentPhase === "voting_time" ? VOTING_TIME_ACTIVITIES : POST_VOTING_ACTIVITIES;
	const currentActivity = activeActivities[currentActivityIndex] || activeActivities[0];
	wardBoard(score.points, score.integrity);
	const correctVotingActivitiesCount = (0, import_react.useMemo)(() => {
		const votingLogs = log.filter((l) => l.phase === "voting_time");
		return new Set(votingLogs.filter((l) => l.points >= 10 && l.integrity > 0).map((l) => l.activityId)).size;
	}, [log]);
	const isVoteEligible = correctVotingActivitiesCount >= REQUIRED_CORRECT_VOTING_ACTIVITIES && !hasVoted;
	const isCurrentActivityRiggingRelated = (0, import_react.useMemo)(() => {
		if (!currentActivity) return false;
		return !!currentActivity.riggingScenario;
	}, [currentActivity]);
	const handleRegisterComplete = (newVoter) => {
		setVoter(newVoter);
		setWallet(newVoter.walletBalance);
		try {
			localStorage.setItem(STORAGE_KEY_VOTER, JSON.stringify(newVoter));
		} catch {}
		triggerMoneySplash(15e3, "gain", "PVC Collected & Civic Budget Granted");
		setScreen("board");
	};
	const handleLogout = () => {
		try {
			localStorage.removeItem(STORAGE_KEY_VOTER);
		} catch {}
		setVoter(null);
		setLog([]);
		setFlags([]);
		setPending(null);
		setCurrentActivityIndex(0);
		setCurrentPhase("voting_time");
		setBoardTileIdx(0);
		setFines([]);
		setInventory([]);
		setWallet(15e3);
		setHasVoted(false);
		setCastVoteParty(null);
		setShowLogoutConfirm(false);
		setScreen("register");
	};
	const movePawnSteps = (steps) => {
		setIsMovingPawn(true);
		let count = 0;
		let current = boardTileIdx;
		const interval = setInterval(() => {
			current = (current + 1) % NAIJA_BOARD_TILES.length;
			setBoardTileIdx(current);
			count++;
			if (current === 0) {
				setWallet((w) => w + 3e3);
				triggerMoneySplash(3e3, "gain", "Passed Gate: Civic Allowance");
			}
			if (count >= steps) {
				clearInterval(interval);
				setIsMovingPawn(false);
				const landedTile = NAIJA_BOARD_TILES[current];
				handleLandedTile(landedTile, current);
			}
		}, 280);
	};
	const handleRollDice = (d1, d2, total) => {
		if (isMovingPawn) return;
		movePawnSteps(total);
	};
	const handleLandedTile = (tile, index) => {
		if (tile.id === "cast_ballot_tile") {
			if (isVoteEligible) setShowBallotBooth(true);
			else triggerMoneySplash(0, "loss", `Need ${REQUIRED_CORRECT_VOTING_ACTIVITIES - correctVotingActivitiesCount} more correct voting actions to vote!`);
			return;
		}
		if (tile.type === "property" && typeof tile.activityIndex === "number") {
			if (currentPhase === "voting_time") {
				const mappedIdx = Math.min(tile.activityIndex, VOTING_TIME_ACTIVITIES.length - 1);
				setCurrentActivityIndex(mappedIdx);
			} else {
				const postIdx = Math.max(0, tile.activityIndex - 5);
				setCurrentActivityIndex(Math.min(postIdx, POST_VOTING_ACTIVITIES.length - 1));
			}
			setTimeout(() => {
				setScreen("decision");
			}, 400);
		} else if (tile.type === "chance") {
			if (Math.random() > .4) {
				const reward = 3e3;
				setWallet((w) => w + reward);
				triggerMoneySplash(reward, "gain", "Civic Observer Transport Allowance!");
			} else {
				const fine = 1500;
				setWallet((w) => Math.max(0, w - fine));
				triggerMoneySplash(fine, "loss", "Fuel & Queue Logistics Expense");
			}
		} else if (tile.id === "jail" || tile.id === "arrest_corner") {
			setBoardTileIdx(4);
			setWallet((w) => Math.max(0, w - 2e3));
			triggerMoneySplash(2e3, "loss", "Electoral Offence Investigation Fine");
		}
	};
	const handlePurchaseItem = (item) => {
		if (wallet < item.price) return false;
		setWallet((w) => w - item.price);
		setInventory((inv) => [...inv, item.id]);
		triggerMoneySplash(item.price, "loss", `Bought ${item.name}`);
		return true;
	};
	const handleTopUp = (amount) => {
		setWallet((w) => w + amount);
		triggerMoneySplash(amount, "gain", "Civic Wallet Top-up");
	};
	const handlePickChoice = (choice) => {
		if (!currentActivity) return;
		setPending(choice);
		let fineAmount = choice.fineMoney || 0;
		let rewardAmount = choice.rewardMoney || 0;
		if (fineAmount > 0) {
			const fineRecord = {
				id: Math.random().toString(),
				amount: fineAmount,
				reason: `Electoral Act Offence: ${choice.label}`,
				code: "SEC-OFFENCE",
				timestamp: `Station: ${currentActivity.title}`
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
		setLog((current) => [...current, {
			activityId: currentActivity.id,
			choiceId: choice.id,
			title: currentActivity.title,
			phase: currentActivity.phase,
			label: choice.label,
			points: choice.points,
			integrity: choice.integrity,
			courage: choice.courage,
			result: choice.result
		}]);
		if (choice.flag) setFlags((current) => [...current, choice.flag]);
		setScreen("beat");
	};
	const handleAdvanceFromBeat = () => {
		setPending(null);
		setFineAlert(null);
		const newCorrectCount = new Set([...log, pending ? {
			...pending,
			activityId: currentActivity.id,
			phase: currentActivity.phase
		} : null].filter((l) => !!l && l.phase === "voting_time" && l.points >= 10 && l.integrity > 0).map((l) => l.activityId)).size;
		if (currentPhase === "voting_time" && newCorrectCount >= REQUIRED_CORRECT_VOTING_ACTIVITIES && !hasVoted) {
			setShowBallotBooth(true);
			setScreen("board");
			return;
		}
		if (currentPhase === "post_voting_collation" && log.filter((l) => l.phase === "post_voting_collation").length >= POST_VOTING_ACTIVITIES.length) {
			setScreen("result");
			return;
		}
		setCurrentActivityIndex((idx) => (idx + 1) % activeActivities.length);
		setScreen("board");
	};
	const handleVoteCastComplete = (party) => {
		setCastVoteParty(party);
		setHasVoted(true);
		setShowBallotBooth(false);
		triggerMoneySplash(5e3, "gain", "Ballot Cast! Phase 2: Collation Escort Unlocked!");
		setCurrentPhase("post_voting_collation");
		setCurrentActivityIndex(0);
		setScreen("board");
	};
	const handleSecurityReportDispatched = (report) => {
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
		setWallet(voter?.walletBalance || 15e3);
		setHasVoted(false);
		setCastVoteParty(null);
		setScreen("board");
	};
	const currentAvatar = voter?.avatar || AVATAR_PRESETS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen w-full max-w-6xl px-3 py-4 sm:px-6 sm:py-6 select-none font-sans text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneySplashOverlay, { effects: moneyEffects }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-4 flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-3xl bg-slate-900/95 border-2 border-emerald-500/50 text-white shadow-2xl backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-11 rounded-2xl bg-gradient-to-tr from-[#008751] to-emerald-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg border border-white/20",
						children: "₦"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-black tracking-widest text-emerald-300 uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30",
							children: ["NAIJA ELECTION 2027 · ", currentPhase === "voting_time" ? `PHASE 1 (${correctVotingActivitiesCount}/4 CORRECT TO VOTE)` : "PHASE 2 (COLLATION GUARDING)"]
						}), voter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-emerald-300 font-mono",
							children: voter.pollingUnit.puNumber
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-xl sm:text-2xl font-black text-white leading-tight",
						children: "Polling Unit Day: Real-Time Election & Collation Game"
					})] })]
				}), voter && screen !== "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-3 py-1.5 rounded-2xl bg-[#08281a] border-2 border-[#008751] text-emerald-300 font-mono font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["₦", wallet.toLocaleString()] })]
						}),
						!hasVoted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								if (isVoteEligible) setShowBallotBooth(true);
								else triggerMoneySplash(0, "loss", `Roll dice & complete ${REQUIRED_CORRECT_VOTING_ACTIVITIES - correctVotingActivitiesCount} more correct actions to vote!`);
							},
							className: `px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-lg transition-all ${isVoteEligible ? "bg-red-600 hover:bg-red-500 text-white animate-bounce shadow-red-900/60 ring-2 ring-amber-300" : "bg-slate-800 text-slate-400 border border-slate-700"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vote, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isVoteEligible ? "Cast Ballot (Ready!)" : `Vote (${correctVotingActivitiesCount}/4 Correct)` })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-3 py-1.5 rounded-xl bg-emerald-900/80 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Voted (",
								castVoteParty?.code,
								")"
							] })]
						}),
						isCurrentActivityRiggingRelated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setShowRiggingModal(true),
							className: "px-3 py-1.5 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-bold flex items-center gap-1 shadow-lg shadow-red-950/50 active:scale-95 border border-red-400 animate-pulse",
							title: "Report Rigging & Electoral Infractions to Joint Security Taskforce",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "size-3.5 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Report Rigging"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setScreen("market"),
							className: `px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition-all ${screen === "market" ? "bg-[#008751] text-white border-emerald-400 font-black" : "bg-slate-800 hover:bg-slate-700 border-slate-600 text-white"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline",
								children: "Market"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 pl-2 border-l border-slate-700",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar3D, {
									avatar: currentAvatar,
									size: 32,
									interactive: false,
									animated: false
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setShowLogoutConfirm(true),
								title: "Log out and Register New Voter",
								className: "p-1.5 rounded-xl bg-red-950/80 hover:bg-red-900 border border-red-500/50 text-red-300 transition-colors shadow-sm flex items-center gap-1 text-[11px] font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden lg:inline",
									children: "Logout"
								})]
							})]
						})
					]
				})]
			}),
			screen === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoterRegistrationModal, { onComplete: handleRegisterComplete }),
			screen === "board" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-2 border-emerald-500/40 flex flex-wrap items-center justify-between gap-3 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-9 rounded-xl bg-[#008751] flex items-center justify-center text-white font-bold text-lg",
							children: currentPhase === "voting_time" ? "1️⃣" : "2️⃣"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-bold text-sm flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentPhase === "voting_time" ? "Phase 1: Voting Hours (Accreditation & Queue Defense)" : "Phase 2: Public Count, IReV Transmission & Collation Security" }), currentPhase === "voting_time" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 font-extrabold font-mono",
								children: [correctVotingActivitiesCount, "/4 Correct Actions"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-300",
							children: currentPhase === "voting_time" ? isVoteEligible ? "🎉 4 Correct Activities Achieved! You are now eligible to cast your vote in the Ballot Booth!" : `Continue rolling the dice and selecting the right civic choices until you reach ${REQUIRED_CORRECT_VOTING_ACTIVITIES} correct actions!` : "Follow your casted votes to the collation centre, verify results, and report any rigging!"
						})] })]
					}), isVoteEligible && !hasVoted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setShowBallotBooth(true),
						className: "px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg animate-pulse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vote, { className: "size-4" }), " Cast Your Vote Now!"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RealMonopolyBoard, {
					currentTileIndex: boardTileIdx,
					playerAvatar: currentAvatar,
					playerName: voter?.fullName || "Player",
					walletBalance: wallet,
					isVoteEligible,
					correctAnswersCount: correctVotingActivitiesCount,
					hasVoted,
					phase: currentPhase,
					showRiggingButton: isCurrentActivityRiggingRelated,
					onTileClick: handleLandedTile,
					onRollDice: handleRollDice,
					onOpenMarket: () => setScreen("market"),
					onOpenBallot: () => {
						if (isVoteEligible) setShowBallotBooth(true);
						else triggerMoneySplash(0, "loss", `Achieve ${REQUIRED_CORRECT_VOTING_ACTIVITIES - correctVotingActivitiesCount} more correct actions to vote!`);
					},
					onTriggerSecurityReport: () => setShowRiggingModal(true),
					isMovingAvatar: isMovingPawn
				})]
			}),
			screen === "decision" && currentActivity && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl mx-auto space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setScreen("board"),
							className: "text-xs font-bold text-white bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-600 flex items-center gap-1.5",
							children: "← Back to Election Board"
						}), isCurrentActivityRiggingRelated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setShowRiggingModal(true),
							className: "px-3 py-1.5 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-black flex items-center gap-1.5 shadow-lg border border-red-400 active:scale-95 animate-pulse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "size-3.5 text-amber-300" }), "Report Rigging to Police & EFCC"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DynamicActivityStage, {
						activityId: currentActivity.id,
						avatar: currentAvatar,
						isRepelled: false,
						isCompromised: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-3xl border-4 border-slate-900 bg-white p-6 sm:p-8 shadow-2xl relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-[#008751] -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 p-4 text-center text-white border-b-4 border-black",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono uppercase tracking-widest text-emerald-100",
										children: currentPhase === "voting_time" ? "VOTING TIME ENCOUNTER" : "POST-VOTING COLLATION & COUNT"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl sm:text-3xl font-black",
										children: currentActivity.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-emerald-100 mt-0.5",
										children: currentActivity.place
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-slate-700 leading-relaxed",
									children: currentActivity.summary
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base text-slate-900 font-bold border-t border-slate-200 pt-3",
									children: currentActivity.lead(flagSet)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-extrabold uppercase tracking-wider text-slate-600",
									children: "Choose your action (Select the correct option to build toward your 4 required voting actions!):"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3",
									children: currentActivity.choices(flagSet).map((choice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handlePickChoice(choice),
										className: "p-4 rounded-2xl border-2 border-slate-300 hover:border-[#008751] hover:bg-emerald-50 text-left transition-all active:scale-[0.99] group shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#008751]",
												children: choice.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [choice.rewardMoney && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs font-mono font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300",
													children: ["+₦", choice.rewardMoney.toLocaleString()]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs font-black px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-300",
													children: [
														"+",
														choice.points,
														" pts"
													]
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-slate-500 leading-relaxed",
											children: choice.detail
										})]
									}, choice.id))
								})]
							})
						]
					})
				]
			}),
			screen === "beat" && pending && currentActivity && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl mx-auto space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DynamicActivityStage, {
					activityId: currentActivity.id,
					avatar: currentAvatar,
					isRepelled: !fineAlert && pending.integrity >= 0,
					isCompromised: !!fineAlert
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-3xl border-4 border-slate-900 bg-white p-6 sm:p-8 shadow-2xl",
					children: [
						fineAlert && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 p-4 rounded-2xl bg-red-600 text-white shadow-xl flex items-start gap-3 animate-bounce",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-6 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs font-black uppercase px-2 py-0.5 rounded bg-black/40",
									children: "STATUTORY FINE INCURRED"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
									className: "text-sm",
									children: ["-₦", fineAlert.amount.toLocaleString()]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs mt-1 text-red-100",
								children: fineAlert.reason
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-slate-200 pb-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-black tracking-widest text-[#008751] uppercase",
								children: ["Recorded Civic Action · ", currentActivity.title]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-mono font-bold text-slate-600",
								children: ["Tile #", boardTileIdx]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-16 rounded-2xl bg-slate-100 border border-slate-300 overflow-hidden flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar3D, {
									avatar: currentAvatar,
									size: 60,
									interactive: false,
									animated: false,
									actionState: fineAlert ? "fined" : "celebrating"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-black text-slate-900",
								children: pending.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-500",
								children: currentActivity.place
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-slate-800 font-semibold",
								children: pending.result
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid grid-cols-3 gap-3 text-center my-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-slate-100 border border-slate-200 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[10px] font-black tracking-wider text-slate-500 uppercase",
										children: "Points"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-display text-xl font-black text-slate-900",
										children: ["+", pending.points]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-slate-100 border border-slate-200 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[10px] font-black tracking-wider text-slate-500 uppercase",
										children: "Integrity"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: `font-display text-xl font-black ${pending.integrity >= 0 ? "text-emerald-700" : "text-red-600"}`,
										children: signed(pending.integrity)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-slate-100 border border-slate-200 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[10px] font-black tracking-wider text-slate-500 uppercase",
										children: "Correct Actions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-display text-lg font-black text-emerald-800",
										children: currentPhase === "voting_time" ? `${correctVotingActivitiesCount}/4` : "Phase 2"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pt-4 border-t border-slate-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-slate-500",
								children: currentPhase === "voting_time" ? isVoteEligible ? "✨ Ready to Vote! Stepping into Ballot Booth..." : `Achieve ${REQUIRED_CORRECT_VOTING_ACTIVITIES - correctVotingActivitiesCount} more correct action(s) to vote` : `Phase 2 Collation Progress: ${log.filter((l) => l.phase === currentPhase).length} encounters`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleAdvanceFromBeat,
								className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#008751] hover:bg-emerald-700 font-black text-sm text-white shadow-xl shadow-emerald-950/40 active:scale-95 transition-transform",
								children: [isVoteEligible && !hasVoted ? "Enter Ballot Booth to Vote 👉" : currentPhase === "post_voting_collation" && log.filter((l) => l.phase === "post_voting_collation").length >= POST_VOTING_ACTIVITIES.length ? "See Final Official Declaration 🏆" : "Roll Dice Again on Board", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
							})]
						})
					]
				})]
			}),
			screen === "market" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setScreen("board"),
						className: "text-xs font-bold text-white bg-slate-800/80 hover:bg-slate-700 px-3.5 py-1.5 rounded-lg border border-slate-600 flex items-center gap-1.5",
						children: "← Back to Election Board"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-emerald-300",
						children: "Buy pure water, glucose snacks, power banks and observer kits to sustain your election journey!"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CivicEconomyHub, {
					walletBalance: wallet,
					inventory,
					onPurchase: handlePurchaseItem,
					fines,
					onTopUp: handleTopUp
				})]
			}),
			screen === "result" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 max-w-4xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-3xl border-4 border-emerald-600 bg-white p-6 sm:p-8 shadow-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-20 rounded-full bg-[#008751] text-white mx-auto flex items-center justify-center shadow-xl shadow-emerald-900/40 mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300",
							children: "OFFICIAL NAIJA CIVIC VICTORY 2027"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-black text-slate-900 mt-3",
							children: voter?.fullName || "Player"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-bold text-[#008751] mt-1",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-slate-500 mt-1",
							children: [
								"Polled at ",
								voter?.pollingUnit.puName,
								" (",
								voter?.pollingUnit.puNumber,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto my-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-slate-50 border border-slate-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase text-slate-500",
										children: "Ward Rank"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl font-black text-slate-900",
										children: placeOrdinal(place)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-slate-50 border border-slate-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase text-slate-500",
										children: "Points"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-2xl font-black text-emerald-700",
										children: ["+", score.points]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-slate-50 border border-slate-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase text-slate-500",
										children: "Integrity"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `font-display text-2xl font-black ${score.integrity >= 0 ? "text-emerald-700" : "text-red-600"}`,
										children: signed(score.integrity)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-slate-50 border border-slate-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase text-slate-500",
										children: "Final Wallet"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-xl font-black text-emerald-800",
										children: ["₦", wallet.toLocaleString()]
									})]
								})
							]
						}),
						castVoteParty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-100 border border-slate-300 text-xs font-bold text-slate-900 mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vote, { className: "size-4 text-emerald-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Legitimately Cast Ballot for: ",
								castVoteParty.name,
								" (",
								castVoteParty.code,
								")"
							] })]
						}),
						securityReports.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 p-3 rounded-2xl bg-red-50 border border-red-300 text-left max-w-lg mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-bold text-red-800 flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "size-4" }),
									" Rigging Reports Dispatched to Security (",
									securityReports.length,
									"):"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-1 text-[11px] text-slate-700 list-disc list-inside",
								children: securityReports.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									r.culprit,
									" apprehended for ",
									r.offence,
									" (Earned +₦",
									r.bountyEarned.toLocaleString(),
									")"
								] }, i))
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-4 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleReplay,
						className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#008751] hover:bg-emerald-700 text-white font-black text-sm shadow-xl active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Play Naija Election Board Again"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setShowLogoutConfirm(true),
						className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-800 hover:bg-red-700 text-white font-bold text-sm shadow-xl active:scale-95 border border-red-500/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Logout & Register New Voter"]
					})]
				})]
			}),
			showBallotBooth && voter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BallotBoothModal, {
				voterName: voter.fullName,
				pollingUnit: voter.pollingUnit,
				avatar: currentAvatar,
				onVoteCast: handleVoteCastComplete,
				onClose: () => setShowBallotBooth(false)
			}),
			showRiggingModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecurityRiggingModal, {
				currentActivityTitle: currentActivity.title,
				location: currentActivity.place,
				culprit: currentActivity.riggingScenario?.culprit,
				offence: currentActivity.riggingScenario?.offence,
				evidence: currentActivity.riggingScenario?.evidence,
				bountyAmount: currentActivity.riggingScenario?.reward || 4e3,
				onReportDispatched: handleSecurityReportDispatched,
				onClose: () => setShowRiggingModal(false)
			}),
			showLogoutConfirm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md bg-card border-2 border-red-500/40 rounded-3xl p-6 shadow-2xl animate-in fade-in zoom-in-95 text-center space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-16 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center shadow-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-black text-slate-900",
							children: "Log Out Voter Profile?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-slate-600 mt-1.5 leading-relaxed",
							children: [
								"Logging out will clear your current active voter session (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: voter?.fullName }),
								") and return to the registration portal to register a new citizen or select a new Polling Unit."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShowLogoutConfirm(false),
								className: "px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleLogout,
								className: "px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-lg shadow-red-900/30 active:scale-95",
								children: "Confirm Logout"
							})]
						})
					]
				})
			})
		]
	});
}
function signed(value) {
	if (value > 0) return `+${value}`;
	return String(value);
}
function placeOrdinal(place) {
	const mod = place % 100;
	if (mod >= 11 && mod <= 13) return `${place}th`;
	switch (place % 10) {
		case 1: return `${place}st`;
		case 2: return `${place}nd`;
		case 3: return `${place}rd`;
		default: return `${place}th`;
	}
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElectionGame, {});
}
//#endregion
export { Home as component };
