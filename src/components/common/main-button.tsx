import React from "react";

type Props = {
  text: string;
  onClick: () => void;
  className?: string;
  icon?: React.ReactNode;
};

export function MainButton(props: Props) {
  const { text, onClick, className = "", icon } = props;
  return (
    <button
      onClick={onClick}
      className={`${className} w-full p-4 bg-green-100 text-buttonText rounded-lg font-semibold flex items-center justify-center gap-2`}
    >
      {text}
      {icon && <>{icon}</>}
    </button>
  );
}