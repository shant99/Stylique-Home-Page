import MailForm from "../mailForm/MailForm";
import styles from "./mailSection.module.scss";



const MailSection = () => {
  return (
    <section className={styles["mail-section-container"]}>
      <div className={styles["mail-section"]}>
        <div className={styles["mail-section-img-wrapper"]}>
          <h3 className={styles["mail-section-under-title"]}>Exklusiv für Architekten & Designer</h3>
          <h2 className={styles["mail-section-title"]}>
            Bleib auf dem Laufenden mit <br />
            Design-Updates, Events & Tipps
          </h2>
        </div>
        <MailForm />
      </div>
    </section>
  );
};

export default MailSection;
