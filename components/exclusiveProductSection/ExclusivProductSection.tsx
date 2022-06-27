/* eslint-disable @next/next/no-img-element */
import Button from "../button/Button";
import styles from "./exclusiveProductSection.module.scss";

const ExclusiveProductSection = ({
  imageUrl = "",
  buttonName = "",
  productTitle = ""
}) => {
  return (
    <section className={styles["exclusive-product-section-container"]}>
      <div className={styles["exclusive-product-section"]}>
      <div className={styles["exclusive-product"]}>
          <h4 className={styles["exclusive-product-above-title"]}>
            Exklusive ausgewählte Hersteller
          </h4>
          <h2 className={styles["exclusive-product-title"]}>{productTitle}</h2>
          <Button type='dark' name={buttonName} />
        </div>
        <div
          className={styles["exclusive-product-image-wrapper"]}
        >
          <img src={imageUrl} alt="image"
            className={styles["exclusive-product-image"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProductSection;
