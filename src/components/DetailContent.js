import React, { useState } from "react";
import { sectionData } from "../data/sectionData";
import { getAssetPath } from "../config";
import { ArrowUpRight, Check, Copy, Mail, FileText, Youtube } from "lucide-react";
import "../styles/DetailContent.css";

/**
 * Content for one page section. Each subsection gets an id
 * (`${section}-${idx}`) so the side navigation can scroll to and track it.
 */
function DetailContent({ section }) {
  const data = sectionData[section]?.sidebar || sectionData.submissions.sidebar;
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopyEmail = (email, organizerName) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(organizerName);
      setTimeout(() => setCopiedEmail(null), 2000);
    });
  };
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
        case "subtitle":
          return (
            <p key={index} className="detail-subtitle">
              {item.text}
            </p>
          );
        case "text":
          return (
            <p
              key={index}
              className="detail-text"
              dangerouslySetInnerHTML={{
                __html: item.text
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>"),
              }}
            />
          );
        case "contactEmail":
          return (
            <p key={index} className="detail-text contact-email-text">
              {item.text}{" "}
              <a href={`mailto:${item.email}`} className="contact-email-link">
                <Mail size={16} className="contact-email-icon" />
                <span>{item.email}</span>
              </a>
            </p>
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
        case "paperList":
          return (
            <div key={index} className="paper-list">
              {item.items.map((paper, i) => {
                const href = paper.pdf
                  ? getAssetPath(paper.pdf)
                  : paper.video;
                const Icon = paper.video ? Youtube : FileText;
                return (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-card"
                  >
                    <div className="paper-card-content">
                      <div className="paper-title-row">
                        <h4 className="paper-title">{paper.title}</h4>
                        <Icon size={16} className="paper-pdf-icon" />
                      </div>
                      {paper.authors && (
                        <p className="paper-authors">{paper.authors}</p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          );
        case "organizer":
          return (
            <div key={index} className="organizer-row">
              <div className="organizer-image">
                {item.image ? (
                  <img src={getAssetPath(item.image)} alt={item.name} />
                ) : (
                  <div className="organizer-avatar-placeholder">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="organizer-body">
                <div className="organizer-head">
                  <h4 className="organizer-name">{item.name}</h4>
                  <span className="organizer-title">{item.title}</span>
                </div>
                <p className="research-focus-text">{item.researchFocus}</p>
                {(item.website || item.email) && (
                  <div className="organizer-links">
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="organizer-link"
                      >
                        Website
                        <ArrowUpRight size={15} strokeWidth={1.75} />
                      </a>
                    )}
                    {item.email && (
                      <button
                        className="organizer-link"
                        onClick={() => handleCopyEmail(item.email, item.name)}
                        title="Copy email address"
                      >
                        {copiedEmail === item.name ? (
                          <>
                            Copied
                            <Check size={15} strokeWidth={1.75} />
                          </>
                        ) : (
                          <>
                            Email
                            <Copy size={14} strokeWidth={1.75} />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className={`detail-content-panel section-${section}`}>
      <div className="detail-content">
        {/* Section label, then subsections */}
        <h2 className="detail-section-title">{data.title}</h2>
        {data.sections?.map((sec, idx) => (
          <div key={idx} id={`${section}-${idx}`} className="detail-section">
            {renderContent(sec.content)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailContent;
