"use client";

import React from "react";

import styles from "./HorizontalNavBarStyles";

import SearchBar from "./SearchBar";

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

      <div style={styles.searchBarContainer}>
        <SearchBar />
      </div>

      <div style={styles.profileContainer}>
        <div style={styles.profileBackground}>
          <span style={styles.profileLogoText}>PN</span>
        </div>
        <span style={styles.profileText}>Profile Name</span>
      </div>
    </div>
  );
};

export default HorizontalNavBar;
