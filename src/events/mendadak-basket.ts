import type { TeamSlot, EventData } from './types';

// ============================================================
// MENDADAK BASKET — Discipline 06
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

// =========================================================================
// CARA UPDATE BRACKET — ada 3 level yang bisa diupdate:
//
// LEVEL 0 — Nama Tim, Pemenang & Skor Babak Awal:
//   • team('NAMA_TIM')                    → tim biasa tanpa skor
//   • team('NAMA_TIM', '12-8')           → tim biasa + skor
//   • winner('NAMA_TIM')                  → tim ini MENANG (highlight emas)
//   • winner('NAMA_TIM', '12-8')         → tim ini MENANG + skor
//   Contoh: teams: [ winner('SETJEN', '12-8'), team('DIT P2', '8-12') ]
//
// LEVEL 1 — Pemenang Q1 (Masuk ke Finalist):
//   Ganti field `winner` pada masing-masing sub-group.
//   Gunakan winner('NAMA_TIM') atau team('NAMA_TIM').
//   Contoh: winner: winner('SETJEN')
//
// LEVEL 2 — Finalist (Pemenang Kiri & Kanan yang tampil di bagian tengah VS):
//   Isi field `leftWinner` dan `rightWinner` di bawah `groupBracket`.
//   Tandai dengan winner() jika sudah ada juara keseluruhan.
//   Contoh: leftWinner: team('SETJEN'), rightWinner: winner('ITJEN')
// =========================================================================

// ── Helper: tim tanpa penanda pemenang ────────────────────────
const team = (name: string, score?: string): TeamSlot => ({ name, score });

// ── Helper: tim yang menang (highlight emas) ──────────────────
const winner = (name: string, score?: string): TeamSlot => ({ name, score, isWinner: true });

// ── Helper: dapatkan pemenang utama dari bracket ──────────────
// Menelusuri rightWinner → leftWinner → winner tiap sub-group → tim individual.
export function getChampion(bracket: typeof mendadakBasket.groupBracket): TeamSlot | null {
  if (!bracket) return null;
  if (bracket.rightWinner?.isWinner) return bracket.rightWinner;
  if (bracket.leftWinner?.isWinner) return bracket.leftWinner;
  const subWinners = [
    bracket.leftTop.winner,
    bracket.leftBottom.winner,
    bracket.rightTop.winner,
    bracket.rightBottom.winner,
  ];
  const subChampion = subWinners.find(w => w?.isWinner);
  if (subChampion) return subChampion;
  for (const section of [bracket.leftTop, bracket.leftBottom, bracket.rightTop, bracket.rightBottom]) {
    const teamChampion = section.teams.find(t => t.isWinner);
    if (teamChampion) return teamChampion;
  }
  return null;
}

// ── DATA BRACKET ──────────────────────────────────────────────
const mendadakBasket: EventData = {
  discipline: '06',
  title: 'MENDADAK BASKET',
  description:
    'Permainan basket yang mengandalkan kecepatan, akurasi, dan strategi tim. Siapa yang paling cepat mencetak poin akan menjadi juara.',
  rulesUrl: 'https://docs.google.com/presentation/d/1sI8zh1lr8KacyMcOs3DK3BgtxpKIcVi3hDnIzF5Q53g/edit?usp=sharing',
  bracketType: 'group-16',
  bracketTitle: 'BASKET TOURNAMENT',

  groupBracket: {
    title: 'BASKET',
    subtitle: '8 TEAMS',

    // ── Group A — sisi kiri (4 tim, 2 per sub-group) ──────────
    leftTop: {
      label: 'GROUP A',
      teams: [winner('SETJEN'), team('DIT P2')],
      winner: winner('SETJEN'),
    },
    leftBottom: {
      label: 'GROUP A',
      teams: [winner('KESPRIMKOM'), team('FARMALKES')],
      winner: winner('KESPRIMKOM', '3rd'),
    },

    // ── Group B — sisi kanan (4 tim, 2 per sub-group) ─────────
    rightTop: {
      label: 'GROUP B',
      teams: [team('BKPK'), winner('ITJEN')],
      winner: winner('ITJEN'),
    },
    rightBottom: {
      label: 'GROUP B',
      teams: [team('SDMK'), winner('KESLAN')],
      winner: winner('KESLAN'),
    },

    // ── LEVEL 2: Finalist — tim yang maju ke babak akhir ──────
    // Tandai dengan winner() jika sudah ada juara keseluruhan.
    leftWinner: team('SETJEN', '2nd'),
    rightWinner: winner('ITJEN', '1st'),
  },

  // Placeholder — tidak ditampilkan saat bracketType = group-16
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
  infoTitle: 'MENDADAK BASKET',
  infoText:
    'Permainan basket yang mengandalkan kecepatan, akurasi, dan strategi tim. Siapa yang paling cepat mencetak poin akan menjadi juara.',
  infoPoints: ['Format 3 on 3 Male'],
};

export default mendadakBasket;

