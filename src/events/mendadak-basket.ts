import type { EventData } from './types';

// ============================================================
// MENDADAK BASKET — Discipline 06
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const mendadakBasket: EventData = {
  discipline: '06',
  title: 'MENDADAK BASKET',
  description:
    'Permainan basket yang mengandalkan kecepatan, akurasi, dan strategi tim. Siapa yang paling cepat mencetak poin akan menjadi juara.',
  rulesUrl: '#',
  bracketTitle: '8-TEAM CORPORATE RELAY',

  leftBracket: [
    {
      label: 'QF1',
      match: {
        team1: { name: 'Tim 1', score: undefined },
        team2: { name: 'Tim 2', score: undefined },
      },
    },
    {
      label: 'QF2',
      match: {
        team1: { name: 'Tim 3', score: undefined },
        team2: { name: 'Tim 4', score: undefined },
      },
    },
  ],

  rightBracket: [
    {
      label: 'QF3',
      match: {
        team1: { name: 'Tim 5', score: undefined },
        team2: { name: 'Tim 6', score: undefined },
      },
    },
    {
      label: 'QF4',
      match: {
        team1: { name: 'Tim 7', score: undefined },
        team2: { name: 'Tim 8', score: undefined },
      },
    },
  ],

  sf1: {
    team1: { name: 'Tech Sprinters', isWinner: true },
    team2: { name: 'Winner QF2' },
  },
  sf2: {
    team1: { name: 'Winner QF3' },
    team2: { name: 'Winner QF4' },
  },
  final: {
    team1: { name: 'Winner SF1' },
    team2: { name: 'Winner SF2' },
  },
  thirdPlace: {
    team1: { name: 'Loser SF1' },
    team2: { name: 'Loser SF2' },
  },

  infoImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
  infoTitle: 'MENDADAK BASKET',
  infoText:
    'Permainan basket yang mengandalkan kecepatan, akurasi, dan strategi tim. Siapa yang paling cepat mencetak poin akan menjadi juara.',
  infoPoints: ['Format 3 on 3 Male', 'Shooting Competition'],
};

export default mendadakBasket;
