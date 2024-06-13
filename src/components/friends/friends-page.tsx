import FriendsHeader from "./friends-header";
import { FriendsList } from "./friends-list";
import { InvitesCounter } from "./invites-counter";

const effectClassName =
  "before:absolute before:bg-[top_center] before:translate-y-[-108px] before:left-0 before:top-0 before:z-index-[-10] before:bg-noise-effect-friends before:w-full before:h-full before:bg-no-repeat before:content-['']";

const noiseClassName =
  "after:absolute after:bg-no-repeat after:content-[''] after:z-index-[-10] after:w-full after:h-full after:bg-[top_center] after:bg-noise-pattern-friends after:top-0 after:translate-y-[-216px]";

export default function FriendsPage() {
  return (
    <>
      <FriendsHeader />

      <div className={`relative ${effectClassName} ${noiseClassName}`}>
        <section>
          <InvitesCounter />
        </section>
        <section>
          <FriendsList />
        </section>
      </div>
    </>
  );
}
