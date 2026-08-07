import { useState } from 'react';
import { motion } from 'framer-motion';
import type { TeamSlot, BracketRound, BracketMatch, EventData } from './events/types';
import { buildDefaultEventData } from './events/types';
import MendadakBasketBracket from './components/MendadakBasketBracket';
import MobileLegendBracket from './components/MobileLegendBracket';
import ShootingCompetition from './components/ShootingCompetition';

// ── Import data per event ────────────────────────────────────
import tenisMeja from './events/tenis-meja';
import badminton from './events/badminton';
import padel from './events/padel';
import tennis from './events/tennis';
import futsal from './events/futsal';
import mendadakBasket from './events/mendadak-basket';
import relayRunning from './events/relay-running';
import artPerformance from './events/art-performance';
import bootcamprox from './events/bootcamprox';
import menembak from './events/menembak';
import pesCup from './events/pes-cup';
import mobileLegend from './events/mobile-legend';
import sangJuara from './events/sang-juara';
import masterchef from './events/masterchef';

// ── Registry: slug → EventData ───────────────────────────────
export const eventsData: Record<string, EventData> = {
  'tenis-meja': tenisMeja,
  'badminton': badminton,
  'padel': padel,
  'tennis': tennis,
  'futsal': futsal,
  'mendadak-basket': mendadakBasket,
  'relay-running': relayRunning,
  'art-performance': artPerformance,
  'bootcamprox': bootcamprox,
  'menembak': menembak,
  'pes-cup': pesCup,
  'mobile-legend': mobileLegend,
  'sang-juara': sangJuara,
  'masterchef': masterchef,
};

// Re-export types for consumers
export type { TeamSlot, BracketRound, BracketMatch, EventData };

