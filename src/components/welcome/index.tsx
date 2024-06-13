import Image from "next/image";
import { MainButton } from "../common/main-button";
import { WelcomePageBackground } from "./background";
import { useRouter } from "next/navigation";

export function WelcomePage() {
  const router = useRouter();

  const effectClassName =
    "before:absolute before:bg-[center] before:translate-y-[-60px] before:left-0 before:top-0 before:z-index-[-10] before:bg-noise-effect-onboarding before:w-full before:h-full before:bg-no-repeat before:content-['']";

  const noiseClassName =
    "after:absolute after:bg-no-repeat after:content-[''] after:z-index-[-10] after:w-full after:h-full after:bg-[center] after:bg-noise-pattern-friends after:top-24 after:translate-y-[-60px]";

  return (
    <div className={`relative flex flex-col justify-end items-center h-screen pb-10 max-h-[100vh] px-4 ${effectClassName} ${noiseClassName}`}>
      <WelcomePageBackground />

      <div className="absolute rounded-full z-20 w-[276px] h-[276px] top-[25%] left-[50%] transform -translate-x-1/2">
        <Image
          unoptimized
          src={"/animated-logo.gif"}
          alt="animated-logo"
          width={276}
          height={276}
          className="object-cover min-w-full min-h-full"
        />
      </div>

      <div className="flex mt-20 z-30 flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-center text-white">
            Welcome to CapyTON
          </h1>
          <p className="text-center text-md font-normal text-white">
            Get 💵 cryptocurrency rewards 🏆for your engagement and your 👫
            friends&apos; activity in the world&apos;s first Web3 freelance
            aggregator. Join now! 🚀
          </p>
        </div>

        <MainButton
          text="Create account"
          onClick={() => {
            router.push("/onboarding");
          }}
        />
      </div>
    </div>
  );
}
