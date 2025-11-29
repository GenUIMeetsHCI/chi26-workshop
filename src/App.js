import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import { ChevronDown } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("cfp");
  const [showChatBubble, setShowChatBubble] = useState(true);
  const [highlightedOrganizer, setHighlightedOrganizer] = useState(null);
  const [showNav, setShowNav] = useState(false);
  const containerRef = useRef(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setShowChatBubble(false);
    setTimeout(() => setShowChatBubble(true), 50);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const viewportHeight = window.innerHeight;
        setShowNav(scrollPosition > viewportHeight * 0.5);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="app-container" ref={containerRef}>
      {/* Global Fixed Header */}
      <header className="top-header">
        <span className="header-title">CHI2026 Workshop</span>
        <span className="header-divider"></span>
        <span className="header-subtitle">Generative UI</span>
      </header>

      {/* Hero Section */}
      <section className="hero-page">
        <div className="hero-content-wrapper">
          <h2 className="hero-label">CHI2026 Workshop</h2>
          <h1 className="hero-title">
            What does Generative UI mean for HCI Practice?
          </h1>

          <p className="hero-date">time TBD, 2026</p>

          <p className="hero-text">
            As AI models become capable of generating user interfaces in
            real-time, we face a transformative moment for HCI. This workshop
            explores how generative UI will reshape design methods, workflows,
            and user experiences—and how our practice must evolve to meet these
            challenges. Join researchers, designers, and practitioners for an
            interactive workshop featuring ideation exercises, panel
            discussions, and collaborative artifact development.
          </p>

          <button className="hero-cta-button">Submission Form</button>
        </div>
      </section>

      {/* Split Screen Section */}
      <section className="split-page">
        <div className="split-container">
          <div className="split-left">
            <MainContent
              activeSection={activeSection}
              showChatBubble={showChatBubble}
              highlightedOrganizer={highlightedOrganizer}
              onOrganizerHover={setHighlightedOrganizer}
            />
          </div>
          <div className="split-right">
            <Sidebar
              activeSection={activeSection}
              highlightedOrganizer={highlightedOrganizer}
              onOrganizerHover={setHighlightedOrganizer}
            />
          </div>
        </div>
      </section>

      {/* Animated Bottom Navigation */}
      <motion.nav
        className="bottom-nav-bar"
        initial={{
          scale: 0.5,
          opacity: 0.8,
          x: "-50%",
        }}
        animate={{
          scale: showNav ? 1 : 0.5,
          opacity: showNav ? 1 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {showNav && (
          <>
            <button
              className={`nav-tab ${activeSection === "cfp" ? "active" : ""}`}
              onClick={() => handleSectionClick("cfp")}
            >
              Call for Participation
            </button>
            <button
              className={`nav-tab ${
                activeSection === "program" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("program")}
            >
              Program
            </button>
            <button
              className={`nav-tab ${
                activeSection === "organizers" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("organizers")}
            >
              Organizers
            </button>
          </>
        )}
        {!showNav && <ChevronDown className="down-arrow-icon" size={24} />}
      </motion.nav>
    </div>
  );
}

export default App;
