/** @format */

import { Meta, StoryObj } from "@storybook/react";
import ProfileCardWithImagePicker from "./App";

export default {
  title: "Components/ProfileCardWithImagePicker",
  component: ProfileCardWithImagePicker
} as Meta;

type Story = StoryObj<typeof ProfileCardWithImagePicker>;

export const Default: Story = {
  render: () => <ProfileCardWithImagePicker />
};
