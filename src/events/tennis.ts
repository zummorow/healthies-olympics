import type { EventData } from './types';

// ============================================================
// TENNIS — Discipline 04
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const tennis: EventData = {
  discipline: '04',
  title: 'TENNIS',
  description: 'Pertandingan tenis lapangan antar pegawai.',
  rulesUrl: '#',
  bracketTitle: '8-TEAM TENNIS CUP',

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

  infoTitle: 'TENNIS',
  infoText: 'Pertandingan tenis lapangan antar pegawai.',
  infoPoints: ['Info Coming Soon'],
};

export default tennis;
