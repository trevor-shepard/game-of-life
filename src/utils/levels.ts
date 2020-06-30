import { initialStates } from "./initial-states";

export interface Levels {
  [level: string]: {
    type: string;
    initialState: boolean[][];
    target: [number, number];
  };
}

export const levels: Levels = {
  1: {
    type: "target",
    initialState: initialStates["5x5-blinker-center"],
    target: [0, 4],
  },
  0: {
    type: "expand",
    initialState: initialStates["4x4-block-center"],
    target: [-1, -1],
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
