import Image from "next/image";

export function WelcomePageBackground() {
  return (
    <div className="absolute h-screen overflow-hidden w-full opacity-80">
      <Image
        src="/Apple_2.png"
        alt="apple"
        width={80}
        height={80}
        className="absolute top-[464px] left-[317px]"
      />
      <Image
        src="/Ball__1.png"
        alt="apple"
        width={80}
        height={80}
        className="absolute top-[485px] left-[122px]"
      />
      <Image
        src="/Bamboo__1.png"
        alt="apple"
        width={80}
        height={80}
        className="absolute top-[635px] left-[240px]"
      />
      <Image
        src="/Carrot__2.png"
        alt="apple"
        width={90}
        height={90}
        className="absolute top-[655px] left-[17px]"
      />
      <Image
        src="/Corn__2.png"
        alt="apple"
        width={80}
        height={80}
        className="absolute top-[242px] left-[177px]"
      />
      <Image
        src="/Leaf__1.png"
        alt="apple"
        width={80}
        height={80}
        className="absolute top-[144px] left-[323px]"
      />
      <Image
        src="/Lily__3.png"
        alt="apple"
        width={80}
        height={80}
        className="absolute top-[310px] left-[320px]"
      />
      <Image
        src="/Watermelon__1.png"
        alt="apple"
        width={80}
        height={80}
        className="absolute top-[190px] left-[12px]"
      />
      <Image
        src="/Watermelon__2.png"
        alt="apple"
        width={80}
        height={80}
        className="absolute top-[380px] left-[21px]"
      />
    </div>
  );
}
