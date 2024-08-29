import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

import searchIcon from "../icons/ic_search_grey.png";

import styles from "./SearchBarStyles";

const SearchBar: React.FC = () => {
  return (
    <div>
      <div style={styles.searchSection}>
        <div style={styles.searchIcon}>
          <Image src={searchIcon as StaticImport} alt="Search" />
        </div>
        <input style={styles.input} type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
