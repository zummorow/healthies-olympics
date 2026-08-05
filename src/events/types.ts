// ============================================================
// SHARED TYPES — digunakan oleh semua file event
// ============================================================

export type TeamSlot = {
  name: string;       // Nama tim
  score?: string;     // Skor / waktu (opsional)
  isWinner?: boolean; // Apakah ini pemenang matchup?
};

export type BracketMatch = {
  team1: TeamSlot;
  team2: TeamSlot;
};

export type BracketRound = {
  label: string;  // "QF1", "QF2", "SF1", dll.
  match: BracketMatch;
};

export type GroupBracketSection = {
  label: string;
  teams: TeamSlot[]; // 4 tim per grup
  winner?: TeamSlot;
};

export type GroupBracketData = {
  title: string;
  subtitle: string;
  leftTop: GroupBracketSection;
  leftBottom: GroupBracketSection;
  rightTop: GroupBracketSection;
  rightBottom: GroupBracketSection;
};

export type EventData = {
  discipline: string;        // Nomor disiplin "06"
  title: string;             // Nama event besar
  description: string;       // Deskripsi singkat
  rulesUrl?: string;         // Link download aturan
  bracketType?: 'standard' | 'group-16';
  bracketTitle: string;      // "8-TEAM CORPORATE RELAY"
  groupBracket?: GroupBracketData;
  leftBracket: BracketRound[];   // Sisi kiri bracket (QF1, QF2)
  rightBracket: BracketRound[];  // Sisi kanan bracket (QF3, QF4)
  sf1: BracketMatch;         // Semifinal 1
  sf2: BracketMatch;         // Semifinal 2
  final: BracketMatch;       // Final
  thirdPlace: BracketMatch;  // Perebutan juara 3
  infoImage?: string;        // URL gambar pada section info
  infoTitle: string;
  infoText: string;
  infoPoints: string[];      // Bullet poin format / aturan
};

// ── Helper: buat placeholder bracket standar 8-tim ─────────
export function buildDefaultEventData(
  discipline: string,
  title: string,
  description: string,
): EventData {
  const placeholder = (label: string) => ({
    label,
    match: {
      team1: { name: 'TBA', score: undefined },
      team2: { name: 'TBA', score: undefined },
    },
  });
  return {
    discipline,
    title: title.toUpperCase(),
    description,
    bracketTitle: `8-TEAM ${title.toUpperCase()}`,
    leftBracket: [placeholder('QF1'), placeholder('QF2')],
    rightBracket: [placeholder('QF3'), placeholder('QF4')],
    sf1: { team1: { name: 'Winner QF1' }, team2: { name: 'Winner QF2' } },
    sf2: { team1: { name: 'Winner QF3' }, team2: { name: 'Winner QF4' } },
    final: { team1: { name: 'Winner SF1' }, team2: { name: 'Winner SF2' } },
    thirdPlace: { team1: { name: 'Loser SF1' }, team2: { name: 'Loser SF2' } },
    infoTitle: title.toUpperCase(),
    infoText: description,
    infoPoints: ['Info Coming Soon'],
  };
}
