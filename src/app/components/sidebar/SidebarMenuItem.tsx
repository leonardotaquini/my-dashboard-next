"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./SidebarMenuItem.module.css";

interface SidebarMenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: SidebarMenuItemProps) => {

    const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`${ style.link } ${ pathName === path && style.linkActive }`}>
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-xs text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};
