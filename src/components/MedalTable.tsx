import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { medalStandings, type MedalStanding } from '../data/medalStandings';

type SortKey = 'rank' | 'name' | 'gold' | 'silver' | 'bronze' | 'total';
type SortDir = 'asc' | 'desc';

function getTotal(m: MedalStanding) {
  return m.gold + m.silver + m.bronze;
}

export default function MedalTable() {
  const [sortKey, setSortKey] = useState<SortKey>('rank');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      // For medal columns, default to descending (highest first)
      setSortDir(key === 'name' || key === 'rank' ? 'asc' : 'desc');
    }
  };

  const sorted = useMemo(() => {
    const data = [...medalStandings];
    data.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case 'rank':
          cmp = a.id - b.id;
          break;
        case 'name':
          cmp = a.name.localeCompare(b.name);
          break;
        case 'gold':
          cmp = a.gold - b.gold;
          break;
        case 'silver':
          cmp = a.silver - b.silver;
          break;
        case 'bronze':
          cmp = a.bronze - b.bronze;
          break;
        case 'total':
          cmp = getTotal(a) - getTotal(b);
          break;
      }
      // Secondary sort: if medal counts are equal, sort by gold > silver > bronze > name
      if (cmp === 0 && sortKey !== 'name' && sortKey !== 'rank') {
        cmp = b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze || a.name.localeCompare(b.name);
      }
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return data;
  }, [sortKey, sortDir]);

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) {
      return (
        <span className="material-symbols-outlined text-[16px] opacity-30 ml-1">
          unfold_more
        </span>
      );
    }
    return (
      <span className="material-symbols-outlined text-[16px] text-primary ml-1">
        {sortDir === 'asc' ? 'arrow_upward' : 'arrow_downward'}
      </span>
    );
  };

  const headerClass =
    'cursor-pointer select-none transition-colors hover:text-primary group';

  return (
    <section id="medal-table" className="py-24 bg-surface-container-low relative overflow-hidden">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="mb-stack-lg border-l-8 border-tertiary pl-6">
          <h2 className="font-headline-lg text-headline-lg text-on-background">MEDAL TABLE</h2>
          <p className="font-label-caps text-label-caps text-tertiary">
            PEROLEHAN MEDALI UNIT UTAMA KEMENTERIAN KESEHATAN
          </p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container-lowest border-2 border-on-surface hard-shadow overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-on-background text-surface border-b-2 border-on-surface">
                <th
                  className={`px-4 py-4 font-label-caps text-label-caps whitespace-nowrap ${headerClass}`}
                  onClick={() => handleSort('rank')}
                >
                  <span className="flex items-center">
                    # <SortIcon column="rank" />
                  </span>
                </th>
                <th
                  className={`px-4 py-4 font-label-caps text-label-caps whitespace-nowrap ${headerClass}`}
                  onClick={() => handleSort('name')}
                >
                  <span className="flex items-center">
                    UNIT UTAMA <SortIcon column="name" />
                  </span>
                </th>
                <th
                  className={`px-4 py-4 font-label-caps text-label-caps text-center whitespace-nowrap ${headerClass}`}
                  onClick={() => handleSort('gold')}
                >
                  <span className="flex items-center justify-center gap-1">
                    <span className="inline-block w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #FFD700, #FFA000)' }} title="Gold" />
                    <SortIcon column="gold" />
                  </span>
                </th>
                <th
                  className={`px-4 py-4 font-label-caps text-label-caps text-center whitespace-nowrap ${headerClass}`}
                  onClick={() => handleSort('silver')}
                >
                  <span className="flex items-center justify-center gap-1">
                    <span className="inline-block w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #C0C0C0, #8C8C8C)' }} title="Silver" />
                    <SortIcon column="silver" />
                  </span>
                </th>
                <th
                  className={`px-4 py-4 font-label-caps text-label-caps text-center whitespace-nowrap ${headerClass}`}
                  onClick={() => handleSort('bronze')}
                >
                  <span className="flex items-center justify-center gap-1">
                    <span className="inline-block w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #CD7F32, #8B4513)' }} title="Bronze" />
                    <SortIcon column="bronze" />
                  </span>
                </th>
                <th
                  className={`px-4 py-4 font-label-caps text-label-caps text-center whitespace-nowrap ${headerClass}`}
                  onClick={() => handleSort('total')}
                >
                  <span className="flex items-center justify-center">
                    TOTAL <SortIcon column="total" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((unit, index) => {
                const total = getTotal(unit);
                const isEven = index % 2 === 0;
                return (
                  <motion.tr
                    key={unit.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className={`border-b border-outline-variant transition-colors hover:bg-surface-container-high ${
                      isEven ? 'bg-surface-container-lowest' : 'bg-surface-container-low'
                    }`}
                  >
                    {/* Rank */}
                    <td className="px-4 py-4 font-headline-lg text-headline-lg-mobile text-on-surface-variant w-12">
                      {index + 1}
                    </td>
                    {/* Name */}
                    <td className="px-4 py-4 font-body-md text-body-md text-on-surface font-semibold">
                      {unit.name}
                    </td>
                    {/* Gold */}
                    <td className="px-4 py-4 text-center">
                      <span className="font-headline-lg text-headline-lg-mobile tabular-nums">
                        {unit.gold}
                      </span>
                    </td>
                    {/* Silver */}
                    <td className="px-4 py-4 text-center">
                      <span className="font-headline-lg text-headline-lg-mobile tabular-nums">
                        {unit.silver}
                      </span>
                    </td>
                    {/* Bronze */}
                    <td className="px-4 py-4 text-center">
                      <span className="font-headline-lg text-headline-lg-mobile tabular-nums">
                        {unit.bronze}
                      </span>
                    </td>
                    {/* Total */}
                    <td className="px-4 py-4 text-center">
                      <span className="bg-primary text-on-primary font-headline-lg text-label-caps px-3 py-1 inline-block hard-shadow min-w-[40px]">
                        {total}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        {/* Legend */}
        <div className="mt-stack-md flex flex-wrap gap-6 items-center">
          <span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full" style={{ background: 'linear-gradient(135deg, #FFD700, #FFA000)' }} /> GOLD
          </span>
          <span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full" style={{ background: 'linear-gradient(135deg, #C0C0C0, #8C8C8C)' }} /> SILVER
          </span>
          <span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full" style={{ background: 'linear-gradient(135deg, #CD7F32, #8B4513)' }} /> BRONZE
          </span>
          <span className="font-label-caps text-label-caps text-on-surface-variant ml-auto">
            KLIK HEADER UNTUK SORT
          </span>
        </div>
      </div>
    </section>
  );
}
