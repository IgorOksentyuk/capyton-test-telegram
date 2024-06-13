import Image from "next/image";

import { PlayIcon } from "../icons/play-icon";
import { TASKS_MOCK_DATA } from "@/data/tasks";
import { TasksHeader } from "./tasks-header";
import Link from "next/link";

export function TasksPage() {
  return (
    <div>
      <TasksHeader />

      <div className="w-full h-screen max-h-[100vh] pt-8">
        <div className="flex flex-col items-center h-full gap-2 pb-3">
          <div className="flex flex-col gap-2 text-white bg-[#262926] rounded-[8px] px-4 pb-4 pt-5">
            <h2 className="leading-[27px] text-[18px] font-semibold">
              Boost your points and rewards by adding FREELANCE JOBs
            </h2>
            <p className="leading-[24px] text-[16px]">
              Add your own freelance project or refer someone else&apos;s in
              just one click and receive 5000 points.
            </p>
            <Link
              href="/projects"
              className="flex w-full p-4 bg-green-100 text-buttonText rounded-lg font-semibold gap-[10px] items-center justify-center"
            >
              <p className="font-semibold">Add FREELANCE JOBs</p>
              <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#349339] rounded-[6px] text-[#000]">
                +
              </div>
            </Link>
          </div>

          <div className="relative w-full overflow-y-auto">
            <div className="flex flex-col w-full mt-1 gap-2">
              {TASKS_MOCK_DATA.map((task, index) => (
                <div
                  className="flex px-4 py-[17.5px] bg-[#262926] w-full rounded-[8px] gap-2 justify-between z-[1]"
                  key={index}
                >
                  <div className="flex gap-2">
                    <div className="w-[44px] max-h-[44px] flex justify-center bg-green-100 rounded-[8px] items-center">
                      {task.icon}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <p className="text-white text-[16px] font-semibold">
                          {task.text}
                        </p>
                        <div className="w-2 h-2 bg-green-100 rounded-full"></div>
                      </div>
                      <div className="flex gap-1 text-white text-[14px]">
                        <div>+</div>
                        <div>50</div>
                        <div className="w-[20px] h-[20px] mt-[1px]">
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
                  </div>

                  <div className="flex max-h-[44px] py-2 px-4 bg-green-100 rounded-[8px] items-center gap-1">
                    <p className="text-[16px] font-semibold">Start</p>
                    <PlayIcon />
                  </div>
                </div>
              ))}
              <div className="w-full h-[80px] bg-shadow-gradient absolute bottom-[-120px] z-[2]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
