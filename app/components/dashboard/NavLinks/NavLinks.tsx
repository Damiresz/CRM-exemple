"use client";
import styles from "./NavLinks.module.scss";
import {
  CiCalendar,
  CiHardDrive,
  CiSettings,
  CiShop,
  CiWavePulse1,
} from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiUserSquareThin } from "react-icons/pi";
import clsx from "clsx";

const links = [
  {icon: CiShop, href: "/dashboard"},
  {icon: CiWavePulse1, href: "/dashboard/analytics"},
  {icon: CiHardDrive, href: "/data"},
  {icon: PiUserSquareThin, href: "/dashboard/customers"},
  {icon: CiCalendar, href: "/dashboard/calendar"},
  {icon: CiSettings, href: "/dashboard/settings"}
]

export function NavLinks() {
  const pathname = usePathname();
  return (
    <div className={styles.navigation}>
      {links.map((link) => {
      const LinkIcon = link.icon
      return (
        <Link key={link.href} href={link.href}>
          <LinkIcon className={clsx(styles.nav_icon,{[styles.nav_icon__active] : pathname == link.href})} />
        </Link>
      )
    })}
    </div>
  );
}
