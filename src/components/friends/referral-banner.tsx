import { ShareIcon } from "../icons/share";
import Image from "next/image";

export function RefferalBanner() {
  return (
    <div className="flex gap-x-2 items-center">
      <div className="flex flex-col text-xs leading-[18px]">
        <p className="font-semibold ">Invite your friends</p>
        <p className="">
          and get <span className="font-semibold text-green-100">1 000</span>
          <Image
            unoptimized
            src={"/animated-logo.gif"}
            alt="animated-logo"
            width={18}
            height={18}
            className="inline ml-0.5"
          />
        </p>
      </div>
      <button type="button">
        <ShareIcon />
      </button>
    </div>
  );
}
