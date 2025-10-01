export type UserProfile = {
  id: string;
  handle: string;
  displayName: string;
  avatarUrl?: string;
  bio?: string;
  socials?: { x?: string; youtube?: string; twitch?: string; tiktok?: string };
  role: "viewer" | "creator" | "admin";
  createdAt: number;
  updatedAt: number;
};
export type Channel = {
  id: string;
  ownerId: string;
  handle: string;
  title: string;
  about?: string;
  bannerUrl?: string;
  avatarUrl?: string;
  category?: string;
  language?: string;
  isLive: boolean;
  followers: number;
  createdAt: number;
  updatedAt: number;
};
