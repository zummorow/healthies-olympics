import type { EventData } from './types';

// ============================================================
// FUTSAL — Discipline 05
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const futsal: EventData = {
  discipline: '05',
  title: 'FUTSAL',
  description:
    'Turnamen futsal 5v5 antar unit utama Kemenkes. Uji taktik, kecepatan, dan kekompakan di atas lapangan indoor.',
  rulesUrl: '#',
  bracketTitle: '8-TEAM FUTSAL CUP',

  leftBracket: [
    {
      label: 'QF1',
      match: {
        team1: { name: 'Unit A', score: undefined },
        team2: { name: 'Unit B', score: undefined },
      },
    },
    {
      label: 'QF2',
      match: {
        team1: { name: 'Unit C', score: undefined },
        team2: { name: 'Unit D', score: undefined },
      },
    },
  ],

  rightBracket: [
    {
      label: 'QF3',
      match: {
        team1: { name: 'Unit E', score: undefined },
        team2: { name: 'Unit F', score: undefined },
      },
    },
    {
      label: 'QF4',
      match: {
        team1: { name: 'Unit G', score: undefined },
        team2: { name: 'Unit H', score: undefined },
      },
    },
  ],

  sf1: {
    team1: { name: 'Winner QF1' },
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

  infoImage: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80',
  infoTitle: 'FUTSAL',
  infoText:
    'Futsal adalah permainan cepat yang menuntut visi, teknik, dan komunikasi tim yang erat. Setiap gol hasil kerja keras bersama.',
  infoPoints: ['5 vs 5 Players', 'Indoor Court', 'FIFA Rules'],
};

export default futsal;
