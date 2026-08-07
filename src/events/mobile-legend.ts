import type { EventData } from './types';
import mlBanner from '../assets/MLbanner.jpeg';

// ============================================================
// MOBILE LEGEND — Discipline 12
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const mobileLegend: EventData = {
  discipline: '12',
  title: 'MOBILE LEGEND',
  description: 'Turnamen internal ini didesain mengusung semangat Olimpiade, di mana kebanggaan representasi unit menjadi nilai utama (Kontingen).',
  rulesUrl: '#',
  bracketType: 'group-16',
  bracketTitle: '16-TEAM MOBILE LEGEND CUP',

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
    title: 'MOBILE LEGENDS',
    subtitle: '16 TEAMS TOURNAMENT',
    leftTop: {
      label: 'GROUP A',
      teams: [
        { name: 'Team 1' }, { name: 'Team 2' },
        { name: 'Team 3' }, { name: 'Team 4' }
      ],
      // winner: { name: 'Team 1', isWinner: true }
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
    //leftWinner: { name: 'Team 1', isWinner: true },
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

  infoImage: mlBanner,
  infoTitle: 'MOBILE LEGEND',
  infoText: 'Adu strategi dan kerja sama tim dalam turnamen Mobile Legends Bang Bang antar unit utama Kemenkes.',
  infoPoints: ['Format 5 vs 5 (Knockout)'],
};

export default mobileLegend;
