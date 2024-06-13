import { useState } from "react";
import { CrossIcon } from "../icons/cross";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function NotificationCard() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="z-40 mx-4 w-[calc(100vw-32px)] px-4 fixed bottom-[159px] border border-[#3A3E3A] bg-[#262926] rounded-lg">
      <div className="px-2.5 py-4 flex justify-between items-center w-full">
        <div className="flex flex-col gap-1">
          <Link href="/friends" className="font-semibold text-md">
            Invite your friends
          </Link>
          <div className="text-[12px] gap-1 font-normal flex items-center">
            And get <span className="text-green-100">1000</span>
            <div className="h-[18px] w-[18px]">
              <Image
                unoptimized
                src={"/animated-logo.gif"}
                alt="animated-logo"
                width={18}
                height={18}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <CrossIcon className="text-green-100" onClick={handleClose} />
      </div>
    </div>
  );
}
