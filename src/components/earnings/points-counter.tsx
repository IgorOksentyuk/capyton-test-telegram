import Image from "next/image";

export function PointsCounter() {
  return (
    <div className="flex gap-2 items-center">
      <p className="font-bold text-5xl leading-[72px]">12 000</p>

      <div className="size-8">
        <Image
          unoptimized
          src={"/animated-logo.gif"}
          alt="animated-logo"
          width={32}
          height={32}
          className="object-cover"
        />
      </div>
    </div>
  );
}
