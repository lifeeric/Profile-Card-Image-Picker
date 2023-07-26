/** @format */

import { Meta, StoryObj } from "@storybook/react";
import { CustomizeIcon } from "./CustomizeIcon";

const meta: Meta<typeof CustomizeIcon> = {
  title: "Example/CustomizeIcon",
  component: CustomizeIcon,
};

export default meta;

type Story = StoryObj<typeof CustomizeIcon>;

export const Primary: Story = {
  render: () => <CustomizeIcon />,
};
