import styles from "./MainContent.module.scss";

export function MainContent() {
  return (
    <div className={styles.MainContent}>
      <h1>
        <span>CRM</span> system
      </h1>
      <h2>exemple version</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Dolor lacinia facilisis
        fermentum massa non lacus hendrerit nibh. Nisl sed dolor amet neque
        purus nec viverra blandit sapien. Ante odio vulputate pellentesque sed.
        Suspendisse venenatis malesuada sem luctus.
      </p>
    </div>
  );
}
