import React from "react";
import { sectionData } from "../data/sectionData";
import "../styles/ContentNavigation.css";

/**
 * Left navigation panel with section title and subsection menu
 * Displays as "question bubbles" when active
 * Click empty space to deselect all
 */
function ContentNavigation({
  activeSection,
  activeSubsection,
  onSubsectionClick,
}) {
  const data = sectionData[activeSection]?.sidebar || sectionData.cfp.sidebar;

  // Handle click on empty space to deselect
  const handlePanelClick = (e) => {
    if (e.target.classList.contains("content-nav-panel")) {
      onSubsectionClick(null);
    }
  };

  return (
    <div className="content-nav-panel" onClick={handlePanelClick}>
      <div className="content-nav-title">{data.title}</div>

      {/* Subsection navigation menu */}
      <nav className="content-nav-menu">
        {data.sections?.map((section, idx) => (
          <div
            key={idx}
            className={`nav-item ${activeSubsection === idx ? "active" : ""}`}
            onClick={() => onSubsectionClick(idx)}
          >
            {section.heading}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default ContentNavigation;
