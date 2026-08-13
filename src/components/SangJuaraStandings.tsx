// ============================================================
// SangJuaraStandings.tsx
// Menampilkan daftar peserta + Juara 1 & Juara 2 saja
// tanpa keterangan perolehan poin.
// ============================================================

const GOLD   = '#f3d898';
const SILVER = '#c0c0c0';
const DARK   = '#1a1c1d';
const DARKER = '#141516';

export interface SangJuaraParticipant {
  name: string;   // Nama peserta / kontingen
  unit: string;   // Unit Utama
}

export interface SangJuaraWinner {
  name: string;
  unit: string;
}

interface Props {
  participants: SangJuaraParticipant[];
  juara1?: SangJuaraWinner;
  juara2?: SangJuaraWinner;
  title?: string;
  subtitle?: string;
}

export default function SangJuaraStandings({
  participants,
  juara1,
  juara2,
  title = 'Sang Juara Season III',
  subtitle = 'Daftar Peserta & Pemenang',
}: Props) {
  const hasWinners = juara1 || juara2;

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
        </div>
      </div>

      {/* ── Pemenang (Juara 1 & 2) ─────────────────────────── */}
      {hasWinners && (
        <div className="px-6 py-5 border-b" style={{ borderColor: '#2e3133', background: '#1e2020' }}>
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: GOLD, letterSpacing: '0.2em', fontWeight: 700 }}
          >
            🏆 Pemenang
          </p>
          <div className="flex flex-col gap-3">
            {juara1 && (
              <div
                className="flex items-center gap-4 px-5 py-4 rounded-sm"
                style={{ background: '#2e2d1a' }}
              >
                {/* Badge Juara 1 */}
                <div
                  className="flex items-center justify-center shrink-0 font-black text-xs uppercase"
                  style={{
                    minWidth: 72,
                    height: 36,
                    background: GOLD,
                    color: DARKER,
                    letterSpacing: '0.05em',
                    clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
                  }}
                >
                  Juara 1
                </div>
                {/* Nama */}
                <div
                  className="text-sm font-bold uppercase tracking-wide"
                  style={{ color: GOLD }}
                >
                  {juara1.name}
                </div>
                {/* Unit */}
                <div
                  className="flex-1 min-w-0 text-xs uppercase tracking-wide truncate hidden sm:block"
                  style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}
                >
                  {juara1.unit}
                </div>
              </div>
            )}

            {juara2 && (
              <div
                className="flex items-center gap-4 px-5 py-4 rounded-sm"
                style={{ background: '#222326' }}
              >
                {/* Badge Juara 2 */}
                <div
                  className="flex items-center justify-center shrink-0 font-black text-xs uppercase"
                  style={{
                    minWidth: 72,
                    height: 36,
                    background: SILVER,
                    color: DARKER,
                    letterSpacing: '0.05em',
                    clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
                  }}
                >
                  Juara 2
                </div>
                {/* Nama */}
                <div
                  className="text-sm font-bold uppercase tracking-wide"
                  style={{ color: SILVER }}
                >
                  {juara2.name}
                </div>
                {/* Unit */}
                <div
                  className="flex-1 min-w-0 text-xs uppercase tracking-wide truncate hidden sm:block"
                  style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}
                >
                  {juara2.unit}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Daftar Peserta ──────────────────────────────────── */}
      <div className="px-6 py-4 border-b" style={{ borderColor: '#2e3133' }}>
        <p
          className="text-xs uppercase tracking-widest mb-3"
          style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', fontWeight: 700 }}
        >
          Daftar Peserta
        </p>
      </div>

      <div className="divide-y" style={{ borderColor: '#2e3133' }}>
        {participants.map((p, idx) => (
          <div
            key={`${p.name}-${p.unit}`}
            className="flex items-center gap-4 px-6 py-4 transition-colors"
            style={{
              background: idx % 2 === 0 ? '#1d1f20' : '#202224',
            }}
          >
            {/* Badge nomor urut */}
            <div
              className="flex items-center justify-center shrink-0 font-black"
              style={{
                width: 36,
                height: 36,
                background: '#2a2d2f',
                color: 'white',
                fontSize: 14,
                clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
              }}
            >
              {idx + 1}
            </div>

            {/* Nama peserta */}
            <div
              className="text-sm font-bold uppercase tracking-wide shrink-0"
              style={{
                color: 'white',
                minWidth: 80,
                maxWidth: 180,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {p.name}
            </div>

            {/* Unit Utama */}
            <div
              className="flex-1 min-w-0 text-xs uppercase tracking-wide truncate"
              style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}
            >
              {p.unit}
            </div>
          </div>
        ))}
      </div>

      {/* ── Footer note ────────────────────────────────────── */}
      <div
        className="px-6 py-4 flex items-center gap-3 text-xs uppercase tracking-widest"
        style={{ background: '#161818', color: 'white', borderTop: '1px solid #2e3133' }}
      >
        <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: GOLD }} />
        {hasWinners
          ? 'Pemenang ditampilkan berdasarkan hasil kompetisi'
          : 'Pemenang akan diumumkan setelah kompetisi selesai'}
      </div>
    </div>
  );
}
