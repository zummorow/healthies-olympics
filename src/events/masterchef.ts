import type { EventData } from './types';
import type { MasterchefTeam } from '../components/MasterchefLeaderboard';

// ============================================================
// MASTERCHEF / SI JAGO MASAK — Discipline 14
// Edit bagian MASTERCHEF LEADERBOARD DATA di bawah untuk
// update nama peserta dan perolehan poin.
// ============================================================

// ============================================================================
// CARA UPDATE TABEL PEROLEHAN POIN:
//
// 1. Ganti field `name` dengan nama peserta / tim.
//    Contoh: name: 'Tim Rendang'
//
// 2. Ganti field `unit` dengan nama Unit Utama peserta tersebut.
//    Contoh: unit: 'Sekretariat Jenderal'
//
// 3. Isi field `point` dengan perolehan poin dari juri.
//    Contoh: point: 87
//    → Jika belum ada hasil, biarkan 0 (akan tampil sebagai "—").
//
// Urutan baris TIDAK perlu diurutkan manual — tabel otomatis
// menampilkan dari poin terbesar ke terkecil.
// ============================================================================

// ── MASTERCHEF LEADERBOARD DATA ──────────────────────────────
// Edit bagian ini setiap ada update hasil poin dari juri.
export const masterchefTeams: MasterchefTeam[] = [
  // Format: { name: 'Nama Peserta/Tim', unit: 'Unit Utama', point: <angka poin> }
  // Urutan di sini tidak berpengaruh — tabel akan auto-sort.

  { name: 'Tim 1', unit: 'Sekretariat Jenderal', point: 81.5 },
  { name: 'Tim 2', unit: 'Inspektorat Jenderal', point: 79.5 },
  { name: 'Tim 3', unit: 'Direktorat Jenderal Kesehatan Primer Komunitas', point: 83 },
  { name: 'Tim 4', unit: 'Direktorat Jenderal Kesehatan Lanjutan', point: 86.5 },
  { name: 'Tim 5', unit: 'Direktorat Jenderal Penanggulangan Penyakit', point: 90 },
  { name: 'Tim 6', unit: 'Direktorat Jenderal Farmasi dan Alat Kesehatan', point: 76 },
  { name: 'Tim 7', unit: 'Direktorat Jenderal SDM Kesehatan', point: 80.5 },
  { name: 'Tim 8', unit: 'Badan Kebijakan Pembangunan Kesehatan', point: 84.5 },
];

// ── EVENT DATA (metadata & info section) ──────────────────────
const masterchef: EventData = {
  discipline: '14',
  title: 'SI JAGO MASAK',
  description: 'Lomba memasak kreatif antar unit kerja Kemenkes.',
  rulesUrl: '#',
  bracketType: 'point-table',   // ← pakai MasterchefLeaderboard
  bracketTitle: 'SI JAGO MASAK CUP',

  // Placeholder — tidak digunakan saat bracketType = 'point-table'
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoImage: 'https://images.unsplash.com/photo-1589699533443-05d151ef0f47?w=800&q=80',
  infoTitle: 'SI JAGO MASAK',
  infoText: 'Lomba memasak kreatif antar unit kerja Kemenkes.',
  infoPoints: ['Info Coming Soon'],
};

export default masterchef;
