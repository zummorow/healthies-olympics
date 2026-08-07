import type { EventData } from './types';

// ============================================================
// PLAYSTATION CUP — Discipline 11
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const pesCup: EventData = {
  discipline: '11',
  title: 'PLAYSTATION',
  description: 'Turnamen e-sports EA SPORTS FC 26 antar unit utama Kemenkes. Format 1 vs 1 knockout — siapa yang unggul skor akan melaju ke babak berikutnya.',
  rulesUrl: '#',
  bracketType: 'group-16',
  bracketTitle: '16-TEAM PLAYSTATION CUP',

  // =========================================================================
  // PANDUAN UPDATE BRACKET
  //
  // Bracket terbagi menjadi 4 grup (GROUP A, B, C, D), masing-masing 4 tim.
  // Ada 4 level yang perlu diupdate seiring berjalannya turnamen:
  //
  // ── LEVEL 0 — Nama Tim (isi di awal turnamen) ────────────────────────────
  //   Ganti 'Team X' dengan nama tim / unit yang sebenarnya.
  //   Contoh: { name: 'Setjen' }
  //
  // ── LEVEL 1 — Pemenang Q1 (hasil babak awal, 2 vs 2) ────────────────────
  //   Tandai tim yang menang di babak awal dengan isWinner: true.
  //   Sistem akan otomatis menampilkannya di slot "Winner" level berikutnya.
  //   Contoh: { name: 'Setjen', isWinner: true }
  //
  // ── LEVEL 2 — Pemenang Grup / Q2 (winner naik ke semifinal) ─────────────
  //   Isi field `winner` pada setiap grup (leftTop / leftBottom / dst).
  //   Tim ini adalah yang lolos mewakili grupnya ke semifinal.
  //   Contoh: leftTop: { label: 'GROUP A', teams: [...], winner: { name: 'Setjen' } }
  //
  // ── LEVEL 3 — Finalist (tampil di slot tengah, dekat lingkaran VS) ───────
  //   Isi field `leftWinner` (sisi kiri) dan `rightWinner` (sisi kanan).
  //   Ini adalah tim yang maju ke partai FINAL dari masing-masing sisi.
  //   Contoh: leftWinner: { name: 'Setjen', isWinner: true },
  //           rightWinner: { name: 'Itjen' }
  // =========================================================================

  groupBracket: {
    title: 'PLAYSTATION',
    subtitle: '16 TEAMS TOURNAMENT',

    // ── SISI KIRI ─────────────────────────────────────────────────────────

    // GROUP A — 4 tim paling atas di sisi kiri
    // Urutan: Team 1 vs Team 2 (baris 1-2), Team 3 vs Team 4 (baris 3-4)
    leftTop: {
      label: 'GROUP A',
      teams: [
        { name: 'Team 1' },  // ← Ganti dengan nama peserta
        { name: 'Team 2' },  // ← Ganti dengan nama peserta
        { name: 'Team 3' },  // ← Ganti dengan nama peserta
        { name: 'Team 4' },  // ← Ganti dengan nama peserta
      ],
      // Setelah Group A selesai, uncomment baris ini dan isi nama pemenang:
      // winner: { name: 'Team 1', isWinner: true },
    },

    // GROUP C — 4 tim paling bawah di sisi kiri
    // Urutan: Team 5 vs Team 6 (baris 5-6), Team 7 vs Team 8 (baris 7-8)
    leftBottom: {
      label: 'GROUP C',
      teams: [
        { name: 'Team 5' },  // ← Ganti dengan nama peserta
        { name: 'Team 6' },  // ← Ganti dengan nama peserta
        { name: 'Team 7' },  // ← Ganti dengan nama peserta
        { name: 'Team 8' },  // ← Ganti dengan nama peserta
      ],
      // Setelah Group C selesai, uncomment baris ini dan isi nama pemenang:
      // winner: { name: 'Team 5', isWinner: true },
    },

    // ── SISI KANAN ────────────────────────────────────────────────────────

    // GROUP B — 4 tim paling atas di sisi kanan
    // Urutan: Team 9 vs Team 10 (baris 1-2), Team 11 vs Team 12 (baris 3-4)
    rightTop: {
      label: 'GROUP B',
      teams: [
        { name: 'Team 9' },   // ← Ganti dengan nama peserta
        { name: 'Team 10' },  // ← Ganti dengan nama peserta
        { name: 'Team 11' },  // ← Ganti dengan nama peserta
        { name: 'Team 12' },  // ← Ganti dengan nama peserta
      ],
      // Setelah Group B selesai, uncomment baris ini dan isi nama pemenang:
      // winner: { name: 'Team 9', isWinner: true },
    },

    // GROUP D — 4 tim paling bawah di sisi kanan
    // Urutan: Team 13 vs Team 14 (baris 5-6), Team 15 vs Team 16 (baris 7-8)
    rightBottom: {
      label: 'GROUP D',
      teams: [
        { name: 'Team 13' },  // ← Ganti dengan nama peserta
        { name: 'Team 14' },  // ← Ganti dengan nama peserta
        { name: 'Team 15' },  // ← Ganti dengan nama peserta
        { name: 'Team 16' },  // ← Ganti dengan nama peserta
      ],
      // Setelah Group D selesai, uncomment baris ini dan isi nama pemenang:
      // winner: { name: 'Team 13', isWinner: true },
    },

    // ── LEVEL 3: Finalist ──────────────────────────────────────────────────
    // Tim yang lolos ke FINAL dari sisi kiri dan kanan.
    // Uncomment dan isi setelah semifinal selesai:
    // leftWinner:  { name: 'Nama Tim Kiri',  isWinner: true },
    // rightWinner: { name: 'Nama Tim Kanan', isWinner: true },
  },

  // Catatan: field-field di bawah ini TIDAK DIGUNAKAN untuk bracketType 'group-16'.
  // Field ini dibutuhkan oleh TypeScript karena ada di interface EventData.
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: 'Winner QF1' }, team2: { name: 'Winner QF2' } },
  sf2: { team1: { name: 'Winner QF3' }, team2: { name: 'Winner QF4' } },
  final: { team1: { name: 'Winner SF1' }, team2: { name: 'Winner SF2' } },
  thirdPlace: { team1: { name: 'Loser SF1' }, team2: { name: 'Loser SF2' } },

  infoImage: 'https://www.thementoringpartnership.com/wp-content/uploads/2023/11/image.jpg',
  infoTitle: 'PLAYSTATION',
  infoText: 'urnamen e-sports PlayStation 5 kompetisi gim sepak bola EA SPORTS FC 26 antar Unit Utama.',
  infoPoints: [
    'Format 1 vs 1 (Knockout)',
  ],
};

export default pesCup;
