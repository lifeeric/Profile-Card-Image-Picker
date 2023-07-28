/** @format */

import { Meta, StoryObj } from "@storybook/react";
import { ImagePicker } from "./ImagePicker";

export default {
  title: "Components/ImagePicker",
  component: ImagePicker
} as Meta;

type Story = StoryObj<typeof ImagePicker>;

export const Default: Story = {
  render: () => (
    <ImagePicker
      image="https://via.placeholder.com/300x200"
      setFileFn={(file) => console.log(file)}
      imageExtension="https://via.placeholder.com/300x200.png"
    />
  )
};
