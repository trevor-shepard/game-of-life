import React, {MutableRefObject} from "react";
import ConfettiDot from "./ConfettiDot";

export const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const randomIntInRange = (min: number, max: number): number =>
  Math.floor(randomInRange(min, max));

interface ConfettiCannonProps {
  anchorRef: MutableRefObject<HTMLDivElement> | MutableRefObject<undefined>;
  colors: string[];
  dotCount: number
}

const ConfettiCannon = ({ anchorRef, colors, dotCount }: ConfettiCannonProps) => (
  <>
    {new Array(dotCount).fill(0).map((_, index) => (
      <ConfettiDot
        key={index}
        anchorRef={anchorRef}
        color={colors[randomIntInRange(0, colors.length)]}
        initialHorizontal={randomInRange(-250, 250)}
        initialUpwards={randomInRange(200, 700)}
        rotate={randomInRange(0, 360)}
        size={randomInRange(8, 12)}
      />
    ))}
  </>
);

export default ConfettiCannon;