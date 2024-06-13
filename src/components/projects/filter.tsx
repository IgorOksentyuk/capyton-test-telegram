"use client";
import { useState } from "react";
import { MainButton } from "../common/main-button";
import { FilterIcon } from "../icons/filter-icon";
import clsx from "clsx";

export function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const buttonText = isFilterOpen ? "Close filter" : "Open filter";

  return (
    <>
      <MainButton
        icon={<FilterIcon />}
        className="relative h-[40px] z-10"
        text={buttonText}
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      />
      <div
        className={clsx("transition-max-height duration-100 ease-in-out", {
          "flex flex-col gap-2.5 w-full bg-[#262926] rounded-b-lg p-4 border border-[#3A3E3A] mt-[-10px] max-h-fit":
            isFilterOpen,
          "max-h-0 hidden": !isFilterOpen,
        })}
      >
        <div className="flex flex-col gap-1">
          <div className="text-md font-semibold">Categories</div>
          <div className="flex gap-1 text-nowrap text-md fon-normal text-[#A8B6A8] overflow-x-scroll items-center">
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">
              Development & IT
            </div>
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">
              Development & IT
            </div>
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">
              Development & IT
            </div>
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">
              Development & IT
            </div>
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">
              Development & IT
            </div>
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">
              Development & IT
            </div>
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">
              Development & IT
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-md font-semibold">Date added</div>
          <div className="flex gap-1 text-md fon-normal text-[#A8B6A8] overflow-x-scroll items-center">
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">All</div>
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">Yesterday</div>
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">Today</div>
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">This week</div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-md font-semibold">Type of project</div>
          <div className="flex gap-1 text-md fon-normal text-[#A8B6A8] overflow-x-scroll items-center">
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">Verified</div>
            <div className="px-2 py-1 rounded-md bg-[#3F423F]">Premium</div>
          </div>
        </div>
      </div>
    </>
  );
}
