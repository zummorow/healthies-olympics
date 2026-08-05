import type { EventData } from './types';

// ============================================================
// TENIS MEJA — Discipline 01
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const tenisMeja: EventData = {
  discipline: '01',
  title: 'TENIS MEJA',
  description: 'Pertandingan tenis meja antar unit utama Kemenkes.',
  rulesUrl: '#',
  bracketTitle: '8-TEAM TENIS MEJA CUP',

  leftBracket: [
    {
      label: 'QF1',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
    {
      label: 'QF2',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
  ],

  rightBracket: [
    {
      label: 'QF3',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
    {
      label: 'QF4',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
  ],

  sf1: { team1: { name: 'Winner QF1' }, team2: { name: 'Winner QF2' } },
  sf2: { team1: { name: 'Winner QF3' }, team2: { name: 'Winner QF4' } },
  final: { team1: { name: 'Winner SF1' }, team2: { name: 'Winner SF2' } },
  thirdPlace: { team1: { name: 'Loser SF1' }, team2: { name: 'Loser SF2' } },

  infoTitle: 'TENIS MEJA',
  infoText: 'Pertandingan tenis meja antar unit utama Kemenkes.',
  infoPoints: ['Info Coming Soon'],
};

export default tenisMeja;
