import type { PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import { Aside } from "@/components/dashboard/Aside/Aside";
import { Profile } from "@/components/dashboard/Profile/Profile";
import { UserProfile } from "@/components/dashboard/UserProfile/UserProfile";
import { Time } from "@/components/dashboard/Time/Time";
import { Organizer } from "@/components/dashboard/Organizer/Organizer";
import { NavLinks } from "@/components/dashboard/NavLinks/NavLinks";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.layout}>
      <Aside >
      <NavLinks />
      </Aside>
      {children}
      <Profile>
        <UserProfile />
        <Time />
        <Organizer />
      </Profile>
    </div>
  );
}
