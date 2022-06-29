import Card from "../card/Card";
import Carousel from "../carousel/Carousel";
import styles from "./carouselSection.module.scss";
import sameStyles from "../../styles/same.module.css";
import { Col, Row } from "antd";

const CarouselSection = ({ title = "carousel title", products = [] }) => {
  return (
    <section>
      <div className={sameStyles["container"]}>
        <Row>
          <Col>
            <h2 className={styles["carousel-section-title"]}>{title}</h2>
            <Carousel 
                    arr={products}
                    dots={false}
                />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CarouselSection;
