import Image from "next/image";
import styles from "./Aside.module.scss";
import Link from "next/link";
import { IoExitOutline } from "react-icons/io5";
import { NavLinks } from "../NavLinks/NavLinks";
import { PropsWithChildren } from "react";

export function Aside({children}: PropsWithChildren) {
  return (
    <div className={styles.aside}>
      <Image
        src="images/logo-dashboard.svg"
        width={32}
        height={32}
        alt="logo"
      />
     {children}
      <Link href="/">
        <IoExitOutline className={styles.nav_icon} />
      </Link>
    </div>
  );
}
