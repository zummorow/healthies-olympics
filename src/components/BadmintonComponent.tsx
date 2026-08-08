import { useState } from 'react';

// ============================================================
// BadmintonComponent.tsx
// Komponen round-robin + bracket 4-tim untuk event Tepok Bulu.
// Data diisi di badminton.ts, komponen ini hanya render.
// ============================================================

// ── Visual constants (konsisten dengan komponen lain) ────────
const GOLD   = '#f3d898';
const DARK   = '#1a1c1d';
const DARKER = '#141516';
const LINE   = '#4a4d4f';

// ── Tipe data ─────────────────────────────────────────────────
export interface BadmintonTeamStat {
  satuanKerja: string;  // Nama satuan kerja / tim
  tanding: number;      // T — jumlah pertandingan yang sudah dimainkan
  menang: number;       // M — jumlah pertandingan menang
  seri: number;         // S — jumlah pertandingan seri
  kalah: number;        // K — jumlah pertandingan kalah
  point: number;        // P — total poin (biasanya menang=3, seri=1, kalah=0)
}

export interface BadmintonGroup {
  label: string;              // 'GROUP A' atau 'GROUP B'
  teams: BadmintonTeamStat[]; // Tepat 4 tim per grup
}

export interface BadmintonFinalSlot {
  team?: string;        // Nama tim di slot ini (isi jika sudah diketahui)
  isWinner?: boolean;   // true = tim ini yang menang
}

export interface BadmintonFinalBracket {
  // Semi-final kiri (SF1) — biasanya juara Grup A vs runner-up Grup B
  sf1: { team1: BadmintonFinalSlot; team2: BadmintonFinalSlot };
  // Semi-final kanan (SF2) — biasanya juara Grup B vs runner-up Grup A
  sf2: { team1: BadmintonFinalSlot; team2: BadmintonFinalSlot };
  // Final — pemenang SF1 vs pemenang SF2
  final: { team1: BadmintonFinalSlot; team2: BadmintonFinalSlot };
}

export interface BadmintonCategoryData {
  name: string;                       // 'Ganda Putri', 'Ganda Putra', dll.
  groups: [BadmintonGroup, BadmintonGroup]; // [Group A, Group B]
  finalBracket?: BadmintonFinalBracket;    // Data bracket final (opsional)
}

// ── Helper: sort tim round-robin ─────────────────────────────
// Urutan: Point terbesar → Menang terbanyak → Kalah tersedikit
function sortTeams(teams: BadmintonTeamStat[]): BadmintonTeamStat[] {
  return [...teams].sort((a, b) =>
    b.point !== a.point ? b.point - a.point :
    b.menang !== a.menang ? b.menang - a.menang :
    a.kalah - b.kalah
  );
}

