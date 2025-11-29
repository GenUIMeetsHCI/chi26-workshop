import React from "react";
import SidebarContent from "./SidebarContent";
import "../styles/Sidebar.css";

function Sidebar({ activeSection, highlightedOrganizer, onOrganizerHover }) {
  return (
    <div className="sidebar-panel">
      <SidebarContent
        section={activeSection}
        highlightedOrganizer={highlightedOrganizer}
        onOrganizerHover={onOrganizerHover}
      />
    </div>
  );
}

export default Sidebar;
