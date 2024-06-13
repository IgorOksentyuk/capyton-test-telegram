import { FriendsListItem } from "./friends-list-item";
import { MOCK_FRIENDS_DATA } from "@/data/friends";

export function FriendsList() {
  return (
    <>
      <div className="flex px-16 justify-between mb-2 text-xs leading-[18px] text-gray-300">
        <h2>Username</h2>

        <div className="flex gap-x-2">
          <h2 className="w-[50px] text-center">Reward</h2>

          <h2 className="w-20 text-center">Points</h2>
        </div>
      </div>

      <ul className="flex flex-col gap-y-2 relative max-h-[70vh] overflow-y-auto z-[10]">
        {MOCK_FRIENDS_DATA.map((friend) => (
          <FriendsListItem friend={friend} key={friend.id} />
        ))}
      </ul>
    </>
  );
}
