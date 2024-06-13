import { SVGProps } from "react";

export function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <rect width="40" height="40" fill="#4EEB55" rx="20"></rect>
      <circle cx="20.5" cy="20.5" r="0.5" fill="#6EED72"></circle>
      <path
        fill="#0D0E0E"
        d="M27.875 26.75a3.375 3.375 0 11-6.549-1.148l-4.968-3.193a3.375 3.375 0 110-4.818l4.968-3.188a3.384 3.384 0 11.813 1.261l-4.968 3.192a3.375 3.375 0 010 2.297l4.968 3.192a3.374 3.374 0 015.736 2.405z"
      ></path>
    </svg>
  );
}
