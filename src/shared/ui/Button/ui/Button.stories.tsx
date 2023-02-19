import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { ButtonTheme } from "./Button.types";

export default {
  title: "shared/Button",
  component: Button,
  args: {
    size: "lg",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: "250px" }}>
    <Button {...args}>Some text...</Button>
  </div>
);

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonTheme.CLEAR,
};

export const Primary = Template.bind({});
Primary.args = {
  theme: ButtonTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: ButtonTheme.SECONDARY,
};

