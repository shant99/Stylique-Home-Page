/* eslint-disable @next/next/no-img-element */
import Button from "../button/Button";
import styles from "./exclusiveProduct.module.scss";

const ExclusiveProduct = ({ title = "product name" ,
    buttonName=  'button name'
}: any) => {
  return (
        <div className={styles["exclusive-product"]}>
          <h4 className={styles["exclusive-product-above-title"]}>
            Exklusive ausgewählte Hersteller
          </h4>
          <h2 className={styles["exclusive-product-title"]}>{title}</h2>
          <Button type='dark' name={buttonName} />
        </div>
  );
};

export default ExclusiveProduct;
