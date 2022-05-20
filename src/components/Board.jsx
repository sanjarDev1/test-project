import React, { useState } from "react";
import Cell from "./Cell";

function Board({ cellValues, winnerCombination, clickCell }) {
  return (
    <div className="board">
      {cellValues.map((value, index) => {
        let isHighlight =
          winnerCombination && winnerCombination.indexOf(index) >= 0;

        return (
          <Cell
            value={value}
            isHighlight={isHighlight}
            clickShow={() => clickCell(index)}
          />
        );
      })}
    </div>
  );
}

export default Board;
