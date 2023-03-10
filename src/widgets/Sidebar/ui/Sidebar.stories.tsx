import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "shared/lib/useTheme/ThemeContext";

import { Sidebar } from "./Sidebar";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

