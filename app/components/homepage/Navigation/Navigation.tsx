"use client";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";

type NavLinks = {
  name: string;
  href: string;
};

export const links: NavLinks[] = [
  { name: "Docs", href: "/docs" },
  { name: "Template", href: "/template" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export function Navigation() {
  
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <nav className={styles.navigation}>
      <Link className={styles.logo} href="/">
        <Image src="./images/logo.svg" width={50} height={42} alt="logo" />
        <p>CRM</p>
      </Link>
      <ul className={styles.navItems}>
        {links.map((link: NavLinks) => (
          <li key={link.href}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Link className={styles.signIn} href="/login">
        Sign in
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className={!isOpen ? styles.navBtn : styles.navBtnOpen}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <div>
          <ul className={styles.navItemsPhone}>
            {links.map((link: NavLinks) => (
              <li key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            <li>
            <Link className={styles.signInPhone} href="/login">
              Sign in
            </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