// ── Komponen: Tabel round-robin satu grup ────────────────────
function GroupTable({ group }: { group: BadmintonGroup }) {
  const sorted = sortTeams(group.teams);
  return (
    <div className="rounded-sm overflow-hidden" style={{ background: DARK }}>
      {/* Header grup */}
      <div
        className="px-4 py-2 text-xs font-black uppercase tracking-widest"
        style={{ background: GOLD, color: DARKER, letterSpacing: '0.18em' }}
      >
        {group.label}
      </div>

      {/* Baris header kolom */}
      <div
        className="grid text-[10px] font-bold uppercase tracking-widest px-4 py-2"
        style={{
          gridTemplateColumns: '1fr 36px 36px 36px 36px 44px',
          color: 'rgba(255,255,255,0.4)',
          borderBottom: '1px solid #2e3133',
          letterSpacing: '0.15em',
        }}
      >
        <span>Satuan Kerja</span>
        <span className="text-center">T</span>
        <span className="text-center">M</span>
        <span className="text-center">S</span>
        <span className="text-center">K</span>
        <span className="text-center" style={{ color: GOLD + 'cc' }}>P</span>
      </div>

      {/* Baris data tiap tim */}
      <div className="divide-y" style={{ borderColor: '#2e3133' }}>
        {sorted.map((team, idx) => {
          const rank    = idx + 1;
          const isFirst = rank === 1;
          return (
            <div
              key={team.satuanKerja}
              className="grid items-center px-4 py-3"
              style={{
                gridTemplateColumns: '1fr 36px 36px 36px 36px 44px',
                background: isFirst ? '#2e2d1a' : idx % 2 === 0 ? '#1d1f20' : '#202224',
              }}
            >
              {/* Nama satuan kerja */}
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="flex items-center justify-center shrink-0 font-black text-[11px]"
                  style={{
                    width: 24,
                    height: 24,
                    background: isFirst ? GOLD : '#2a2d2f',
                    color: isFirst ? DARKER : 'rgba(255,255,255,0.5)',
                    clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)',
                  }}
                >
                  {rank}
                </div>
                <span
                  className="text-sm font-semibold uppercase tracking-wide truncate"
                  style={{ color: isFirst ? GOLD : 'white', letterSpacing: '0.05em' }}
                >
                  {team.satuanKerja}
                </span>
              </div>
              {/* Kolom statistik */}
              <span className="text-center text-sm font-mono" style={{ color: 'rgba(255,255,255,0.6)' }}>{team.tanding}</span>
              <span className="text-center text-sm font-mono" style={{ color: team.menang > 0 ? '#6ec87a' : 'rgba(255,255,255,0.4)' }}>{team.menang}</span>
              <span className="text-center text-sm font-mono" style={{ color: team.seri > 0 ? '#8ab4f8' : 'rgba(255,255,255,0.4)' }}>{team.seri}</span>
              <span className="text-center text-sm font-mono" style={{ color: team.kalah > 0 ? '#f28b82' : 'rgba(255,255,255,0.4)' }}>{team.kalah}</span>
              <span
                className="text-center text-base font-black font-mono"
                style={{
                  color: isFirst ? GOLD : 'white',
                  background: isFirst ? 'rgba(243,216,152,0.12)' : 'rgba(255,255,255,0.06)',
                  clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
                  padding: '1px 4px',
                }}
              >
                {team.point}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Komponen: Kotak slot tim dalam bracket final ─────────────
function FinalSlotBox({
  slot,
  label,
  align,
}: {
  slot: BadmintonFinalSlot;
  label?: string;
  align: 'left' | 'right' | 'center';
}) {
  const hasTeam  = Boolean(slot.team);
  const isWinner = slot.isWinner;

  return (
    <div
      className="flex items-center gap-2 px-3 py-2 border-b"
      style={{
        borderColor: '#2e3133',
        background: isWinner ? '#2e2d1a' : 'transparent',
        justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      }}
    >
      {align !== 'right' && label && (
        <span className="text-[9px] uppercase tracking-widest shrink-0" style={{ color: GOLD + '80', minWidth: 24 }}>{label}</span>
      )}
      <span
        className="text-xs font-bold uppercase tracking-wide truncate"
        style={{ color: isWinner ? GOLD : hasTeam ? 'white' : 'rgba(255,255,255,0.3)', fontStyle: hasTeam ? 'normal' : 'italic' }}
      >
        {slot.team ?? 'TBD'}
      </span>
      {align === 'right' && label && (
        <span className="text-[9px] uppercase tracking-widest shrink-0" style={{ color: GOLD + '80', minWidth: 24 }}>{label}</span>
      )}
    </div>
  );
}

// ── Komponen: Bracket 4-tim (SF + Final) ─────────────────────
function FinalBracket({ bracket }: { bracket: BadmintonFinalBracket }) {
  return (
    <div className="rounded-sm overflow-hidden" style={{ background: DARK }}>
      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center gap-3" style={{ borderColor: '#2e3133' }}>
        <span className="text-xs font-black uppercase tracking-widest" style={{ color: GOLD, letterSpacing: '0.18em' }}>
          Final Bracket
        </span>
        <span className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
          4 Tim Terbaik
        </span>
      </div>

      <div className="overflow-x-auto p-4 md:p-6">
        <div className="flex items-center justify-center gap-0" style={{ minWidth: 620 }}>

          {/* ── Sisi KIRI — SF1 ───────────────────────────── */}
          <div style={{ flex: '0 0 200px' }}>
            <div
              className="border-2 overflow-hidden"
              style={{ borderColor: LINE, background: '#252729' }}
            >
              <div className="px-3 py-1 text-[9px] font-black uppercase tracking-widest" style={{ background: '#2a2d2f', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em' }}>
                SEMI-FINAL 1
              </div>
              <FinalSlotBox slot={bracket.sf1.team1} label="1" align="left" />
              <FinalSlotBox slot={bracket.sf1.team2} label="2" align="left" />
            </div>
          </div>

          {/* ── Konektor SF1 → Final ──────────────────────── */}
          <svg width="60" height="80" style={{ flexShrink: 0 }} aria-hidden>
            <path d={`M 0 20 L 30 20 L 30 40 L 60 40`} fill="none" stroke={LINE} strokeWidth="1.5" />
            <path d={`M 0 60 L 30 60 L 30 40`}          fill="none" stroke={LINE} strokeWidth="1.5" />
          </svg>

          {/* ── Tengah — FINAL ────────────────────────────── */}
          <div style={{ flex: '0 0 200px' }}>
            {/* Badge judul final */}
            <div
              className="text-center py-1 mb-1 text-[10px] font-black uppercase tracking-widest"
              style={{ background: GOLD, color: DARKER, letterSpacing: '0.2em' }}
            >
              🏆 FINAL
            </div>
            <div
              className="border-2 overflow-hidden"
              style={{ borderColor: GOLD + '80', background: '#252729' }}
            >
              <FinalSlotBox slot={bracket.final.team1} align="center" />
              <FinalSlotBox slot={bracket.final.team2} align="center" />
            </div>
          </div>

          {/* ── Konektor SF2 → Final ──────────────────────── */}
          <svg width="60" height="80" style={{ flexShrink: 0, transform: 'scaleX(-1)' }} aria-hidden>
            <path d={`M 0 20 L 30 20 L 30 40 L 60 40`} fill="none" stroke={LINE} strokeWidth="1.5" />
            <path d={`M 0 60 L 30 60 L 30 40`}          fill="none" stroke={LINE} strokeWidth="1.5" />
          </svg>

          {/* ── Sisi KANAN — SF2 ──────────────────────────── */}
          <div style={{ flex: '0 0 200px' }}>
            <div
              className="border-2 overflow-hidden"
              style={{ borderColor: LINE, background: '#252729' }}
            >
              <div className="px-3 py-1 text-[9px] font-black uppercase tracking-widest text-right" style={{ background: '#2a2d2f', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em' }}>
                SEMI-FINAL 2
              </div>
              <FinalSlotBox slot={bracket.sf2.team1} label="1" align="right" />
              <FinalSlotBox slot={bracket.sf2.team2} label="2" align="right" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer keterangan */}
      <div
        className="px-4 py-3 flex items-center gap-3 text-[10px] uppercase tracking-widest"
        style={{ background: '#161818', color: 'rgba(255,255,255,0.4)', borderTop: '1px solid #2e3133' }}
      >
        <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: GOLD }} />
        SF1: Juara Grup A vs Runner-up Grup B · SF2: Juara Grup B vs Runner-up Grup A
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────
export default function BadmintonComponent({ categories }: { categories: BadmintonCategoryData[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const cat = categories[activeTab];

  // Sembunyikan tab jika hanya ada 1 kategori atau nama kategori kosong
  const showTabs = categories.length > 1 && categories.some(c => c.name);

  return (
    <div>
      {/* ── Tab kategori — hanya tampil jika lebih dari 1 kategori ── */}
      {showTabs && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c, idx) => (
            <button
              key={c.name}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border-2 ${
                activeTab === idx
                  ? 'bg-primary border-primary text-on-primary'
                  : 'border-on-surface text-on-surface hover:bg-surface-container'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      {/* ── Tabel round-robin (2 grup berdampingan) ─────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <GroupTable group={cat.groups[0]} />
        <GroupTable group={cat.groups[1]} />
      </div>

      {/* ── Keterangan poin ──────────────────────────────── */}
      <div
        className="flex flex-wrap items-center gap-4 px-4 py-3 mb-6 text-[10px] uppercase tracking-widest rounded-sm"
        style={{ background: '#161818', color: 'rgba(255,255,255,0.45)', border: '1px solid #2e3133' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-sm" style={{ background: '#6ec87a' }} />
          <span>Menang = 3 Poin</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-sm" style={{ background: '#8ab4f8' }} />
          <span>Seri = 1 Poin</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-sm" style={{ background: '#f28b82' }} />
          <span>Kalah = 0 Poin</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-sm" style={{ background: GOLD }} />
          <span>Posisi 1: maju ke babak gugur</span>
        </div>
      </div>

      {/* ── Bracket final 4 tim ──────────────────────────── */}
      {cat.finalBracket && <FinalBracket bracket={cat.finalBracket} />}
    </div>
  );
}
