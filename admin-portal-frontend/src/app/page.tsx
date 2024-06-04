import React from "react";

import HorizontalNavBar from "./components/HorizontalNavbar";
import VerticalNavBar from "./components/VerticalNavBar";
import styles from "./pageStyles";

const AnotherPage: React.FC = () => {
  return (
    <div>
      <div style={styles.verticalNavBar}>
        <VerticalNavBar />
      </div>
      <div style={styles.horizontalNavBar}>
        <HorizontalNavBar />
      </div>
    </div>
  );
};

export default AnotherPage;
