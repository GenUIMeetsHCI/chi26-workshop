import React from "react";
import { sectionData } from "../data/sectionData";
import "../styles/MainContent.css";

function MainContent({
  activeSection,
  showChatBubble,
  highlightedOrganizer,
  onOrganizerHover,
}) {
  const organizers = [
    { id: "sian", name: "Siân Lindley" },
    { id: "jack", name: "Jack Williams" },
    { id: "yining", name: "Yining (Rima) Cao" },
    { id: "haijun", name: "Haijun Xia" },
    { id: "elizabeth", name: "Elizabeth F. Churchill" },
    { id: "abigail", name: "Abigail Sellen" },
    { id: "jeffrey", name: "Jeffrey Nichols" },
    { id: "david", name: "David Karger" },
  ];

  return (
    <div className="chat-panel">
      <div className="main-content-summary">
        <h2 className="main-content-title">
          {sectionData[activeSection].sidebar.title}
        </h2>
        <p className="main-content-summary-text">
          {sectionData[activeSection].sidebar.summary}
        </p>
      </div>

      {/* {showChatBubble && (
        <ChatBubble
          section={activeSection}
          highlightedOrganizer={highlightedOrganizer}
          onOrganizerHover={onOrganizerHover}
          organizers={organizers}
        />
      )} */}
    </div>
  );
}

export default MainContent;
