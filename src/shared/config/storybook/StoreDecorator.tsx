import { Story } from "@storybook/react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider/config/store";

export const StoreDecorator = (StoryComponent: Story) => (
  <Provider store={createReduxStore()}>
    <StoryComponent />
  </Provider>
);

