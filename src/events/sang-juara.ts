import type { EventData } from './types';
import type { MasterchefTeam } from '../components/MasterchefLeaderboard';

// ============================================================
// SANG JUARA SEASON III — Discipline 13
// Edit bagian SANG JUARA LEADERBOARD DATA di bawah untuk
// update nama peserta dan perolehan poin.
// ============================================================

// ============================================================================
// CARA UPDATE TABEL PEROLEHAN POIN:
//
// 1. Ganti field `name` dengan nama peserta / kontingen.
//    Contoh: name: 'Kontingen Setjen'
//
// 2. Ganti field `unit` dengan nama Unit Utama.
//    Contoh: unit: 'Sekretariat Jenderal'
//
// 3. Isi field `point` dengan perolehan poin akumulasi.
//    Contoh: point: 120
//    → Jika belum ada hasil, biarkan 0 (akan tampil sebagai "—").
//
// Urutan baris TIDAK perlu diurutkan manual — tabel otomatis
// menampilkan dari poin terbesar ke terkecil.
// ============================================================================

// ── SANG JUARA LEADERBOARD DATA ──────────────────────────────
// Edit bagian ini setiap ada update perolehan poin.
export const sangJuaraTeams: MasterchefTeam[] = [
  // Format: { name: 'Nama Kontingen', unit: 'Unit Utama', point: <angka poin> }
  // Urutan di sini tidak berpengaruh — tabel akan auto-sort.

  { name: 'Kontingen 1', unit: 'Sekretariat Jenderal',                           point: 0 },
  { name: 'Kontingen 2', unit: 'Inspektorat Jenderal',                           point: 0 },
  { name: 'Kontingen 3', unit: 'Direktorat Jenderal Kesehatan Primer Komunitas', point: 0 },
  { name: 'Kontingen 4', unit: 'Direktorat Jenderal Kesehatan Lanjutan',         point: 0 },
  { name: 'Kontingen 5', unit: 'Direktorat Jenderal Penanggulangan Penyakit',    point: 0 },
  { name: 'Kontingen 6', unit: 'Direktorat Jenderal Farmasi dan Alat Kesehatan', point: 0 },
  { name: 'Kontingen 7', unit: 'Direktorat Jenderal SDM Kesehatan',              point: 0 },
  { name: 'Kontingen 8', unit: 'Badan Kebijakan Pembangunan Kesehatan',          point: 0 },
];

// ── EVENT DATA (metadata & info section) ──────────────────────
const sangJuara: EventData = {
  discipline: '13',
  title: 'SANG JUARA SEASON III',
  description: 'Kompetisi multi-event para juara dari setiap cabang.',
  rulesUrl: '#',
  bracketType: 'point-table',   // ← pakai MasterchefLeaderboard (reuse)
  bracketTitle: 'SANG JUARA GRAND STANDINGS',

  // Placeholder — tidak digunakan saat bracketType = 'point-table'
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoTitle: 'SANG JUARA SEASON III',
  infoText: 'Kompetisi multi-event para juara dari setiap cabang.',
  infoPoints: ['Info Coming Soon'],
};

export default sangJuara;
