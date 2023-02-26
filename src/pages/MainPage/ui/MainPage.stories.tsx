import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "shared/lib/useTheme/ThemeContext";

import MainPage from "./MainPage";

export default {
  title: "pages/MainPage",
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

const storeDecorator = StoreDecorator({
  counter: {
    value: 10,
  },
});

export const Light = Template.bind({});
Light.decorators = [storeDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [storeDecorator, ThemeDecorator(Theme.DARK)];

