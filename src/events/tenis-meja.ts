import type { EventData } from './types';

// ============================================================
// TENIS MEJA — Discipline 01
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const tenisMeja: EventData = {
  discipline: '01',
  title: 'TENIS MEJA',
  description: 'Pertandingan tenis meja antar unit utama Kemenkes. Format 1 vs 1 knockout — siapa yang unggul 3 set akan melaju ke babak berikutnya.',
  rulesUrl: 'https://drive.google.com/file/d/1fZK1m72-Mi_IE0NdUVhaSzkvIHr_-Cup/view?usp=drive_link',
  bracketType: 'group-16',
  bracketTitle: '14-TEAM TENIS MEJA CUP',

  // =========================================================================
  // PANDUAN UPDATE BRACKET
  //
  // Bracket terbagi menjadi 4 grup:
  //   GROUP A (4 tim), GROUP B (4 tim), GROUP C (3 tim + 1 BYE), GROUP D (3 tim + 1 BYE).
  //   Total: 14 tim. Sisi kiri 7 tim, sisi kanan 7 tim.
  // Ada 4 level yang perlu diupdate seiring berjalannya turnamen:
  //
  // ── LEVEL 0 — Nama Tim (isi di awal turnamen) ────────────────────────────
  //   Ganti 'Team X' dengan nama tim / unit yang sebenarnya.
  //   Isi juga field score untuk menampilkan perolehan poin di bawah nama.
  //   Contoh: { name: 'Setjen', score: '3 poin' }
  //   Jika belum ada skor, biarkan score: '-' sebagai placeholder.
  //
  // ── LEVEL 1 — Pemenang Q1 (hasil babak awal, 2 vs 2) ────────────────────
  //   Tandai tim yang menang di babak awal dengan isWinner: true.
  //   Sistem akan otomatis menampilkannya di slot "Winner" level berikutnya.
  //   Contoh: { name: 'Setjen', score: '3 poin', isWinner: true }
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
    title: 'TENIS MEJA',
    subtitle: '14 TEAMS TOURNAMENT',

    // ── SISI KIRI ─────────────────────────────────────────────────────────

    // GROUP A — 4 tim paling atas di sisi kiri
    // Urutan: Team 1 vs Team 2 (baris 1-2), Team 3 vs Team 4 (baris 3-4)
    leftTop: {
      label: 'GROUP A',
      teams: [
        { name: 'BKPK', score: '-' },  // ← Ganti nama & isi skor (contoh: '3 poin')
        { name: 'ITJEN A', score: '-', isWinner: true },  // ← Ganti nama & isi skor
        { name: 'P2 B', score: '-' },  // ← Ganti nama & isi skor
        { name: 'SETJEN A', score: '-', isWinner: true },  // ← Ganti nama & isi skor
      ],
      // Setelah Group A selesai, uncomment baris ini dan isi nama pemenang:
      winner: { name: 'SETJEN A', isWinner: true },
    },

    // GROUP C — 3 tim + 1 BYE di sisi kiri bawah
    // Urutan: Team 5 vs Team 6 (baris 5-6), Team 7 vs BYE (baris 7-8)
    // Team 7 otomatis maju ke babak berikutnya karena lawan BYE.
    leftBottom: {
      label: 'GROUP C',
      teams: [
        { name: 'KESLAN B', score: '-' },  // ← Ganti nama & isi skor
        { name: 'SDMK B', score: '-', isWinner: true },  // ← Ganti nama & isi skor
        { name: 'KESPRIMKOM A', score: '-', isWinner: true },  // ← Ganti nama & isi skor (otomatis maju)
        { name: 'BYE', score: '' },       // ← Slot BYE — jangan diubah
      ],
      // Setelah Group C selesai, uncomment baris ini dan isi nama pemenang:
      winner: { name: 'KESPRIMKOM A', isWinner: true },
    },

    // ── SISI KANAN ────────────────────────────────────────────────────────

    // GROUP B — 4 tim paling atas di sisi kanan
    // Urutan: Team 9 vs Team 10 (baris 1-2), Team 11 vs Team 12 (baris 3-4)
    rightTop: {
      label: 'GROUP B',
      teams: [
        { name: 'P2 A', score: '-', isWinner: true },  // ← Ganti nama & isi skor
        { name: 'KESLAN A', score: '-' },  // ← Ganti nama & isi skor
        { name: 'SDMK A', score: '-' },  // ← Ganti nama & isi skor
        { name: 'KESPRIMKOM B', score: '-', isWinner: true },  // ← Ganti nama & isi skor
      ],
      // Setelah Group B selesai, uncomment baris ini dan isi nama pemenang:
      winner: { name: 'P2 A', score: '3rd', isWinner: true },
    },

    // GROUP D — 3 tim + 1 BYE di sisi kanan bawah
    // Urutan: Team 13 vs Team 14 (baris 5-6), Team 15 vs BYE (baris 7-8)
    // Team 15 otomatis maju ke babak berikutnya karena lawan BYE.
    rightBottom: {
      label: 'GROUP D',
      teams: [
        { name: 'ITJEN B', score: '-' },  // ← Ganti nama & isi skor
        { name: 'FARMALKES', score: '-', isWinner: true },  // ← Ganti nama & isi skor
        { name: 'SETJEN B', score: '-', isWinner: true },  // ← Ganti nama & isi skor (otomatis maju)
        { name: 'BYE', score: '' },       // ← Slot BYE — jangan diubah
      ],
      // Setelah Group D selesai, uncomment baris ini dan isi nama pemenang:
      winner: { name: 'SETJEN B', isWinner: true },
    },

    // ── LEVEL 3: Finalist ──────────────────────────────────────────────────
    // Tim yang lolos ke FINAL dari sisi kiri dan kanan.
    // Uncomment dan isi setelah semifinal selesai:
    leftWinner: { name: 'KESPRIMKOM A', score: '1st', isWinner: true },
    rightWinner: { name: 'SETJEN B', score: '2nd' },
  },

  // Catatan: field-field di bawah ini TIDAK DIGUNAKAN untuk bracketType 'group-16'.
  // Field ini dibutuhkan oleh TypeScript karena ada di interface EventData.
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: 'Winner QF1' }, team2: { name: 'Winner QF2' } },
  sf2: { team1: { name: 'Winner QF3' }, team2: { name: 'Winner QF4' } },
  final: { team1: { name: 'Winner SF1' }, team2: { name: 'Winner SF2' } },
  thirdPlace: { team1: { name: 'Loser SF1' }, team2: { name: 'Loser SF2' } },

  infoImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShs6mfVnEScyWXgDAnOOXRGRJbeG82WGLuCV13RxBE3A&s=10',
  infoTitle: 'TENIS MEJA',
  infoText: 'Pertandingan tenis meja antar unit utama Kemenkes. Format 1 vs 1 knockout — siapa yang unggul 3 set akan melaju ke babak berikutnya.',
  infoPoints: [
    'Format 1 vs 1 (Knockout)',
    '14 tim dari unit utama Kemenkes',
    'Menang 3 set lolos ke babak berikutnya',
  ],
};

export default tenisMeja;
