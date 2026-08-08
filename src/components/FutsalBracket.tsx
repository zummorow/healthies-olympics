import type { TeamSlot } from '../events/types';

// ── Visual constants (sama dengan MobileLegendBracket) ────────
const GOLD   = '#f3d898';
const DARK   = '#1a1c1d';
const DARKER = '#141516';
const LINE   = '#4a4d4f';

const SLOT_CLIP_L = 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)';
const SLOT_CLIP_R = 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)';

// ── Dimensi slot ──────────────────────────────────────────────
const SLOT_H   = 56;  // tinggi tiap slot tim
const SLOT_GAP = 12;  // jarak antar slot
const D        = SLOT_H + SLOT_GAP;             // pitch vertikal
const CONN_W   = 36;                             // lebar konektor SVG
const FULL_H   = 4 * SLOT_H + 3 * SLOT_GAP;    // total tinggi (4 tim per sisi)

// ── Posisi Y untuk setiap level ───────────────────────────────
// Level 0: 4 tim  →  Y0[0..3]
const Y0 = Array.from({ length: 4 }, (_, i) => i * D + SLOT_H / 2);
// Level 1: 2 pemenang QF  →  tengah antara pasangan tim
const Y1 = Array.from({ length: 2 }, (_, i) => (Y0[i * 2] + Y0[i * 2 + 1]) / 2);
// Level 2: Finalist  →  tengah antara 2 pemenang QF
const Y2 = (Y1[0] + Y1[1]) / 2;

// ── TeamSlotBox ───────────────────────────────────────────────
// Menampilkan satu tim pada kolom paling luar.
function TeamSlotBox({
  team,
  align,
  y,
}: {
  team: TeamSlot;
  align: 'left' | 'right';
  y: number;
}) {
  const clip    = align === 'left' ? SLOT_CLIP_L : SLOT_CLIP_R;
  const isRight = align === 'right';
  return (
    <div
      className="absolute flex items-center"
      style={{
        clipPath: clip,
        width: 180,
        height: SLOT_H,
        top: y - SLOT_H / 2,
        ...(isRight ? { right: 0 } : { left: 0 }),
      }}
    >
      {/* Background slot */}
      <div
        className="absolute inset-0"
        style={{
          background: '#2a2d2f',
          borderTop: `1px solid ${GOLD}30`,
          borderBottom: `1px solid ${GOLD}30`,
        }}
      />
      {/* Accent bar sisi luar */}
      {!isRight && <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: GOLD + '99' }} />}
      {isRight  && <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ background: GOLD + '99' }} />}

      {/* Nama tim + skor */}
      <div className={`relative z-10 px-5 w-full flex flex-col gap-[2px] ${isRight ? 'items-end' : 'items-start'}`}>
        <span
          className={`text-[10px] uppercase tracking-widest font-semibold truncate w-full
            ${team.isWinner ? 'text-[#f3d898]' : 'text-white/80'}
            ${isRight ? 'text-right' : ''}`}
          style={{ letterSpacing: '0.12em' }}
        >
          {team.name}
        </span>
        {/* Skor — hanya tampil jika field score diisi */}
        {team.score !== undefined && (
          <span
            className={`text-[9px] font-mono tracking-widest
              ${team.isWinner ? 'text-[#f3d898]/70' : 'text-white/40'}
              ${isRight ? 'text-right' : ''}`}
            style={{ letterSpacing: '0.1em' }}
          >
            {team.score}
          </span>
        )}
      </div>
    </div>
  );
}

