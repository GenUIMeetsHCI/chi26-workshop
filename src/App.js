import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ContentNavigation from "./components/ContentNavigation";
import DetailContent from "./components/DetailContent";
import { getAssetPath } from "./config";
import "./styles/App.css";
import { ChevronDown } from "lucide-react";

function App() {
  const [activeCfpSubsection, setActiveCfpSubsection] = useState(0);
  const [activeProgramSubsection, setActiveProgramSubsection] = useState(0);
  const [activeOrganizersSubsection, setActiveOrganizersSubsection] =
    useState(0);
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState("cfp");
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const cfpRef = useRef(null);
  const programRef = useRef(null);
  const organizersRef = useRef(null);

  const handleSectionClick = (section) => {
    // Scroll to the appropriate section
    const refs = {
      home: heroRef,
      cfp: cfpRef,
      program: programRef,
      organizers: organizersRef,
    };

    refs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Reset scroll position to top on mount (page load/refresh)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    // Prevent browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const viewportHeight = window.innerHeight;
        setShowNav(scrollPosition > viewportHeight * 0.5);

        // Determine which section is currently in view
        const heroTop = heroRef.current?.offsetTop || 0;
        const cfpTop = cfpRef.current?.offsetTop || 0;
        const programTop = programRef.current?.offsetTop || 0;
        const organizersTop = organizersRef.current?.offsetTop || 0;

        const scrollWithOffset = scrollPosition + viewportHeight / 2;

        if (scrollWithOffset < cfpTop) {
          setActiveSection("home");
        } else if (scrollWithOffset < programTop) {
          setActiveSection("cfp");
        } else if (scrollWithOffset < organizersTop) {
          setActiveSection("program");
        } else {
          setActiveSection("organizers");
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      className={`app-container ${
        activeSection === "home" ? "hero-page-container" : ""
      }`}
      ref={containerRef}
    >
      {/* Global Fixed Header */}
      <header className={`top-header ${!showNav ? "transparent" : ""}`}>
        <span className="header-title">CHI2026 Workshop</span>
        <span className="header-divider"></span>
        <span className="header-subtitle">Generative UI for HCI Practice</span>
      </header>

      {/* Hero Section */}
      <section className="hero-page" ref={heroRef}>
        <div className="hero-content-wrapper">
          <h2 className="hero-label">CHI2026 Workshop</h2>
          <h1 className="hero-title">
            What does Generative UI mean for HCI Practice?
          </h1>
          <p className="hero-caption">
            Creant el demà junts • Barcelona, April 2026
          </p>
          <p className="hero-text">
            The increasing capability of AI models to generate user interfaces
            has the potential to transform HCI and design practice. We invite
            researchers, designers, and practitioners to explore how generative
            UI—interfaces created by AI models—will reshape design methods,
            workflows, and user experiences.
            <br />
            <br />
            This will be an interactive and discussion-oriented workshop,
            featuring a pop-up panel, creative ideation exercises, and
            collaborative artefact development. We will welcome submissions from
            scholars and practitioners working on dynamic or generative UI, as
            well as those with expertise in related areas to join the
            conversation.
          </p>
          {/* <button className="hero-cta-button">Submission Form</button> */}

          {/* <div className="hero-cta-button">
            <a
              href="https://forms.office.com/r/F84grr6bV1"
              target="_blank"
              rel="noreferrer"
            >
              Submission Form
            </a>
          </div> */}
          <a
            className="hero-secondary-link"
            href={getAssetPath("genUI-chi26-workshop.pdf")}
            target="_blank"
            rel="noreferrer"
          >
            Read our Workshop Proposal →
          </a>
        </div>
      </section>

      {/* CFP Section */}
      <section className="split-page" ref={cfpRef}>
        <div className="split-container">
          <div className="split-left">
            <ContentNavigation
              activeSection="cfp"
              activeSubsection={activeCfpSubsection}
              onSubsectionClick={setActiveCfpSubsection}
            />
          </div>
          <div className="split-right">
            <DetailContent
              section="cfp"
              activeSubsection={activeCfpSubsection}
              scrollContainerRef={containerRef}
            />
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="split-page" ref={programRef}>
        <div className="split-container">
          <div className="split-left">
            <ContentNavigation
              activeSection="program"
              activeSubsection={activeProgramSubsection}
              onSubsectionClick={setActiveProgramSubsection}
            />
          </div>
          <div className="split-right">
            <DetailContent
              section="program"
              activeSubsection={activeProgramSubsection}
              scrollContainerRef={containerRef}
            />
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="split-page" ref={organizersRef}>
        <div className="split-container">
          <div className="split-left">
            <ContentNavigation
              activeSection="organizers"
              activeSubsection={activeOrganizersSubsection}
              onSubsectionClick={setActiveOrganizersSubsection}
            />
          </div>
          <div className="split-right">
            <DetailContent
              section="organizers"
              activeSubsection={activeOrganizersSubsection}
              scrollContainerRef={containerRef}
            />
          </div>
        </div>
      </section>

      {/* Animated Bottom Navigation */}
      <motion.nav
        className={`bottom-nav-bar ${showNav ? "" : "indicator"}`}
        initial={{
          scale: 0.8,
          opacity: 1,
          x: "-50%",
        }}
        animate={{
          scale: showNav ? 1.2 : 0.8,
          opacity: showNav ? 1.2 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {showNav && (
          <>
            <div
              className={`nav-tab ${activeSection === "home" ? "active" : ""}`}
              onClick={() => handleSectionClick("home")}
            >
              Home
            </div>
            <div
              className={`nav-tab ${activeSection === "cfp" ? "active" : ""}`}
              onClick={() => handleSectionClick("cfp")}
            >
              Call for Participation
            </div>
            <div
              className={`nav-tab ${
                activeSection === "program" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("program")}
            >
              Program
            </div>
            <div
              className={`nav-tab ${
                activeSection === "organizers" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("organizers")}
            >
              Organizers
            </div>
          </>
        )}
        {!showNav && <ChevronDown className="down-arrow-icon" size={24} />}
        {!showNav && <span className="scroll-text">scroll to learn more</span>}
      </motion.nav>
    </div>
  );
}

export default App;
