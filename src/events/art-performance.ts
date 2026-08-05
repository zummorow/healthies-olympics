import type { EventData } from './types';

// ============================================================
// ART PERFORMANCE — Discipline 08
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const artPerformance: EventData = {
  discipline: '08',
  title: 'ART PERFORMANCE',
  description: 'Pertunjukan seni budaya antar unit kerja.',
  rulesUrl: '#',
  bracketTitle: 'ART PERFORMANCE COMPETITION',

  leftBracket: [
    {
      label: 'R1',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
    {
      label: 'R2',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
  ],

  rightBracket: [
    {
      label: 'R3',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
    {
      label: 'R4',
      match: {
        team1: { name: 'TBA', score: undefined },
        team2: { name: 'TBA', score: undefined },
      },
    },
  ],

  sf1: { team1: { name: 'Winner R1' }, team2: { name: 'Winner R2' } },
  sf2: { team1: { name: 'Winner R3' }, team2: { name: 'Winner R4' } },
  final: { team1: { name: 'Winner SF1' }, team2: { name: 'Winner SF2' } },
  thirdPlace: { team1: { name: 'Loser SF1' }, team2: { name: 'Loser SF2' } },

  infoTitle: 'ART PERFORMANCE',
  infoText: 'Pertunjukan seni budaya antar unit kerja.',
  infoPoints: ['Info Coming Soon'],
};

export default artPerformance;
