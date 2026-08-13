import type { EventData } from './types';
import type { SangJuaraParticipant, SangJuaraWinner } from '../components/SangJuaraStandings';

// ============================================================
// SANG JUARA SEASON III — Discipline 13
// Edit bagian DAFTAR PESERTA dan PEMENANG di bawah.
// ============================================================

// ============================================================================
// CARA UPDATE:
//
// 1. DAFTAR PESERTA — Ganti `name` dan `unit` pada array sangJuaraParticipants.
//    Contoh: { name: 'Kontingen Setjen', unit: 'Sekretariat Jenderal' }
//
// 2. PEMENANG — Isi sangJuaraJuara1 dan sangJuaraJuara2 dengan nama pemenang.
//    → Jika belum ada pemenang, biarkan undefined.
// ============================================================================

// ── DAFTAR PESERTA ───────────────────────────────────────────
export const sangJuaraParticipants: SangJuaraParticipant[] = [
  { name: 'Kontingen 1', unit: 'Sekretariat Jenderal' },
  { name: 'Kontingen 2', unit: 'Inspektorat Jenderal' },
  { name: 'Kontingen 3', unit: 'Direktorat Jenderal Kesehatan Primer Komunitas' },
  { name: 'Kontingen 4', unit: 'Direktorat Jenderal Kesehatan Lanjutan' },
  { name: 'Kontingen 5', unit: 'Direktorat Jenderal Penanggulangan Penyakit' },
  { name: 'Kontingen 6', unit: 'Direktorat Jenderal Farmasi dan Alat Kesehatan' },
  { name: 'Kontingen 7', unit: 'Direktorat Jenderal SDM Kesehatan' },
  { name: 'Kontingen 8', unit: 'Badan Kebijakan Pembangunan Kesehatan' },
];

// ── PEMENANG ─────────────────────────────────────────────────
// Isi ketika sudah ada hasil. Biarkan undefined jika belum ada.
export const sangJuaraJuara1: SangJuaraWinner = { name: 'Kontingen 5', unit: 'Direktorat Jenderal Penanggulangan Penyakit', };
// Contoh: export const sangJuaraJuara1: SangJuaraWinner = { name: 'Kontingen 1', unit: 'Sekretariat Jenderal' };

export const sangJuaraJuara2: SangJuaraWinner = { name: 'Kontingen 3', unit: 'Direktorat Jenderal Kesehatan Primer Komunitas', };
// Contoh: export const sangJuaraJuara2: SangJuaraWinner = { name: 'Kontingen 2', unit: 'Inspektorat Jenderal' };

// ── EVENT DATA (metadata & info section) ──────────────────────
const sangJuara: EventData = {
  discipline: '13',
  title: 'SANG JUARA SEASON III',
  description: 'Kompetisi multi-event para juara dari setiap cabang.',
  rulesUrl: '#',
  bracketType: 'winner-list',   // ← pakai SangJuaraStandings (list peserta + juara 1 & 2)
  bracketTitle: 'SANG JUARA GRAND STANDINGS',

  // Placeholder — tidak digunakan saat bracketType = 'winner-list'
  leftBracket: [],
  rightBracket: [],
  sf1: { team1: { name: '—' }, team2: { name: '—' } },
  sf2: { team1: { name: '—' }, team2: { name: '—' } },
  final: { team1: { name: '—' }, team2: { name: '—' } },
  thirdPlace: { team1: { name: '—' }, team2: { name: '—' } },

  infoTitle: 'SANG JUARA SEASON III',
  infoText: 'Kompetisi multi-event para juara dari setiap cabang.',
  infoPoints: ['Info Coming Soon'],
};

export default sangJuara;
