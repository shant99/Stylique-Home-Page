/* eslint-disable @next/next/no-img-element */
import Button from "../button/Button";
import ExclusiveProduct from "../exclusiveProduct/ExclusiveProduct";
import styles from "./exclusiveProductSection.module.scss";

const ExclusiveProductSection = ({
  imageUrl = "",
  buttonName = "",
  productTitle = "",
  reverse = false,
}) => {
  return (
    <section className={styles["exclusive-product-section-container"]}>
      <div className={styles["exclusive-product-section"]}>
        <ExclusiveProduct buttonName={buttonName} title={productTitle} 
        style={{ order: 2 }}
        />
        <div
          className={styles["exclusive-product-image-wrapper"]}
          style={{ order: 1 }}
        >
          <img src={imageUrl} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProductSection;
