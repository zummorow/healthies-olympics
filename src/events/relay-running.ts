import type { EventData } from './types';

// ============================================================
// RELAY RUNNING — Discipline 07
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const relayRunning: EventData = {
  discipline: '07',
  title: 'RELAY RUNNING',
  description:
    'Kompetisi lari estafet antar unit kerja yang menguji kecepatan, stamina, dan kerja sama tim dalam satu lintasan.',
  rulesUrl: '#',
  bracketTitle: '8-TEAM RELAY SPRINT',

  leftBracket: [
    {
      label: 'QF1',
      match: {
        team1: { name: 'Ditjen A', score: undefined },
        team2: { name: 'Ditjen B', score: undefined },
      },
    },
    {
      label: 'QF2',
      match: {
        team1: { name: 'Ditjen C', score: undefined },
        team2: { name: 'Ditjen D', score: undefined },
      },
    },
  ],

  rightBracket: [
    {
      label: 'QF3',
      match: {
        team1: { name: 'Badan A', score: undefined },
        team2: { name: 'Badan B', score: undefined },
      },
    },
    {
      label: 'QF4',
      match: {
        team1: { name: 'Sekretariat', score: undefined },
        team2: { name: 'Inspektorat', score: undefined },
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

  infoImage: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80',
  infoTitle: 'RELAY RUNNING',
  infoText:
    'Estafet membutuhkan sinkronisasi sempurna antara pelari. Latihan transisi dan strategi urutan adalah kunci kemenangan.',
  infoPoints: ['Format 4×100M', 'Mixed Gender', 'Chip Timing'],
};

export default relayRunning;
