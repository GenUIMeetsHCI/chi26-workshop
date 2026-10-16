import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/SideNav.css";

// Gentle ease-out for opening, slightly quicker ease-in-out for closing
const EASE_OUT = [0.22, 1, 0.36, 1];
const EASE_IN_OUT = [0.4, 0, 0.2, 1];

const listVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.42, ease: EASE_OUT },
      opacity: { duration: 0.25, delay: 0.04 },
      staggerChildren: 0.03,
      delayChildren: 0.08,
    },
  },
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: EASE_IN_OUT },
      opacity: { duration: 0.18 },
      staggerChildren: 0.015,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.32, ease: EASE_OUT },
  },
  collapsed: {
    opacity: 0,
    y: -4,
    filter: "blur(2px)",
    transition: { duration: 0.16, ease: EASE_IN_OUT },
  },
};

/**
 * Single page navigation. The active section expands to reveal its
 * subsections; `active` is driven by both clicks and scroll position.
 */
function SideNav({ items, active, onNavigate }) {
  return (
    <nav className="side-nav" aria-label="Page sections">
        <ul className="side-nav-list">
          {items.map((item) => {
            const isActive = active.section === item.id;
            const hasSubs = item.subs.length > 1;
            const expanded = isActive && hasSubs;
            return (
              <li key={item.id} className="side-nav-group">
                <button
                  className={`side-nav-section ${isActive ? "active" : ""}`}
                  onClick={() => onNavigate(item.id, null)}
                  aria-current={isActive && active.sub === null ? "true" : undefined}
                >
                  {item.label}
                </button>

                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.ul
                      key="subs"
                      className="side-nav-subs"
                      variants={listVariants}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                    >
                      {item.subs.map((label, idx) => {
                        const subActive = active.sub === idx;
                        return (
                          <motion.li key={label} variants={itemVariants}>
                            <button
                              className={`side-nav-sub ${subActive ? "active" : ""}`}
                              onClick={() => onNavigate(item.id, idx)}
                              aria-current={subActive ? "true" : undefined}
                            >
                              {label}
                            </button>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
    </nav>
  );
}

export default SideNav;
