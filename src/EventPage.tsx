import { motion } from 'framer-motion';

// ============================================================
// DATA — mudah diupdate untuk setiap event/olahraga
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

export type EventData = {
  discipline: string;        // Nomor disiplin "06"
  title: string;             // Nama event besar
  description: string;       // Deskripsi singkat
  rulesUrl?: string;         // Link download aturan
  bracketTitle: string;      // "8-TEAM CORPORATE RELAY"
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

// ── DAFTAR EVENT — tambah / edit di sini ────────────────────
export const eventsData: Record<string, EventData> = {
  'mendadak-basket': {
    discipline: '06',
    title: 'MENDADAK BASKET',
    description:
      'Permainan basket yang mengandalkan kecepatan, akurasi, dan strategi tim. Siapa yang paling cepat mencetak poin akan menjadi juara.',
    rulesUrl: '#',
    bracketTitle: '8-TEAM CORPORATE RELAY',
    leftBracket: [
      {
        label: 'QF1',
        match: {
          team1: { name: 'Tim 1', score: undefined },
          team2: { name: 'Tim 2', score: undefined },
        },
      },
      {
        label: 'QF2',
        match: {
          team1: { name: 'Tim 3', score: undefined },
          team2: { name: 'Tim 4', score: undefined },
        },
      },
    ],
    rightBracket: [
      {
        label: 'QF3',
        match: {
          team1: { name: 'Tim 5', score: undefined },
          team2: { name: 'Tim 6', score: undefined },
        },
      },
      {
        label: 'QF4',
        match: {
          team1: { name: 'Tim 7', score: undefined },
          team2: { name: 'Tim 8', score: undefined },
        },
      },
    ],
    sf1: {
      team1: { name: 'Tech Sprinters', isWinner: true },
      team2: { name: 'Winner QF2' },
    },
    sf2: {
      team1: { name: 'Winner QF3' },
      team2: { name: 'Winner QF4' },
    },
    final: {
      team1: { name: 'Winner SF1' },
      team2: { name: 'Winner SF2' },
    },
    thirdPlace: {
      team1: { name: 'Loser SF1' },
      team2: { name: 'Loser SF2' },
    },
    infoImage:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    infoTitle: 'MENDADAK BASKET',
    infoText:
      'Permainan basket yang mengandalkan kecepatan, akurasi, dan strategi tim. Siapa yang paling cepat mencetak poin akan menjadi juara.',
    infoPoints: ['Format 3 on 3 Male', 'Shooting Competion'],
  },

  'relay-running': {
    discipline: '07',
    title: 'RELAY RUNNING',
    description:
      'Kompetisi lari estafet antar unit kerja yang menguji kecepatan, stamina, dan kerja sama tim dalam satu lintasan.',
    rulesUrl: '#',
    bracketTitle: '8-TEAM RELAY SPRINT',
    leftBracket: [
      {
        label: 'QF1',
        match: {
          team1: { name: 'Ditjen A', score: undefined },
          team2: { name: 'Ditjen B', score: undefined },
        },
      },
      {
        label: 'QF2',
        match: {
          team1: { name: 'Ditjen C', score: undefined },
          team2: { name: 'Ditjen D', score: undefined },
        },
      },
    ],
    rightBracket: [
      {
        label: 'QF3',
        match: {
          team1: { name: 'Badan A', score: undefined },
          team2: { name: 'Badan B', score: undefined },
        },
      },
      {
        label: 'QF4',
        match: {
          team1: { name: 'Sekretariat', score: undefined },
          team2: { name: 'Inspektorat', score: undefined },
        },
      },
    ],
    sf1: {
      team1: { name: 'Winner QF1' },
      team2: { name: 'Winner QF2' },
    },
    sf2: {
      team1: { name: 'Winner QF3' },
      team2: { name: 'Winner QF4' },
    },
    final: {
      team1: { name: 'Winner SF1' },
      team2: { name: 'Winner SF2' },
    },
    thirdPlace: {
      team1: { name: 'Loser SF1' },
      team2: { name: 'Loser SF2' },
    },
    infoImage:
      'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80',
    infoTitle: 'RELAY RUNNING',
    infoText:
      'Estafet membutuhkan sinkronisasi sempurna antara pelari. Latihan transisi dan strategi urutan adalah kunci kemenangan.',
    infoPoints: ['Format 4×100M', 'Mixed Gender', 'Chip Timing'],
  },

  'futsal': {
    discipline: '05',
    title: 'FUTSAL',
    description:
      'Turnamen futsal 5v5 antar unit utama Kemenkes. Uji taktik, kecepatan, dan kekompakan di atas lapangan indoor.',
    rulesUrl: '#',
    bracketTitle: '8-TEAM FUTSAL CUP',
    leftBracket: [
      {
        label: 'QF1',
        match: {
          team1: { name: 'Unit A', score: undefined },
          team2: { name: 'Unit B', score: undefined },
        },
      },
      {
        label: 'QF2',
        match: {
          team1: { name: 'Unit C', score: undefined },
          team2: { name: 'Unit D', score: undefined },
        },
      },
    ],
    rightBracket: [
      {
        label: 'QF3',
        match: {
          team1: { name: 'Unit E', score: undefined },
          team2: { name: 'Unit F', score: undefined },
        },
      },
      {
        label: 'QF4',
        match: {
          team1: { name: 'Unit G', score: undefined },
          team2: { name: 'Unit H', score: undefined },
        },
      },
    ],
    sf1: {
      team1: { name: 'Winner QF1' },
      team2: { name: 'Winner QF2' },
    },
    sf2: {
      team1: { name: 'Winner QF3' },
      team2: { name: 'Winner QF4' },
    },
    final: {
      team1: { name: 'Winner SF1' },
      team2: { name: 'Winner SF2' },
    },
    thirdPlace: {
      team1: { name: 'Loser SF1' },
      team2: { name: 'Loser SF2' },
    },
    infoImage:
      'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80',
    infoTitle: 'FUTSAL',
    infoText:
      'Futsal adalah permainan cepat yang menuntut visi, teknik, dan komunikasi tim yang erat. Setiap gol hasil kerja keras bersama.',
    infoPoints: ['5 vs 5 Players', 'Indoor Court', 'FIFA Rules'],
  },
};

// ── Helper default untuk event yang belum punya data ─────────
function buildDefaultEventData(
  slug: string,
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

// ── Sub-komponen: satu baris matchup ────────────────────────
function TeamRow({ team, showScore }: { team: TeamSlot; showScore?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 border-b border-outline-variant last:border-0 ${team.isWinner
        ? 'bg-primary-fixed/20 font-bold text-primary'
        : 'text-on-surface'
        }`}
    >
      <span className="text-sm truncate max-w-[120px]">{team.name}</span>
      {showScore && team.score && (
        <span
          className={`text-xs font-mono ml-2 px-1 ${team.isWinner ? 'text-primary font-bold' : 'text-on-surface-variant'
            }`}
        >
          {team.score}
        </span>
      )}
    </div>
  );
}

// ── Sub-komponen: satu kotak bracket ────────────────────────
function BracketBox({
  round,
  highlight = false,
}: {
  round: BracketRound;
  highlight?: boolean;
}) {
  return (
    <div
      className={`border-2 ${highlight ? 'border-primary bg-surface-container' : 'border-on-surface-variant bg-surface-container-lowest'
        } text-xs min-w-[160px]`}
    >
      <div className="flex items-center gap-1 px-3 py-1 border-b border-outline-variant bg-surface-container">
        <span className="font-label-caps text-[10px] text-on-surface-variant">{round.label}</span>
        {round.match.team1.isWinner || round.match.team2.isWinner ? (
          <span className="ml-auto text-[9px] bg-primary text-on-primary px-1 font-bold">TBD</span>
        ) : (
          <span className="ml-auto text-[9px] bg-surface-variant text-on-surface-variant px-1">UPC</span>
        )}
      </div>
      <TeamRow team={round.match.team1} showScore />
      <TeamRow team={round.match.team2} showScore />
    </div>
  );
}

// ── Sub-komponen: kotak final / semifinal ───────────────────
function MatchBox({
  label,
  match,
  isChampionship = false,
  isThirdPlace = false,
}: {
  label: string;
  match: BracketMatch;
  isChampionship?: boolean;
  isThirdPlace?: boolean;
}) {
  return (
    <div className={`min-w-[180px] border-2 ${isChampionship ? 'border-tertiary bg-tertiary-container/20' : isThirdPlace ? 'border-outline-variant bg-surface-container' : 'border-on-surface-variant bg-surface-container-lowest'}`}>
      {isChampionship && (
        <div className="bg-tertiary text-on-tertiary text-center py-1 px-2 font-label-caps text-[10px] tracking-widest">
          🏆 CHAMPIONSHIP
        </div>
      )}
      {isThirdPlace && (
        <div className="bg-surface-dim text-on-surface text-center py-1 px-2 font-label-caps text-[10px] tracking-widest">
          3RD PLACE MATCH
        </div>
      )}
      {!isChampionship && !isThirdPlace && (
        <div className="px-3 py-1 border-b border-outline-variant bg-surface-container font-label-caps text-[10px] text-on-surface-variant">
          {label}
        </div>
      )}
      <div className={`px-3 py-2 border-b border-outline-variant text-sm ${match.team1.isWinner ? 'font-bold text-primary bg-primary-fixed/20' : 'text-on-surface-variant'}`}>
        {match.team1.name}
        {match.team1.isWinner && <span className="ml-2 text-[10px]">→</span>}
      </div>
      <div className={`px-3 py-2 text-sm ${match.team2.isWinner ? 'font-bold text-primary bg-primary-fixed/20' : 'text-on-surface-variant'}`}>
        {match.team2.name}
        {match.team2.isWinner && <span className="ml-2 text-[10px]">→</span>}
      </div>
    </div>
  );
}

// ── Komponen utama halaman event ─────────────────────────────
interface EventPageProps {
  slug: string;
  disciplineNumber: string;
  eventTitle: string;
  eventDescription: string;
  onBack: () => void;
}

export default function EventPage({
  slug,
  disciplineNumber,
  eventTitle,
  eventDescription,
  onBack,
}: EventPageProps) {
  // Cari data event. Jika belum ada, buat default.
  const data: EventData =
    eventsData[slug] ??
    buildDefaultEventData(slug, disciplineNumber, eventTitle, eventDescription);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-surface"
    >
      {/* ── Back button ───────────────────────────────── */}
      <div className="bg-surface border-b-2 border-on-surface px-margin-mobile md:px-margin-desktop py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors group"
        >
          <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          BACK TO EVENTS
        </button>
      </div>

      {/* ── Hero / Discipline Header ──────────────────── */}
      <section className="bg-surface-container-low border-b-2 border-on-surface px-margin-mobile md:px-margin-desktop py-10">
        <div className="max-w-4xl">
          <div className="inline-block border border-tertiary text-tertiary font-label-caps text-label-caps px-3 py-1 mb-4">
            DISCIPLINE {data.discipline}
          </div>
          <h1 className="font-display-lg text-[48px] md:text-[64px] text-on-background leading-[0.95] mb-4 uppercase">
            {data.title}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-6">
            {data.description}
          </p>
          {data.rulesUrl && (
            <a
              href={data.rulesUrl}
              className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-caps text-label-caps px-5 py-3 hard-shadow hover-shift transition-all"
            >
              <span className="material-symbols-outlined text-base">
                download
              </span>
              DOWNLOAD COMPETITION RULES
            </a>
          )}
        </div>
      </section>

      {/* ── Tournament Bracket ────────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop py-12 bg-surface">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase">
            {data.bracketTitle}
          </h2>
          <span className="font-label-caps text-label-caps text-on-surface-variant border border-outline-variant px-3 py-1">
            LIVE BRACKET
          </span>
        </div>

        {/* Bracket layout — scroll horizontal on mobile */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[780px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-4 items-center">

            {/* Col 1 – Left QFs */}
            <div className="flex flex-col gap-8 justify-around">
              {data.leftBracket.map((round) => (
                <BracketBox key={round.label} round={round} />
              ))}
            </div>

            {/* Col 2 – SF1 */}
            <div className="flex items-center justify-center">
              <MatchBox label="SF1" match={data.sf1} />
            </div>

            {/* Col 3 – Championship + 3rd Place */}
            <div className="flex flex-col gap-8 items-center">
              <MatchBox
                label="CHAMPIONSHIP"
                match={data.final}
                isChampionship
              />
              <MatchBox
                label="3RD PLACE"
                match={data.thirdPlace}
                isThirdPlace
              />
            </div>

            {/* Col 4 – SF2 */}
            <div className="flex items-center justify-center">
              <MatchBox label="SF2" match={data.sf2} />
            </div>

            {/* Col 5 – Right QFs */}
            <div className="flex flex-col gap-8 justify-around">
              {data.rightBracket.map((round) => (
                <BracketBox key={round.label} round={round} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Info / Description Section ────────────────── */}
      <section className="bg-on-background text-surface">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          {data.infoImage ? (
            <div
              className="h-64 md:h-auto min-h-[280px] bg-cover bg-center"
              style={{ backgroundImage: `url('${data.infoImage}')` }}
            />
          ) : (
            <div className="h-64 md:h-auto min-h-[280px] bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-outline">
                image
              </span>
            </div>
          )}

          {/* Text */}
          <div className="px-margin-mobile md:px-margin-desktop py-12 flex flex-col justify-center">
            <h3 className="font-display-lg text-[36px] md:text-[48px] text-surface-bright uppercase leading-[0.95] mb-4">
              {data.infoTitle}
            </h3>
            <p className="font-body-md text-body-md text-surface-variant mb-8">
              {data.infoText.split('mili').map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}</span>
                ) : (
                  <span key={i}>
                    <span className="text-tertiary-fixed-dim underline underline-offset-2">
                      mili
                    </span>
                    {part}
                  </span>
                )
              )}
            </p>
            <ul className="space-y-2">
              {data.infoPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-label-caps text-label-caps text-primary-fixed"
                >
                  <span className="w-2 h-2 bg-primary-fixed inline-block flex-shrink-0" />
                  {point.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
