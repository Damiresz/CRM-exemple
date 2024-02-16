import styles from "./page.module.scss";
import { Navigation } from "./components/homepage/Navigation/Navigation";
import { MainContent } from "./components/homepage/MainContent/MainContent";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
      <Navigation />
      <MainContent />
      </div>
    </main>
  );
}
