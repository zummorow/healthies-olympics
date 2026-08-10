import type { EventData } from './types';

// ============================================================
// MENDADAK BASKET — Discipline 06
// Edit bagian ini untuk update bracket dan info event.
// ============================================================

const team = (name: string) => ({ name });

const mendadakBasket: EventData = {
  discipline: '06',
  title: 'MENDADAK BASKET',
  description:
    'Permainan basket yang mengandalkan kecepatan, akurasi, dan strategi tim. Siapa yang paling cepat mencetak poin akan menjadi juara.',
  rulesUrl: 'https://docs.google.com/presentation/d/1sI8zh1lr8KacyMcOs3DK3BgtxpKIcVi3hDnIzF5Q53g/edit?usp=sharing',
  bracketType: 'group-16',
  bracketTitle: 'BASKET TOURNAMENT',

  groupBracket: {
    title: 'BASKET',
    subtitle: '8 TEAMS',
    // Group A — left half (4 teams, 2 per sub-group)
    leftTop: {
      label: 'GROUP A',
      teams: [team('SETJEN'), team('DIT P2')],
      winner: team('Winner Q1'),
    },
    leftBottom: {
      label: 'GROUP A',
      teams: [team('KESPRIMKOM'), team('FARMALKES')],
      winner: team('Winner Q1'),
    },
    // Group B — right half (4 teams, 2 per sub-group)
    rightTop: {
      label: 'GROUP B',
      teams: [team('BKPK'), team('ITJEN')],
      winner: team('Winner Q1'),
    },
    rightBottom: {
      label: 'GROUP B',
      teams: [team('SDMK'), team('KESLAN')],
      winner: team('Winner Q1'),
    },
  },

  // Placeholder — tidak ditampilkan saat bracketType = group-16
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
  infoTitle: 'MENDADAK BASKET',
  infoText:
    'Permainan basket yang mengandalkan kecepatan, akurasi, dan strategi tim. Siapa yang paling cepat mencetak poin akan menjadi juara.',
  infoPoints: ['Format 3 on 3 Male'],
};

export default mendadakBasket;

