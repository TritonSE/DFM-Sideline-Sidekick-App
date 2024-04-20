import HorizontalNavBar from './horizontalNavbar'
import React from 'react';
import VerticalNavBar from './VerticalNavBar';
import styles from './pageStyles'

const AnotherPage: React.FC = () => {

  return (
    <div>
      <div style={styles.verticalNavBar}>
        <VerticalNavBar/>
      </div>
      <div style={styles.horizontalNavBar}>
        <HorizontalNavBar />
      </div>
    </div>
  );
};

export default AnotherPage;
