// ============================================================
// MasterchefLeaderboard.tsx
// Tabel perolehan poin Si Jago Masak — 8 tim.
// Data diisi di masterchef.ts, komponen ini hanya render.
// Poin terbesar = peringkat tertinggi.
// ============================================================

// ── Visual constants (konsisten dengan ShootingCompetition) ──
const GOLD   = '#f3d898';
const DARK   = '#1a1c1d';
const DARKER = '#141516';

export interface MasterchefTeam {
  name: string;   // Nama peserta / tim
  unit: string;   // Unit Utama
  point: number;  // Perolehan poin (0 = belum ada hasil)
}

interface Props {
  teams: MasterchefTeam[];
  title?: string;         // Judul header, default 'Si Jago Masak'
  subtitle?: string;      // Subjudul, default 'Poin Tertinggi Adalah Pemenang'
}

export default function MasterchefLeaderboard({ teams, title = 'Si Jago Masak', subtitle = 'Poin Tertinggi Adalah Pemenang' }: Props) {
  // Selalu urutkan dari poin terbesar ke terkecil
  const sorted = [...teams].sort((a, b) => b.point - a.point);

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
            {title}
            </h3>
            <p
              className="mt-1 text-xs uppercase tracking-widest"
              style={{ color: 'white', opacity: 0.55, letterSpacing: '0.2em' }}
            >
            {subtitle}
            </p>
          </div>

          {/* Legend kolom */}
          <div
            className="ml-auto hidden md:flex items-center gap-6 text-xs"
            style={{ color: 'white', opacity: 0.5 }}
          >
            <span className="uppercase tracking-wider">Nama</span>
            <span className="uppercase tracking-wider">Unit Utama</span>
            <span
              className="uppercase tracking-wider font-bold"
              style={{ color: GOLD, opacity: 1 }}
            >
              Perolehan Point
            </span>
          </div>
        </div>
      </div>

      {/* ── Baris Leaderboard ───────────────────────────────── */}
      <div className="divide-y" style={{ borderColor: '#2e3133' }}>
        {sorted.map((team, idx) => {
          const rank     = idx + 1;
          const isFirst  = rank === 1;
          const hasPoint = team.point > 0;

          return (
            <div
              key={`${team.name}-${team.unit}`}
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
                  fontSize: 14,
                  clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
                }}
              >
                {rank}
              </div>

              {/* Nama peserta */}
              <div
                className="text-sm font-bold uppercase tracking-wide shrink-0"
                style={{
                  color: isFirst ? GOLD : 'white',
                  minWidth: 80,
                  maxWidth: 140,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {team.name}
              </div>

              {/* Unit Utama */}
              <div
                className="flex-1 min-w-0 text-xs uppercase tracking-wide truncate"
                style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}
              >
                {team.unit}
              </div>

              {/* Perolehan poin */}
              <span
                className="font-black text-base font-mono shrink-0"
                style={{
                  color: isFirst ? GOLD : hasPoint ? 'white' : 'rgba(255,255,255,0.25)',
                  minWidth: 60,
                  textAlign: 'center',
                  background: isFirst
                    ? 'rgba(243,216,152,0.12)'
                    : 'rgba(255,255,255,0.06)',
                  padding: '2px 12px',
                  clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
                }}
              >
                {hasPoint ? team.point : '—'}
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
        Peringkat diurutkan otomatis dari perolehan point terbesar ke terkecil
      </div>
    </div>
  );
}
