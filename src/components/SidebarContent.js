import React from "react";
import { sectionData } from "../data/sectionData";
import "../styles/SidebarContent.css";

function SidebarContent({ section, highlightedOrganizer, onOrganizerHover }) {
  const data = sectionData[section]?.sidebar || sectionData.program.sidebar;

  const renderContent = (contentArray) => {
    if (!contentArray) return null;

    return contentArray.map((item, index) => {
      switch (item.type) {
        case "text":
          return (
            <p
              key={index}
              className="sidebar-text"
              dangerouslySetInnerHTML={{
                __html: item.text.replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong>$1</strong>"
                ),
              }}
            />
          );
        case "list":
          return (
            <ul key={index} className="sidebar-list">
              {item.items.map((listItem, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: listItem.replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong>$1</strong>"
                    ),
                  }}
                />
              ))}
            </ul>
          );
        case "organizer":
          return (
            <div
              key={index}
              className={`organizer-card ${
                highlightedOrganizer === item.name.toLowerCase().split(" ")[0]
                  ? "highlighted"
                  : ""
              }`}
              onMouseEnter={() =>
                onOrganizerHover(item.name.toLowerCase().split(" ")[0])
              }
              onMouseLeave={() => onOrganizerHover(null)}
            >
              <h4 className="organizer-name">{item.name}</h4>
              <p className="organizer-affiliation">{item.affiliation}</p>
              <p className="organizer-bio">{item.bio}</p>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="sidebar-content">
      {/* Summary section */}
      {/* <div className="sidebar-summary">
        <h2 className="sidebar-title">{data.title}</h2>
        <p className="sidebar-summary-text">{data.summary}</p>
      </div> */}

      {/* Sections */}
      {data.sections?.map((sec, idx) => (
        <div key={idx} className="sidebar-section">
          <h3 className="sidebar-section-heading">{sec.heading}</h3>
          {renderContent(sec.content)}
        </div>
      ))}
    </div>
  );
}

export default SidebarContent;
