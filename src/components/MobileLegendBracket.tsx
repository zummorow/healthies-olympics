import type { GroupBracketData, TeamSlot } from '../events/types';

// ── Visual constants ──────────────────────────────────────────
const GOLD = '#f3d898';
const DARK = '#1a1c1d';
const DARKER = '#141516';
const LINE = '#4a4d4f';
const SLOT_CLIP_L = 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)';
const SLOT_CLIP_R = 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)';

const SLOT_H = 44;
const SLOT_GAP = 12;
const D = SLOT_H + SLOT_GAP;
const CONNECTOR_W = 36;
const FULL_H = 8 * SLOT_H + 7 * SLOT_GAP;

const Y0 = Array.from({ length: 8 }, (_, i) => i * D + SLOT_H / 2);
const Y1 = Array.from({ length: 4 }, (_, i) => (Y0[i * 2] + Y0[i * 2 + 1]) / 2);
const Y2 = Array.from({ length: 2 }, (_, i) => (Y1[i * 2] + Y1[i * 2 + 1]) / 2);
const Y3 = (Y2[0] + Y2[1]) / 2;

// ── Team slot box ─────────────────────────────────────────────
function TeamSlotBox({ team, align, y }: { team: TeamSlot; align: 'left' | 'right'; y: number }) {
  const clip = align === 'left' ? SLOT_CLIP_L : SLOT_CLIP_R;
  return (
    <div
      className="absolute flex items-center"
      style={{ clipPath: clip, width: 180, height: SLOT_H, top: y - SLOT_H / 2, ...(align === 'left' ? { left: 0 } : { right: 0 }) }}
    >
      <div className="absolute inset-0" style={{ background: '#2a2d2f', borderTop: `1px solid ${GOLD}30`, borderBottom: `1px solid ${GOLD}30` }} />
      {align === 'left' && <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: GOLD + '99' }} />}
      {align === 'right' && <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ background: GOLD + '99' }} />}
      <span
        className={`relative z-10 px-5 text-[10px] uppercase tracking-widest font-semibold truncate w-full ${team.isWinner ? 'text-[#f3d898]' : 'text-white/80'} ${align === 'right' ? 'text-right' : ''}`}
        style={{ fontFamily: 'inherit', letterSpacing: '0.12em' }}
      >
        {team.name}
      </span>
    </div>
  );
}

// ── Winner/Finalist slot box — menampilkan nama tim atau placeholder ──
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
  const clip = align === 'left' ? SLOT_CLIP_L : SLOT_CLIP_R;
  const hasName = team && team.name;
  const isGold = highlight || (hasName && team.isWinner);
  return (
    <div
      className="absolute flex items-center"
      style={{ clipPath: clip, width: 140, height: SLOT_H, top: y - SLOT_H / 2, ...(align === 'left' ? { left } : { right: left }) }}
    >
      <div className="absolute inset-0" style={{ background: isGold ? '#2e2d20' : '#252729', borderTop: `1px solid ${GOLD}40`, borderBottom: `1px solid ${GOLD}40` }} />
      {align === 'left' && <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: GOLD + '50' }} />}
      {align === 'right' && <div className="absolute right-0 top-0 bottom-0 w-[2px]" style={{ background: GOLD + '50' }} />}
      <span
        className={`relative z-10 px-4 text-[10px] uppercase tracking-widest w-full truncate ${isGold ? 'text-[#f3d898]/90 font-semibold' : 'text-white/50 italic'} ${align === 'right' ? 'text-right' : ''}`}
        style={{ letterSpacing: '0.1em' }}
      >
        {hasName ? team!.name : placeholder}
      </span>
    </div>
  );
}

