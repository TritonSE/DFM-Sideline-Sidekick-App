'use client'

import styles from './VerticalNavBarStyles';
import profileIcon from './Profile Icon.png'
import React, { ReactNode } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import homeIcon from './icons/Home.png'
import searchIcon from './icons/ic_search.png'
import gpIcon from './icons/gen principles.png'
import { Card, useAccordionButton } from 'react-bootstrap';

  
  const VerticalNavBar: React.FC = () => {
      
      interface CustomAccordionProps {
        eventKey: string;
        children: ReactNode;
      }
      
      const CustomAccordion = ({ eventKey, children }: CustomAccordionProps) => {
        const decoratedOnClick = useAccordionButton(eventKey, () => {});

        return (
          <div onClick={decoratedOnClick}>
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
                      <Image src={homeIcon} alt={'Home'} style={styles.homeIcon} />
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
                  <Image src={searchIcon} alt={'Search'} style={styles.searchIcon} />
                </div>
                Search
              </div>
            </Accordion.Header>
            <Accordion.Body>
                <ul>
                  <li>All</li>
                  <li>By Category</li>
                </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={{ border: 'none'}}>
            <Accordion.Header>
              <div style={styles.cardDivs}>
                <div style={styles.image}>
                  <Image src={gpIcon} alt={'General Principles'} style={styles.gpIcon} />
                </div>
                General Principles
              </div>
            </Accordion.Header>
            <Accordion.Body>
                <ul>
                  <li>All</li>
                  <li>Emergency Action Plan</li>
                  <li>Trauma Centers</li>
                  <li>Burn Centers</li>
                  <li>Stroke Centers</li>
                  <li>Serious On-Field Injury</li>
                  <li>Catastrophic Incident</li>
                  <li>Adminstering Medication</li>
                  <li>Muscle Injuries</li>
                  <li>Ligament Injuries</li>
                  <li>Dislocations/Sublaxations</li>
                  <li>Fractures</li>
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