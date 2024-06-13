import { UserStatus } from "@/types/friends";

type StatusBadgeProps = {
  status: UserStatus;
};

const statusToColorMap = {
  [UserStatus.Online]: "bg-[#4EEB55]",
  [UserStatus.Offline]: "bg-[#EB4E4E]",
  [UserStatus.Away]: "bg-[#EBB64E]",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const bgClassName = statusToColorMap[status];

  return <div className={`size-2 rounded-full ${bgClassName}`} />;
}
