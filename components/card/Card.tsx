/* eslint-disable @next/next/no-img-element */
import FolderPlus from '../icons/FolderPlus';
import styles from './card.module.scss';
import { v4 } from "uuid";

const Card = ({
    title = "card title",
    cardPrice = "card price",
    tags = ["card tag"],
    imageUrl = ''
  }) => {
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
          {tags.map((item) => (
            <div key={v4()} className={styles["card-tag"]}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles["card-title"]}>{title}</div>
        <div className={styles["card-price"]}>{cardPrice}</div>
      </div>
    );
  };

  export default Card