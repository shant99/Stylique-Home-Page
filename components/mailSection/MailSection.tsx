// import MailForm from "../mailForm/MailForm";
import styles from "./mailSection.module.scss";
import Line from "../icons/Line";
import Button from "../button/Button";
import sameStyles from "../../styles/same.module.css";
import { Col, Row } from "antd";

const MailSection = () => {
  return (
    <section>
      <div className={sameStyles["container"]}>
        <Row className={styles["mail-section"]}>
          <Col
            lg={{ span: 14 }}
            xl={{ span: 14 }}
            md={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <div className={styles["mail-section-img-wrapper"]}>
              <h3 className={styles["mail-section-under-title"]}>
                Exklusiv für Architekten & Designer
              </h3>
              <h2 className={styles["mail-section-title"]}>
                Bleib auf dem Laufenden mit <br />
                Design-Updates, Events & Tipps
              </h2>
            </div>
          </Col>
          <Col lg={{ span: 10 }} xl={{ span: 10 }} md={{ span: 14 }}>
            <div className={styles["mail-form"]}>
              <h2 className={styles["mail-form-title"]}>
                Jetzt Newsletter abonnieren
              </h2>
              <h3 className={styles["mail-form-under-title"]}>
                Abonniere den Newsletter und bestelle Deine nächste <br />{" "}
                Musterbox versandkostenfrei.
              </h3>
              <h3 className={styles["mail-form-input-title"]}>
                E-Mail Adresse
              </h3>
              <div className={styles["input-mail-wrapper"]}>
                <input type="mail" className={styles["input-mail"]} />
                <div className={styles["input-mail-line-icon-wrapper"]}>
                  <Line />
                </div>
              </div>
              <Button name="Abonnieren" type="long-dark" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MailSection;
