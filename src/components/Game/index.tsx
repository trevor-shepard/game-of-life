import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";

import ExpandGrid from "../ExpandGrid";
import TargetGrid from "../TargetGrid";
import BaseButton from "../base/BaseButton";

import Theme from "../../utils/theme";

import { levels } from "../../utils/levels";

const Game: FunctionComponent = () => {
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [level, setLevel] = useState(0);
  const [reset, setReset] = useState(false);

  const handleNext = (): void => {
    setReset(true);
    setLevel(level + 1);
    setWon(false);
    setLost(false);
    setReset(false);
  };

  // const handleReset = (): void => {
  //   setReset(true);

  // }

  const currentLevel = levels[level];

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
      {lost ? <BaseButton onClick={handleNext} text={"Try Again"} /> : null}
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
  border: none;
  color: ${Theme.default};
  background-color: ${Theme.default};
`;

export default Game;
