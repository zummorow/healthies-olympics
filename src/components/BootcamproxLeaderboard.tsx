import type { BootcamproxTeam } from '../events/types';

const GOLD = '#f3d898';
const DARK = '#1a1c1d';
const DARKER = '#141516';

interface BootcamproxLeaderboardProps {
  teams?: BootcamproxTeam[];
}

// Helper untuk mengubah string waktu (contoh "12:34.50" atau "10:15") menjadi total detik
function parseTimeToSeconds(timeStr: string): number {
  if (!timeStr || timeStr.trim() === '-' || timeStr.trim() === '' || timeStr.trim().toUpperCase() === 'TBA') {
    return Infinity; // Yang belum ada waktu diposisikan di paling bawah
  }

  try {
    const parts = timeStr.trim().split(':').map(p => parseFloat(p));
    if (parts.some(isNaN)) return Infinity;

    if (parts.length === 3) {
      // HH:MM:SS
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      // MM:SS
      return parts[0] * 60 + parts[1];
    } else if (parts.length === 1) {
      // SS
      return parts[0];
    }
  } catch {
    return Infinity;
  }

  return Infinity;
}

export default function BootcamproxLeaderboard({ teams = [] }: BootcamproxLeaderboardProps) {
  // Sortir otomatis dari perolehan waktu terkecil ke terbesar
  const sortedTeams = [...teams].sort((a, b) => {
    const secA = parseTimeToSeconds(a.time);
    const secB = parseTimeToSeconds(b.time);
    return secA - secB;
  });

  return (
    <div className="rounded-sm overflow-hidden" style={{ background: DARK }}>
      {/* Header Tabel */}
      <div className="px-6 py-5 border-b" style={{ borderColor: '#2e3133' }}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3
              className="uppercase leading-none"
              style={{ color: GOLD, fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 900, letterSpacing: '0.08em' }}
            >
              BOOTCAMPROX TIME LEADERBOARD
            </h3>
            <p className="mt-1.5 text-xs uppercase tracking-widest" style={{ color: 'white', opacity: 0.55, letterSpacing: '0.2em' }}>
              Format: Perolehan Waktu Tercepat Adalah Pemenang
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="text-xs uppercase font-bold tracking-widest px-3 py-1.5 border"
              style={{ color: GOLD, borderColor: `${GOLD}40`, background: `${GOLD}10` }}
            >
              16 TIM PESERTA
            </span>
          </div>
        </div>
      </div>

      {/* Judul Kolom Tabel */}
      <div
        className="grid grid-cols-[60px_1.5fr_2fr_1.2fr] md:grid-cols-[70px_2fr_2.5fr_1.5fr] items-center px-6 py-3 text-xs uppercase font-bold tracking-wider border-b"
        style={{ background: DARKER, color: 'rgba(255,255,255,0.6)', borderColor: '#2e3133', letterSpacing: '0.12em' }}
      >
        <div className="text-center">Rank</div>
        <div>Nama Tim</div>
        <div>Unit Utama</div>
        <div className="text-right">Perolehan Waktu</div>
      </div>

      {/* Baris-Baris Data 16 Tim */}
      <div className="divide-y" style={{ borderColor: '#2e3133' }}>
        {sortedTeams.map((team, index) => {
          const rank = index + 1;
          const isWinner = rank === 1 && team.time !== '-' && team.time !== '';
          const isTop3 = (rank === 2 || rank === 3) && team.time !== '-' && team.time !== '';

          return (
            <div
              key={`${team.teamName}-${index}`}
              className="grid grid-cols-[60px_1.5fr_2fr_1.2fr] md:grid-cols-[70px_2fr_2.5fr_1.5fr] items-center px-6 py-3.5 transition-colors hover:bg-white/[0.02]"
              style={{
                background: isWinner
                  ? '#2e2d1a'
                  : isTop3
                  ? '#252621'
                  : index % 2 === 0
                  ? '#202224'
                  : '#1d1f20',
              }}
            >
              {/* Rank Badge */}
              <div className="flex justify-center">
                <div
                  className="flex items-center justify-center shrink-0 font-black"
                  style={{
                    width: 36,
                    height: 36,
                    background: isWinner ? GOLD : isTop3 ? '#3d3928' : '#2a2d2f',
                    color: isWinner ? DARKER : isTop3 ? GOLD : 'white',
                    fontSize: 14,
                    clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
                  }}
                >
                  {rank}
                </div>
              </div>

              {/* Nama Tim */}
              <div className="pr-2 min-w-0">
                <div
                  className="text-sm font-semibold uppercase tracking-wide truncate"
                  style={{ color: isWinner ? GOLD : 'white' }}
                >
                  {team.teamName || 'TBA'}
                </div>
              </div>

              {/* Unit Utama */}
              <div className="pr-2 min-w-0">
                <div className="text-xs uppercase truncate" style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.08em' }}>
                  {team.unit || '-'}
                </div>
              </div>

              {/* Perolehan Waktu */}
              <div className="flex justify-end">
                <span
                  className="font-black text-sm md:text-base font-mono tracking-wider"
                  style={{
                    color: isWinner ? GOLD : team.time && team.time !== '-' ? 'white' : 'rgba(255,255,255,0.4)',
                    background: isWinner
                      ? 'rgba(243,216,152,0.18)'
                      : team.time && team.time !== '-'
                      ? 'rgba(255,255,255,0.08)'
                      : 'rgba(255,255,255,0.03)',
                    padding: '4px 12px',
                    clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
                    borderLeft: isWinner ? `2px solid ${GOLD}` : 'none',
                  }}
                >
                  {team.time || '-'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Catatan Kaki (Footer Note) */}
      <div
        className="px-6 py-4 flex items-center gap-3 text-xs uppercase tracking-widest"
        style={{ background: '#161818', color: 'white', borderTop: '1px solid #2e3133' }}
      >
        <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: GOLD }} />
        Peringkat otomatis disortir dari Perolehan Waktu terkecil (tercepat) ke terbesar
      </div>
    </div>
  );
}
