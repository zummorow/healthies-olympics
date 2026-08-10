import type { EventData } from './types';
import type { BadmintonCategoryData } from '../components/BadmintonComponent';

// ============================================================
// BADMINTON / TEPOK BULU — Discipline 02
// Edit bagian BADMINTON DATA di bawah untuk update hasil
// pertandingan dan perolehan poin setiap tim.
// ============================================================

// ============================================================================
// CARA UPDATE TABEL ROUND-ROBIN:
//
// 1. Ganti `satuanKerja` dengan nama satuan kerja / tim.
//    Contoh: satuanKerja: 'Sekretariat Jenderal'
//
// 2. Update statistik setelah setiap pertandingan selesai:
//    - tanding : total pertandingan yang sudah dimainkan
//    - menang  : jumlah menang
//    - seri    : jumlah seri
//    - kalah   : jumlah kalah
//    - point   : total poin (biasanya menang=3, seri=1, kalah=0)
//
//    Contoh setelah 2 pertandingan (1 menang 1 kalah):
//    { satuanKerja: 'Setjen', tanding: 2, menang: 1, seri: 0, kalah: 1, point: 3 }
//
//    Tabel akan otomatis urut dari poin terbesar.
//
// CARA UPDATE BRACKET FINAL:
//
// 1. Isi `sf1` dan `sf2` saat semi-final sudah dijadwalkan.
//    Tandai `isWinner: true` pada tim yang menang SF.
//    Contoh: sf1: { team1: { team: 'Setjen', isWinner: true }, team2: { team: 'Itjen' } }
//
// 2. Isi `final` saat kedua finalis sudah diketahui.
//    Tambahkan `isWinner: true` pada pemenang akhir.
// ============================================================================

// ── Helper: buat tim kosong dengan nilai 0 ───────────────────
const emptyTeam = (satuanKerja: string) => ({
  satuanKerja,
  tanding: 0,
  menang: 0,
  seri: 0,
  kalah: 0,
  point: 0,
});

// ── BADMINTON DATA — edit bagian ini ─────────────────────────
export const badmintonData: BadmintonCategoryData[] = [

  // ════════════════════════════════════════════════════════════
  // DATA BRACKET — update nama tim & statistik di sini
  // ════════════════════════════════════════════════════════════
  {
    name: '',   // dikosongkan — tab kategori tidak ditampilkan
    groups: [
      {
        label: 'GROUP A',
        teams: [
          // 4 tim di Grup A — update satuanKerja & statistik di sini
          emptyTeam('Tim A1'),   // ← ganti nama tim
          emptyTeam('Tim A2'),   // ← ganti nama tim
          emptyTeam('Tim A3'),   // ← ganti nama tim
          emptyTeam('Tim A4'),   // ← ganti nama tim
        ],
      },
      {
        label: 'GROUP B',
        teams: [
          // 4 tim di Grup B — update satuanKerja & statistik di sini
          emptyTeam('Tim B1'),   // ← ganti nama tim
          emptyTeam('Tim B2'),   // ← ganti nama tim
          emptyTeam('Tim B3'),   // ← ganti nama tim
          emptyTeam('Tim B4'),   // ← ganti nama tim
        ],
      },
    ],
    finalBracket: {
      // SF1: Juara Grup A vs Runner-up Grup B — isi setelah fase grup selesai
      sf1: {
        team1: { team: undefined },   // ← isi nama tim (juara Grup A)
        team2: { team: undefined },   // ← isi nama tim (runner-up Grup B)
      },
      // SF2: Juara Grup B vs Runner-up Grup A — isi setelah fase grup selesai
      sf2: {
        team1: { team: undefined },   // ← isi nama tim (juara Grup B)
        team2: { team: undefined },   // ← isi nama tim (runner-up Grup A)
      },
      // Final — isi setelah semi-final selesai
      final: {
        team1: { team: undefined },   // ← isi nama tim finalis 1
        team2: { team: undefined },   // ← isi nama tim finalis 2
      },
    },
  },
];

// ── EVENT DATA (metadata & info section) ──────────────────────
const badminton: EventData = {
  discipline: '02',
  title: 'TEPOK BULU',
  description: 'Turnamen bulu tangkis beregu dan perorangan.',
  rulesUrl: 'https://drive.google.com/file/d/1PmDMa1C-OtvsDnPJLer0mQiBjF2kPNE7/view?usp=drive_link',
  bracketType: 'badminton-rr',   // ← pakai BadmintonComponent
  bracketTitle: 'TEPOK BULU TOURNAMENT',

  // Placeholder — tidak digunakan saat bracketType = 'badminton-rr'
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoImage: 'https://img.inews.id/media/822/files/inews_new/2020/03/31/bulutangkis.jpg',
  infoTitle: 'TEPOK BULU',
  infoText: 'Turnamen bulu tangkis internal antar pegawai Kementerian Kesehatan.',
  infoPoints: ['Format Ganda Putra', 'Format Ganda Putri', 'Ganda putra usia minimal 50 tahun (kelahiran tahun 1976)'],
};

export default badminton;
