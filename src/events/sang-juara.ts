import type { EventData } from './types';

// ============================================================
// SANG JUARA SEASON II — Discipline 13
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const sangJuara: EventData = {
  discipline: '13',
  title: 'SANG JUARA SEASON II',
  description: 'Kompetisi multi-event para juara dari setiap cabang.',
  rulesUrl: '#',
  bracketTitle: 'SANG JUARA GRAND FINAL',

  leftBracket: [
    {
      label: 'SF1',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
    {
      label: 'SF2',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
  ],

  rightBracket: [
    {
      label: 'SF3',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
    {
      label: 'SF4',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
  ],

  sf1: { team1: { name: 'Winner SF1' }, team2: { name: 'Winner SF2' } },
  sf2: { team1: { name: 'Winner SF3' }, team2: { name: 'Winner SF4' } },
  final: { team1: { name: 'Winner GF1' }, team2: { name: 'Winner GF2' } },
  thirdPlace: { team1: { name: 'Loser GF1' }, team2: { name: 'Loser GF2' } },

  infoTitle: 'SANG JUARA SEASON II',
  infoText: 'Kompetisi multi-event para juara dari setiap cabang.',
  infoPoints: ['Info Coming Soon'],
};

export default sangJuara;
