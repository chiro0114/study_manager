"use client";

import { twMerge } from "tailwind-merge";
import Button from "../Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

type SidebarItemProps = {
  items: {
    title: string;
    href: string;
  };
};

const SidebarItem: React.FC<SidebarItemProps> = ({ items }) => {
  const { title, href } = items;
  const pathname = usePathname();

  return (
    <div>
      <Link href={href}>
        <Button
          className={twMerge(
            `text-3xl py-4  mb-5 w-52 rounded-full tracking-wide`,
            href === pathname && "press-neumorphism"
          )}
        >
          {title}
        </Button>
      </Link>
    </div>
  );
};

export default SidebarItem;
