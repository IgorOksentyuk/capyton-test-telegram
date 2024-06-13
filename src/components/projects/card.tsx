"use client";

import clsx from "clsx";
import Image from "next/image";
import { MainButton } from "../common/main-button";
import { PlayIcon } from "../icons/play-icon";
import { LanguageIcon } from "../icons/language-icon";
import { useRouter } from "next/navigation";
import { Project } from "@/data/projects";

type Props = {
  isPreview?: boolean;
  project?: Project;
};

export function Card(props: Props) {
  const { isPreview, project } = props;
  const router = useRouter();

  if (!project) {
    return null;
  }

  return (
    <div
      className={clsx(
        "flex flex-col gap-2 w-full bg-[#262926] rounded-lg overflow-hidden p-4 border border-[#3A3E3A]",
        {
          "max-h-[210px]": isPreview,
        }
      )}
    >
      <div className="flex gap-1 text-nowrap text-md font-normal text-[#A8B6A8] overflow-x-scroll items-center">
        {(isPreview ? project?.tags?.slice(0, 1) : project?.tags)?.map(
          (tag) => (
            <div key={tag} className="px-2 py-1 rounded-md bg-[#3F423F]">
              {tag}
            </div>
          )
        )}
      </div>
      <div
        className={clsx("text-[18px] font-semibold", {
          truncate: isPreview,
        })}
      >
        {project?.name}
      </div>
      <div className="text-[12px] font-normal text-[#929492]">
        {project?.skills.join(", ")}
      </div>
      {!isPreview && (
        <div className="flex gap-1 items-center">
          <LanguageIcon />
          <span className="font-semibold">Language: </span>
          <span> {project?.language.join(", ")}</span>
        </div>
      )}
      <div
        className={clsx("text-sm font-normal", {
          "line-clamp-2": isPreview,
        })}
      >
        {project?.description}
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="rounded-full p-0 size-8 overflow-hidden">
            <Image
              src={project?.user.avatar as string}
              alt={project?.user.name as string}
              width={32}
              height={32}
              className="object-cover min-w-full min-h-full"
            />
          </div>
          <div className="text-md font-semibold">{project?.user.name}</div>
        </div>
        <MainButton
          text={!isPreview ? "Contact us" : ""}
          className={clsx({
            "!max-w-10 !max-h-10 size-10 !p-0": isPreview,
            "!max-w-[122px] !max-h-[44px]": !isPreview,
          })}
          onClick={() => router.push(`/projects/${project?.id}`)}
          icon={isPreview && <PlayIcon />}
        />
      </div>
    </div>
  );
}
