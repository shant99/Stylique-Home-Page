import { useEffect } from "react";
import { v4 } from "uuid";
import Button from "../button/Button";
import Card from "../card/Card";
import styles from "./productsSection.module.scss";

const ProductsSection = ({products }: any) => {
  if(!products) return null
  return (
    <section className={styles["products-section-container"]}>
      <div className={styles["products-section"]}>
        <h2 className={styles["products-section-header"]}>
          Design-Insider & Produkte
          <br /> bekannter Architekturmarken
        </h2>
        <div className={styles["products-section-cards"]}>
          {
            products.map((item: any) => {
              return (
                <Card key={v4()} 
                  title={item.title}
                  imageUrl={item.imageUrl}
                  tags={item.tags}
                  cardPrice={item.price}
                />
              )
            })
          }
        </div>
        <div className={styles['products-section-button-wrapper']}>
          <Button 
          type='transparent-black'
            name='Mehr anzeigen'
          />
        </div>
      </div>
    </section>
  );
};



export default ProductsSection;
