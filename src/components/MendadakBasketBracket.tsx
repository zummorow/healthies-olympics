import type { GroupBracketData, TeamSlot } from '../events/types';

const GOLD = '#f3d898';
const DARK = '#1a1c1d';
const DARKER = '#141516';
const LINE = '#4a4d4f';
const SLOT_CLIP_L = 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)';
const SLOT_CLIP_R = 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)';

const SLOT_H = 56;
const SLOT_GAP = 10;
const GROUP_GAP = 32;
const GROUP_H = 2 * SLOT_H + SLOT_GAP;
const CONNECTOR_W = 36;

const Q1_Y_TOP = SLOT_H / 2;
const Q1_Y_BOT = SLOT_H + SLOT_GAP + SLOT_H / 2;
const Q1_MID = (Q1_Y_TOP + Q1_Y_BOT) / 2;

const TOP_WIN_Y = Q1_MID;
const BOT_WIN_Y = GROUP_H + GROUP_GAP + Q1_MID;
const MID_WIN_Y = (TOP_WIN_Y + BOT_WIN_Y) / 2;

function TeamSlotBox({ team, align }: { team: TeamSlot; align: 'left' | 'right' }) {
  const clip = align === 'left' ? SLOT_CLIP_L : SLOT_CLIP_R;
  return (
    <div className="relative flex items-center" style={{ clipPath: clip, width: 200, height: SLOT_H }}>
      <div className="absolute inset-0" style={{ background: '#2a2d2f', borderTop: `1px solid ${GOLD}30`, borderBottom: `1px solid ${GOLD}30` }} />
      {align === 'left' && <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: GOLD + '99' }} />}
      {align === 'right' && <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ background: GOLD + '99' }} />}
      <div className={`relative z-10 px-5 flex flex-col w-full ${align === 'right' ? 'items-end' : 'items-start'}`}>
        <span className={`text-xs uppercase tracking-widest font-semibold truncate max-w-full ${team.isWinner ? 'text-[#f3d898]' : 'text-white/80'}`}>
          {team.name}
        </span>
        {team.score && (
          <span className={`text-[10px] tabular-nums mt-0.5 ${team.isWinner ? 'text-[#f3d898]/70' : 'text-white/40'}`}>
            {team.score}
          </span>
        )}
      </div>
    </div>
  );
}

function WinnerSlotBox({
  team,
  placeholder,
  align,
  highlight,
}: {
  team?: TeamSlot;
  placeholder: string;
  align: 'left' | 'right';
  highlight?: boolean;
}) {
  const clip = align === 'left' ? SLOT_CLIP_L : SLOT_CLIP_R;
  const hasName = team && team.name;
  const isGold = highlight || (hasName && team.isWinner);
  return (
    <div className="relative flex items-center" style={{ clipPath: clip, width: 200, height: SLOT_H }}>
      <div className="absolute inset-0" style={{ background: isGold ? '#2e2d20' : '#252729', borderTop: `1px solid ${GOLD}40`, borderBottom: `1px solid ${GOLD}40` }} />
      {align === 'left' && <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: GOLD + '50' }} />}
      {align === 'right' && <div className="absolute right-0 top-0 bottom-0 w-[2px]" style={{ background: GOLD + '50' }} />}
      <div className={`relative z-10 px-5 flex flex-col w-full ${align === 'right' ? 'items-end' : 'items-start'}`}>
        <span className={`text-xs uppercase tracking-widest truncate max-w-full ${isGold ? 'text-[#f3d898]/90 font-semibold' : 'text-white/50 italic'}`}>
          {hasName ? team.name : placeholder}
        </span>
        {hasName && team?.score && (
          <span className={`text-[10px] tabular-nums mt-0.5 ${isGold ? 'text-[#f3d898]/60' : 'text-white/30'}`}>
            {team.score}
          </span>
        )}
      </div>
    </div>
  );
}

function LeftConnector1() {
  const w = CONNECTOR_W; const h = GROUP_H;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden style={{ display: 'block', flexShrink: 0 }}>
      <path d={`M 0 ${Q1_Y_TOP} L ${w/2} ${Q1_Y_TOP} L ${w/2} ${Q1_MID} L 0 ${Q1_Y_BOT}`} fill="none" stroke={LINE} strokeWidth="1.5" />
      <path d={`M ${w/2} ${Q1_MID} L ${w} ${Q1_MID}`} fill="none" stroke={LINE} strokeWidth="1.5" />
    </svg>
  );
}

function RightConnector1() {
  const w = CONNECTOR_W; const h = GROUP_H;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden style={{ display: 'block', flexShrink: 0 }}>
      <path d={`M ${w} ${Q1_Y_TOP} L ${w/2} ${Q1_Y_TOP} L ${w/2} ${Q1_MID} L ${w} ${Q1_Y_BOT}`} fill="none" stroke={LINE} strokeWidth="1.5" />
      <path d={`M ${w/2} ${Q1_MID} L 0 ${Q1_MID}`} fill="none" stroke={LINE} strokeWidth="1.5" />
    </svg>
  );
}

function LeftConnector2() {
  const w = CONNECTOR_W; const h = GROUP_H * 2 + GROUP_GAP;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden style={{ display: 'block', flexShrink: 0 }}>
      <path d={`M 0 ${TOP_WIN_Y} L ${w/2} ${TOP_WIN_Y} L ${w/2} ${MID_WIN_Y} L 0 ${BOT_WIN_Y}`} fill="none" stroke={LINE} strokeWidth="1.5" />
      <path d={`M ${w/2} ${MID_WIN_Y} L ${w} ${MID_WIN_Y}`} fill="none" stroke={LINE} strokeWidth="1.5" />
    </svg>
  );
}

