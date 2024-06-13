import Image from "next/image";
import { AddJobsModal } from "./add-jobs-modal";

export function JobsBanner() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex flex-col text-xs leading-[18px]">
        <p className="font-semibold ">Add JOBs</p>
        <p>
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

      <AddJobsModal />
    </div>
  );
}
