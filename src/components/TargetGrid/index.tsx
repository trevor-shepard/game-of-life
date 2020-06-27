import React, {
  FunctionComponent,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import styled from "@emotion/styled";

import {
  countNeighbors,
  checkLost,
  recordHistory,
} from "../../utils/game-cycle";

import Row from "../Row";
type GridProps = {
  level: Level;
  won: boolean;
  lost: boolean;
  setWon: Dispatch<SetStateAction<boolean>>;
  setLost: Dispatch<SetStateAction<boolean>>;
};

interface Level {
  initialState: boolean[][];
  target: [number, number];
}

const Board: FunctionComponent<GridProps> = ({
  level,
  won,
  lost,
  setWon,
  setLost,
}) => {
  const { initialState, target } = level;

  const [targetY, targetX] = target;

  const [boardState, setBoardState] = useState(initialState);
  const [historyState, setHistoryState] = useState(initialState);
  const [time, setTime] = useState(1);

  const mirrorBoard: boolean[][] = JSON.parse(JSON.stringify(boardState));

  const handleClick = (y: number, x: number): void => {
    if (countNeighbors(y, x, boardState)) {
      mirrorBoard[y][x] = true;
      setBoardState(mirrorBoard);
    }
  };

  useEffect((): (() => void) | undefined | void => {
    checkLost(boardState, setLost);
    if (boardState[targetY][targetX]) return setWon(true);
    recordHistory(setHistoryState, boardState, historyState)
    for (let y = 0; y < boardState.length; y++)
      for (let x = 0; x < boardState[y].length; x++) {
        const cell = boardState[y][x];
        const neighbours = countNeighbors(y, x, boardState);

        if (cell) {
          mirrorBoard[y][x] =
            neighbours === 2 || neighbours === 3 ? true : false;
        } else {
          mirrorBoard[y][x] = neighbours === 3 ? true : false;
        }
      }

    if (!won && !lost) {
      setBoardState(mirrorBoard);
      const timer = setInterval(() => setTime(time + 1), 500);
      return () => clearInterval(timer);
    }
    return undefined;
  }, [time]);

  const grid: JSX.Element[] = Array.from(
    new Array(initialState.length),
    (_, y) => (
      <Row
        key={`${y}-row`}
        y={y}
        cellHistory={historyState[y]}
        cellStates={boardState[y]}
        handleClick={handleClick}
      />
    )
  );

  return (
    <BoardContainer id={"board-container"}>
      {won ? "Game Won" : false}
      {lost ? "Game Lost" : false}
      {grid}
    </BoardContainer>
  );
};

const BoardContainer = styled("div")`
  display: flex;
  flex-direction: column-reverse;
  padding: 5px;
`;

export default Board;
