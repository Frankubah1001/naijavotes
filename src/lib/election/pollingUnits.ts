export interface PollingUnitData {
  state: string;
  lga: string;
  ward: string;
  puNumber: string;
  puName: string;
  registeredVoters: number;
}

export const STATES_AND_LGAS: Record<string, { lgas: string[]; code: string }> = {
  Lagos: {
    code: "LA",
    lgas: ["Ikeja", "Alimosho", "Lagos Island", "Surulere", "Eti-Osa", "Kosofe", "Oshodi-Isolo", "Ikorodu", "Ajeromi-Ifelodun"],
  },
  Abuja_FCT: {
    code: "FC",
    lgas: ["Abuja Municipal (AMAC)", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Abaji"],
  },
  Kano: {
    code: "KN",
    lgas: ["Kano Municipal", "Fagge", "Dala", "Gwale", "Tarauni", "Nassarawa", "Ungogo", "Kumbotso"],
  },
  Rivers: {
    code: "RV",
    lgas: ["Port Harcourt", "Obio-Akpor", "Eleme", "Ikwerre", "Oyigbo", "Degema", "Bonny"],
  },
  Anambra: {
    code: "AN",
    lgas: ["Awka South", "Onitsha North", "Onitsha South", "Nnewi North", "Aguata", "Idemili North"],
  },
  Oyo: {
    code: "OY",
    lgas: ["Ibadan North", "Ibadan South-West", "Ibadan North-East", "Ogbomoso North", "Oyo East"],
  },
  Kaduna: {
    code: "KD",
    lgas: ["Kaduna North", "Kaduna South", "Chikun", "Igabi", "Zaria", "Sabon Gari"],
  },
  Enugu: {
    code: "EN",
    lgas: ["Enugu North", "Enugu South", "Enugu East", "Nsukka", "Udi", "Oji River"],
  },
};

export const WARDS_BY_LGA: Record<string, string[]> = {
  "Ikeja": ["Ward 01 - Alausa / Secretariat", "Ward 02 - Ikeja GRA", "Ward 03 - Computer Village / Airport Rd", "Ward 04 - Anifowoshe"],
  "Alimosho": ["Ward 01 - Egbeda / Akowonjo", "Ward 02 - Idumu / Isheri", "Ward 03 - Ipaja North", "Ward 04 - Igando"],
  "Surulere": ["Ward 01 - Adeniran Ogunsanya", "Ward 02 - Stadium / Ojuelegba", "Ward 03 - Aguda", "Ward 04 - Ijesha"],
  "Abuja Municipal (AMAC)": ["Ward 01 - City Centre / Garki", "Ward 02 - Wuse II / Maitama", "Ward 03 - Gwarinpa / Utako", "Ward 04 - Asokoro"],
  "Kano Municipal": ["Ward 01 - Kankarofi / Palace", "Ward 02 - Shahuchi", "Ward 03 - Zango", "Ward 04 - Yakasai"],
  "Port Harcourt": ["Ward 01 - Old GRA / Township", "Ward 02 - Diobu Mile 1", "Ward 03 - Diobu Mile 3", "Ward 04 - Borokiri"],
  "Awka South": ["Ward 01 - Awka I (Amaenyi)", "Ward 02 - Awka II (Ifite)", "Ward 03 - Okpuno", "Ward 04 - Amawbia"],
  "Ibadan North": ["Ward 01 - UI / Agbowo", "Ward 02 - Bodija", "Ward 03 - Mokola", "Ward 04 - Sango"],
};

export function generatePollingUnits(state: string, lga: string, ward: string): PollingUnitData[] {
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
      registeredVoters: 750,
    },
    {
      state,
      lga,
      ward,
      puNumber: `PU-${code}/${lgaClean}/${wardNum}/002`,
      puName: `Town Hall / Civic Centre Open Field (${ward})`,
      registeredVoters: 620,
    },
    {
      state,
      lga,
      ward,
      puNumber: `PU-${code}/${lgaClean}/${wardNum}/003`,
      puName: `Health Centre Verandah, Market Road (${ward})`,
      registeredVoters: 840,
    },
    {
      state,
      lga,
      ward,
      puNumber: `PU-${code}/${lgaClean}/${wardNum}/004`,
      puName: `Opposite Chief's Palace / Ancient Tree (${ward})`,
      registeredVoters: 510,
    },
  ];
}
