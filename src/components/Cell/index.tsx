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
  y: number;
  x: number;
};

const CellContainer: FunctionComponent<CellProps> = ({
  alive,
  history,
  handleClick,
  isTarget,
  x,
  y,
}) => {
  const [toggle, setToggle] = useState(false);

  const [colorToggle, setColorToggle] = useState(false);
  const [springProps, set] = useSpring(() => ({
    transform: `perspective(600px) rotateX(180deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  const getColor1 = () => {
    if (isTarget) return Theme.target1

    if (alive) return Theme.alive1

    if (history) return Theme.history1

    return Theme.dead1
  }

  const getColor2 = () => {
    if (isTarget) return Theme.target2

    if (alive) return Theme.alive1

    if (history) return Theme.history1

    return Theme.dead2
  }

  const { backgroundColor } = useSpring({
    backgroundColor: colorToggle ? getColor1() : getColor2()
  })


  useEffect(() => {
    const timer = setInterval(() => setColorToggle(!colorToggle), 3000 + (y * 100));
    return () => clearInterval(timer);
  }, [colorToggle])


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
        style={{
          ...springProps,
          backgroundColor
        }}
        css={{
          "will-change": "transform, backgroundColor",
          padding: "5px",
          height: "5px",
          width: "5px",
          border: "2px solid #3C1922",
          borderRadius: "3px",
          fontSize: "10px",
          margin: "5px",
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
