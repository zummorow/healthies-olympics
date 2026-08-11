import type { EventData } from './types';

// ============================================================
// PADEL — Discipline 03
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const padel: EventData = {
  discipline: '03',
  title: 'TERPADEL DAY',
  description: 'Turnamen Healthies Olympics pertama di cabang olahraga padel',
  rulesUrl: 'https://drive.google.com/file/d/17HFZ_-qo_vCAFPqN3y9BuRRrUfVkroNy/view?usp=drive_link',
  bracketType: 'group-16',
  bracketTitle: '16-TEAM PADEL CUP',

  // =========================================================================
  // CARA UPDATE BRACKET — ada 4 level yang bisa diupdate:
  //
  // LEVEL 0 — Nama Tim (8 peserta per sisi):
  //   Ganti 'Team X' dengan nama tim asli.
  //   Contoh: { name: 'Setjen' }
  //
  // LEVEL 1 — Pemenang Q1 (hasil dari 2 tim vs 2 tim dalam 1 sub-grup):
  //   Tambahkan `isWinner: true` pada tim yang menang di level 0.
  //   Tim itu akan otomatis muncul di slot "Winner" level 1.
  //   Contoh: { name: 'Setjen', isWinner: true }
  //
  // LEVEL 2 — Pemenang Q2 (hasil 2 sub-grup, winner naik ke semi-final):
  //   Tambahkan field `winner` pada sub-grup (leftTop / leftBottom / dst).
  //   Contoh: leftTop: { label: 'GROUP A', teams: [...], winner: { name: 'Setjen' } }
  //
  // LEVEL 3 — Finalist (tampil di slot paling tengah, dekat lingkaran VS):
  //   Isi field `leftWinner` (sisi kiri) dan `rightWinner` (sisi kanan)
  //   di bawah groupBracket.
  //   Contoh: leftWinner: { name: 'Setjen' }, rightWinner: { name: 'Itjen' }
  // =========================================================================
  groupBracket: {
    title: 'PADEL CUP',
    subtitle: '16 TEAMS TOURNAMENT',
    leftTop: {
      label: 'GROUP A',
      teams: [
        { name: 'Team 1' }, { name: 'Team 2' },
        { name: 'Team 3' }, { name: 'Team 4' }
      ]
    },
    leftBottom: {
      label: 'GROUP C',
      teams: [
        { name: 'Team 5' }, { name: 'Team 6' },
        { name: 'Team 7' }, { name: 'Team 8' }
      ]
    },
    rightTop: {
      label: 'GROUP B',
      teams: [
        { name: 'Team 9' }, { name: 'Team 10' },
        { name: 'Team 11' }, { name: 'Team 12' }
      ]
    },
    rightBottom: {
      label: 'GROUP D',
      teams: [
        { name: 'Team 13' }, { name: 'Team 14' },
        { name: 'Team 15' }, { name: 'Team 16' }
      ]
    },
    // LEVEL 3: Finalist — tim yang maju ke final dari tiap sisi
    // leftWinner: { name: 'Nama Tim Kiri' },
    // rightWinner: { name: 'Nama Tim Kanan' },
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
