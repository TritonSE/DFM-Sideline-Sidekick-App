import HorizontalNavBar from "./components/HorizontalNavbar";
import React from "react";
import VerticalNavBar from "./components/VerticalNavBar";
import styles from "./pageStyles";
import EmergencyFlow from "./pages/EmergencyFlow";

const AnotherPage: React.FC = () => {
  return (
    <div>
      <div style={styles.verticalNavBar}>
        <VerticalNavBar />
      </div>
      <div style={styles.horizontalNavBar}>
        <HorizontalNavBar />
      </div>
      <div>
        <EmergencyFlow />
      </div>
    </div>
  );
};

export default AnotherPage;
