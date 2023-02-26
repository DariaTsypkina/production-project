import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "shared/lib/useTheme/ThemeContext";

import { Typography } from "./Typography";

export default {
  title: "shared/Typography",
  component: Typography,
  args: {
    level: 1,
    variant: "regular",
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>Lorem ipsum</Typography>
);

export const Paragraph = Template.bind({});
Paragraph.args = {
  tag: "p",
};

export const ParagraphDark = Template.bind({});
ParagraphDark.args = {
  tag: "p",
};
ParagraphDark.decorators = [ThemeDecorator(Theme.DARK)];

