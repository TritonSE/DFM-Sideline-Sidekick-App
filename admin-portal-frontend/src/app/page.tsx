import React from "react";

import HorizontalNavBar from "./components/HorizontalNavbar";
import VerticalNavBar from "./components/VerticalNavBar";
import styles from "./pageStyles";
import EmergencyFlow from "./pages/EmergencyFlow";
import Link from "next/link";

const AnotherPage: React.FC = () => {
  return (
    <div>
      {/* <div style={styles.verticalNavBar}>
        <VerticalNavBar />
      </div>
      <div style={styles.horizontalNavBar}>
        <HorizontalNavBar />
        <Link href="/emergencies">Go to emergencies</Link>
        <Link href="/general-principles">Go to general principles</Link>
        <Link href="/all-page">Go to pages</Link>
      </div> */}
      {/* <EmergencyFlow /> */}
      <Link href="/emergencies">Go to emergencies</Link>
      <Link href="/general-principles">Go to general principles</Link>
      <Link href="/all-page">Go to pages</Link>
    </div>
  );
};

export default AnotherPage;
