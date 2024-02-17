import { CiEdit } from "react-icons/ci";
import styles from "./Profile.module.scss";
import { UserProfile } from "../UserProfile/UserProfile";
import { Time } from "../Time/Time";
import { CalendarBlock } from "../Calendar/Calendar";

export function Profile(): JSX.Element {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>
        <h2>My Profile</h2>
        <button>
          <CiEdit />
        </button>
      </div>
      <UserProfile />
      <Time />
      <CalendarBlock />
    </div>
  );
}
