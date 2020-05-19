import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";

import { initialStates } from "../../utils/initial-states";
import ExpandGrid from "../ExpandGrid";
import TargetGrid from "../TargetGrid";
import BaseButton from "../BaseButton";

import Theme from "../../utils/theme";

interface Levels {
  [level: string]: {
    type: string;
    initialState: boolean[][];
    target: [number, number];
  };
}
const Game: FunctionComponent = () => {
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [level, setLevel] = useState(0);
  const [reset, setReset] = useState(false);

  const levels: Levels = {
    0: {
      type: "expand",
      initialState: initialStates["4x4-block-center"],
      target: [-1, -1],
    },
    1: {
      type: "target",
      initialState: initialStates["5x5-blinker-center"],
      target: [1, 1],
    },
    2: {
      type: "expand",
      initialState: initialStates["6x6-toad-center"],
      target: [-1, -1],
    },
    3: {
      type: "expand",
      initialState: initialStates["7x30-lightweight-spaceship-left"],
      target: [-1, -1],
    },
  };

  const handleNext = () => {
    setReset(true);
    setLevel(level + 1);
    setWon(false);
    setLost(false);
    setReset(false);
  };

  const currentLevel = levels[level]

  const getBoard = () => {
    switch (currentLevel.type) {
      case "target":
        return (
          <TargetGrid
            key={level}
            level={levels[level]}
            won={won}
            setWon={setWon}
            lost={lost}
            setLost={setLost}
          />
        );

      default:
        return (
          <ExpandGrid
            key={level}
            level={levels[level]}
            won={won}
            setWon={setWon}
            lost={lost}
            setLost={setLost}
          />
        );
    }
  };

  return (
    <GameContainer>
      {won ? <BaseButton onClick={handleNext} text={"Next Level"} /> : null}
      <SneakyButton onClick={handleNext}>You&apos;re a cheater</SneakyButton>
      {reset ? null : getBoard()}
    </GameContainer>
  );
};

const GameContainer = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const SneakyButton = styled("button")`
  position: absolute;
  left: 100px;
  top: 100px;
  border-color: ${Theme.default};
  color: ${Theme.default};
  background-color: ${Theme.default};
`;

export default Game;
