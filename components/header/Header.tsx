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


const Header: React.FC = () => {


  return (
    <div className={styles["header-container"]}>
      <Head>
        <title>Stylique Internship</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles["header"]}>
        <div className={styles["header-slice-1"]}>
            <Stylique />
            <SearchInput />
            <div className={styles['header-slice-1-icons']}>
              <Heart />
              <User />
              <Shopping />
            </div>
        </div>
        <div className={styles["header-slice-2"]}>
          <NavMenu />
          <Select />
        </div>
      </div>
    </div>
  );
};

export default Header;