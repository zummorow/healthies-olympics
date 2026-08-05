import type { EventData } from './types';

// ============================================================
// MOBILE LEGEND — Discipline 12
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const mobileLegend: EventData = {
  discipline: '12',
  title: 'MOBILE LEGEND',
  description: 'Turnamen Mobile Legends Bang Bang antar unit.',
  rulesUrl: '#',
  bracketTitle: '8-TEAM MOBILE LEGEND CUP',

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

  infoTitle: 'MOBILE LEGEND',
  infoText: 'Turnamen Mobile Legends Bang Bang antar unit.',
  infoPoints: ['Info Coming Soon'],
};

export default mobileLegend;
