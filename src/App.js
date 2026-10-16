import React, { useState, useEffect, useRef, useCallback } from "react";
import { MotionConfig, AnimatePresence, motion } from "framer-motion";
import SideNav from "./components/SideNav";
import DetailContent from "./components/DetailContent";
import { sectionData } from "./data/sectionData";
import "./styles/App.css";

// Page sections in scroll order
const SECTIONS = [
  { id: "report", label: "Report" },
  { id: "submissions", label: "Proposals" },
  { id: "organizers", label: "Organizers" },
  { id: "archive", label: "Archive" },
];

const NAV_ITEMS = SECTIONS.map(({ id, label }) => ({
  id,
  label,
  subs: sectionData[id].sidebar.sections.map((s) => s.heading),
}));

// Space kept above a scroll target, below the fixed header
const headerOffset = (compact) => (compact ? 64 : 72);
const SPY_LINE = 0.3; // a section becomes active once its top passes 30% of the viewport

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
};

function App() {
  const [active, setActive] = useState({ section: null, sub: null });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const compact = useMediaQuery("(max-width: 1024px)");
  const containerRef = useRef(null);
  const sectionRefs = useRef({});
  // While a click-triggered smooth scroll runs, scroll spying is paused so the
  // nav doesn't flicker through every section on the way to the target.
  const lockRef = useRef(false);
  const unlockTimer = useRef(null);

  const elementFor = (section, sub) =>
    sub === null
      ? sectionRefs.current[section]
      : document.getElementById(`${section}-${sub}`);

  const spy = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerTop = container.getBoundingClientRect().top;
    const line = container.clientHeight * SPY_LINE;
    const topOf = (el) => el.getBoundingClientRect().top - containerTop;
    const atBottom =
      container.scrollTop + container.clientHeight >= container.scrollHeight - 2;

    let next = { section: null, sub: null };
    NAV_ITEMS.forEach((item) => {
      const el = elementFor(item.id, null);
      if (!el || topOf(el) > line) return;
      next = { section: item.id, sub: null };
      item.subs.forEach((_, idx) => {
        const subEl = elementFor(item.id, idx);
        if (subEl && topOf(subEl) <= line) next.sub = idx;
      });
    });
    if (atBottom) {
      const last = NAV_ITEMS[NAV_ITEMS.length - 1];
      next = { section: last.id, sub: Math.max(last.subs.length - 1, 0) };
    }

    setActive((prev) =>
      prev.section === next.section && prev.sub === next.sub ? prev : next
    );
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    let frame = null;
    const onScroll = () => {
      setScrolled(container.scrollTop > 24);
      if (lockRef.current) {
        // Release the lock shortly after the smooth scroll settles
        clearTimeout(unlockTimer.current);
        unlockTimer.current = setTimeout(() => {
          lockRef.current = false;
          spy();
        }, 140);
        return;
      }
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        spy();
      });
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      clearTimeout(unlockTimer.current);
    };
  }, [spy]);

  useEffect(() => {
    if (!compact) setMenuOpen(false);
  }, [compact]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Prevent browser scroll restoration so the page always opens at the top
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const navigate = (section, sub) => {
    const container = containerRef.current;
    const el = elementFor(section, sub);
    const top = el
      ? el.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        container.scrollTop -
        headerOffset(compact)
      : 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setActive({ section, sub });
    setMenuOpen(false);
    lockRef.current = true;
    // In case the page is already in place and no scroll event fires
    clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => (lockRef.current = false), 600);
    container.scrollTo({ top: Math.max(top, 0), behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-container" ref={containerRef}>
        {/* Ink texture for the report text: slightly rough edges, a faint
            bleed, and uneven ink density, so it reads like printed type */}
        <svg className="svg-defs" aria-hidden="true" focusable="false">
          <filter id="ink-texture" x="-2%" y="-10%" width="104%" height="120%">
            {/* Fine paper grain: roughens edges and speckles the strokes */}
            <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="7" result="grain" />
            {/* Broad, soft patches where the ink ran thinner */}
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="3" result="patches" />
            <feDisplacementMap in="SourceGraphic" in2="grain" scale="1.0" xChannelSelector="R" yChannelSelector="G" result="rough" />
            <feGaussianBlur in="rough" stdDeviation="0.24" result="bleed" />
            <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.75 1.35" result="speckle" />
            <feColorMatrix in="patches" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.85 1.4" result="unevenness" />
            <feComposite in="bleed" in2="speckle" operator="in" result="speckled" />
            <feComposite in="speckled" in2="unevenness" operator="in" />
          </filter>
        </svg>
        <header
          className={`top-header ${scrolled || menuOpen ? "" : "transparent"} ${menuOpen ? "menu-open" : ""}`}
        >
          <span className="header-title">CHI2026 Workshop</span>
          <span className="header-divider"></span>
          <span className="header-subtitle">Generative UI for HCI Practice</span>
          {compact && (
            <button
              className={`menu-button ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
            </button>
          )}
        </header>

        {/* Small screens: navigation drops down from the header */}
        <AnimatePresence>
          {compact && menuOpen && (
            <>
              <motion.div
                key="menu-backdrop"
                className="menu-backdrop"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.div
                key="menu-panel"
                id="mobile-menu"
                className="menu-panel"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="menu-scroll">
                  <SideNav items={NAV_ITEMS} active={active} onNavigate={navigate} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Hero: centered title, teaser, and overview */}
        <section className="hero-page">
          <div className="hero-content-wrapper">
            <p className="hero-label">
              CHI 2026 Workshop · Barcelona · Wednesday, 15 April 2026
            </p>
            <h1 className="hero-title">
              What does Generative UI mean for HCI Practice?
            </h1>
            <p className="hero-teaser">
              When interfaces can be generated at runtime, the interface is no
              longer a finished artefact but a space of possibilities. What
              does that change about how HCI designs, builds, and evaluates?
            </p>
            <p className="hero-text">
              This CHI 2026 workshop brought together researchers, designers,
              and practitioners from industry and academia. Across two
              90-minute sessions—a human spectrogram, a pop-up panel, rapid
              sketching, and small-group artefact making—participants explored
              how generative UI can underpin human-centred experiences, and how
              HCI and design practice should evolve in response.
            </p>
          </div>
        </section>

        <div className="page-layout">
          {!compact && (
            <aside className="page-nav">
              <SideNav items={NAV_ITEMS} active={active} onNavigate={navigate} />
            </aside>
          )}

          <main className="page-main">
            {SECTIONS.map(({ id }) => (
              <section
                key={id}
                id={id}
                className="content-section"
                ref={(el) => (sectionRefs.current[id] = el)}
              >
                <DetailContent section={id} />
              </section>
            ))}
          </main>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
