import { UserLevel } from "../common/user-level";
import { UserProfile } from "../common/user-profile";
import { UserStats } from "../common/user-stats";

export function EarningsHeader() {
  return (
    <header className="flex justify-between h-10">
      <UserProfile />

      <ul className="flex items-center gap-x-2">
        <li>
          <UserStats />
        </li>
        <li>
          <UserLevel />
        </li>
      </ul>
    </header>
  );
}
