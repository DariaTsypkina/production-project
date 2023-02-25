import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "shared/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ width: "450px" }}>
    <Input {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  label: "Label",
  placeholder: "Placeholder",
};

