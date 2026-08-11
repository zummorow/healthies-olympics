import type { EventData } from './types';

// ============================================================
// TENNIS — Discipline 04
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const tennis: EventData = {
  discipline: '04',
  title: 'TENNIS',
  description: 'Pertandingan tenis lapangan antar pegawai Kemenkes.',
  rulesUrl: 'https://drive.google.com/file/d/1Ir6WOCINmUmt-Yfe2c51Yzx_iy3bc6By/view?usp=drive_link',
  bracketType: 'group-16',
  bracketTitle: '8-TEAM TENNIS CUP',

  // =========================================================================
  // PANDUAN UPDATE BRACKET (8 PESERTA)
  //
  // Bracket 8 peserta menggunakan struktur groupBracket:
  // - leftTop: 4 tim di sisi kiri (GROUP A)
  // - rightTop: 4 tim di sisi kanan (GROUP B)
  //
  // ── LEVEL 0 — Nama Tim (isi di awal turnamen) ────────────────────────────
  //   Ganti 'Team X' dengan nama tim / unit yang sebenarnya.
  //   Isi juga field score untuk menampilkan perolehan poin di bawah nama (opsional).
  //   Contoh: { name: 'Setjen', score: '-' }
  //
  // ── LEVEL 1 — Pemenang Babak Pertama / Q1 (2 tim vs 2 tim) ───────────────
  //   Tandai tim yang menang di babak 1 dengan isWinner: true.
  //   Sistem visual (MendadakBasketBracket) me-render bracket 8 tim ini.
  //
  // ── LEVEL 2 — Pemenang Grup / Q2 (Finalist per Sisi) ─────────────────────
  //   Isi field `winner` pada leftTop / rightTop jika ingin menandai juara grup.
  // =========================================================================

  groupBracket: {
    title: 'TENNIS LAPANGAN',
    subtitle: '8 TEAMS TOURNAMENT',

    // ── SISI KIRI (GROUP A — 4 TIM) ────────────────────────────────────────
    leftTop: {
      label: 'GROUP A',
      teams: [
        { name: 'Team 1', score: '-' }, // Matchup 1
        { name: 'Team 2', score: '-' },
        { name: 'Team 3', score: '-' }, // Matchup 2
        { name: 'Team 4', score: '-' },
      ],
      // winner: { name: 'Team 1', isWinner: true },
    },
    leftBottom: {
      label: 'GROUP A',
      teams: [],
    },

    // ── SISI KANAN (GROUP B — 4 TIM) ───────────────────────────────────────
    rightTop: {
      label: 'GROUP B',
      teams: [
        { name: 'Team 5', score: '-' }, // Matchup 1
        { name: 'Team 6', score: '-' },
        { name: 'Team 7', score: '-' }, // Matchup 2
        { name: 'Team 8', score: '-' },
      ],
      // winner: { name: 'Team 5', isWinner: true },
    },
    rightBottom: {
      label: 'GROUP B',
      teams: [],
    },
  },

  // Catatan: field-field di bawah ini TIDAK DIGUNAKAN untuk bracketType 'group-16'.
  // Field ini dibutuhkan oleh TypeScript karena ada di interface EventData.
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: 'Winner QF1' }, team2: { name: 'Winner QF2' } },
  sf2: { team1: { name: 'Winner QF3' }, team2: { name: 'Winner QF4' } },
  final: { team1: { name: 'Winner SF1' }, team2: { name: 'Winner SF2' } },
  thirdPlace: { team1: { name: 'Loser SF1' }, team2: { name: 'Loser SF2' } },

  infoImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-1dx8Zl-PBDVe6KmD4wD9ZFXuLa3E0sl5oA4R4maNQ&s=10',
  infoTitle: 'TENNIS',
  infoText: 'Pertandingan tenis lapangan antar pegawai.',
  infoPoints: ['Format 8 Tim Knockout', '2 Sisi Bracket (Kiri & Kanan)'],
};

export default tennis;
