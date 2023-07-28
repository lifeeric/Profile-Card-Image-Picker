/** @format */

import { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";

export default {
  title: "Components/ProfileCard",
  component: ProfileCard
} as Meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  render: () => (
    <ProfileCard
      title="Let it Eric"
      bio="Eric is learn AI!"
      tags={["Typescript", "Python"]}
      followers="12.k memebers"
      coverImage="https://via.placeholder.com/500x300"
      logo="https://via.placeholder.com/100x100"
    />
  )
};
