import type { EventData } from './types';

// ============================================================
// MASTERCHEF — Discipline 14
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const masterchef: EventData = {
  discipline: '14',
  title: 'MASTERCHEF',
  description: 'Lomba memasak kreatif antar unit kerja Kemenkes.',
  rulesUrl: '#',
  bracketTitle: 'MASTERCHEF KEMENKES CUP',

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

  infoTitle: 'MASTERCHEF',
  infoText: 'Lomba memasak kreatif antar unit kerja Kemenkes.',
  infoPoints: ['Info Coming Soon'],
};

export default masterchef;
