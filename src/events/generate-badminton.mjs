/**
 * ============================================================
 * TEPOK BULU — Generator badminton.ts dari Google Sheet
 * ============================================================
 *
 * CARA PAKAI:
 * 1. Isi SHEET_API_URL di bawah dengan Web app URL dari Apps Script
 *    (lihat apps-script-code.gs untuk cara deploy-nya)
 * 2. Jalankan: node generate-badminton.mjs
 * 3. File badminton.ts akan otomatis di-generate ulang di folder
 *    yang sama dengan script ini (sesuaikan OUTPUT_PATH jika perlu)
 *
 * Jika SHEET_API_URL belum diisi atau tidak tersedia, jalankan dengan:
 *   node generate-badminton.mjs --dry-run
 * Untuk meng-generate file dengan data placeholder tanpa fetch ke Sheet.
 *
 * Membutuhkan Node.js 18+ (sudah ada fetch bawaan).
 */

import { writeFile } from 'fs/promises';

// ---- KONFIGURASI ----
const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbyds_22BmG7Jj2OanbIqo48SEV1kP-FbO4_Ffc8AjiPphhLMK_vG2wZmfMCZ35pzwn4/exec';
const OUTPUT_PATH = './badminton.ts';

const CATEGORY_ORDER = ['Ganda Putri', 'Ganda Putra', 'Ganda Campuran'];

// Grup A & C => sisi kiri (leftTop / leftBottom)
// Grup B & D => sisi kanan (rightTop / rightBottom)
const GROUP_SLOT = {
  A: 'leftTop',
  C: 'leftBottom',
  B: 'rightTop',
  D: 'rightBottom',
};

function buildTeam(row) {
  const team = { name: row.namaTim };
  if (row.menangR1) team.isWinner = true;
  return team;
}

function buildGroup(rows, grupLabel) {
  const teams = [...rows]
    .sort((a, b) => a.posisi - b.posisi)
    .map(buildTeam);

  const group = { label: `GROUP ${grupLabel}`, teams };

  // Winner grup = tim dengan menangR2 true di dalam grup ini
  const winnerRow = rows.find((r) => r.menangR2);
  if (winnerRow) group.winner = { name: winnerRow.namaTim };

  return group;
}

function buildCategoryBracket(catName, rows) {
  const byGroup = {};
  for (const row of rows) {
    if (!byGroup[row.grup]) byGroup[row.grup] = [];
    byGroup[row.grup].push(row);
  }

  const bracket = { title: catName.toUpperCase(), subtitle: '16 TEAMS TOURNAMENT' };

  for (const [grup, slotKey] of Object.entries(GROUP_SLOT)) {
    if (byGroup[grup]) {
      bracket[slotKey] = buildGroup(byGroup[grup], grup);
    }
  }

  // Finalist: dicari dari tim yang menangSemi true
  const semiWinners = rows.filter((r) => r.menangSemi);
  const leftGroups = ['A', 'C'];
  const rightGroups = ['B', 'D'];

  const leftWinnerRow = semiWinners.find((r) => leftGroups.includes(r.grup));
  const rightWinnerRow = semiWinners.find((r) => rightGroups.includes(r.grup));

  if (leftWinnerRow) bracket.leftWinner = { name: leftWinnerRow.namaTim };
  if (rightWinnerRow) bracket.rightWinner = { name: rightWinnerRow.namaTim };

  return bracket;
}

function serializeGroup(group, indent = '      ') {
  const lines = [];
  lines.push(`${indent}label: '${group.label}',`);
  lines.push(`${indent}teams: [`);
  for (const t of group.teams) {
    const extra = t.isWinner ? ', isWinner: true' : '';
    lines.push(`${indent}  { name: '${escapeStr(t.name)}'${extra} },`);
  }
  lines.push(`${indent}]${group.winner ? ',' : ''}`);
  if (group.winner) {
    lines.push(`${indent}winner: { name: '${escapeStr(group.winner.name)}' },`);
  }
  return lines.join('\n');
}

function escapeStr(str) {
  return String(str).replace(/'/g, "\\'");
}

function serializeGroupBracket(bracket) {
  const lines = [];
  lines.push(`{`);
  lines.push(`      title: '${escapeStr(bracket.title)}',`);
  lines.push(`      subtitle: '${bracket.subtitle}',`);

  for (const key of ['leftTop', 'leftBottom', 'rightTop', 'rightBottom']) {
    if (bracket[key]) {
      lines.push(`      ${key}: {`);
      lines.push(serializeGroup(bracket[key], '        '));
      lines.push(`      },`);
    }
  }

  if (bracket.leftWinner) {
    lines.push(`      leftWinner: { name: '${escapeStr(bracket.leftWinner.name)}' },`);
  }
  if (bracket.rightWinner) {
    lines.push(`      rightWinner: { name: '${escapeStr(bracket.rightWinner.name)}' },`);
  }

  lines.push(`    }`);
  return lines.join('\n');
}

async function main() {
  const isDryRun = process.argv.includes('--dry-run');

  let sheetData = {};

  if (isDryRun) {
    console.log('Mode --dry-run: generate file dengan data placeholder (tidak fetch ke Sheet).');
  } else {
    console.log('Mengambil data dari Google Sheet...');
    const res = await fetch(SHEET_API_URL);
    if (!res.ok) {
      throw new Error(`Gagal fetch sheet: ${res.status} ${res.statusText}`);
    }

    // Cek apakah response benar-benar JSON.
    // Jika Apps Script deployment kedaluwarsa atau butuh re-login,
    // Google akan mengembalikan halaman HTML — bukan JSON.
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const preview = (await res.text()).slice(0, 120);
      throw new Error(
        `Sheet mengembalikan non-JSON (HTML/redirect).\n` +
        `Kemungkinan deployment Apps Script sudah kedaluwarsa atau perlu re-autentikasi.\n` +
        `Preview respons: ${preview}\n\n` +
        `Solusi:\n` +
        `  1. Buka Apps Script editor\n` +
        `  2. Klik Deploy > Manage deployments\n` +
        `  3. Buat deployment baru (New deployment) dan update SHEET_API_URL di script ini.\n` +
        `  Atau jalankan: node generate-badminton.mjs --dry-run`
      );
    }

    sheetData = await res.json();
  }

  const categoryBlocks = CATEGORY_ORDER.map((catName) => {
    const rows = sheetData[catName];
    if (isDryRun || !rows || rows.error) {
      if (!isDryRun) console.warn(`Peringatan: tidak ada data untuk kategori "${catName}"`);
      return `    {\n      name: '${catName}',\n      groupBracket: createPlaceholderGroup('${catName.toUpperCase()}')\n    }`;
    }
    const bracket = buildCategoryBracket(catName, rows);
    return `    {\n      name: '${catName}',\n      groupBracket: ${serializeGroupBracket(bracket)}\n    }`;
  });

  const output = `import type { EventData } from './types';

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
  bracketType: 'group-16',
  bracketTitle: 'TEPOK BULU TOURNAMENT',

  categories: [
${categoryBlocks.join(',\n')}
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
`;

  await writeFile(OUTPUT_PATH, output, 'utf-8');
  console.log(`Berhasil! badminton.ts ter-update di ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
