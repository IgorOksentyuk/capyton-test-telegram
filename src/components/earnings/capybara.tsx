import Image from "next/image";

export function Capybara() {
  return (
    <div className="absolute bottom-[22%] flex items-center justify-center">
      <div className="absolute top-[24%] -z-10 bg-green-100 flex items-center justify-center rounded-full size-[390px] shadow-green"></div>
      <Image
        priority
        className="z-20"
        src={"/capybara.png"}
        width={470}
        height={470}
        alt="capybara"
      />
    </div>
  );
}
