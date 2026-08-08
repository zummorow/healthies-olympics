import type { EventData } from './types';
import type { MenembakTeam } from '../components/MenembakLeaderboard';

// ============================================================
// MENEMBAK — Discipline 10
// Edit bagian MENEMBAK LEADERBOARD DATA di bawah untuk update
// nama tim dan perolehan poin.
// ============================================================

// ============================================================================
// CARA UPDATE TABEL PEROLEHAN POIN:
//
// 1. Ganti field `unit` dengan nama Unit Utama yang sebenarnya.
//    Contoh: unit: 'Sekretariat Jenderal'
//
// 2. Isi field `point` dengan perolehan poin tim tersebut.
//    Contoh: point: 87
//    → Jika belum ada data, biarkan 0 (akan tampil sebagai "—").
//
// Urutan baris TIDAK perlu diurutkan manual — tabel otomatis
// menampilkan dari poin terbesar ke terkecil.
// ============================================================================

// ── MENEMBAK LEADERBOARD DATA ─────────────────────────────────
// Edit bagian ini setiap ada update hasil poin.
export const menembakTeams: MenembakTeam[] = [
  // Format: { unit: 'Nama Unit Utama', point: <angka poin> }
  // Urutan di sini tidak berpengaruh — tabel akan auto-sort.

  { unit: 'Sekretariat Jenderal', point: 0 },
  { unit: 'Inspektorat Jenderal', point: 0 },
  { unit: 'Direktorat Jenderal Kesehatan Primer Komunitas', point: 0 },
  { unit: 'Direktorat Jenderal Kesehatan Lanjutan', point: 0 },
  { unit: 'Direktorat Jenderal Penanggulangan Penyakit', point: 0 },
  { unit: 'Direktorat Jenderal Farmasi dan Alat Kesehatan', point: 0 },
  { unit: 'Direktorat Jenderal SDM Kesehatan', point: 0 },
  { unit: 'Badan Kebijakan Pembangunan Kesehatan', point: 0 },
];

// ── EVENT DATA (metadata & info section) ──────────────────────
const menembak: EventData = {
  discipline: '10',
  title: 'MENEMBAK',
  description: 'Tersedia kategori Online Shooting Games (nembak pake gadget masing-masing, kapanpun dan dimanapun berada, cocok buat kaum rebahan), serta Air Pistol 10 Meter putra dan putri.',
  rulesUrl: 'https://s.kemkes.go.id/LombaMenembakHUTRI81Tahun2026',
  bracketType: 'point-table',   // ← pakai MenembakLeaderboard
  bracketTitle: 'MENEMBAK PRECISION CUP',

  // Placeholder — tidak digunakan saat bracketType = 'point-table'
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoImage: 'https://cdn.antaranews.com/cache/1200x800/2021/12/11/antarafoto-lomba-tembak-kasal-cup-2021-211211-fm-3.jpg',
  infoTitle: 'MENEMBAK',
  infoText: 'Lomba menembak presisi antar pegawai Kemenkes.',
  infoPoints: ['Info Coming Soon'],
};

export default menembak;
