import { UserProfile } from "../common/user-profile";
import { RefferalBanner } from "./referral-banner";

export default function FriendsHeader() {
  return (
    <header className="flex justify-between h-10">
      <UserProfile />
      <RefferalBanner />
    </header>
  );
}
