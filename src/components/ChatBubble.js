import React, { useState, useEffect } from "react";
import "../styles/ChatBubble.css";

function ChatBubble({ section, highlightedOrganizer, onOrganizerHover, organizers }) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  // Chat data for each section
  const chatData = {
    questions: {
      fullQuestion: "What are the challenging questions we investigate?",
      answer:
        "We explore four key dimensions of generative UI: (1) Is the generated UI for a designer/developer or for the end-user? (2) Is the UI constant or does it change? (3) If the interface can change, are changes user-driven or system-driven? (4) How long is the interaction timeframe?",
    },
    program: {
      fullQuestion: "What does the program look like?",
      answer:
        "This interactive workshop features two 90-minute sessions with a pop-up panel, creative ideation exercises, and collaborative artefact development exploring the future of generative UI in HCI practice. We'll dive deep into how generative interfaces can reshape design methods and workflows.",
    },
    cfp: {
      fullQuestion: "What are you looking for in submissions?",
      answer:
        "We welcome submissions from scholars and practitioners working on dynamic or generative UI, as well as those with expertise in related areas. Submit your position papers and case studies to join the conversation. We're interested in fresh perspectives on how AI-generated interfaces will transform HCI practice.",
    },
    organizers: {
      fullQuestion: "Who is organizing this workshop?",
      answer: null, // Will be rendered specially with clickable names
    },
  };

  const currentChat = chatData[section] || chatData.questions;

  useEffect(() => {
    // Show question after a brief delay
    const questionTimer = setTimeout(() => {
      setShowQuestion(true);
    }, 200);

    // Show answer after question appears (floats up)
    const answerTimer = setTimeout(() => {
      setShowAnswer(true);
    }, 600);

    return () => {
      clearTimeout(questionTimer);
      clearTimeout(answerTimer);
    };
  }, []);

  // Render the answer content based on section
  const renderAnswer = () => {
    if (section === "organizers" && organizers) {
      return (
        <p>
          We are a multidisciplinary team from industry and academia, with deep expertise including dynamic and generative UI, HCI and design practice, and the inclusion of AI capabilities in software. The organizers are{" "}
          {organizers.map((org, idx) => (
            <span key={org.id}>
              <span
                className={`organizer-name ${highlightedOrganizer === org.id ? "highlighted" : ""}`}
                onMouseEnter={() => onOrganizerHover(org.id)}
                onMouseLeave={() => onOrganizerHover(null)}
              >
                {org.name}
              </span>
              {idx < organizers.length - 2 ? ", " : idx === organizers.length - 2 ? ", and " : "."}
            </span>
          ))}
        </p>
      );
    }
    return currentChat.answer;
  };

  return (
    <div className="chat-bubble-inline">
      <div className="chat-messages">
        {/* Question bubble */}
        {showQuestion && (
          <div className="message question-message">
            <div className="message-bubble">{currentChat.fullQuestion}</div>
          </div>
        )}

        {/* Answer bubble */}
        {showAnswer && (
          <div className="message answer-message">
            <div className="message-bubble">{renderAnswer()}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatBubble;
