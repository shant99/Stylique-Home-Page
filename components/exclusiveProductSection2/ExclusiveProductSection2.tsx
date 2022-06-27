/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import Button from "../button/Button";
import styles from "./exclusiveProductSection2.module.scss";

const ExclusiveProductSection2 = ({
  imageUrl = "",
  buttonName = "",
  productTitle = "",
}) => {
  return (
    <section className={styles["exclusive-product-section2-container"]}>
      <div className={styles["exclusive-product-section2"]}>
        <div
          className={styles["exclusive-product-image-wrapper"]}
        >
          <img src={imageUrl} alt="image" />
        </div>
        <div className={styles["exclusive-product"]}>
          <h4 className={styles["exclusive-product-above-title"]}>
            Exklusive ausgewählte Hersteller
          </h4>
          <h2 className={styles["exclusive-product-title"]}>{productTitle}</h2>
          <Button type="dark" name={buttonName} />
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProductSection2;
