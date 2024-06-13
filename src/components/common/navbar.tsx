import { AddProfileIcon } from "../icons/add-profile";
import { BriefcaseIcon } from "../icons/briefcase";
import { MoneyIcon } from "../icons/money";
import { NoteIcon } from "../icons/note";
import { NavbarLink } from "./navbar-link";

const navbarLinks = [
  {
    icon: <MoneyIcon className="size-8" />,
    label: "Earnings",
    url: "/earnings",
  },
  {
    icon: <AddProfileIcon className="size-8" />,
    label: "Friends",
    url: "/friends",
  },
  {
    icon: <BriefcaseIcon className="size-8" />,
    label: "Freelance",
    url: "/projects",
  },
  { icon: <NoteIcon className="size-8" />, label: "Tasks", url: "/tasks" },
];

export function Navbar() {
  return (
    <ul className="z-40 border border-[#272B27] bg-[#1A1D1A] rounded-2xl flex p-4 gap-x-2.5 fixed bottom-11 left-[50%] translate-x-[-50%]">
      {navbarLinks.map(({ icon, label, url }) => (
        <NavbarLink key={label} icon={icon} label={label} url={url} />
      ))}
    </ul>
  );
}
