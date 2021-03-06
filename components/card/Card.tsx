/* eslint-disable @next/next/no-img-element */
import FolderPlus from '../icons/FolderPlus';
import styles from './card.module.scss';
import { v4 } from "uuid";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

const Card = ({
    title = "card title",
    cardPrice = "card price",
    tags = ["card tag"],
    imageUrl = ''
  }: any) => {
    return (
      <div className={styles["card"]}>
        <div className={styles["card-img-wrapper"]}>
           <div className={styles["card-folder-plus-wrapper"]}>
              <FolderPlus />
           </div>
           <img src={imageUrl} 
           alt="image"
           className={styles["card-img"]}
           />
        </div>
        <div className={styles["card-tags"]}>
          {tags.map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => (
            <div key={v4()} className={styles["card-tag"]}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles["card-title"]}>{title}</div>
        <div className={styles["card-price"]}><span>{cardPrice}</span>
         <span className={styles["card-price-slice2"]}>Jetzt kaufen</span></div>
      </div>
    );
  };

  export default Card