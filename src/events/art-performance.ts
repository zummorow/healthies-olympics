import type { EventData } from './types';
import type { MasterchefTeam } from '../components/MasterchefLeaderboard';

// ============================================================
// ART PERFORMANCE — Discipline 08
// Edit bagian ART PERFORMANCE DATA di bawah untuk update
// nama tim dan perolehan poin.
// ============================================================

// ============================================================================
// CARA UPDATE TABEL PEROLEHAN POIN:
//
// 1. Ganti field `name` dengan nama tim / penampil.
//    Contoh: name: 'Tim Seni Setjen'
//
// 2. Ganti field `unit` dengan nama Unit Utama tim tersebut.
//    Contoh: unit: 'Sekretariat Jenderal'
//
// 3. Isi field `point` dengan perolehan poin dari juri.
//    Contoh: point: 92
//    → Jika belum ada hasil, biarkan 0 (akan tampil sebagai "—").
//
// Urutan baris TIDAK perlu diurutkan manual — tabel otomatis
// menampilkan dari poin terbesar ke terkecil.
// ============================================================================

// ── ART PERFORMANCE DATA ──────────────────────────────────────
// Edit bagian ini setiap ada update hasil poin dari juri.
export const artPerformanceTeams: MasterchefTeam[] = [
  // Format: { name: 'Nama Tim', unit: 'Unit Utama', point: <angka poin> }
  // Urutan di sini tidak berpengaruh — tabel akan auto-sort.

  { name: 'Tim 1', unit: 'Sekretariat Jenderal',                           point: 0 },
  { name: 'Tim 2', unit: 'Inspektorat Jenderal',                           point: 0 },
  { name: 'Tim 3', unit: 'Direktorat Jenderal Kesehatan Primer Komunitas', point: 0 },
  { name: 'Tim 4', unit: 'Direktorat Jenderal Kesehatan Lanjutan',         point: 0 },
  { name: 'Tim 5', unit: 'Direktorat Jenderal Penanggulangan Penyakit',    point: 0 },
  { name: 'Tim 6', unit: 'Direktorat Jenderal Farmasi dan Alat Kesehatan', point: 0 },
  { name: 'Tim 7', unit: 'Direktorat Jenderal SDM Kesehatan',              point: 0 },
  { name: 'Tim 8', unit: 'Badan Kebijakan Pembangunan Kesehatan',          point: 0 },
];

// ── EVENT DATA (metadata & info section) ──────────────────────
const artPerformance: EventData = {
  discipline: '08',
  title: 'ART PERFORMANCE',
  description: 'Pertunjukan seni budaya antar unit kerja.',
  rulesUrl: '#',
  bracketType: 'point-table',   // ← pakai MasterchefLeaderboard (reuse)
  bracketTitle: 'ART PERFORMANCE COMPETITION',

  // Placeholder — tidak digunakan saat bracketType = 'point-table'
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoTitle: 'ART PERFORMANCE',
  infoText: 'Pertunjukan seni budaya antar unit kerja.',
  infoPoints: ['Info Coming Soon'],
};

export default artPerformance;
