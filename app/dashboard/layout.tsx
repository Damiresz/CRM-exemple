import type { PropsWithChildren } from "react";
import styles from './layout.module.scss'
import { Aside } from "@/components/dashboard/Aside/Aside";
import { Profile } from "@/components/dashboard/Profile/Profile";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (<div className={styles.layout}>
    <Aside />
    {children}
    <Profile />
    </div>
    )
}
