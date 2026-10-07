export interface AvatarStyle {
  id: string;
  name: string;
  gender: "male" | "female" | "neutral";
  skinTone: string;
  hairColor: string;
  outfitColor: string;
  capColor?: string;
  accessory: "none" | "glasses" | "cap" | "headwrap" | "agbada" | "hijab";
  description: string;
}

export const AVATAR_PRESETS: AvatarStyle[] = [
  {
    id: "patriot_agbada",
    name: "Emeka (Civic Advocate)",
    gender: "male",
    skinTone: "#8D5524",
    hairColor: "#1A1A1A",
    outfitColor: "#1B5C3A", // Emerald Green
    capColor: "#FFFFFF",
    accessory: "agbada",
    description: "Proud voter in traditional green & white attire",
  },
  {
    id: "youth_leader",
    name: "Amina (Youth Mobilizer)",
    gender: "female",
    skinTone: "#C68642",
    hairColor: "#1A1A1A",
    outfitColor: "#9D2C24", // Crimson Stamp
    accessory: "hijab",
    description: "Determined community monitor with headwrap",
  },
  {
    id: "tech_observer",
    name: "Tunde (Tech Monitor)",
    gender: "male",
    skinTone: "#E0AC69",
    hairColor: "#2A201A",
    outfitColor: "#2563EB", // Royal Blue
    accessory: "glasses",
    description: "Equipped with smartphone verifying results",
  },
  {
    id: "market_leader",
    name: "Mama Chinyere (Market Leader)",
    gender: "female",
    skinTone: "#5C3818",
    hairColor: "#1A1A1A",
    outfitColor: "#D97706", // Gold / Amber
    accessory: "headwrap",
    description: "Experienced community pillar guarding the queue",
  },
  {
    id: "corper_officer",
    name: "Corper Halima (NYSC Official)",
    gender: "female",
    skinTone: "#A06835",
    hairColor: "#1A1A1A",
    outfitColor: "#15803D", // Khaki Green
    accessory: "cap",
    capColor: "#166534",
    description: "Neutral presiding officer upholding the process",
  },
];
