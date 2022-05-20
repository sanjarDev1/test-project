import React from "react";
import classNames from "classnames";

function Cell({ value, isHighlight, clickShow }) {
  const cellClasses = classNames({
    cell: true,
    winner: isHighlight,
  });
  console.log(value);
  const cellContentClasses = classNames({
    "cell-content": true,
    populated: value,
  });

  return (
    <button
      className={cellClasses}
      style={{
        backgroundColor: value === "X" && "#0336FF",
      }}
      onClick={clickShow}
    >
      <span
        style={{
          color: value === "O" && "#FFDE03",
        }}
        className={cellContentClasses}
      >
        {value}
      </span>
    </button>
  );
}

export default Cell;
