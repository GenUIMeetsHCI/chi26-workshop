import React from "react";
import "../styles/Sidebar.css";
import QuestionsContent from "./QuestionsContent";
import ProgramContent from "./ProgramContent";
import CfpContent from "./CfpContent";
import OrganizersContent from "./OrganizersContent";

function Sidebar({
  activeSection,
  onClose,
  width,
  isDragging,
  highlightedOrganizer,
  onOrganizerHover,
}) {
  const getContent = () => {
    switch (activeSection) {
      case "questions":
        return <QuestionsContent />;
      case "program":
        return <ProgramContent />;
      case "cfp":
        return <CfpContent />;
      case "organizers":
        return (
          <OrganizersContent
            highlightedOrganizer={highlightedOrganizer}
            onOrganizerHover={onOrganizerHover}
          />
        );
      default:
        return null;
    }
  };

  if (!activeSection) return null;

  return (
    <div
      className={`sidebar open ${isDragging ? "no-transition" : ""}`}
      style={{ width: width }}
    >
      <div className="sidebar-content-container">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ×
        </button>
        {getContent()}
      </div>
    </div>
  );
}

export default Sidebar;
