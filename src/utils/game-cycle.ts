import { SetStateAction, Dispatch } from "react";

export const countNeighbors = (
  y: number,
  x: number,
  boardState: boolean[][]
): number => {
  const deltas = [-1, 0, 1];
  let aliveNeighbors = 0;

  for (const yDelta of deltas)
    for (const xDelta of deltas) {
      if (yDelta === 0 && xDelta === 0) {
        continue;
      }
      const neighborX = x + xDelta;
      const neighborY = y + yDelta;

      // if neighbor cell is out of bounds, continue to next
      if (
        boardState[neighborY] === undefined ||
        boardState[neighborY][neighborX] === undefined
      ) {
      } else {
        if (boardState[neighborY][neighborX]) aliveNeighbors++;
      }
    }

  return aliveNeighbors;
};

export const checkWon = (
  historyState: boolean[][],
  boardState: boolean[][],
  setWon: Dispatch<SetStateAction<boolean>>,
  setHistoryState: Dispatch<SetStateAction<boolean[][]>>
): boolean => {
  const mirrorHistory: boolean[][] = JSON.parse(JSON.stringify(historyState));

  let gameStatus = true;

  boardState.forEach((row, y) =>
    row.forEach((cell, x) => {
      if (!historyState[y][x] && cell) mirrorHistory[y][x] = true;

      if (!mirrorHistory[y][x]) gameStatus = false;
    })
  );

  if (gameStatus) setWon(true);
  setHistoryState(mirrorHistory);
  return gameStatus;
};

export const checkLost = (
  boardState: boolean[][],
  setLost: Dispatch<SetStateAction<boolean>>
): boolean => {
  for (const row of boardState) for (const cell of row) if (cell) return false;
  setLost(true);
  return true;
};

export const recordHistory = (
  setHistoryState: Dispatch<SetStateAction<boolean[][]>>,
  boardState: boolean[][],
  historyState: boolean[][]
): void => {
  const mirrorState = JSON.parse(JSON.stringify(historyState));

  boardState.map((row, y) =>
    row.map((cell, x) => {
      if (cell) mirrorState[y][x] = true;
    })
  );

  setHistoryState(mirrorState);
};
