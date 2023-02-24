import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, laborum
    officia modi ullam, deleniti asperiores ut id doloremque placeat suscipit
    molestiae aperiam deserunt quae accusantium magni inventore illo natus
    doloribus?
  </Modal>
);

export const Main = Template.bind({});
Main.args = { isOpen: true };

