import type { GroupBracketData, GroupBracketSection, TeamSlot } from '../events/types';

const SLOT_CLIP = 'polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%)';
const SLOT_CLIP_RIGHT = 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 16px 100%)';

const SLOT_H = 56;
const SLOT_GAP = 8;

function teamCenterY(index: number): number {
  return index * (SLOT_H + SLOT_GAP) + SLOT_H / 2;
}

function groupWinnerY(teamCount: number): number {
  return ((teamCount - 1) * (SLOT_H + SLOT_GAP) + SLOT_H) / 2;
}

function TeamSlotBox({
  team,
  align = 'left',
}: {
  team: TeamSlot;
  align?: 'left' | 'right';
}) {
  return (
    <div
      className="relative h-14 w-[210px] md:w-[260px] flex items-center"
      style={{ clipPath: align === 'left' ? SLOT_CLIP : SLOT_CLIP_RIGHT }}
    >
      <div className="absolute inset-0 bg-[#2a2d2e] border-y border-[#f3d898]/35" />
      <div
        className={`absolute top-0 bottom-0 w-[4px] bg-[#f3d898]/70 ${
          align === 'left' ? 'left-0' : 'right-0'
        }`}
      />
      <span
        className={`relative z-10 w-full px-6 text-base md:text-lg font-label-caps uppercase tracking-wide text-white truncate ${
          align === 'right' ? 'text-right' : 'text-left'
        } ${team.isWinner ? 'text-[#f3d898] font-bold' : ''}`}
      >
        {team.name}
      </span>
    </div>
  );
}

function WinnerSlotBox({
  team,
  align = 'left',
}: {
  team: TeamSlot;
  align?: 'left' | 'right';
}) {
  return (
    <div
      className="relative h-14 w-[210px] md:w-[260px] flex items-center"
      style={{ clipPath: align === 'left' ? SLOT_CLIP : SLOT_CLIP_RIGHT }}
    >
      <div className="absolute inset-0 bg-[#2a2d2e] border-y border-[#f3d898]/35" />
      <div
        className={`absolute top-2 bottom-2 w-[4px] bg-[#4fd1c5] ${
          align === 'left' ? 'right-0' : 'left-0'
        }`}
      />
      <span
        className={`relative z-10 w-full px-6 text-base md:text-lg font-label-caps uppercase tracking-wide text-white truncate ${
          align === 'right' ? 'text-right' : 'text-left'
        } ${team.isWinner ? 'text-[#4fd1c5] font-bold' : ''}`}
      >
        {team.name}
      </span>
    </div>
  );
}

function GroupLabel({
  label,
  position,
}: {
  label: string;
  position: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
}) {
  const positionClass = {
    'top-left': 'top-0 left-0',
    'bottom-left': 'bottom-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-right': 'bottom-0 right-0',
  }[position];

  const clipPath = position.startsWith('top')
    ? 'polygon(0 0, calc(100% - 14px) 0, 100% 100%, 14px 100%)'
    : 'polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%)';

  return (
    <div
      className={`absolute ${positionClass} z-10 px-5 py-2 bg-[#f3d898] text-[#1f2122] font-label-caps text-sm md:text-base uppercase tracking-widest`}
      style={{ clipPath }}
    >
      {label}
    </div>
  );
}

