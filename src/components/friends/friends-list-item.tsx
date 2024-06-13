import { Friend } from "@/types/friends";
import Image from "next/image";
import { SendIcon } from "../icons/send";
import { StatusBadge } from "./status-badge";
import { formatPoints } from "@/lib/format-points";

type FriendsListItemProps = {
  friend: Friend;
};

export function FriendsListItem({ friend }: FriendsListItemProps) {
  return (
    <li className="p-4 flex justify-between rounded-lg border bg-gray-200 border-gray-50">
      <div className="flex gap-x-2 items-center">
        <div className="rounded-full overflow-hidden size-10">
          <Image
            src={friend.avatarUrl}
            width={40}
            height={40}
            alt="Avatar"
            unoptimized
          />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-1 items-center">
            <p className="font-semibold">Username</p>
            <StatusBadge status={friend.status} />
          </div>
          <p className="text-gray-100 text-xs leading-[18px]">
            Referrals:{" "}
            <span className="text-green-100 font-semibold">
              {friend.referrals}
            </span>
          </p>
        </div>
      </div>
      <div className=" flex items-center  gap-x-2">
        <p className="text-center w-[50px] font-semibold text-sm leading-[21px]">
          {friend.reward}
        </p>
        <p className="w-20 text-center font-semibold text-sm leading-[21px]">
          {formatPoints(friend.points)}
        </p>
        <button
          className="flex items-center justify-center size-10 rounded-lg bg-green-100"
          type="button"
        >
          <SendIcon fill="#0D0E0E" />
        </button>
      </div>
    </li>
  );
}
