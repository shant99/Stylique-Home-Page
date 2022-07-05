/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import Button from "../button/Button";
import styles from "./exclusiveProductSection2.module.scss";
import sameStyles from "../../styles/same.module.css";
import { Typography } from "antd";

const ExclusiveProductSection2 = ({
  imageUrl = "",
  buttonName = "",
  productTitle = "",
}: any) => {
  const { Title } = Typography;
  return (
    <section>
      <div className={sameStyles["container"]}>
        <Row className={styles["exclusive-product"]} align={"middle"}>
          <Col
            xxl={{ span: 10 }}
            xl={{ span: 10 }}
            lg={{ span: 10 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            className={styles["exclusive-product-image-wrapper"]}
          >
            <img
              src={imageUrl}
              alt="image"
              className={styles["exclusive-product-image"]}
            />
          </Col>
          <Col
            xxl={{ span: 14 }}
            xl={{ span: 14 }}
            lg={{ span: 14 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            className={styles["exclusive-product-info"]}
          >
            <Title
              level={4}
              className={styles["exclusive-product-above-title"]}
            >
              Exklusive ausgewählte Hersteller
            </Title>
            <Title level={2} className={styles["exclusive-product-title"]}>
              {productTitle}
            </Title>
            <Button type="dark" name={buttonName} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ExclusiveProductSection2;
