import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import Button from "./index";

export default {
  title: "Button",
  decorators: [withKnobs],
};

export const IndexButton = () => (
  <Button onClick={action("handleClick")}>
    {text("ButtonText", "Next Level", "1")}
  </Button>
);