function GroupConnectors({
  side,
  teamCount,
}: {
  side: 'left' | 'right';
  teamCount: number;
}) {
  const mirror = side === 'right';
  const totalH = teamCount * SLOT_H + (teamCount - 1) * SLOT_GAP;
  const winY = groupWinnerY(teamCount);
  const mid1 = (teamCenterY(0) + teamCenterY(1)) / 2;
  const mid2 = (teamCenterY(2) + teamCenterY(3)) / 2;
  const xMid = 24;
  const xEnd = mirror ? 48 : 0;

  const paths = [
    `M ${mirror ? 0 : 48} ${teamCenterY(0)} L ${xMid} ${teamCenterY(0)} L ${xMid} ${mid1} L ${mirror ? 0 : 48} ${teamCenterY(1)}`,
    `M ${xMid} ${mid1} L ${xMid} ${winY} L ${xEnd} ${winY}`,
    `M ${mirror ? 0 : 48} ${teamCenterY(2)} L ${xMid} ${teamCenterY(2)} L ${xMid} ${mid2} L ${mirror ? 0 : 48} ${teamCenterY(3)}`,
    `M ${xMid} ${mid2} L ${xMid} ${winY} L ${xEnd} ${winY}`,
  ];

  return (
    <svg
      className="w-10 md:w-14 shrink-0"
      style={{ height: totalH }}
      viewBox={`0 0 48 ${totalH}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#5a5d5e" strokeWidth="2" />
      ))}
    </svg>
  );
}

function GroupBlock({
  group,
  align,
}: {
  group: GroupBracketSection;
  align: 'left' | 'right';
}) {
  const winner = group.winner ?? { name: 'Winner' };

  return (
    <div className={`flex items-center ${align === 'right' ? 'flex-row-reverse' : ''}`}>
      <div className="flex flex-col gap-2">
        {group.teams.map((team, i) => (
          <TeamSlotBox key={`${group.label}-${i}`} team={team} align={align} />
        ))}
      </div>
      <GroupConnectors side={align} teamCount={group.teams.length} />
      <WinnerSlotBox team={winner} align={align} />
    </div>
  );
}

function BracketHalf({
  side,
  topGroup,
  bottomGroup,
}: {
  side: 'left' | 'right';
  topGroup: GroupBracketSection;
  bottomGroup: GroupBracketSection;
}) {
  const align = side === 'left' ? 'left' : 'right';

  return (
    <div className="relative flex-1 min-w-[340px] md:min-w-[420px] pt-10 pb-10">
      <GroupLabel
        label={topGroup.label}
        position={side === 'left' ? 'top-left' : 'top-right'}
      />
      <GroupLabel
        label={bottomGroup.label}
        position={side === 'left' ? 'bottom-left' : 'bottom-right'}
      />

      <div className="flex flex-col gap-12">
        <GroupBlock group={topGroup} align={align} />
        <GroupBlock group={bottomGroup} align={align} />
      </div>
    </div>
  );
}

export default function MendadakBasketBracket({ data }: { data: GroupBracketData }) {
  return (
    <div className="bg-[#1f2122] rounded-sm overflow-hidden">
      <div className="text-center pt-10 pb-8 px-4">
        <h3 className="font-display-lg text-[36px] md:text-[48px] text-[#f3d898] uppercase tracking-wide leading-none">
          {data.title}
        </h3>
        <p className="mt-3 font-label-caps text-sm md:text-base text-white/80 uppercase tracking-[0.25em]">
          {data.subtitle}
        </p>
      </div>

      <div className="overflow-x-auto pb-10 px-4 md:px-10">
        <div className="min-w-[780px] max-w-6xl mx-auto flex items-center gap-0">
          <BracketHalf
            side="left"
            topGroup={data.leftTop}
            bottomGroup={data.leftBottom}
          />

          <div className="relative flex flex-col items-center justify-center shrink-0 w-20 md:w-24 self-stretch">
            <div className="absolute top-10 bottom-10 left-1/2 w-px bg-[#5a5d5e] -translate-x-1/2" />
            <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f3d898] flex items-center justify-center shadow-[0_0_24px_rgba(243,216,152,0.35)]">
              <span className="font-display-lg text-2xl md:text-3xl text-[#1f2122] uppercase leading-none">
                VS
              </span>
            </div>
          </div>

          <BracketHalf
            side="right"
            topGroup={data.rightTop}
            bottomGroup={data.rightBottom}
          />
        </div>
      </div>
    </div>
  );
}
