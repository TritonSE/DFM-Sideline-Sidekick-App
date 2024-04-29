'use client'

import styles from './VerticalNavBarStyles';
import HomeComponent from './HomeComponent';
import React, { ReactNode } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, useAccordionButton } from 'react-bootstrap';
import GpComponent from './GPComponent';
import SearchComponent from './SearchComponent';

  
  const VerticalNavBar: React.FC = () => {
      
      interface CustomAccordionProps {
        eventKey: string;
        children: ReactNode;
      }
      
      const CustomAccordion = ({ eventKey, children }: CustomAccordionProps) => {
        //const decoratedOnClick = useAccordionButton(eventKey, () => {});

        return (
          <div>
            {children}
          </div>
        );
      }

    return (

      
      <div style={styles.container}>
        <nav style={styles.nav}>
        <div>
      </div>
    
          
     
      <div style={styles.accordionContainer}>

        <Accordion defaultActiveKey="0">
          <a href="#homepagelink" style={{ textDecoration: 'none' }}>
            <Card style={{ border: 'none', borderBottom: 'none'}}>
              <Card.Header style={styles.cardHeader}>
                <CustomAccordion eventKey="0">
                  <div style={styles.firstCarDiv}>
                    <div style={styles.image}>
                      {/* <Image src={homeIcon} alt={'Home'} style={styles.homeIcon} /> */}
                      <HomeComponent />
                    </div>
                    Home
                  </div>
                </CustomAccordion>
              </Card.Header>
            </Card>
          </a>

          <Accordion.Item eventKey="1" style={{ border: 'none'}}>
            <Accordion.Header>
              <div style={styles.cardDivs}>
                <div style={styles.image}>
                  <SearchComponent height={30.855} width={30.855} color={"#182B49"}/>
                </div>
                Search
              </div>
            </Accordion.Header>
            <Accordion.Body>
                <ul>
                  <li style={styles.listItem}>All</li>
                  <li style={styles.listItem}>By Category</li>
                </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={{ border: 'none'}}>
            <Accordion.Header>
              <div style={styles.cardDivs}>
                <div style={styles.image}>
                  {/* <Image src={gpIcon} alt={'General Principles'} style={styles.gpIcon} /> */}
                  <GpComponent/>
                </div>
                General Principles
              </div>
            </Accordion.Header>
            <Accordion.Body>
            <ul style={{ listStyleType: 'none' }}>
              <li style={styles.listItem}>All</li>
              <li style={styles.listItem}>Emergency Action Plan</li>
              <li style={styles.listItem}>Trauma Centers</li>
              <li style={styles.listItem}>Burn Centers</li>
              <li style={styles.listItem}>Stroke Centers</li>
              <li style={styles.listItem}>Serious On-Field Injury</li>
              <li style={styles.listItem}>Catastrophic Incident</li>
              <li style={styles.listItem}>Adminstering Medication</li>
              <li style={styles.listItem}>Muscle Injuries</li>
              <li style={styles.listItem}>Ligament Injuries</li>
              <li style={styles.listItem}>Dislocations/Sublaxations</li>
              <li style={styles.listItem}>Fractures</li>
            </ul>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>




        </nav>
  
      </div>
    );
  };
  
  export default VerticalNavBar;