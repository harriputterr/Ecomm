import React, { useState } from "react";

const Accordion = ({ title, content }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="font-light text-sm">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg uppercase">{title}</h2>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isCollapsed ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isCollapsed ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </div>
      {isCollapsed && (
        <div className="mt-4 max-w-sm text-left">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
