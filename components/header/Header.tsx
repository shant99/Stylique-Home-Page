import styles from "./header.module.scss";
import Stylique from "../icons/Stylique";
import Heart from "../icons/Heart";
import { useState } from "react";
import Head from "next/head";
import NavMenu from "../navMenu/NavMenu";
import Select from "../select/Select";
import SearchInput from "../searchInput/SearchInput";
import User from "../icons/User";
import Shopping from "../icons/Shopping";
import Search from "../icons/Search";
import sameStyles from '../../styles/same.module.css';


const Header: React.FC = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerHandler = (e: any) => {
    setHamburger((prev) => !prev);
  };

  const hamburgerActive = hamburger
    ? styles["menu-button-wrapper-active"]
    : styles[""];
  return (
    <div className={sameStyles["container"]}>
      <Head>
        <title>Stylique Internship</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles["header"]}>
        <div className={styles["header-slice-1"]}>
        <span className={styles["stylique-logo-wrapper"]}>
          <Stylique />
        </span>
          <div className={styles["search-input-wrapper"]}>
            <SearchInput />
          </div>
          <ul className={styles["header-slice-1-icons"]}>
            <li className={styles["heart-wrapper"]}>
              <Heart cursor="pointer" />
            </li>
            <li className={styles["search-input-icon"]}>
              <Search width="22" height="22" cursor="pointer"/>
            </li>
            <li className={styles["user-wrapper"]}>
              <User cursor="pointer" />
            </li>
            <li className={styles["shopping-wrapper"]}>
              <Shopping cursor="pointer" />
            </li>
            <div
              className={styles["menu-button-wrapper"] + " " + hamburgerActive}
              onClick={hamburgerHandler}
            >
              <span className={styles["menu-button"]}></span>
            </div>
          </ul>
        </div>
        <div className={styles["header-slice-2"]}>
          <NavMenu menuActive={hamburger ? "menu-active" : ""} />
          <div className={styles["select-wrapper"]}>
            <Select />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
