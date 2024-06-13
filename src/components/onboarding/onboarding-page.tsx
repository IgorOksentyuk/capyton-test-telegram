"use client";

import Image from "next/image";
import LoadImg from "../../components/icons/load-2.png";
import { PeopleIcon } from "../../components/icons/people-icon";
import { TreeIcon } from "../../components/icons/tree-icon";
import { BriefcaseIcon } from "../../components/icons/briefcase-icon";
import { NoteIcon } from "../../components/icons/note-icon";
import { ConvertCardIcon } from "../../components/icons/convert-card-icon";
import { MoneyIcon } from "../../components/icons/money-icon";
import { GiftIcon } from "../../components/icons/gift-icon";
import { EllipseActiveIcon } from "../../components/icons/ellipse-icon-active";
import { EllipseIcon } from "../../components/icons/ellipse-icon";
import { useEffect, useState } from "react";
import { MainButton } from "../../components/common/main-button";
import { WelcomePageBackground } from "../../components/welcome/background";
import { useRouter } from "next/navigation";

export function OnboardingPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const referalItems = [
    { icon: <PeopleIcon />, text: "Referral program" },
    { icon: <TreeIcon />, text: "Basic plan for planting points" },
    { icon: <BriefcaseIcon />, text: "Freelance jobs" },
    { icon: <NoteIcon />, text: "Bonus tasks" },
    { icon: <ConvertCardIcon />, text: "Mining upgrades" },
    { icon: <MoneyIcon />, text: "Daily rewards" },
    { icon: <GiftIcon />, text: "Token airdrop" },
  ];

  const effectClassName =
    "before:absolute before:bg-[top_center] before:translate-y-[-60px] before:left-0 before:top-0 before:z-index-[-10] before:bg-noise-effect-onboarding before:w-full before:h-full before:bg-no-repeat before:content-['']";

  const noiseClassName =
    "after:absolute after:bg-no-repeat after:content-[''] after:z-index-[-10] after:w-full after:h-full after:bg-[top_center] after:bg-noise-pattern-friends after:top-0 after:translate-y-[-60px]";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % referalItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full h-screen max-h-[100vh] relative ${effectClassName} ${noiseClassName}`}
    >
      <WelcomePageBackground />

      <div className="flex flex-col items-center justify-between h-full gap-12 p-3 bg-gradient-center">
        <div className="h-[45%] w-full flex flex-col justify-end">
          <div className="h-full flex flex-col w-full items-center justify-center">
            <div className="flex justify-center relative ">
              <Image
                className="loader w-[100px] h-[100px] opacity-65"
                src={LoadImg}
                alt="load"
              />
              <div className="absolute w-[56px] h-[56px] top-[20%] left-[50%] transform -translate-x-1/2">
                <Image
                  unoptimized
                  src={"/animated-logo.gif"}
                  alt="animated-logo"
                  width={276}
                  height={276}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-[#fff] w-full h-[55%] justify-between">
          <div className="flex z-20 flex-col gap-5 ">
            <h2 className="text-[32px] text-center font-semibold">Roadmap</h2>
            <ul className="flex flex-col gap-1">
              {referalItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {item.icon}
                    <p className="text-[16px] font-normal">{item.text}</p>
                  </div>
                  <div>
                    {index <= 3 ? (
                      <EllipseActiveIcon className="icon-transition" />
                    ) : (
                      <EllipseIcon />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <MainButton
            className="z-20"
            text="Invite Friends"
            onClick={() => router.push("/friends")}
          />
        </div>
      </div>
    </div>
  );
}
