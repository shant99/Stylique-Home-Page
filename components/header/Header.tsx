import styles from "./header.module.scss";
import Stylique from "../icons/Stylique.jsx";
import { useState } from "react";
import Head from "next/head";
import NavMenu from "../navMenu/NavMenu";
import Select from "../select/Select";
import Search from "../icons/Search";

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
            <Search />
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