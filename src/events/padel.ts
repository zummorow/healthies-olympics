import type { TeamSlot, EventData } from './types';

// ============================================================
// PADEL — Discipline 03
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

// =========================================================================
// CARA UPDATE BRACKET — ada 4 level yang bisa diupdate:
//
// LEVEL 0 — Nama Tim, Unit Utama & Skor:
//   • team('NAMA_TIM')                           → tim biasa
//   • team('NAMA_TIM', 'UNIT UTAMA')             → tim + unit
//   • team('NAMA_TIM', 'UNIT UTAMA', '6-4')      → tim + unit + skor
//   • winner('NAMA_TIM', 'UNIT', '6-4')          → tim MENANG (highlight emas)
//   Contoh: teams: [ winner('Akbar x Putri', 'Setjen', '6-4'), team('Reza x Miranti', 'Itjen', '4-6') ]
//
// LEVEL 1 — Pemenang Q1 (hasil 2v2 dalam 1 sub-grup):
//   Tandai tim yang menang dengan winner() di level 0.
//   Pemenang otomatis naik ke slot Winner.
//
// LEVEL 2 — Pemenang Q2 (hasil 2 sub-grup → semi-final):
//   Tambahkan field `winner` pada sub-grup (leftTop / leftBottom / dst).
//   Contoh: winner: winner('Akbar x Putri', 'Setjen')
//
// LEVEL 3 — Finalist (tampil di slot paling tengah, dekat lingkaran VS):
//   Isi field `leftWinner` dan `rightWinner` di bawah groupBracket.
//   Contoh: leftWinner: winner('Akbar x Putri', 'Setjen'), rightWinner: team('Tim B', 'BKPK')
// =========================================================================

// ── Helper: tim tanpa penanda pemenang ────────────────────────
export const team = (name: string, unit?: string, score?: string): TeamSlot => ({ name, unit, score });

// ── Helper: tim yang menang (highlight emas) ──────────────────
export const winner = (name: string, unit?: string, score?: string): TeamSlot => ({ name, unit, score, isWinner: true });

// ── DATA BRACKET ──────────────────────────────────────────────
const padel: EventData = {
  discipline: '03',
  title: 'TERPADEL DAY',
  description: 'Turnamen Healthies Olympics pertama di cabang olahraga padel',
  rulesUrl: 'https://drive.google.com/file/d/17HFZ_-qo_vCAFPqN3y9BuRRrUfVkroNy/view?usp=drive_link',
  bracketType: 'group-16',
  bracketTitle: '16-TEAM PADEL CUP',

  groupBracket: {
    title: 'PADEL CUP',
    subtitle: '16 TEAMS TOURNAMENT',

    // ── Group A — sisi kiri, sub-grup atas ────────────────────
    leftTop: {
      label: 'GROUP A',
      teams: [
        team('Akbar x Putri', 'ITJEN'),
        winner('Reza x Miranti', 'FARMALKES'),
        winner('Angga x Farah', 'SDMK'),
        team('Christian x Melati', 'P2'),
      ],
      winner: winner('Angga x Farah', 'SDMK')
    },

    // ── Group C — sisi kiri, sub-grup bawah ──────────────────
    leftBottom: {
      label: 'GROUP C',
      teams: [
        winner('Faizal x Ratna', 'KESLAN'),
        team('Mely x Rheza', 'BKPK'),
        team('Rangga x Prima', 'SEKJEN'),
        winner('Febby x Marti', 'KESPRIMKOM'),
      ],
      winner: winner('Bayu x Annisa', 'SDMK')
    },

    // ── Group B — sisi kanan, sub-grup atas ──────────────────
    rightTop: {
      label: 'GROUP B',
      teams: [
        winner('Aldo x Icha', 'SEKJEN'),
        team('Rivania x Novauzi ', 'BKPK'),
        winner('Yosua dan Rizka', 'FARMALKES'),
        team('Raihan dan Adis ', 'P2'),
      ],
      winner: winner('Yosua dan Rizka', 'FARMALKES')
    },

    // ── Group D — sisi kanan, sub-grup bawah ─────────────────
    rightBottom: {
      label: 'GROUP D',
      teams: [
        team('Muflih dan Unik', 'ITJEN'),
        winner('Andreas dan Desy', 'KESPRIMKOM'),
        team('Bob Samuel xRinda', 'KESLAN'),
        winner('Bayu x Annisa', 'SDMK'),
      ],
      winner: winner('Febby x Marti', 'KESPRIMKOM')
    },

    // ── LEVEL 3: Finalist — tim yang maju ke babak akhir ──────
    // Tandai dengan winner() jika sudah ada juara keseluruhan.
    // leftWinner: winner('Nama Tim Kiri', 'Unit'),
    // rightWinner: team('Nama Tim Kanan', 'Unit'),
  },

  leftBracket: [],
  rightBracket: [],

  // Catatan: sf1/sf2/final/thirdPlace di bawah ini TIDAK DIGUNAKAN
  // untuk bracket group-16. Gunakan leftWinner/rightWinner di atas.
  sf1: { team1: { name: 'Winner QF1' }, team2: { name: 'Winner QF2' } },
  sf2: { team1: { name: 'Winner QF3' }, team2: { name: 'Winner QF4' } },
  final: { team1: { name: 'Winner SF1' }, team2: { name: 'Winner SF2' } },
  thirdPlace: { team1: { name: 'Loser SF1' }, team2: { name: 'Loser SF2' } },

  infoImage: 'https://a.storyblok.com/f/320069/990x450/bc604c8582/what-is-padel-sport-history-origins-and-tips.jpg/m/1080x0/filters:quality(80)',
  infoTitle: 'TERPADEL DAY',
  infoText: 'Terpadel Day merupakan kompetisi padel yang bertujuan menguji strategi dan kekompakan tim. Mengusung sistem turnamen eliminasi, Terpadel Day dirancang untuk membangun sportivitas dan semangat kompetitif antar kontingen melalui format permainan yang seru dan menantang.',
  infoPoints: ['Format: Race to 3'],
};

export default padel;

