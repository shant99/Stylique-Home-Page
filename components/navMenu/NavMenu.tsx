import styles from "./navMenu.module.scss";
import { v4 } from "uuid";
import { useState } from "react";
import Button from "../button/Button";
import StyliqueLogo from "../icons/Stylique";
import AngleRight from "../icons/AngleRight";

const menuList = [
  "Neu",
  "Shop by STYLE",
  "Fliesen",
  "Tapeten",
  "Farben",
  "Teppiche",
  "Elektro",
  "Turbeschlage",
  "Dielen & Parkett",
  "Oberflachen",
  "Muster",
];
const menuListMobile = [
  "Neu",
  "Products",
  "Shop by STYLE",
  "Muster",
  "Partners",
];

const ContentOne = () => {
  return (
    <div className={styles["content-one"]}>
      <ul>
        <li>
          <a href="#">Für Architekten</a>
        </li>
        <li>
          <a href="#">Für Hersteller</a>
        </li>
        <li>
          <a href="#">Für Händler</a>
        </li>
        <li>
          <span>
            E-Mail: <a href="mailto:team@stylique.de">team@stylique.de</a>
          </span>
          <span>
            Telefon: <a href="tel: +49 211 936 7 50 50"> +49 211 936 7 50 50</a>
          </span>
        </li>
      </ul>
    </div>
  );
};
const RecentlyViewedContent = () => {
  return (
    <div className={styles["recently-viewed-content"]}>
      <h3>Recently viewed</h3>
      <p>Click on the image to view details</p>
      <div className={styles["recently-viewed-content-images"]}></div>
    </div>
  );
};

const NavMenu = ({ menuActive }: any) => {
  const [buttonIndex, setButtonIndex] = useState<number>(0);

  const buttonClickHandler = (index: number): void => {
    setButtonIndex(index);
  };

  const buttonClickHandlerMobile = (index: number): void => {
    setButtonIndex(index);
  };

  return (
    <div className={styles["nav-menu-container"] + " " + styles[menuActive]}>
      <ul className={styles["nav-menu"]}>
        {menuList.map((item, index) => {
          return (
            <li key={v4()}>
              <Button
                type="transparent"
                click={() => buttonClickHandler(index)}
                name={item}
                active={buttonIndex === index}
              />
            </li>
          );
        })}
      </ul>
      <div className={styles["nav-menu-mobile-container"]}>
        <span className={styles["stylique-logo-wrapper"]}>
          <StyliqueLogo />
        </span>
        <ul className={styles["nav-menu-mobile"]}>
          {menuListMobile.map((item, index) => {
            return (
              <li key={v4()} className={styles["nav-menu-mobile-li"]}>
                <Button
                  type="transparent-bold"
                  click={() => buttonClickHandlerMobile(index)}
                  name={item}
                  active={buttonIndex === index}
                />
                {item === "Products" || item === "Partners" ? <AngleRight /> : ""}
              </li>
            );
          })}
        </ul>

        <div className={styles["nav-menu-mobile-footer"]}>
          <ContentOne />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
