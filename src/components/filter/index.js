import React from "react";

const FilterButtons = ({ currentFilter, setCurrentFilter }) => {
  const buttons = [
    { label: "Tous", value: "all" },
    { label: "HTML/CSS", value: "HTML/CSS" },
    { label: "Javascript", value: "Javascript" },
    { label: "React.js", value: "React.Js" },
    { label: "Node.Js", value: "Node.Js" },
    { label: "SEO", value: "SEO" },
  ];

  return (
    <div className="filter-buttons">
      {buttons.map((button, index) => (
        <button
          key={index}
          id="button_h"
          className={`ac_btn btn ${
            currentFilter === button.value ? "active" : ""
          }`}
          onClick={() => setCurrentFilter(button.value)}
        >
          {button.label}
          <div className="ring one"></div>
          <div className="ring two"></div>
          <div className="ring three"></div>
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
