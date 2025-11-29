import React, { useState, useEffect } from "react";
import { sectionData } from "../data/sectionData";
import "../styles/ChatBubble.css";

function ChatBubble({
  section,
  highlightedOrganizer,
  onOrganizerHover,
  organizers,
}) {
  const [visibleMessages, setVisibleMessages] = useState([]);

  // Get the chat data - handle both single and multiple chat formats
  const getChatData = () => {
    const sectionInfo = sectionData[section];
    if (sectionInfo?.chatBubbles) {
      // Multiple chats (program section)
      return sectionInfo.chatBubbles;
    } else if (sectionInfo?.chatBubble) {
      // Single chat (other sections)
      return [sectionInfo.chatBubble];
    }
    // Fallback to program single chat
    return [
      sectionData.program.chatBubbles?.[0] || sectionData.program.chatBubble,
    ];
  };

  const chats = getChatData();

  useEffect(() => {
    // Reset visible messages when section changes
    setVisibleMessages([]);

    // Show messages progressively with delays
    let currentDelay = 200;
    const timers = [];

    chats.forEach((chat, chatIndex) => {
      // Show question
      const questionTimer = setTimeout(() => {
        setVisibleMessages((prev) => [
          ...prev,
          { type: "question", chatIndex, content: chat.fullQuestion },
        ]);
      }, currentDelay);
      timers.push(questionTimer);
      currentDelay += 400;

      // Show answer
      const answerTimer = setTimeout(() => {
        setVisibleMessages((prev) => [
          ...prev,
          { type: "answer", chatIndex, content: chat.answer },
        ]);
      }, currentDelay);
      timers.push(answerTimer);
      currentDelay += 600;
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [section]);

  // Render the answer content based on section
  const renderAnswer = (content, chatIndex) => {
    if (section === "organizers" && organizers && chatIndex === 0) {
      return (
        <p>
          We are a multidisciplinary team from industry and academia, with deep
          expertise including dynamic and generative UI, HCI and design
          practice, and the inclusion of AI capabilities in software. The
          organizers are{" "}
          {organizers.map((org, idx) => (
            <span key={org.id}>
              <span
                className={`organizer-name ${
                  highlightedOrganizer === org.id ? "highlighted" : ""
                }`}
                onMouseEnter={() => onOrganizerHover(org.id)}
                onMouseLeave={() => onOrganizerHover(null)}
              >
                {org.name}
              </span>
              {idx < organizers.length - 2
                ? ", "
                : idx === organizers.length - 2
                ? ", and "
                : "."}
            </span>
          ))}
        </p>
      );
    }
    return content;
  };

  return (
    <div className="chat-bubble-inline">
      <div className="chat-messages">
        {visibleMessages.map((message, idx) => (
          <div
            key={idx}
            className={`message ${
              message.type === "question"
                ? "question-message"
                : "answer-message"
            }`}
          >
            <div className="message-bubble">
              {message.type === "question"
                ? message.content
                : renderAnswer(message.content, message.chatIndex)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatBubble;
