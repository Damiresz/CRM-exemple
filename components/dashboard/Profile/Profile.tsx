import { CiEdit } from "react-icons/ci";
import styles from "./Profile.module.scss";
import { PropsWithChildren } from "react";

export function Profile({children}: PropsWithChildren): JSX.Element {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>
        <h2>My Profile</h2>
        <button>
          <CiEdit />
        </button>
      </div>
      {children}
    </div>
  );
}
