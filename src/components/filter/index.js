import React from "react";

const FilterButtons = ({ currentFilter, setCurrentFilter }) => {
  const buttons = [
    { label: "Tous", value: "all" },
    { label: "Front-end", value: "Front-end" },
    { label: "Back-end", value: "Back-end" },
    { label: "SEO", value: "SEO" },
    { label: "Gestion de Projet ", value: "Agile" },
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
