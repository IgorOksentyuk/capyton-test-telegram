"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

type NavbarLinkProps = {
  icon: ReactNode;
  label: string;
  url: string;
};

export function NavbarLink({ icon, label, url }: NavbarLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === url;
  const borderClassName = isActive ? "border-[#3F7E3F]" : "border-[#3C443C]";

  return (
    <li
      className={`flex size-[60px] border rounded-lg bg-[#2B312B] ${borderClassName}`}
    >
      <Link
        href={url}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        {icon}
        <p className="font-semibold text-[10px] leading-[15px]">{label}</p>
      </Link>
    </li>
  );
}
