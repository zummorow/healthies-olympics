// ============================================================
// RelayRunningLeaderboard.tsx
// Tabel perolehan waktu lari estafet — 16 tim.
// Data diisi di relay-running.ts, komponen ini hanya render.
// Waktu terkecil = peringkat tertinggi (tercepat menang).
// ============================================================

// ── Visual constants (konsisten dengan ShootingCompetition) ──
const GOLD   = '#f3d898';
const DARK   = '#1a1c1d';
const DARKER = '#141516';

export interface RelayTeam {
  teamName: string;  // Nama tim
  unit: string;      // Unit Utama
  time: string;      // Perolehan waktu, format "MM:SS.ms" misal "02:34.50"
                     // Kosongkan string ("") jika belum ada hasil.
}

// ── Helper: parse waktu "MM:SS.ms" ke total milidetik ────────
// Digunakan untuk keperluan sorting saja, bukan tampilan.
function parseTime(t: string): number {
  if (!t) return Infinity; // tim tanpa waktu ditaruh paling bawah
  const [minSec, ms = '0'] = t.split('.');
  const [min, sec] = minSec.split(':').map(Number);
  return (min * 60 + sec) * 1000 + Number(ms.padEnd(3, '0'));
}

interface Props {
  teams: RelayTeam[];
}

export default function RelayRunningLeaderboard({ teams }: Props) {
  // Selalu urutkan dari waktu terkecil (tercepat) ke terbesar
  const sorted = [...teams].sort((a, b) => parseTime(a.time) - parseTime(b.time));

  return (
    <div className="rounded-sm overflow-hidden" style={{ background: DARK }}>

      {/* ── Header ─────────────────────────────────────────── */}
      <div className="px-6 py-5 border-b" style={{ borderColor: '#2e3133' }}>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <h3
              className="uppercase leading-none"
              style={{
                color: GOLD,
                fontSize: 'clamp(18px, 2.5vw, 30px)',
                fontWeight: 900,
                letterSpacing: '0.08em',
              }}
            >
              Relay Running
            </h3>
            <p
              className="mt-1 text-xs uppercase tracking-widest"
              style={{ color: 'white', opacity: 0.55, letterSpacing: '0.2em' }}
            >
              Waktu Tercepat Adalah Pemenang
            </p>
          </div>

          {/* Legend kolom — tampil di kanan header */}
          <div
            className="ml-auto hidden md:flex items-center gap-6 text-xs"
            style={{ color: 'white', opacity: 0.5 }}
          >
            <span className="uppercase tracking-wider">Nama Tim</span>
            <span className="uppercase tracking-wider">Unit Utama</span>
            <span
              className="uppercase tracking-wider font-bold"
              style={{ color: GOLD, opacity: 1 }}
            >
              Perolehan Waktu
            </span>
          </div>
        </div>
      </div>

      {/* ── Baris Leaderboard ───────────────────────────────── */}
      <div className="divide-y" style={{ borderColor: '#2e3133' }}>
        {sorted.map((team, idx) => {
          const rank    = idx + 1;
          const isFirst = rank === 1;
          const hasTime = Boolean(team.time);

          return (
            <div
              key={`${team.teamName}-${team.unit}`}
              className="flex items-center gap-4 px-6 py-4 transition-colors"
              style={{
                background: isFirst
                  ? '#2e2d1a'                                     // highlight juara
                  : rank % 2 === 0 ? '#202224' : '#1d1f20',      // stripe genap/ganjil
              }}
            >
              {/* Badge peringkat */}
              <div
                className="flex items-center justify-center shrink-0 font-black"
                style={{
                  width: 36,
                  height: 36,
                  background: isFirst ? GOLD : '#2a2d2f',
                  color: isFirst ? DARKER : 'white',
                  fontSize: 13,
                  clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
                }}
              >
                {rank}
              </div>

              {/* Nama tim */}
              <div
                className="text-sm font-bold uppercase tracking-wide shrink-0"
                style={{
                  color: isFirst ? GOLD : 'white',
                  minWidth: 80,
                  maxWidth: 120,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {team.teamName}
              </div>

              {/* Unit Utama */}
              <div
                className="flex-1 min-w-0 text-xs uppercase tracking-wide truncate"
                style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}
              >
                {team.unit}
              </div>

              {/* Perolehan waktu */}
              <span
                className="font-black text-base font-mono shrink-0"
                style={{
                  color: isFirst ? GOLD : hasTime ? 'white' : 'rgba(255,255,255,0.25)',
                  minWidth: 80,
                  textAlign: 'center',
                  background: isFirst
                    ? 'rgba(243,216,152,0.12)'
                    : 'rgba(255,255,255,0.06)',
                  padding: '2px 12px',
                  clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
                }}
              >
                {hasTime ? team.time : '—'}
              </span>
            </div>
          );
        })}
      </div>

      {/* ── Footer note ────────────────────────────────────── */}
      <div
        className="px-6 py-4 flex items-center gap-3 text-xs uppercase tracking-widest"
        style={{ background: '#161818', color: 'white', borderTop: '1px solid #2e3133' }}
      >
        <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: GOLD }} />
        Peringkat diurutkan otomatis dari perolehan waktu terkecil ke terbesar
      </div>
    </div>
  );
}
