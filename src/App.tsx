import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import EventPage from './EventPage';
import MedalTable from './components/MedalTable';
import logo from './assets/logo.png';
import tenisMejaIcon from './assets/icons/tenis-meja.svg';
import badmintonIcon from './assets/icons/badminton.svg';
import padelIcon from './assets/icons/padel.svg';
import tennisIcon from './assets/icons/tennis.svg';
import futsalIcon from './assets/icons/futsal.svg';
import basketIcon from './assets/icons/basket.svg';
import lariIcon from './assets/icons/lari.svg';
import artIcon from './assets/icons/art.svg';
import bootcampIcon from './assets/icons/bootcamp.svg';
import menembakIcon from './assets/icons/menembak.svg';
import pesIcon from './assets/icons/pes.svg';
import mlIcon from './assets/icons/ml.svg';
import juaraIcon from './assets/icons/juara.svg';
import masterchefIcon from './assets/icons/masterchef.svg';

const sportsCategories = [
  { name: 'Tenis Meja', slug: 'tenis-meja', discipline: '01', icon: tenisMejaIcon, color: 'border-primary-fixed', text: 'text-primary-fixed', bg: 'bg-primary-fixed', description: 'Pertandingan tenis meja antar unit utama Kemenkes.' },
  { name: 'Tepok Bulu', slug: 'badminton', discipline: '02', icon: badmintonIcon, color: 'border-tertiary-fixed-dim', text: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-fixed-dim', description: 'Turnamen bulu tangkis beregu dan perorangan.' },
  { name: 'Terpadel Day', slug: 'padel', discipline: '03', icon: padelIcon, color: 'border-primary-fixed', text: 'text-primary-fixed', bg: 'bg-primary-fixed', description: 'Olahraga padel yang menggabungkan elemen tenis dan squash.' },
  { name: 'Tennis', slug: 'tennis', discipline: '04', icon: tennisIcon, color: 'border-tertiary-fixed-dim', text: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-fixed-dim', description: 'Pertandingan tenis lapangan antar pegawai.' },
  { name: 'Mini Soccer', slug: 'mini-soccer', discipline: '05', icon: futsalIcon, color: 'border-primary-fixed', text: 'text-primary-fixed', bg: 'bg-primary-fixed', description: 'Turnamen futsal 5v5 antar unit kerja Kemenkes.' },
  { name: 'Mendadak Basket', slug: 'mendadak-basket', discipline: '06', icon: basketIcon, color: 'border-tertiary-fixed-dim', text: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-fixed-dim', description: 'Kompetisi basket cepat antar divisi Kemenkes.' },
  { name: 'Relay Running', slug: 'relay-running', discipline: '07', icon: lariIcon, color: 'border-primary-fixed', text: 'text-primary-fixed', bg: 'bg-primary-fixed', description: 'Lari estafet 4×100M antar unit utama Kemenkes.' },
  { name: 'Art Performance', slug: 'art-performance', discipline: '08', icon: artIcon, color: 'border-tertiary-fixed-dim', text: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-fixed-dim', description: 'Pertunjukan seni budaya antar unit kerja.' },
  { name: 'FITROX', slug: 'fitrox', discipline: '09', icon: bootcampIcon, color: 'border-primary-fixed', text: 'text-primary-fixed', bg: 'bg-primary-fixed', description: 'Bootcamp kebugaran dan fisik intensif.' },
  { name: 'Menembak', slug: 'menembak', discipline: '10', icon: menembakIcon, color: 'border-tertiary-fixed-dim', text: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-fixed-dim', description: 'Lomba menembak presisi antar pegawai Kemenkes.' },
  { name: 'Playstation', slug: 'playstation', discipline: '11', icon: pesIcon, color: 'border-primary-fixed', text: 'text-primary-fixed', bg: 'bg-primary-fixed', description: 'Turnamen e-sports PES antar unit utama.' },
  { name: 'Mobile Legend', slug: 'mobile-legend', discipline: '12', icon: mlIcon, color: 'border-tertiary-fixed-dim', text: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-fixed-dim', description: 'Turnamen Mobile Legends Bang Bang antar unit.' },
  { name: 'Sang Juara Season III', slug: 'sang-juara', discipline: '13', icon: juaraIcon, color: 'border-primary-fixed', text: 'text-primary-fixed', bg: 'bg-primary-fixed', description: 'Kompetisi multi-event para juara dari setiap cabang.' },
  { name: 'Si Jago Masak', slug: 'si-jago-masak', discipline: '14', icon: masterchefIcon, color: 'border-tertiary-fixed-dim', text: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-fixed-dim', description: 'Lomba memasak kreatif antar unit kerja Kemenkes.' },
];

type SelectedEvent = { slug: string; discipline: string; name: string; description: string } | null;

function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent>(null);
  useEffect(() => {
    const elements = document.querySelectorAll('.hard-shadow') as NodeListOf<HTMLElement>;
    const handleMouseDown = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = 'translate(2px, 2px)';
      el.style.boxShadow = '2px 2px 0px 0px #161d1c';
    };
    const handleMouseUp = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = 'translate(0px, 0px)';
      el.style.boxShadow = '4px 4px 0px 0px #161d1c';
    };

    elements.forEach(el => {
      el.addEventListener('mousedown', handleMouseDown);
      el.addEventListener('mouseup', handleMouseUp);
      el.addEventListener('mouseleave', handleMouseUp);
    });

    return () => {
      elements.forEach(el => {
        el.removeEventListener('mousedown', handleMouseDown);
        el.removeEventListener('mouseup', handleMouseUp);
        el.removeEventListener('mouseleave', handleMouseUp);
      });
    };
  }, []);

  // Update active navigation based on scroll position
  useEffect(() => {
    const sections = ['hero', 'medal-table', 'events', 'schedule'];
    const handleScroll = () => {
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show event detail page when an event is selected
  if (selectedEvent) {
    return (
      <div className="text-on-surface">
        {/* TopNavBar Shell */}
        <nav className="bg-surface dark:bg-surface-dim text-primary dark:text-primary-fixed font-label-caps text-label-caps w-full top-0 sticky border-b-2 border-on-surface dark:border-outline-variant z-50 flex justify-between items-center px-margin-desktop py-4">
          <div className="flex items-center gap-4">
            <img alt="Healthies Olympics Logo" className="h-12 w-auto object-contain" src={logo} />
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => setSelectedEvent(null)} className="text-on-surface-variant hover:text-primary transition-colors duration-200">Home</button>
            <button onClick={() => { setSelectedEvent(null); setTimeout(() => document.getElementById('medal-table')?.scrollIntoView(), 100); }} className="text-on-surface-variant hover:text-primary transition-colors duration-200">Medal Table</button>
            <button onClick={() => setSelectedEvent(null)} className="text-on-surface-variant hover:text-primary transition-colors duration-200">Events</button>
          </div>
          <button className="md:hidden material-symbols-outlined text-primary">menu</button>
        </nav>
        <AnimatePresence mode="wait">
          <EventPage
            key={selectedEvent.slug}
            slug={selectedEvent.slug}
            disciplineNumber={selectedEvent.discipline}
            eventTitle={selectedEvent.name}
            eventDescription={selectedEvent.description}
            onBack={() => setSelectedEvent(null)}
          />
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="text-on-surface">
      {/* TopNavBar Shell */}
      <nav className="bg-surface dark:bg-surface-dim text-primary dark:text-primary-fixed font-label-caps text-label-caps w-full top-0 sticky border-b-2 border-on-surface dark:border-outline-variant z-50 flex justify-between items-center px-margin-desktop py-4">
        <div className="flex items-center gap-4">
          <img alt="Healthies Olympics Logo" className="h-12 w-auto object-contain" src={logo} />
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className={`text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors duration-200 ${activeSection === 'hero' ? 'text-primary font-bold border-b-2 border-primary' : ''}`} href="#hero">Home</a>
          <a className={`text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors duration-200 ${activeSection === 'medal-table' ? 'text-primary font-bold border-b-2 border-primary' : ''}`} href="#medal-table">Medal Table</a>
          <a className={`text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors duration-200 ${activeSection === 'events' ? 'text-primary font-bold border-b-2 border-primary' : ''}`} href="#events">Events</a>
          <a className={`text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors duration-200 ${activeSection === 'schedule' ? 'text-primary font-bold border-b-2 border-primary' : ''}`} href="#schedule">Schedule</a>
        </div>
        <button className="md:hidden material-symbols-outlined text-primary">menu</button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface">
        <div className="diagonal-accent"></div>
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
          <div className="md:col-span-6 py-stack-lg">
            <div className="inline-block bg-tertiary text-on-tertiary px-4 py-1 font-label-caps text-label-caps mb-stack-md hard-shadow">
              EST. 2026 • GLOBAL FINALS
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display-lg text-display-lg text-on-background mb-stack-sm leading-[0.9]">
              HEALTHIES<br />OLYMPICS <span className="text-primary">2026</span>
            </motion.h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-stack-lg">
              Festival Olahraga dan Kesehatan Pegawai Kementerian Kesehatan Republik Indonesia
            </p>
            <div className="flex flex-wrap gap-stack-md">
              <a href="#events" className="bg-primary text-on-primary px-10 py-4 cta-clip font-headline-lg-mobile text-headline-lg-mobile hard-shadow hover-shift transition-all" style={{ transform: "translate(0px, 0px)", boxShadow: "rgb(22, 29, 28) 4px 4px 0px 0px" }}>
                VIEW EVENTS
              </a>
            </div>
          </div>
          <div className="md:col-span-6 h-full relative flex items-center justify-center">
            <img src={logo} alt="Healthies Olympics Logo" className="w-full max-w-lg h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* About Section: Bento Grid */}
      <section id="about" className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-lg border-l-8 border-tertiary pl-6">
            <h2 className="font-headline-lg text-headline-lg text-on-background">ABOUT</h2>
            <p className="font-label-caps text-label-caps text-tertiary">FESTIVAL OLAHRAGA DAN KESEHATAN PEGAWAI KEMENTERIAN KESEHATAN REPUBLIK INDONESIA</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-stack-md">
            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-stack-lg border-2 border-on-surface relative hard-shadow">
              <div className="bg-primary text-on-primary w-12 h-12 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-4">Dikuti 8 Unit Utama</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Kompetisi antar Unit Utama Kemenkes.
              </p>
              <div className="mt-12 h-48 w-full bg-surface-container border-t-2 border-outline-variant flex items-end p-4 gap-2">
                <div className="w-full bg-primary h-[40%]"></div>
                <div className="w-full bg-primary h-[70%]"></div>
                <div className="w-full bg-tertiary h-[90%]"></div>
                <div className="w-full bg-primary h-[60%]"></div>
                <div className="w-full bg-primary h-[85%]"></div>
              </div>
            </motion.div>
            {/* Secondary Cards */}
            <div className="md:col-span-2 bg-primary p-stack-lg flex flex-col justify-between border-2 border-on-surface hard-shadow text-on-primary">
              <div className="flex justify-between items-start">
                <h3 className="font-headline-lg text-headline-lg">Medali Olympics</h3>
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <p className="font-body-md text-body-md mt-4 opacity-90">
                Dari 13 Cabang Olahraga.
              </p>
            </div>
            <div className="bg-tertiary-container p-stack-lg border-2 border-on-surface hard-shadow">
              <h4 className="font-label-caps text-label-caps mb-2">PARTICIPANTS</h4>
              <div className="font-display-lg text-[48px] leading-none mb-2">100+</div>
              <p className="font-body-md text-body-md text-on-tertiary-container">100 Peserta lebih mengikuti kompetisi.</p>
            </div>
            <div className="bg-surface-container-highest p-stack-lg border-2 border-on-surface hard-shadow">
              <h4 className="font-label-caps text-label-caps mb-2">DISCIPLINES</h4>
              <div className="font-display-lg text-[48px] leading-none mb-2">13</div>
              <p className="font-body-md text-body-md text-on-surface-variant">Cabang olahraga yang dilombakan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Medal Table */}
      <MedalTable />

      {/* Sports Categories: High Contrast Cards */}
      <section id="events" className="py-24 bg-on-background text-surface">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display-lg text-[48px] text-surface-bright uppercase">Event Disciplines</h2>
              <p className="text-primary-fixed font-label-caps text-label-caps">CHOOSE YOUR PERFORMANCE DOMAIN</p>
            </div>
            <div className="hidden md:block w-1/2 h-[2px] bg-outline mb-4"></div>
          </div>
          <div id="categories" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {sportsCategories.map((category, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={index}
                className={`group relative overflow-hidden border-l-2 ${category.color} pl-8 cursor-pointer`}
                onClick={() => setSelectedEvent({ slug: category.slug, discipline: category.discipline, name: category.name, description: category.description })}>
                <div className={`absolute -left-2 top-0 bottom-0 w-1 ${category.bg} group-hover:w-2 transition-all`}></div>
                <img src={category.icon} alt={category.name} className="w-12 h-12 mb-6 filter invert brightness-0 opacity-80" />
                <h3 className="font-headline-lg text-headline-lg-mobile mb-4">{category.name}</h3>
                <div className={`flex items-center gap-2 ${category.text} font-bold cursor-pointer group-hover:translate-x-4 transition-transform`}>
                  EXPLORE EVENTS <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section: Minimalist Timeline */}
      <section id="schedule" className="py-24 bg-surface">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-gutter">
            <div className="md:w-1/3">
              <h2 className="font-display-lg text-headline-lg text-on-background mb-stack-md">PHASE 01: THE PREPARATION</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                A strictly scheduled 12-week roadmap leading to the Olympic Village finals.
              </p>
              <div className="h-64 w-full bg-cover border-2 border-on-surface hard-shadow" data-alt="A top-down view of a sleek, modern running track with teal and charcoal lanes. Sunlight creates sharp geometric shadows across the surface. Professional athletes in minimalist gear are seen in blurred motion, emphasizing speed and athletic precision within a high-contrast architectural setting." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5g_CcECky5ISgHofUj3ZT7OL9xsB_b7BZX1LoK4Y2MCkMwTmwFNaM6cdGpH_feCkOMGluEWOcm66qI_eOhI99omJMPmxtwCInwCEQw3jFc49AdIcpxzg9WD87SeMC4K2ePufdGrLJ6UcoTss34lo56mV7aPHYpA_Xsf5LKpBuNyOJQoRY6cCKccGV11PVXVen8JFDUfwovIqVoIzSnp49Yv5NjUO3se12RT9cfB-cQkOWnCq2saE')" }}>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-4">
                {/* Schedule Item */}
                <div className="flex items-center gap-8 p-6 bg-surface-container hover:bg-surface-container-high border-b-2 border-on-surface group transition-colors">
                  <div className="font-label-caps text-headline-lg-mobile text-on-surface-variant w-32">Agu 1</div>
                  <div className="flex-grow">
                    <h4 className="font-headline-lg text-headline-lg-mobile">Team Registration Opens</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Global portal activation for all corporate entities.</p>
                  </div>
                  <div className="material-symbols-outlined group-hover:rotate-45 transition-transform">north_east</div>
                </div>

                {/* Schedule Item */}
                <div className="flex items-center gap-8 p-6 bg-surface-container-low border-b-2 border-on-surface group transition-colors">
                  <div className="font-label-caps text-headline-lg-mobile text-on-surface-variant w-32 text-primary font-black">Agu 7</div>
                  <div className="flex-grow">
                    <h4 className="font-headline-lg text-headline-lg-mobile">THE MAIN EVENT</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Opening ceremony and Day 1 competition heats.</p>
                  </div>
                  <div className="material-symbols-outlined group-hover:rotate-45 transition-transform text-primary">north_east</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <div id="registration" className="bg-tertiary py-8 overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 animate-[marquee_20s_linear_infinite]">
          <span className="text-on-tertiary font-display-lg text-display-lg uppercase opacity-20">Sportivitas, Kerja Sama, dan Keunggulan • </span>
          <span className="text-on-tertiary font-display-lg text-display-lg uppercase opacity-20">Menjalin Silaturahmi, Meningkatkan Soliditas • </span>
          <span className="text-on-tertiary font-display-lg text-display-lg uppercase opacity-20">Prestasi, Persahabatan, dan Kemajuan • </span>
          <span className="text-on-tertiary font-display-lg text-display-lg uppercase opacity-20">Sportivitas, Kerja Sama, dan Keunggulan • </span>
          <span className="text-on-tertiary font-display-lg text-display-lg uppercase opacity-20">Menjalin Silaturahmi, Meningkatkan Soliditas • </span>
          <span className="text-on-tertiary font-display-lg text-display-lg uppercase opacity-20">Prestasi, Persahabatan, dan Kemajuan • </span>
        </div>
      </div>

      {/* Footer Shell */}
      <footer className="bg-inverse-surface dark:bg-surface-container-highest text-primary-fixed dark:text-primary font-body-md text-body-md w-full mt-stack-lg flex flex-col md:flex-row justify-between items-center px-margin-desktop py-stack-lg">
        <div className="mb-stack-md md:mb-0 text-center md:text-left">
          <div className="font-headline-lg text-headline-lg text-surface-container-lowest mb-2">HEALTHIES OLYMPICS</div>
          <p className="text-surface-variant opacity-70">© 2026 HEALTHIES OLYMPICS. PERFORMANCE DRIVEN.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-surface-variant">
          <a className="hover:text-tertiary-fixed transition-colors" href="#">Contact Support</a>
          <a className="hover:text-tertiary-fixed transition-colors" href="#">Corporate Wellness</a>
        </div>
        <div className="mt-stack-md md:mt-0">
          <img alt="Healthies Olympics Logo" className="h-16 w-auto object-contain brightness-0 invert opacity-50" src={logo} />
        </div>
      </footer>
    </div>
  );
}

export default App;
