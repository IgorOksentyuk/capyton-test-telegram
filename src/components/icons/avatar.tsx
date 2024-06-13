import { SVGProps } from "react";

export function AvatarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <g clipPath="url(#clip0_199_2876)">
        <rect width="40" height="40" fill="#0D0E0E" rx="20"></rect>
        <rect width="16" height="16" x="12" y="6" fill="#4EEB55" rx="8"></rect>
        <rect
          width="60"
          height="60"
          x="-10"
          y="27"
          fill="#4EEB55"
          rx="30"
        ></rect>
      </g>
      <defs>
        <clipPath id="clip0_199_2876">
          <rect width="40" height="40" fill="#fff" rx="20"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
