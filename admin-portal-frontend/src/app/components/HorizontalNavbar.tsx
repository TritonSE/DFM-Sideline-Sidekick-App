"use client";

import React from "react";

import styles from "./HorizontalNavBarStyles";
import SearchComponent from "./SearchComponent";

const HorizontalNavBar: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <div style={styles.logoBackground}>
          <SearchComponent width={18} height={18} color={"#FFFFFF"} />
        </div>
        <span style={styles.logoText}>Sideline Sidekick</span>
      </div>
    </div>
  );
};

export default HorizontalNavBar;
