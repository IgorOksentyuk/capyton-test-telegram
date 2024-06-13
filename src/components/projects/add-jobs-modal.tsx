"use client";

import React, { useState } from "react";
import { AddIcon } from "../icons/add-icon";
import { CrossIcon } from "../icons/cross";
import { MainButton } from "../common/main-button";
import { PlusIcon } from "../icons/plus-icon";

export function AddJobsModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MainButton
        text=""
        icon={<PlusIcon />}
        onClick={toggleModal}
        className="!rounded-full !p-0 !size-[44px]"
      />
      {isOpen && (
        <div className="fixed left-4 inset-0 z-50 flex items-center justify-center w-[calc(100vw-42px)]">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-[#262926] max-w-[400px] border border-[#3A3E3A] p-4 rounded-lg shadow-lg z-50 relative">
            <div className="absolute right-[-20px] top-[-20px]">
              <MainButton
                text=""
                icon={<CrossIcon className="size-6" />}
                onClick={toggleModal}
                className="!p-0 !size-10"
              />
            </div>
            <div className="text-lg font-semibold mb-2">
              Boost your points and rewards by adding FREELANCE JOBs
            </div>
            <div className="mb-2 font-normal">
              Add your own freelance project or refer someone else&apos;s in
              just one click and receive 5000 points.
            </div>
            <MainButton
              text="Add FREELANCE JOBs"
              icon={<AddIcon />}
              onClick={() => {}}
            />
          </div>
        </div>
      )}
    </>
  );
}
