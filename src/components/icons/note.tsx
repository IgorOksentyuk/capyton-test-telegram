import { SVGProps } from "react";

export function NoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#4EEB55"
        d="M7.37 22h9.25a4.87 4.87 0 004.87-4.87V8.37a4.87 4.87 0 00-4.87-4.87H7.37A4.87 4.87 0 002.5 8.37v8.75c0 2.7 2.18 4.88 4.87 4.88z"
        opacity="0.4"
      ></path>
      <path
        fill="#4EEB55"
        d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 111.5 0v2.78c0 .42-.33.76-.75.76zM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 111.5 0v2.78c0 .42-.33.76-.75.76zM14.78 13.71H7.36a.749.749 0 110-1.5h7.42a.749.749 0 110 1.5zM12 17.42H7.36a.749.749 0 110-1.5H12a.749.749 0 110 1.5z"
      ></path>
    </svg>
  );
}
