'use client'
import HorizontalNavBar from './components/HorizontalNavbar'
import React, { ReactNode, useEffect, useState } from 'react';
import VerticalNavBar from './components/VerticalNavBar';
import styles from './pageStyles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlankPageComponent from './components/BlankPageComponent';

const AnotherPage: React.FC = () => {
  return (
    <div>
      <Router>
        <div style={styles.verticalNavBar}>
          <VerticalNavBar/>
          <Routes>
            <Route path="/category/:id" element={
              <div style={styles.blankPage}>
                <BlankPageComponent/>
              </div>
            } />
          </Routes>
        </div>
        

      </Router>
      <div style={styles.horizontalNavBar}>
        <HorizontalNavBar />
      </div>
    </div>
  );
};

export default AnotherPage;
