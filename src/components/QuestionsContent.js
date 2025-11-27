import React from "react";

function QuestionsContent() {
  return (
    <div className="sidebar-content">
      <h2>Questions We Asked</h2>
      <div className="question-item">
        <h3>1. Designer/Developer vs. End-User</h3>
        <p>
          Is the generated UI for a designer/developer or for the
          end-user?
        </p>
      </div>
      <div className="question-item">
        <h3>2. UI Constancy</h3>
        <p>Is the UI constant or does it change?</p>
      </div>
      <div className="question-item">
        <h3>3. Change Agency</h3>
        <p>
          If the interface can change, are changes user-driven or
          system-driven?
        </p>
      </div>
      <div className="question-item">
        <h3>4. Interaction Timeframe</h3>
        <p>How long is the interaction timeframe?</p>
      </div>
    </div>
  );
}

export default QuestionsContent;

