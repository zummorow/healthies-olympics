import type { EventData } from './types';
import type { FutsalBracketData } from '../components/FutsalBracket';

// ============================================================
// FUTSAL — Discipline 05
// Edit bagian FUTSAL BRACKET DATA di bawah untuk update bracket.
// ============================================================

// ============================================================================
// CARA UPDATE BRACKET — ada 3 level yang bisa diupdate:
//
// LEVEL 0 — Nama Tim (4 peserta per sisi, total 8 tim):
//   Ganti 'Tim A' dst. dengan nama tim/unit yang sebenarnya.
//   Contoh: { name: 'Setjen' }
//
// LEVEL 1 — Pemenang QF (hasil dari matchup 2 tim):
//   Tambahkan `isWinner: true` pada tim yang menang di LEVEL 0.
//   Tim itu akan otomatis muncul di slot "Winner" QF.
//   Isi juga field sfWinners pada sisi kiri/kanan.
//   Contoh: sfWinners: [{ name: 'Setjen' }, { name: 'Itjen' }]
//
// LEVEL 2 — Finalis (maju ke Final, tampil di slot dekat lingkaran VS):
//   Isi field `finalist` pada sisi kiri/kanan.
//   Contoh: finalist: { name: 'Setjen', isWinner: true }
// ============================================================================

// ── FUTSAL BRACKET DATA ───────────────────────────────────────
// Edit bagian ini setiap ada update hasil pertandingan.
export const futsalBracketData: FutsalBracketData = {
  title: 'MINI SOCCER',
  subtitle: '8 TEAMS TOURNAMENT',

  // ── Sisi KIRI — Group A (QF1: tim 1 vs 2, QF2: tim 3 vs 4) ──────────────
  left: {
    label: 'GROUP A',
    teams: [
      // QF1 — matchup pertama sisi kiri
      { name: 'Tim A' },   // ← ganti dengan nama tim asli
      { name: 'Tim B' },   // ← ganti dengan nama tim asli
      // QF2 — matchup kedua sisi kiri
      { name: 'Tim C' },   // ← ganti dengan nama tim asli
      { name: 'Tim D' },   // ← ganti dengan nama tim asli
    ],
    // LEVEL 1: Pemenang QF — uncomment dan isi setelah hasil QF diketahui.
    // sfWinners: [
    //   { name: 'Tim A', isWinner: true },   // pemenang QF1 kiri
    //   { name: 'Tim C', isWinner: true },   // pemenang QF2 kiri
    // ],
    // LEVEL 2: Finalis kiri — uncomment setelah SF kiri selesai.
    // finalist: { name: 'Tim A', isWinner: true },
  },

  // ── Sisi KANAN — Group B (QF3: tim 5 vs 6, QF4: tim 7 vs 8) ─────────────
  right: {
    label: 'GROUP B',
    teams: [
      // QF3 — matchup pertama sisi kanan
      { name: 'Tim E' },   // ← ganti dengan nama tim asli
      { name: 'Tim F' },   // ← ganti dengan nama tim asli
      // QF4 — matchup kedua sisi kanan
      { name: 'Tim G' },   // ← ganti dengan nama tim asli
      { name: 'Tim H' },   // ← ganti dengan nama tim asli
    ],
    // LEVEL 1: Pemenang QF — uncomment dan isi setelah hasil QF diketahui.
    // sfWinners: [
    //   { name: 'Tim E', isWinner: true },   // pemenang QF3 kanan
    //   { name: 'Tim G', isWinner: true },   // pemenang QF4 kanan
    // ],
    // LEVEL 2: Finalis kanan — uncomment setelah SF kanan selesai.
    // finalist: { name: 'Tim E', isWinner: true },
  },
};

// ── EVENT DATA (metadata & info section) ──────────────────────
const futsal: EventData = {
  discipline: '05',
  title: 'MINI SOCCER',
  description:
    'Turnamen Mini Soccer 5v5 antar unit utama Kemenkes. Uji taktik, kecepatan, dan kekompakan di atas lapangan indoor.',
  rulesUrl: '#',
  bracketType: 'group-8',    // ← pakai komponen FutsalBracket
  bracketTitle: '8-TEAM MINI SOCCER CUP',

  // Placeholder — tidak digunakan saat bracketType = 'group-8'
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoImage: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80',
  infoTitle: 'MINI SOCCER',
  infoText:
    'Mini Soccer adalah permainan cepat yang menuntut visi, teknik, dan komunikasi tim yang erat. Setiap gol hasil kerja keras bersama.',
  infoPoints: ['coming soon'],
};

export default futsal;
