import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

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
  variant: "clear",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

