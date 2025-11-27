import React, { useState, useRef, useEffect } from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";

function App() {
  const [activeSection, setActiveSection] = useState("questions");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mainWidth, setMainWidth] = useState(60);
  const [isDragging, setIsDragging] = useState(false);
  const [showChatBubble, setShowChatBubble] = useState(true);
  const [highlightedOrganizer, setHighlightedOrganizer] = useState(null);
  const containerRef = useRef(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    // Reset chat bubble to show on new section
    setShowChatBubble(false);
    setTimeout(() => setShowChatBubble(true), 50);

    // Open sidebar for all sections except "questions"
    if (section !== "questions") {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  const handleMouseDown = (e) => {
    if (activeSection) {
      e.preventDefault();
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newWidth = (e.clientX / containerWidth) * 100;

        // Constrain between 30% and 80%
        if (newWidth >= 30 && newWidth <= 80) {
          setMainWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.classList.remove("dragging");
    };

    if (isDragging) {
      document.body.classList.add("dragging");
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.body.classList.remove("dragging");
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="app-container" ref={containerRef}>
      <div
        className={`main-wrapper ${isSidebarOpen ? "shifted" : ""} ${
          isDragging ? "no-transition" : ""
        }`}
        style={{ width: isSidebarOpen ? `${mainWidth}%` : "100%" }}
      >
        <MainContent
          onSectionClick={handleSectionClick}
          activeSection={activeSection}
          showChatBubble={showChatBubble}
          highlightedOrganizer={highlightedOrganizer}
          onOrganizerHover={setHighlightedOrganizer}
        />
      </div>
      {isSidebarOpen && (
        <div
          className={`resize-handle ${isDragging ? "dragging" : ""}`}
          onMouseDown={handleMouseDown}
        />
      )}
      <Sidebar
        activeSection={isSidebarOpen ? activeSection : null}
        onClose={() => setIsSidebarOpen(false)}
        width={isSidebarOpen ? `${100 - mainWidth}%` : "0%"}
        isDragging={isDragging}
        highlightedOrganizer={highlightedOrganizer}
        onOrganizerHover={setHighlightedOrganizer}
      />
    </div>
  );
}

export default App;
