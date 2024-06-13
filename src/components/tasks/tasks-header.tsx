import { UserLevel } from "../common/user-level";
import { UserProfile } from "../common/user-profile";

export function TasksHeader() {
  return (
    <header className="flex justify-between h-11 items-center">
      <UserProfile />
      <UserLevel />
    </header>
  );
}
