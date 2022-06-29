import { useEffect } from "react";
import { v4 } from "uuid";
import Button from "../button/Button";
import Card from "../card/Card";
import styles from "./productsSection.module.scss";
import sameStyles from "../../styles/same.module.css";
import { Col, Row } from "antd";

const ProductsSection = ({ products }: any) => {
  if (!products) return null;
  return (
    <section>
      <div className={sameStyles["container"]}>
        <h2 className={styles["products-header"]}>
          Design-Insider & Produkte
          <br /> bekannter Architekturmarken
        </h2>
        <Row gutter={[24, 24]} className={styles["products-cards"]}>
          {products.map((item: any) => {
            return (
              <Col key={v4()} 
              xl={{ span: 6 }}
              lg={{ span: 6 }}
              xs={{ span: 8 }} 
              sm={{span: 8}}
              >
                <Card
                  key={v4()}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  tags={item.tags}
                  cardPrice={item.price}
                />
              </Col>
            );
          })}
        </Row>
        <Row justify="center">
          <Col >
            <Button type="transparent-black" name="Mehr anzeigen" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProductsSection;
