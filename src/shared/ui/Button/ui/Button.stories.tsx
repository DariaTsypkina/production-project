import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonTheme } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Some text...</Button>
);

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonTheme.CLEAR,
};

export const Primary = Template.bind({});
Primary.args = {
  theme: ButtonTheme.PRIMARY,
};

