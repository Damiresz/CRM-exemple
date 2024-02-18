import Image from "next/image";
import styles from "./UserProfile.module.scss";

export function UserProfile() {
  return (
    <div className={styles.profile}>
      <Image
        src="/images/image-profile.jpeg"
        width={100}
        height={100}
        alt="photo"
      />
      <p>Joe Smit</p>
      <p>exemple@gmail.com</p>
    </div>
  );
}
