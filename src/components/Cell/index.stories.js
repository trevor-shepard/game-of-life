import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import Cell from "./index";

export default {
  title: "Cell",
  decorators: [withKnobs],
};

export const AliveCell = () => (
  <Cell
    alive={boolean("Alive", false)}
    history={boolean("History", false)}
    handleClick={action("handleClick")}
  />
);