// ── WinnerSlotBox ─────────────────────────────────────────────
// Menampilkan slot pemenang (QF winner / Finalist).
function WinnerSlotBox({
  team,
  placeholder,
  align,
  highlight,
  y,
  left,
}: {
  team?: TeamSlot;
  placeholder: string;
  align: 'left' | 'right';
  highlight?: boolean;
  y: number;
  left?: number;
}) {
  const clip    = align === 'left' ? SLOT_CLIP_L : SLOT_CLIP_R;
  const hasName = team && team.name;
  const isGold  = highlight || (hasName && team.isWinner);
  return (
    <div
      className="absolute flex items-center"
      style={{
        clipPath: clip,
        width: 140,
        height: SLOT_H,
        top: y - SLOT_H / 2,
        ...(align === 'left' ? { left } : { right: left }),
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: isGold ? '#2e2d20' : '#252729',
          borderTop: `1px solid ${GOLD}40`,
          borderBottom: `1px solid ${GOLD}40`,
        }}
      />
      {align === 'left'  && <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: GOLD + '50' }} />}
      {align === 'right' && <div className="absolute right-0 top-0 bottom-0 w-[2px]" style={{ background: GOLD + '50' }} />}
      <span
        className={`relative z-10 px-4 text-[10px] uppercase tracking-widest w-full truncate
          ${isGold ? 'text-[#f3d898]/90 font-semibold' : 'text-white/50 italic'}
          ${align === 'right' ? 'text-right' : ''}`}
        style={{ letterSpacing: '0.1em' }}
      >
        {hasName ? team!.name : placeholder}
      </span>
    </div>
  );
}

