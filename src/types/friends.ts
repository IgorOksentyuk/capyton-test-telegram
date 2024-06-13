export enum UserStatus {
  Online = "ONLINE",
  Offline = "OFFLINE",
  Away = "AWAY",
}

export type Friend = {
  id: number;
  avatarUrl: string;
  username: string;
  status: UserStatus;
  referrals: number;
  reward: number;
  points: number;
};
