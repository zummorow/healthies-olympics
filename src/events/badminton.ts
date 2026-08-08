import type { EventData } from './types';

// ============================================================
// BADMINTON — Discipline 02
// FILE INI DI-GENERATE OTOMATIS dari Google Sheet.
// Jangan edit manual — update di sheet, lalu jalankan ulang
// generate-badminton.mjs.
// ============================================================

const createPlaceholderGroup = (title: string) => ({
  title,
  subtitle: '16 TEAMS TOURNAMENT',
  leftTop: {
    label: 'GROUP A',
    teams: [
      { name: 'Team 1' }, { name: 'Team 2' },
      { name: 'Team 3' }, { name: 'Team 4' }
    ]
  },
  leftBottom: {
    label: 'GROUP C',
    teams: [
      { name: 'Team 5' }, { name: 'Team 6' },
      { name: 'Team 7' }, { name: 'Team 8' }
    ]
  },
  rightTop: {
    label: 'GROUP B',
    teams: [
      { name: 'Team 9' }, { name: 'Team 10' },
      { name: 'Team 11' }, { name: 'Team 12' }
    ]
  },
  rightBottom: {
    label: 'GROUP D',
    teams: [
      { name: 'Team 13' }, { name: 'Team 14' },
      { name: 'Team 15' }, { name: 'Team 16' }
    ]
  },
});

const badminton: EventData = {
  discipline: '02',
  title: 'TEPOK BULU',
  description: 'Turnamen bulu tangkis beregu dan perorangan.',
  rulesUrl: '#',
  bracketType: 'none',
  bracketTitle: 'TEPOK BULU TOURNAMENT',

  categories: [
    {
      name: 'Ganda Putri',
      groupBracket: createPlaceholderGroup('GANDA PUTRI')
    },
    {
      name: 'Ganda Putra',
      groupBracket: createPlaceholderGroup('GANDA PUTRA')
    },
    {
      name: 'Ganda Campuran',
      groupBracket: createPlaceholderGroup('GANDA CAMPURAN')
    }
  ],

  // Placeholders — tidak digunakan saat menggunakan kategori
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoImage: 'https://img.inews.id/media/822/files/inews_new/2020/03/31/bulutangkis.jpg',
  infoTitle: 'TEPOK BULU',
  infoText: 'Turnamen bulu tangkis internal antar pegawai Kementerian Kesehatan.',
  infoPoints: ['Format Ganda Putra', 'Format Ganda Putri', 'Format Ganda Campuran'],
};

export default badminton;
