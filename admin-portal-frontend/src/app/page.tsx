import React from "react";

import HorizontalNavBar from "./components/HorizontalNavbar";
import VerticalNavBar from "./components/VerticalNavBar";
import styles from "./pageStyles";
import EmergencyFlow from "./pages/EmergencyFlow";
import Link from "next/link";

const AnotherPage: React.FC = () => {
  return (
    <div>
      <div style={styles.verticalNavBar}>
        <VerticalNavBar />
      </div>
      <div style={styles.horizontalNavBar}>
        <HorizontalNavBar />
      </div>
      <div style={styles.emergencyFlow}>
        <EmergencyFlow />
      </div>
    </div>
  );
};

export default AnotherPage;
