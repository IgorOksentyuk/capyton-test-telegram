import { SVGProps } from "react"

export function TreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path opacity="0.4" d="M16.17 10.06H7.82998C6.64998 10.06 6.23998 9.27001 6.92998 8.31001L11.1 2.47001C11.59 1.77001 12.41 1.77001 12.9 2.47001L17.07 8.31001C17.76 9.27001 17.35 10.06 16.17 10.06Z" fill="#4EEB55" />
      <path d="M17.59 18H6.41C4.83 18 4.29 16.95 5.22 15.67L9.20999 10.06H14.79L18.78 15.67C19.71 16.95 19.17 18 17.59 18Z" fill="#4EEB55" />
      <path d="M12.75 18V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V18H12.75Z" fill="#4EEB55" />
    </svg>
  )
}
