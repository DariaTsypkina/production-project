import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

import LoginForm from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [
  StoreDecorator({
    loginForm: {
      username: "hello",
      password: "world",
    },
  }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: "hello",
      password: "world",
      error: "Пользователь не найден",
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: {
      username: "hello",
      password: "world",
      isLoading: true,
    },
  }),
];
