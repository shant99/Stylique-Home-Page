import { Col, Layout, Row } from "antd";
import React from "react";
import styles from "./aboveHeader.module.scss";

const AboveHeader: React.FC = () => {
  return (
    <div className={styles["above-header-container"]}>
      <Row>
        <Col span={24} className={styles["above-header"]}>
          Jetzt auch telefonisch bestellen:{" "}
          <span className={styles["above-header-info"]}>
            {" "}
            Tel: +49 211 9367 5050
          </span>{" "}
          | Wie können wir dich unterstützen? Schreib uns eine{" "}
          <span className={styles["above-header-info"]}>
            E-Mail: team@stylique.de
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default AboveHeader;
