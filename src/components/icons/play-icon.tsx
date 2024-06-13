import { SVGProps } from "react";

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.4"
        d="M13.2299 8.52002L8.17993 12.31V17.92C8.17993 18.88 9.33993 19.36 10.0199 18.68L15.1999 13.5C16.0299 12.67 16.0299 11.32 15.1999 10.49L13.2299 8.52002Z"
        fill="#0D0E0E"
      />
      <path
        d="M8.17993 6.07999V12.31L13.2299 8.51999L10.0199 5.30999C9.33993 4.63999 8.17993 5.11999 8.17993 6.07999Z"
        fill="#0D0E0E"
      />
    </svg>
  );
}
