
import Carousel from "../carousel/Carousel";
import styles from "./carouselSection2.module.scss";
import sameStyles from "../../styles/same.module.css";
import { Col, Row } from "antd";

const CarouselSection2 = ({ title = "carousel title", products = [] }:any) => {
  return (
    <section>
      <div className={sameStyles["container"]}>
        <Row>
          <Col>
            <h2 className={styles["carousel-section2-title"]}>{title}</h2>
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

export default CarouselSection2;