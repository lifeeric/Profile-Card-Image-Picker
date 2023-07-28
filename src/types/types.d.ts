/** @format */

/**
 * Types for the Profile Card UI
 */
export interface ProfileCardUI {
  coverImage?: string | FileList;
  logo?: string | FileList;
  title: string;
  bio: string;
  tags: string[];
  followers: string;
}
