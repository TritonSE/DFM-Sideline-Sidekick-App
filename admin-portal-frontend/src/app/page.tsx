import React from "react";

import HorizontalNavBar from "./components/HorizontalNavbar";
import VerticalNavBar from "./components/VerticalNavBar";
import styles from "./pageStyles";

interface LayoutProps {
  children: React.ReactNode;
}

const AnotherPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div style={styles.horizontalNavBar}>
        <HorizontalNavBar />
      </div>
      <div className="flex flex-row">
        <div style={styles.verticalNavBar}>
          <VerticalNavBar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AnotherPage;