// ── SVG Connector ─────────────────────────────────────────────
// Garis penghubung antar level (bracket arm).
function Connector({
  yTop,
  yBot,
  x,
  align,
  width,
}: {
  yTop: number;
  yBot: number;
  x: number;
  align: 'left' | 'right';
  width: number;
}) {
  const yMid   = (yTop + yBot) / 2;
  const isLeft = align === 'left';
  return (
    <svg
      className="absolute"
      style={{ width, height: FULL_H, top: 0, ...(isLeft ? { left: x } : { right: x }) }}
      aria-hidden
    >
      {isLeft ? (
        <>
          <path d={`M 0 ${yTop} L ${width / 2} ${yTop} L ${width / 2} ${yMid} L 0 ${yBot}`} fill="none" stroke={LINE} strokeWidth="1.5" />
          <path d={`M ${width / 2} ${yMid} L ${width} ${yMid}`} fill="none" stroke={LINE} strokeWidth="1.5" />
        </>
      ) : (
        <>
          <path d={`M ${width} ${yTop} L ${width / 2} ${yTop} L ${width / 2} ${yMid} L ${width} ${yBot}`} fill="none" stroke={LINE} strokeWidth="1.5" />
          <path d={`M ${width / 2} ${yMid} L 0 ${yMid}`} fill="none" stroke={LINE} strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}

// ── HalfBracket (4 tim per sisi) ─────────────────────────────
// Merender satu sisi: 4 tim → 2 QF winners → 1 Finalist.
interface HalfProps {
  side: 'left' | 'right';
  groupLabel: string;
  teams: TeamSlot[];                              // Tepat 4 tim
  sfWinners?: (TeamSlot | undefined)[];           // 2 pemenang QF
  finalist?: TeamSlot;                            // 1 finalis
}

function HalfBracket({ side, groupLabel, teams, sfWinners, finalist }: HalfProps) {
  const align   = side;
  const isRight = side === 'right';

  const labelClip = isRight
    ? 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)'
    : 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)';

  // Lebar dan posisi setiap kolom
  const W0      = 180;   // lebar slot tim
  const W1      = 140;   // lebar slot QF winner
  const W2      = 140;   // lebar slot finalist
  const X_CONN0 = W0;
  const X_WIN1  = X_CONN0 + CONN_W;
  const X_CONN1 = X_WIN1 + W1;
  const X_WIN2  = X_CONN1 + CONN_W;
  const totalW  = X_WIN2 + W2;

  return (
    <div className="relative" style={{ width: totalW, height: FULL_H + 50, paddingTop: 50 }}>
      {/* Label grup */}
      <div
        className="absolute top-0 px-5 py-1 text-xs font-bold uppercase tracking-widest"
        style={{
          background: GOLD,
          color: DARKER,
          clipPath: labelClip,
          letterSpacing: '0.15em',
          ...(isRight ? { right: 0 } : { left: 0 }),
        }}
      >
        {groupLabel}
      </div>

      <div className="relative w-full h-full">
        {/* Level 0: 4 slot tim */}
        {teams.map((t, i) => (
          <TeamSlotBox key={i} team={t} align={align} y={Y0[i]} />
        ))}

        {/* Konektor Lv0 → Lv1 (pasangan QF: 0-1 dan 2-3) */}
        {Y1.map((_, i) => (
          <Connector key={`c0-${i}`} yTop={Y0[i * 2]} yBot={Y0[i * 2 + 1]} x={X_CONN0} align={align} width={CONN_W} />
        ))}

        {/* Level 1: 2 slot QF Winners */}
        {Y1.map((y, i) => (
          <WinnerSlotBox
            key={`sf-${i}`}
            team={sfWinners?.[i]}
            placeholder="Winner"
            align={align}
            y={y}
            left={X_WIN1}
          />
        ))}

        {/* Konektor Lv1 → Finalist */}
        <Connector yTop={Y1[0]} yBot={Y1[1]} x={X_CONN1} align={align} width={CONN_W} />

        {/* Level 2: Finalist */}
        <WinnerSlotBox
          team={finalist}
          placeholder="Finalist"
          align={align}
          highlight
          y={Y2}
          left={X_WIN2}
        />
      </div>
    </div>
  );
}

// ── CenterColumn ──────────────────────────────────────────────
function CenterColumn() {
  return (
    <div className="flex flex-col items-center justify-center shrink-0 self-stretch relative" style={{ width: 120 }}>
      <div className="absolute left-1/2 top-0 bottom-0" style={{ width: 1, background: LINE, transform: 'translateX(-50%)' }} />
      <div className="flex flex-col items-center gap-3 relative z-10">
        <span
          className="text-[10px] uppercase tracking-[0.25em] font-semibold"
          style={{ color: 'white', opacity: 0.6 }}
        >
          Champion
        </span>
        <div
          className="flex items-center justify-center rounded-full"
          style={{ width: 72, height: 72, background: GOLD, boxShadow: `0 0 28px ${GOLD}55` }}
        >
          <span
            style={{ color: DARKER, fontWeight: 900, fontSize: 22, letterSpacing: '0.08em', lineHeight: 1, fontFamily: 'inherit' }}
          >
            VS
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Tipe data bracket futsal 8-tim ────────────────────────────
// Gunakan tipe ini di futsal.ts untuk mengisi data bracket.
export interface FutsalBracketData {
  title: string;
  subtitle: string;
  // Sisi kiri — 4 tim (Group A)
  left: {
    label: string;
    teams: TeamSlot[];                            // Tepat 4 tim
    sfWinners?: [TeamSlot | undefined, TeamSlot | undefined]; // Pemenang QF1 & QF2
    finalist?: TeamSlot;                          // Finalis kiri
  };
  // Sisi kanan — 4 tim (Group B)
  right: {
    label: string;
    teams: TeamSlot[];                            // Tepat 4 tim
    sfWinners?: [TeamSlot | undefined, TeamSlot | undefined]; // Pemenang QF3 & QF4
    finalist?: TeamSlot;                          // Finalis kanan
  };
}

// ── Main export ───────────────────────────────────────────────
export default function FutsalBracket({ data }: { data: FutsalBracketData }) {
  return (
    <div className="rounded-sm overflow-hidden" style={{ background: DARK }}>
      {/* Header judul */}
      <div className="text-center pt-10 pb-6 px-4">
        <h3
          className="uppercase leading-none"
          style={{ color: GOLD, fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 900, letterSpacing: '0.08em', fontFamily: 'inherit' }}
        >
          {data.title}
        </h3>
        <p
          className="mt-3 uppercase"
          style={{ color: 'white', opacity: 0.65, fontSize: 12, letterSpacing: '0.28em', fontFamily: 'inherit' }}
        >
          {data.subtitle}
        </p>
      </div>

      {/* Bracket — scroll horizontal di mobile */}
      <div className="overflow-x-auto pb-10 px-4 md:px-8">
        <div className="mx-auto flex items-center justify-center" style={{ minWidth: 800, gap: 0 }}>
          <HalfBracket
            side="left"
            groupLabel={data.left.label}
            teams={data.left.teams}
            sfWinners={data.left.sfWinners}
            finalist={data.left.finalist}
          />
          <CenterColumn />
          <HalfBracket
            side="right"
            groupLabel={data.right.label}
            teams={data.right.teams}
            sfWinners={data.right.sfWinners}
            finalist={data.right.finalist}
          />
        </div>
      </div>
    </div>
  );
}