// ── SVG Connector ─────────────────────────────────────────────
function Connector({ yTop, yBot, x, align, width }: { yTop: number; yBot: number; x: number; align: 'left' | 'right'; width: number }) {
  const yMid = (yTop + yBot) / 2;
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

interface HalfProps {
  side: 'left' | 'right';
  groupLabel: string;
  teams: TeamSlot[];           // 8 teams — level 0
  // Q1 winners (4 slot), Q2 winners (2 slot), Finalist (1 slot)
  // Disuplai dari data agar nama bisa dikustomisasi
  q1Winners?: (TeamSlot | undefined)[];   // 4 items
  q2Winners?: (TeamSlot | undefined)[];   // 2 items
  finalist?: TeamSlot;
}

function BracketHalf({ side, groupLabel, teams, q1Winners, q2Winners, finalist }: HalfProps) {
  const align = side;
  const isRight = side === 'right';

  const labelClip = isRight
    ? 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)'
    : 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)';

  const W0 = 180;
  const W1 = 140;
  const W2 = 140;
  const X_CONN0 = W0;
  const X_WIN1 = X_CONN0 + CONNECTOR_W;
  const X_CONN1 = X_WIN1 + W1;
  const X_WIN2 = X_CONN1 + CONNECTOR_W;
  const X_CONN2 = X_WIN2 + W2;
  const X_WIN3 = X_CONN2 + CONNECTOR_W;
  const totalWidth = X_WIN3 + W2;

  return (
    <div className="relative" style={{ width: totalWidth, height: FULL_H + 50, paddingTop: 50 }}>
      {/* Group label badge */}
      <div
        className="absolute top-0 px-5 py-1 text-xs font-bold uppercase tracking-widest"
        style={{ background: GOLD, color: DARKER, clipPath: labelClip, letterSpacing: '0.15em', ...(isRight ? { right: 0 } : { left: 0 }) }}
      >
        {groupLabel}
      </div>

      <div className="relative w-full h-full">
        {/* Level 0: Team slots */}
        {teams.map((t, i) => (
          <TeamSlotBox key={i} team={t} align={align} y={Y0[i]} />
        ))}

        {/* Connectors Lv0 → Lv1 */}
        {Y1.map((_, i) => (
          <Connector key={`c0-${i}`} yTop={Y0[i * 2]} yBot={Y0[i * 2 + 1]} x={X_CONN0} align={align} width={CONNECTOR_W} />
        ))}

        {/* Level 1: Q1 Winners */}
        {Y1.map((y, i) => (
          <WinnerSlotBox key={`w1-${i}`} team={q1Winners?.[i]} placeholder="Winner" align={align} y={y} left={X_WIN1} />
        ))}

        {/* Connectors Lv1 → Lv2 */}
        {Y2.map((_, i) => (
          <Connector key={`c1-${i}`} yTop={Y1[i * 2]} yBot={Y1[i * 2 + 1]} x={X_CONN1} align={align} width={CONNECTOR_W} />
        ))}

        {/* Level 2: Q2 Winners */}
        {Y2.map((y, i) => (
          <WinnerSlotBox key={`w2-${i}`} team={q2Winners?.[i]} placeholder="Winner" align={align} y={y} left={X_WIN2} />
        ))}

        {/* Connector Lv2 → Finalist */}
        <Connector yTop={Y2[0]} yBot={Y2[1]} x={X_CONN2} align={align} width={CONNECTOR_W} />

        {/* Finalist slot */}
        <WinnerSlotBox team={finalist} placeholder="Finalist" align={align} highlight y={Y3} left={X_WIN3} />
      </div>
    </div>
  );
}

// ── Center column: Champion + VS ──────────────────────────────
function CenterColumn() {
  return (
    <div className="flex flex-col items-center justify-center shrink-0 self-stretch relative" style={{ width: 120 }}>
      <div className="absolute left-1/2 top-0 bottom-0" style={{ width: 1, background: LINE, transform: 'translateX(-50%)' }} />
      <div className="flex flex-col items-center gap-3 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold" style={{ color: 'white', opacity: 0.6 }}>
          Champion
        </span>
        <div className="flex items-center justify-center rounded-full" style={{ width: 72, height: 72, background: GOLD, boxShadow: `0 0 28px ${GOLD}55` }}>
          <span style={{ color: DARKER, fontWeight: 900, fontSize: 22, letterSpacing: '0.08em', lineHeight: 1, fontFamily: 'inherit' }}>
            VS
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────
export default function MobileLegendBracket({ data }: { data: GroupBracketData }) {
  return (
    <div className="rounded-sm overflow-hidden" style={{ background: DARK }}>
      <div className="text-center pt-10 pb-6 px-4">
        <h3 className="uppercase leading-none" style={{ color: GOLD, fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 900, letterSpacing: '0.08em', fontFamily: 'inherit' }}>
          {data.title}
        </h3>
        <p className="mt-3 uppercase" style={{ color: 'white', opacity: 0.65, fontSize: 12, letterSpacing: '0.28em', fontFamily: 'inherit' }}>
          {data.subtitle}
        </p>
      </div>

      <div className="overflow-x-auto pb-10 px-4 md:px-8">
        <div className="mx-auto flex items-center justify-center" style={{ minWidth: 1000, gap: 0 }}>
          <BracketHalf
            side="left"
            groupLabel={data.leftTop.label}
            teams={[...data.leftTop.teams, ...data.leftBottom.teams]}
            q1Winners={[
              data.leftTop.teams.slice(0, 2).find(t => t.isWinner),
              data.leftTop.teams.slice(2, 4).find(t => t.isWinner),
              data.leftBottom.teams.slice(0, 2).find(t => t.isWinner),
              data.leftBottom.teams.slice(2, 4).find(t => t.isWinner),
            ]}
            q2Winners={[
              data.leftTop.winner,
              data.leftBottom.winner,
            ]}
            finalist={data.leftWinner}
          />
          <CenterColumn />
          <BracketHalf
            side="right"
            groupLabel={data.rightTop.label}
            teams={[...data.rightTop.teams, ...data.rightBottom.teams]}
            q1Winners={[
              data.rightTop.teams.slice(0, 2).find(t => t.isWinner),
              data.rightTop.teams.slice(2, 4).find(t => t.isWinner),
              data.rightBottom.teams.slice(0, 2).find(t => t.isWinner),
              data.rightBottom.teams.slice(2, 4).find(t => t.isWinner),
            ]}
            q2Winners={[
              data.rightTop.winner,
              data.rightBottom.winner,
            ]}
            finalist={data.rightWinner}
          />
        </div>
      </div>
    </div>
  );
}
