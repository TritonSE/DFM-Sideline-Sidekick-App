import React from "react";

import searchIcon from "../icons/ic_search_grey.png";

import styles from "./SearchBarStyles";
import Image from "next/image";

const SearchBar: React.FC = () => {
  return (
    <div>
      <div style={styles.searchSection}>
        <div>
          <Image src={searchIcon} alt="Search" style={styles.searchIcon} />
        </div>
        <input style={styles.input} type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
