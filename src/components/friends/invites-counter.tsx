import { PeopleIcon } from "../icons/people";

export function InvitesCounter() {
  return (
    <div className="relative flex items-center px-4 gap-x-2 justify-center mt-[58px] mb-[52px]">
      <h1 className="text-sm leading-[21px] text-green-50 font-medium absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
        Total invited
      </h1>

      <p className="font-bold text-5xl leading-[72px]">100</p>
      <PeopleIcon className="size-8" />
    </div>
  );
}
