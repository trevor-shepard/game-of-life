/** @jsx jsx */
import { FunctionComponent, useEffect, useState, useRef } from "react";
import { jsx } from "@emotion/core";
import { useSpring, animated as a } from "react-spring";
import ConfettiCannon from "../ConfettiCannon";
import Theme from "../../utils/theme";

type CellProps = {
  alive: boolean;
  history: boolean;
  handleClick(): void;
  isTarget?: boolean;
};

const CellContainer: FunctionComponent<CellProps> = ({
  alive,
  history,
  handleClick,
  isTarget,
}) => {
  const [toggle, setToggle] = useState(false);
  const [transform, set] = useSpring(() => ({
    transform: `perspective(600px) rotateX(180deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  useEffect(() => {
    set({
      transform: toggle
        ? `perspective(600px) rotateX(0deg)`
        : `perspective(600px) rotateX(180deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
    });
    setToggle(!toggle);
  }, [alive, history]);

  const CellRef = useRef()

  return (
    <>
      <a.div
        onClick={
          isTarget ? (): void => console.log("Im a target") : handleClick
        }
        style={transform}
        css={{
          padding: "5px",
          height: "5px",
          width: "5px",
          border: "2px solid #3C1922",
          borderRadius: "3px",
          fontSize: "10px",
          margin: "5px",
          backgroundColor: `${
            isTarget
              ? Theme.target
              : alive
              ? Theme.alive
              : history
              ? Theme.history
              : Theme.dead
          }`,
        }}
      />
      {isTarget && alive && (
        <ConfettiCannon
          anchorRef={CellRef}
          colors={["blue", "red", "yellow", "purple"]}
          dotCount={50}
        />
      )}
    </>
  );
};

export default CellContainer;
