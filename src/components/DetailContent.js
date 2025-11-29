import React, { useEffect, useRef } from "react";
import { sectionData } from "../data/sectionData";
import "../styles/DetailContent.css";

/**
 * Right content panel displaying detailed section information
 * Shows as "answer bubbles" when subsections are highlighted
 */
function DetailContent({ section, activeSubsection }) {
  const data = sectionData[section]?.sidebar || sectionData.cfp.sidebar;
  const subsectionRefs = useRef([]);

  // Scroll to focused subsection when clicked
  useEffect(() => {
    if (activeSubsection !== null && subsectionRefs.current[activeSubsection]) {
      subsectionRefs.current[activeSubsection].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeSubsection]);

  const renderContent = (contentArray) => {
    if (!contentArray) return null;

    return contentArray.map((item, index) => {
      switch (item.type) {
        case "h1":
          return (
            <h1 key={index} className="detail-h1">
              {item.text}
            </h1>
          );
        case "h2":
          return (
            <h2 key={index} className="detail-h2">
              {item.text}
            </h2>
          );
        case "text":
          return (
            <p
              key={index}
              className="detail-text"
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
            <ul key={index} className="detail-list">
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
        case "button":
          return (
            <div key={index} className="detail-button-wrapper">
              <a
                href={item.url}
                className="detail-button"
                target={item.newTab ? "_blank" : "_self"}
                rel={item.newTab ? "noopener noreferrer" : ""}
              >
                {item.text}
              </a>
            </div>
          );
        case "timeline":
          return (
            <div key={index} className="timeline-container">
              {item.items.map((timelineItem, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {i < item.items.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-time">{timelineItem.time}</div>
                    <div className="timeline-title">{timelineItem.title}</div>
                    {timelineItem.description && (
                      <div className="timeline-description">
                        {timelineItem.description}
                      </div>
                    )}
                    {timelineItem.details && (
                      <ul className="timeline-details">
                        {timelineItem.details.map((detail, j) => (
                          <li key={j}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        case "organizer":
          return (
            <div key={index} className={`organizer-bubble`}>
              <div className="organizer-left">
                <div className="organizer-image">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <div className="organizer-avatar-placeholder">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <div className="organizer-info">
                  <h4 className="organizer-name">{item.name}</h4>
                  <p className="organizer-title">{item.title}</p>
                </div>
              </div>
              <div className="organizer-right">
                <div className="research-focus-bubble">
                  <p className="research-focus-text">{item.researchFocus}</p>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="detail-content-panel">
      <div className="detail-content">
        {/* Subsections with answer bubble highlighting */}
        {data.sections?.map((sec, idx) => (
          <div
            key={idx}
            className={`detail-section ${
              activeSubsection === idx && section !== "organizers"
                ? "highlighted"
                : ""
            }`}
            ref={(el) => (subsectionRefs.current[idx + 1] = el)}
          >
            {renderContent(sec.content)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailContent;
