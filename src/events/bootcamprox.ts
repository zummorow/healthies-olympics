import type { EventData, BootcamproxTeam } from './types';
import fitrox from '../assets/fitrox.png';

// =========================================================================
// BOOTCAMPROX / FITROX — Discipline 09
// 
// CARA MENGISI NAMA TIM, UNIT UTAMA, & UPDATE PEROLEHAN WAKTU:
//
// 1. Edit array `bootcamproxTeams` di bawah ini. Total ada 16 tim.
// 2. Format setiap data tim:
//      - teamName : Nama tim peserta (contoh: "Tim Alpha", "Setjen Fit", dll)
//      - unit     : Unit Utama Kemenkes (contoh: "Sekretariat Jenderal")
//      - time     : Perolehan Waktu (format MM:SS atau MM:SS.ms, contoh: "12:34.50")
//
// CATATAN PENTING:
// - Tabel di tampilan web akan OTOMATIS MENYSORTIR dari Perolehan Waktu TERCEPAT
//   (terkecil) ke TERLAMBAT (terbesar).
// - Jika tim belum melakukan tes / belum ada waktu, isi time dengan "-"
//   dan tim tersebut akan otomatis ditaruh di bagian paling bawah tabel.
// =========================================================================

const bootcamproxTeams: BootcamproxTeam[] = [
  // ── TIM 01 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 1',
    unit: 'Sekretariat Jenderal',
    time: '-', // ← Ganti dengan perolehan waktu (contoh: "12:30.50")
  },

  // ── TIM 02 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 2',
    unit: 'Sekretariat Jenderal',
    time: '-', // ← Ganti dengan perolehan waktu (contoh: "13:15.00")
  },

  // ── TIM 03 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 3',
    unit: 'Inspektorat Jenderal',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 04 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 4',
    unit: 'Inspektorat Jenderal',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 05 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 5',
    unit: 'Direktorat Jenderal Kesehatan Primer Komunitas',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 06 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 6',
    unit: 'Direktorat Jenderal Kesehatan Primer Komunitas',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 07 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 7',
    unit: 'Direktorat Jenderal Kesehatan Lanjutan',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 08 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 8',
    unit: 'Direktorat Jenderal Kesehatan Lanjutan',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 09 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 9',
    unit: 'Direktorat Jenderal Penanggulangan Penyakit',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 10 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 10',
    unit: 'Direktorat Jenderal Penanggulangan Penyakit',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 11 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 11',
    unit: 'Direktorat Jenderal Farmasi dan Alat Kesehatan',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 12 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 12',
    unit: 'Direktorat Jenderal Farmasi dan Alat Kesehatan',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 13 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 13',
    unit: 'Direktorat Jenderal Sumber Daya Manusia Kesehatan',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 14 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 14',
    unit: 'Direktorat Jenderal Sumber Daya Manusia Kesehatan',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 15 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 15',
    unit: 'Badan Kebijakan Pembangunan Kesehatan',
    time: '-', // ← Ganti dengan perolehan waktu
  },

  // ── TIM 16 ─────────────────────────────────────────────────────────────
  {
    teamName: 'Tim 16',
    unit: 'Badan Kebijakan Pembangunan Kesehatan',
    time: '-', // ← Ganti dengan perolehan waktu
  },
];

const bootcamprox: EventData = {
  discipline: '09',
  title: 'FITROX',
  description: 'Bootcamp kebugaran dan fisik intensif. Pemenang ditentukan dari perolehan waktu tercepat.',
  rulesUrl: '#',
  bracketType: 'leaderboard',
  bracketTitle: 'BOOTCAMPROX TIME LEADERBOARD',
  bootcamproxTeams,

  // Bracket dummy opsional untuk memenuhi interface EventData
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: 'Winner QF1' }, team2: { name: 'Winner QF2' } },
  sf2: { team1: { name: 'Winner QF3' }, team2: { name: 'Winner QF4' } },
  final: { team1: { name: 'Winner SF1' }, team2: { name: 'Winner SF2' } },
  thirdPlace: { team1: { name: 'Loser SF1' }, team2: { name: 'Loser SF2' } },

  infoImage: fitrox,
  infoTitle: 'FITROX',
  infoText: 'Bootcamp kebugaran dan fisik intensif antar unit kerja Kemenkes.',
  infoPoints: [
    'Kompetisi fisik & kebugaran beregu 16 tim',
    'Perolehan waktu tercepat menjadi pemenang',
    'Tabel klasemen otomatis memperbarui urutan peringkat',
  ],
};

export default bootcamprox;
