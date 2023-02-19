import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppLink, AppLinkTheme } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args}>App Link</AppLink>
);

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
};

