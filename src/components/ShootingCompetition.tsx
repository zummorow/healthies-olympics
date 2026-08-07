// ShootingCompetition.tsx
// Kompetisi tembak — format: poin tertinggi = pemenang

const GOLD = '#f3d898';
const DARK = '#1a1c1d';
const DARKER = '#141516';

interface Shooter {
  rank: number;
  name: string;
  unit: string;
  round1: number;
  round2: number;
  round3: number;
  total: number;
  isWinner?: boolean;
}

// Placeholder data — ganti dengan data aktual peserta
const shooters: Shooter[] = [
  { rank: 1, name: 'Nama Peserta', unit: 'Unit Kerja', round1: 0, round2: 0, round3: 0, total: 0, isWinner: true },
  { rank: 2, name: 'Nama Peserta', unit: 'Unit Kerja', round1: 0, round2: 0, round3: 0, total: 0 },
  { rank: 3, name: 'Nama Peserta', unit: 'Unit Kerja', round1: 0, round2: 0, round3: 0, total: 0 },
  { rank: 4, name: 'Nama Peserta', unit: 'Unit Kerja', round1: 0, round2: 0, round3: 0, total: 0 },
  { rank: 5, name: 'Nama Peserta', unit: 'Unit Kerja', round1: 0, round2: 0, round3: 0, total: 0 },
  { rank: 6, name: 'Nama Peserta', unit: 'Unit Kerja', round1: 0, round2: 0, round3: 0, total: 0 },
  { rank: 7, name: 'Nama Peserta', unit: 'Unit Kerja', round1: 0, round2: 0, round3: 0, total: 0 },
  { rank: 8, name: 'Nama Peserta', unit: 'Unit Kerja', round1: 0, round2: 0, round3: 0, total: 0 },
];

export default function ShootingCompetition() {
  return (
    <div className="rounded-sm overflow-hidden" style={{ background: DARK }}>
      {/* Header */}
      <div className="px-6 py-5 border-b" style={{ borderColor: '#2e3133' }}>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <h3
              className="uppercase leading-none"
              style={{ color: GOLD, fontSize: 'clamp(18px, 2.5vw, 30px)', fontWeight: 900, letterSpacing: '0.08em' }}
            >
              Shooting Competition
            </h3>
            <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: 'white', opacity: 0.55, letterSpacing: '0.2em' }}>
              Format: Poin Tertinggi Adalah Pemenang
            </p>
          </div>
          {/* Legend */}
          <div className="ml-auto flex items-center gap-6 text-xs" style={{ color: 'white', opacity: 0.5 }}>
            <span className="uppercase tracking-wider">Round 1</span>
            <span className="uppercase tracking-wider">Round 2</span>
            <span className="uppercase tracking-wider">Round 3</span>
            <span className="uppercase tracking-wider font-bold" style={{ color: GOLD, opacity: 1 }}>Total</span>
          </div>
        </div>
      </div>

      {/* Leaderboard rows */}
      <div className="divide-y" style={{ borderColor: '#2e3133' }}>
        {shooters.map((s) => (
          <div
            key={s.rank}
            className="flex items-center gap-4 px-6 py-4 transition-colors"
            style={{
              background: s.isWinner ? '#2e2d1a' : s.rank % 2 === 0 ? '#202224' : '#1d1f20',
            }}
          >
            {/* Rank badge */}
            <div
              className="flex items-center justify-center shrink-0 font-black"
              style={{
                width: 36,
                height: 36,
                background: s.isWinner ? GOLD : '#2a2d2f',
                color: s.isWinner ? DARKER : 'rgba(255,255,255,0.4)',
                fontSize: 14,
                clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
              }}
            >
              {s.rank}
            </div>

            {/* Name & unit */}
            <div className="flex-1 min-w-0">
              <div
                className="text-sm font-semibold uppercase tracking-wide truncate"
                style={{ color: s.isWinner ? GOLD : 'rgba(255,255,255,0.9)' }}
              >
                {s.name}
              </div>
              <div className="text-xs uppercase truncate" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                {s.unit}
              </div>
            </div>

            {/* Round scores */}
            <div className="flex items-center gap-6 text-sm font-mono shrink-0">
              <span style={{ color: 'rgba(255,255,255,0.55)', minWidth: 28, textAlign: 'center' }}>{s.round1}</span>
              <span style={{ color: 'rgba(255,255,255,0.55)', minWidth: 28, textAlign: 'center' }}>{s.round2}</span>
              <span style={{ color: 'rgba(255,255,255,0.55)', minWidth: 28, textAlign: 'center' }}>{s.round3}</span>
              {/* Total */}
              <span
                className="font-black text-base"
                style={{
                  color: s.isWinner ? GOLD : 'rgba(255,255,255,0.85)',
                  minWidth: 40,
                  textAlign: 'center',
                  background: s.isWinner ? 'rgba(243,216,152,0.12)' : 'rgba(255,255,255,0.06)',
                  padding: '2px 8px',
                  clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
                }}
              >
                {s.total}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div
        className="px-6 py-4 flex items-center gap-3 text-xs uppercase tracking-widest"
        style={{ background: '#161818', color: 'rgba(255,255,255,0.35)', borderTop: '1px solid #2e3133' }}
      >
        <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: GOLD }} />
        Pemenang ditentukan dari akumulasi poin tertinggi dari semua round
      </div>
    </div>
  );
}
