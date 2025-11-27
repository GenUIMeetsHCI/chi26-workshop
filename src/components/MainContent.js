import React from "react";
import ChatBubble from "./ChatBubble";
import "../styles/MainContent.css";

function MainContent({ onSectionClick, activeSection, showChatBubble, highlightedOrganizer, onOrganizerHover }) {
  const organizers = [
    { id: "sian", name: "Siân Lindley" },
    { id: "jack", name: "Jack Williams" },
    { id: "yining", name: "Yining Cao" },
    { id: "haijun", name: "Haijun Xia" },
    { id: "elizabeth", name: "Elizabeth Churchill" },
    { id: "abigail", name: "Abigail Sellen" },
    { id: "jeffrey", name: "Jeffrey Nichols" },
    { id: "david", name: "David Karger" }
  ];

  const getTabContent = (section) => {
    // If showChatBubble is true, show chat interface
    if (showChatBubble) {
      return (
        <ChatBubble 
          section={section} 
          highlightedOrganizer={highlightedOrganizer}
          onOrganizerHover={onOrganizerHover}
          organizers={organizers}
        />
      );
    }

    return null;
  };

  return (
    <div className="main-content">
      <h1 className="title">CHI2026 Workshop on Generative UI</h1>

      <div className="subtitle">
        <p>What does Generative UI mean for HCI Practice?</p>
        <p>time TBD, 2026</p>
      </div>

      <div className="description">
        <p>
          The increasing capability of AI models to generate user interfaces has
          the potential to transform HCI and design practice. We invite
          researchers, designers, and practitioners to explore how
          genUI—interfaces created by AI models—will reshape design methods,
          workflows, and user experiences. Our goals are to (i) envision how
          genUI can underpin innovative human-centric experiences, and (ii)
          reflect on how HCI and design practice could and should evolve to meet
          the challenges this presents. This will be an interactive workshop,
          featuring a pop-up panel, creative ideation exercises, and
          collaborative artefact development, held over two 90-minute sessions.
          We welcome submissions from scholars and practitioners working on
          dynamic or generative UI, as well as those with expertise in related
          areas.
        </p>
      </div>

      <div className="navigation-tabs">
        <button
          className={`tab-button ${
            activeSection === "questions" ? "active" : ""
          }`}
          onClick={() => onSectionClick("questions")}
        >
          Questions We Asked
        </button>
        <button
          className={`tab-button ${
            activeSection === "program" ? "active" : ""
          }`}
          onClick={() => onSectionClick("program")}
        >
          Program
        </button>
        <button
          className={`tab-button ${activeSection === "cfp" ? "active" : ""}`}
          onClick={() => onSectionClick("cfp")}
        >
          CFP
        </button>
        <button
          className={`tab-button ${
            activeSection === "organizers" ? "active" : ""
          }`}
          onClick={() => onSectionClick("organizers")}
        >
          Organizers
        </button>
      </div>

      {activeSection && (
        <div className="tab-content">{getTabContent(activeSection)}</div>
      )}
    </div>
  );
}

export default MainContent;
