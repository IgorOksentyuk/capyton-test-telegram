import Image from "next/image";
import { AvatarIcon } from "../icons/avatar";

export function UserProfile() {
  return (
    <div className="flex items-center gap-x-2">
      <AvatarIcon />
      <p className="py-2 font-semibold">Username</p>
    </div>
  );
}
