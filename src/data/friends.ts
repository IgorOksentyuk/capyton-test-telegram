import { UserStatus, Friend } from "@/types/friends";

export const MOCK_FRIENDS_DATA: Friend[] = [
  {
    id: 0,
    avatarUrl: "/avatar-1.jpg",
    username: "Username",
    status: UserStatus.Online,
    referrals: 2,
    reward: 90,
    points: 12000,
  },
  {
    id: 1,
    avatarUrl: "/avatar-2.jpg",
    username: "Username",
    status: UserStatus.Online,
    referrals: 2,
    reward: 50,
    points: 7000,
  },
  {
    id: 2,
    avatarUrl: "/avatar-3.jpg",
    username: "Username",
    status: UserStatus.Online,
    referrals: 2,
    reward: 20,
    points: 2000,
  },
  {
    id: 3,
    avatarUrl: "/avatar-4.jpg",
    username: "Username",
    status: UserStatus.Away,
    referrals: 2,
    reward: 0,
    points: 0,
  },
  {
    id: 4,
    avatarUrl: "/avatar-5.jpg",
    username: "Username",
    status: UserStatus.Offline,
    referrals: 2,
    reward: 0,
    points: 0,
  },
];