// ── Sub-komponen: satu baris matchup ────────────────────────
function TeamRow({ team, showScore }: { team: TeamSlot; showScore?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 border-b border-outline-variant last:border-0 ${team.isWinner
        ? 'bg-primary-fixed/20 font-bold text-primary'
        : 'text-on-surface'
        }`}
    >
      <span className="text-sm truncate max-w-[120px]">{team.name}</span>
      {showScore && team.score && (
        <span
          className={`text-xs font-mono ml-2 px-1 ${team.isWinner ? 'text-primary font-bold' : 'text-on-surface-variant'
            }`}
        >
          {team.score}
        </span>
      )}
    </div>
  );
}

// ── Sub-komponen: satu kotak bracket ────────────────────────
function BracketBox({
  round,
  highlight = false,
}: {
  round: BracketRound;
  highlight?: boolean;
}) {
  return (
    <div
      className={`border-2 ${highlight ? 'border-primary bg-surface-container' : 'border-on-surface-variant bg-surface-container-lowest'
        } text-xs min-w-[160px]`}
    >
      <div className="flex items-center gap-1 px-3 py-1 border-b border-outline-variant bg-surface-container">
        <span className="font-label-caps text-[10px] text-on-surface-variant">{round.label}</span>
        {round.match.team1.isWinner || round.match.team2.isWinner ? (
          <span className="ml-auto text-[9px] bg-primary text-on-primary px-1 font-bold">TBD</span>
        ) : (
          <span className="ml-auto text-[9px] bg-surface-variant text-on-surface-variant px-1">UPC</span>
        )}
      </div>
      <TeamRow team={round.match.team1} showScore />
      <TeamRow team={round.match.team2} showScore />
    </div>
  );
}

// ── Sub-komponen: kotak final / semifinal ───────────────────
function MatchBox({
  label,
  match,
  isChampionship = false,
  isThirdPlace = false,
}: {
  label: string;
  match: BracketMatch;
  isChampionship?: boolean;
  isThirdPlace?: boolean;
}) {
  return (
    <div className={`min-w-[180px] border-2 ${isChampionship ? 'border-tertiary bg-tertiary-container/20' : isThirdPlace ? 'border-outline-variant bg-surface-container' : 'border-on-surface-variant bg-surface-container-lowest'}`}>
      {isChampionship && (
        <div className="bg-tertiary text-on-tertiary text-center py-1 px-2 font-label-caps text-[10px] tracking-widest">
          🏆 CHAMPIONSHIP
        </div>
      )}
      {isThirdPlace && (
        <div className="bg-surface-dim text-on-surface text-center py-1 px-2 font-label-caps text-[10px] tracking-widest">
          3RD PLACE MATCH
        </div>
      )}
      {!isChampionship && !isThirdPlace && (
        <div className="px-3 py-1 border-b border-outline-variant bg-surface-container font-label-caps text-[10px] text-on-surface-variant">
          {label}
        </div>
      )}
      <div className={`px-3 py-2 border-b border-outline-variant text-sm ${match.team1.isWinner ? 'font-bold text-primary bg-primary-fixed/20' : 'text-on-surface-variant'}`}>
        {match.team1.name}
        {match.team1.isWinner && <span className="ml-2 text-[10px]">→</span>}
      </div>
      <div className={`px-3 py-2 text-sm ${match.team2.isWinner ? 'font-bold text-primary bg-primary-fixed/20' : 'text-on-surface-variant'}`}>
        {match.team2.name}
        {match.team2.isWinner && <span className="ml-2 text-[10px]">→</span>}
      </div>
    </div>
  );
}

// ── Komponen utama halaman event ─────────────────────────────
interface EventPageProps {
  slug: string;
  disciplineNumber: string;
  eventTitle: string;
  eventDescription: string;
  onBack: () => void;
}

export default function EventPage({
  slug,
  disciplineNumber,
  eventTitle,
  eventDescription,
  onBack,
}: EventPageProps) {
  // Cari data event. Jika belum ada, buat default.
  const data: EventData =
    eventsData[slug] ??
    buildDefaultEventData(disciplineNumber, eventTitle, eventDescription);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-surface"
    >
      {/* ── Back button ───────────────────────────────── */}
      <div className="bg-surface border-b-2 border-on-surface px-margin-mobile md:px-margin-desktop py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors group"
        >
          <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          BACK TO EVENTS
        </button>
      </div>

      {/* ── Hero / Discipline Header ──────────────────── */}
      <section className="bg-surface-container-low border-b-2 border-on-surface px-margin-mobile md:px-margin-desktop py-10">
        <div className="max-w-4xl">
          <div className="inline-block border border-tertiary text-tertiary font-label-caps text-label-caps px-3 py-1 mb-4">
            DISCIPLINE {data.discipline}
          </div>
          <h1 className="font-display-lg text-[48px] md:text-[64px] text-on-background leading-[0.95] mb-4 uppercase">
            {data.title}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-6">
            {data.description}
          </p>
          {data.rulesUrl && (
            <a
              href={data.rulesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-caps text-label-caps px-5 py-3 hard-shadow hover-shift transition-all"
            >
              <span className="material-symbols-outlined text-base">
                download
              </span>
              DOWNLOAD COMPETITION RULES
            </a>
          )}
        </div>
      </section>

      {/* ── Tournament Bracket ────────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop py-12 bg-surface">
        {data.categories && data.categories.length > 0 ? (
          <>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-2">
                  {data.bracketTitle}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data.categories.map((cat, idx) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveTab(idx)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border-2 ${
                        activeTab === idx
                          ? 'bg-primary border-primary text-on-primary'
                          : 'border-on-surface text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant border border-outline-variant px-3 py-1 self-start md:self-center">
                LIVE BRACKET
              </span>
            </div>
            <MobileLegendBracket data={data.categories[activeTab].groupBracket} />
          </>
        ) : data.bracketType === 'group-16' && data.groupBracket ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline-lg text-headline-lg text-on-background uppercase">
                {data.bracketTitle}
              </h2>
              <span className="font-label-caps text-label-caps text-on-surface-variant border border-outline-variant px-3 py-1">
                LIVE BRACKET
              </span>
            </div>
            {slug === 'mobile-legend' || slug === 'padel' ? (
              <MobileLegendBracket data={data.groupBracket} />
            ) : (
              <MendadakBasketBracket data={data.groupBracket} />
            )}
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline-lg text-headline-lg text-on-background uppercase">
                {data.bracketTitle}
              </h2>
              <span className="font-label-caps text-label-caps text-on-surface-variant border border-outline-variant px-3 py-1">
                LIVE BRACKET
              </span>
            </div>

            {/* Bracket layout — scroll horizontal on mobile */}
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[780px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-4 items-center">

                {/* Col 1 – Left QFs */}
                <div className="flex flex-col gap-8 justify-around">
                  {data.leftBracket.map((round) => (
                    <BracketBox key={round.label} round={round} />
                  ))}
                </div>

                {/* Col 2 – SF1 */}
                <div className="flex items-center justify-center">
                  <MatchBox label="SF1" match={data.sf1} />
                </div>

                {/* Col 3 – Championship + 3rd Place */}
                <div className="flex flex-col gap-8 items-center">
                  <MatchBox
                    label="CHAMPIONSHIP"
                    match={data.final}
                    isChampionship
                  />
                  <MatchBox
                    label="3RD PLACE"
                    match={data.thirdPlace}
                    isThirdPlace
                  />
                </div>

                {/* Col 4 – SF2 */}
                <div className="flex items-center justify-center">
                  <MatchBox label="SF2" match={data.sf2} />
                </div>

                {/* Col 5 – Right QFs */}
                <div className="flex flex-col gap-8 justify-around">
                  {data.rightBracket.map((round) => (
                    <BracketBox key={round.label} round={round} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {/* ── Shooting Competition (mendadak-basket only) ── */}
      {slug === 'mendadak-basket' && (
        <section className="px-margin-mobile md:px-margin-desktop py-12 bg-surface-container-low">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase">
              Shooting Competition
            </h2>
            <span className="font-label-caps text-label-caps text-on-surface-variant border border-outline-variant px-3 py-1">
              HIGHEST POINT WINS
            </span>
          </div>
          <ShootingCompetition />
        </section>
      )}

      {/* ── Info / Description Section ────────────────── */}
      <section className="bg-on-background text-surface">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          {data.infoImage ? (
            <div
              className="h-64 md:h-auto min-h-[280px] bg-cover bg-center"
              style={{ backgroundImage: `url('${data.infoImage}')` }}
            />
          ) : (
            <div className="h-64 md:h-auto min-h-[280px] bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-outline">
                image
              </span>
            </div>
          )}

          {/* Text */}
          <div className="px-margin-mobile md:px-margin-desktop py-12 flex flex-col justify-center">
            <h3 className="font-display-lg text-[36px] md:text-[48px] text-surface-bright uppercase leading-[0.95] mb-4">
              {data.infoTitle}
            </h3>
            <p className="font-body-md text-body-md text-surface-variant mb-8">
              {data.infoText.split('mili').map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}</span>
                ) : (
                  <span key={i}>
                    <span className="text-tertiary-fixed-dim underline underline-offset-2">
                      mili
                    </span>
                    {part}
                  </span>
                )
              )}
            </p>
            <ul className="space-y-2">
              {data.infoPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-label-caps text-label-caps text-primary-fixed"
                >
                  <span className="w-2 h-2 bg-primary-fixed inline-block flex-shrink-0" />
                  {point.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
