import styles from "./companies.module.scss";
import { v4 } from "uuid";
import Jung from "../icons/Jung";
import Mosaico from "../icons/Mosaico";
import ObjectCarpet from "../icons/ObjectCarpet";

const companiesIcons: any = [
  <Jung key={v4()} className={styles["Jung-icon"]} />,
  <Mosaico key={v4()} className={styles["Mosaico-icon"]} />,
  <ObjectCarpet key={v4()} className={styles["ObjectCarpet-icon"]} />,
  <Jung key={v4()} className={styles["Jung-icon"]} />,
  <Mosaico key={v4()} className={styles["Mosaico-icon"]} />,
  <ObjectCarpet key={v4()} className={styles["ObjectCarpet-icon"]} />
];

const Companies: React.FC = () => {
  return (
    <section className={styles["companies-container"]}>
      <div className={styles["companies"]}>
        <h2 className={styles["companies-header"]}>Unsere Hersteller</h2>
        <div className={styles["companies-list"]}>
          {companiesIcons.map((item: any) => {
            return (
              <div key={v4()} className={styles["companie"]}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Companies;
