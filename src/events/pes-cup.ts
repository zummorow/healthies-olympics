import type { EventData } from './types';

// ============================================================
// PES CUP — Discipline 11
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const pesCup: EventData = {
  discipline: '11',
  title: 'PES CUP',
  description: 'Turnamen e-sports PES antar unit utama.',
  rulesUrl: '#',
  bracketTitle: '8-TEAM PES CUP',

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

  infoTitle: 'PES CUP',
  infoText: 'Turnamen e-sports PES antar unit utama.',
  infoPoints: ['Info Coming Soon'],
};

export default pesCup;