function RightConnector2() {
  const w = CONNECTOR_W; const h = GROUP_H * 2 + GROUP_GAP;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden style={{ display: 'block', flexShrink: 0 }}>
      <path d={`M ${w} ${TOP_WIN_Y} L ${w/2} ${TOP_WIN_Y} L ${w/2} ${MID_WIN_Y} L ${w} ${BOT_WIN_Y}`} fill="none" stroke={LINE} strokeWidth="1.5" />
      <path d={`M ${w/2} ${MID_WIN_Y} L 0 ${MID_WIN_Y}`} fill="none" stroke={LINE} strokeWidth="1.5" />
    </svg>
  );
}

interface HalfProps {
  side: 'left' | 'right';
  groupLabel: string;
  teams: TeamSlot[];
  q1Winners?: (TeamSlot | undefined)[];
  q2Winner?: TeamSlot;
}

function BracketHalf({ side, groupLabel, teams, q1Winners, q2Winner }: HalfProps) {
  const align = side;
  const isRight = side === 'right';
  const labelClip = isRight
    ? 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)'
    : 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)';

  const topTeams = teams.slice(0, 2);
  const botTeams = teams.slice(2, 4);

  const TeamPair = ({ pairTeams }: { pairTeams: TeamSlot[] }) => (
    <div className="flex flex-col" style={{ gap: SLOT_GAP }}>
      {pairTeams.map((t, i) => <TeamSlotBox key={i} team={t} align={align} />)}
    </div>
  );

  if (!isRight) {
    return (
      <div className="flex flex-col relative" style={{ paddingTop: 40 }}>
        <div className="absolute top-0 left-0 px-5 py-1 text-xs font-bold uppercase tracking-widest"
          style={{ background: GOLD, color: DARKER, clipPath: labelClip, letterSpacing: '0.15em' }}>
          {groupLabel}
        </div>
        <div className="flex items-center">
          <div className="flex flex-col" style={{ gap: GROUP_GAP }}>
            <div className="flex items-center">
              <TeamPair pairTeams={topTeams} />
              <LeftConnector1 />
              <WinnerSlotBox team={q1Winners?.[0]} placeholder="Winner Q1" align="left" />
            </div>
            <div className="flex items-center">
              <TeamPair pairTeams={botTeams} />
              <LeftConnector1 />
              <WinnerSlotBox team={q1Winners?.[1]} placeholder="Winner Q1" align="left" />
            </div>
          </div>
          <LeftConnector2 />
          <WinnerSlotBox team={q2Winner} placeholder="Winner Q2" align="left" highlight />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col relative" style={{ paddingTop: 40 }}>
        <div className="absolute top-0 right-0 px-5 py-1 text-xs font-bold uppercase tracking-widest"
          style={{ background: GOLD, color: DARKER, clipPath: labelClip, letterSpacing: '0.15em' }}>
          {groupLabel}
        </div>
        <div className="flex items-center">
          <WinnerSlotBox team={q2Winner} placeholder="Winner Q2" align="right" highlight />
          <RightConnector2 />
          <div className="flex flex-col" style={{ gap: GROUP_GAP }}>
            <div className="flex items-center">
              <WinnerSlotBox team={q1Winners?.[0]} placeholder="Winner Q1" align="right" />
              <RightConnector1 />
              <TeamPair pairTeams={topTeams} />
            </div>
            <div className="flex items-center">
              <WinnerSlotBox team={q1Winners?.[1]} placeholder="Winner Q1" align="right" />
              <RightConnector1 />
              <TeamPair pairTeams={botTeams} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function CenterColumn() {
  return (
    <div className="flex flex-col items-center justify-center shrink-0 self-stretch relative" style={{ width: 120 }}>
      <div className="absolute left-1/2 top-0 bottom-0" style={{ width: 1, background: LINE, transform: 'translateX(-50%)' }} />
      <div className="flex flex-col items-center gap-3 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold" style={{ color: 'white', opacity: 0.6 }}>
          Champion
        </span>
        <div className="flex items-center justify-center rounded-full"
          style={{ width: 72, height: 72, background: GOLD, boxShadow: `0 0 28px ${GOLD}55` }}>
          <span style={{ color: DARKER, fontWeight: 900, fontSize: 22, letterSpacing: '0.08em', lineHeight: 1 }}>
            VS
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MendadakBasketBracket({ data }: { data: GroupBracketData }) {
  return (
    <div className="rounded-sm overflow-hidden" style={{ background: DARK }}>
      <div className="text-center pt-10 pb-6 px-4">
        <h3 className="uppercase leading-none" style={{ color: GOLD, fontSize: 'clamp(22px, 3.5vw, 40px)', fontWeight: 900, letterSpacing: '0.08em' }}>
          {data.title}
        </h3>
        <p className="mt-3 uppercase" style={{ color: 'white', opacity: 0.65, fontSize: 12, letterSpacing: '0.28em' }}>
          {data.subtitle}
        </p>
      </div>
      <div className="overflow-x-auto pb-10 px-4 md:px-8">
        <div className="mx-auto flex items-center justify-center" style={{ minWidth: 800, gap: 0 }}>
          <BracketHalf
            side="left"
            groupLabel={data.leftTop.label}
            teams={[...data.leftTop.teams, ...data.leftBottom.teams]}
            q1Winners={[
              data.leftTop.winner,
              data.leftBottom.winner,
            ]}
            q2Winner={data.leftWinner}
          />
          <CenterColumn />
          <BracketHalf
            side="right"
            groupLabel={data.rightTop.label}
            teams={[...data.rightTop.teams, ...data.rightBottom.teams]}
            q1Winners={[
              data.rightTop.winner,
              data.rightBottom.winner,
            ]}
            q2Winner={data.rightWinner}
          />
        </div>
      </div>
    </div>
  );
}
