export type MedalStanding = {
  id: number;
  name: string;
  gold: number;
  silver: number;
  bronze: number;
};

export const medalStandings: MedalStanding[] = [
  { id: 1, name: 'Sekretariat Jenderal', gold: 1, silver: 5, bronze: 2 },
  { id: 2, name: 'Inspektorat Jenderal', gold: 2, silver: 0, bronze: 2 },
  { id: 3, name: 'Direktorat Jenderal Kesehatan Primer Komunitas', gold: 3, silver: 1, bronze: 2 },
  { id: 4, name: 'Direktorat Jenderal Kesehatan Lanjutan', gold: 1, silver: 3, bronze: 1 },
  { id: 5, name: 'Direktorat Jenderal Penanggulangan Penyakit', gold: 4, silver: 1, bronze: 4 },
  { id: 6, name: 'Direktorat Jenderal Farmasi dan Alat Kesehatan', gold: 0, silver: 1, bronze: 1 },
  { id: 7, name: 'Direktorat Jenderal Sumber Daya Manusia Kesehatan', gold: 1, silver: 3, bronze: 0 },
  { id: 8, name: 'Badan Kebijakan Pembangunan Kesehatan', gold: 2, silver: 0, bronze: 2 },
];
