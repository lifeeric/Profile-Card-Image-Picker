/** @format */

import React from "react";

/**
 * Components
 */
import { Tag } from "../Tag/Tag";

/**
 * Types
 */
import { ProfileCardUI } from "../../types/types";

export const ProfileCard = ({
  coverImage,
  logo,
  title,
  bio,
  tags,
  followers
}: ProfileCardUI): JSX.Element => {
  return (
    <div
      className={`w-[284px] h-[380px] rounded-[20px] overflow-hidden relative`}
    >
      <img
        src={coverImage as string}
        alt=""
        className="w-auto h-[100vh] object-cover"
      />
      <div className="w-[268px] h-[190px] rounded-2xl bg-white absolute bottom-[8px] left-[8px] shadow-[0px_1px_40px_0px_rgba(26,26,26,0.16)]">
        <img
          className="w-[44px] h-[44px] rounded-md border border-[3px] top-[-28px] left-[12px] relative object-cover"
          src={logo as string}
          alt=""
        />
        <div className="p-[12px] font-[Plus_Jakarta_Sans] mt-[-30px] text-sm">
          <h2 className="text-[#1A1A1A] font-extrabold">{title}</h2>
          <p className="text-[rgba(26,26,26,0.70)] font-[SF_Pro_Display] mt-1">
            {bio}
          </p>

          <div className="flex text-[#5F5CFF] font-[12px] mt-[52px] space-x-2">
            {React.Children.toArray(tags.map((t) => <Tag title={t} />))}
          </div>

          <p className="text-[rgba(26,26,26,0.70)] mt-[12px]">{followers}</p>
        </div>
        img
      </div>
    </div>
  );
};
