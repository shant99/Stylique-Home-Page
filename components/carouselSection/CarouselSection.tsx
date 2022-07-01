
import Carousel from "../carousel/Carousel";
import styles from "./carouselSection.module.scss";
import sameStyles from "../../styles/same.module.css";
import { Col, Row } from "antd";

const CarouselSection = ({ title = "carousel title", products = [] }:any) => {
  return (
    <section>
      <div className={sameStyles["container"]}>
        <div className={styles["carousel-section"]}>
            <h2 className={styles["carousel-section-title"]}>{title}</h2>
            <Carousel 
                    arr={products}
                    dots={false}
                />
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
