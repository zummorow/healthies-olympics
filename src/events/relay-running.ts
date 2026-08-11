import type { EventData } from './types';
import type { RelayTeam } from '../components/RelayRunningLeaderboard';
import relay from "../assets/running.webp";

// ============================================================
// RELAY RUNNING — Discipline 07
// Edit bagian RELAY LEADERBOARD DATA di bawah untuk update
// nama tim, unit, dan perolehan waktu.
// ============================================================

// ============================================================================
// CARA UPDATE TABEL PEROLEHAN WAKTU:
//
// 1. Ganti field `teamName` dengan nama tim lari (misal "Tim Kilat").
//    Contoh: teamName: 'Tim Kilat'
//
// 2. Ganti field `unit` dengan nama Unit Utama tim tersebut.
//    Contoh: unit: 'Sekretariat Jenderal'
//
// 3. Isi field `time` dengan perolehan waktu format "MM:SS.ms"
//    Contoh: time: '02:34.50'  → 2 menit 34 detik 50 milidetik
//    → Jika belum ada hasil, biarkan string kosong: time: ''
//       (tim tanpa waktu otomatis ditaruh di bagian bawah tabel)
//
// Urutan baris di sini TIDAK perlu diurutkan manual —
// tabel otomatis menampilkan dari waktu terkecil ke terbesar.
// ============================================================================

// ── RELAY LEADERBOARD DATA ────────────────────────────────────
// Edit bagian ini setiap ada update hasil perolehan waktu.
export const relayTeams: RelayTeam[] = [
  // Format: { teamName: 'Nama Tim', unit: 'Unit Utama', time: 'MM:SS.ms' }
  // Kosongkan time ('') jika hasil belum tersedia.

  { teamName: 'Tim 1', unit: 'Sekretariat Jenderal', time: '' },
  { teamName: 'Tim 2', unit: 'Sekretariat Jenderal', time: '' },
  { teamName: 'Tim 3', unit: 'Inspektorat Jenderal', time: '' },
  { teamName: 'Tim 4', unit: 'Inspektorat Jenderal', time: '' },
  { teamName: 'Tim 5', unit: 'Direktorat Jenderal Kesehatan Primer Komunitas', time: '' },
  { teamName: 'Tim 6', unit: 'Direktorat Jenderal Kesehatan Primer Komunitas', time: '' },
  { teamName: 'Tim 7', unit: 'Direktorat Jenderal Kesehatan Lanjutan', time: '' },
  { teamName: 'Tim 8', unit: 'Direktorat Jenderal Kesehatan Lanjutan', time: '' },
  { teamName: 'Tim 9', unit: 'Direktorat Jenderal Penanggulangan Penyakit', time: '' },
  { teamName: 'Tim 10', unit: 'Direktorat Jenderal Penanggulangan Penyakit', time: '' },
  { teamName: 'Tim 11', unit: 'Direktorat Jenderal Farmasi dan Alat Kesehatan', time: '' },
  { teamName: 'Tim 12', unit: 'Direktorat Jenderal Farmasi dan Alat Kesehatan', time: '' },
  { teamName: 'Tim 13', unit: 'Direktorat Jenderal SDM Kesehatan', time: '' },
  { teamName: 'Tim 14', unit: 'Direktorat Jenderal SDM Kesehatan', time: '' },
  { teamName: 'Tim 15', unit: 'Badan Kebijakan Pembangunan Kesehatan', time: '' },
  { teamName: 'Tim 16', unit: 'Badan Kebijakan Pembangunan Kesehatan', time: '' },
];

// ── EVENT DATA (metadata & info section) ──────────────────────
const relayRunning: EventData = {
  discipline: '07',
  title: 'RELAY RUNNING',
  description:
    'Kompetisi lari estafet antar unit kerja yang menguji kecepatan, stamina, dan kerja sama tim dalam satu lintasan.',
  rulesUrl: 'https://drive.google.com/file/d/1IThfXdNs-s1-9Q-V5Nvv5-ByPMl1VvM1/view?usp=drive_link',
  bracketType: 'time-table',    // ← pakai RelayRunningLeaderboard
  bracketTitle: '16-TEAM RELAY SPRINT',

  // Placeholder — tidak digunakan saat bracketType = 'time-table'
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoImage: relay,
  infoTitle: 'RELAY RUNNING',
  infoText:
    'Estafet membutuhkan sinkronisasi sempurna antara pelari. Latihan transisi dan strategi urutan adalah kunci kemenangan.',
  infoPoints: ['Format 4×515M', 'Mixed Gender', 'Chip Timing'],
};

export default relayRunning;
