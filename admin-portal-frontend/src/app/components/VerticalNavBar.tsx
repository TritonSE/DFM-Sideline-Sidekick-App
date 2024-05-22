'use client'

import styles from './VerticalNavBarStyles';
import HomeComponent from './HomeComponent';
import React, { ReactNode, useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';
import GpComponent from './GPComponent';
import SearchComponent from './SearchComponent';
import { getAllCategories } from '../api/categories';
import { NavLink } from 'react-router-dom';

  const VerticalNavBar: React.FC = () => {
      
      interface CustomAccordionProps {
        children: ReactNode;
      }
      
      const CustomAccordion = ({ children }: CustomAccordionProps) => {
        //const decoratedOnClick = useAccordionButton(eventKey, () => {});

        return (
          <div>
            {children}
          </div>
        );
      }

      interface Category {
        _id: string;
        title: String;
        items: [];
        type: String;
      }
      
      const [items, setItems] = useState<Category[]>([]);
      useEffect(() => {
        (async () => {
          const categories = await getAllCategories();
          setItems(categories);
        })();
      }, []);

      const generalPrinciples = items.filter(category => category.type === 'General Principle');


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
                <CustomAccordion>
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

            <ul>
              {generalPrinciples.map(category => (
                <li style={styles.listItem} key={category._id}>
                  <NavLink to={`/category/${category._id}`} style={({ isActive }) => {
                    return {
                      textDecoration: 'none',
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "var(--DFM-Navy, #182B49)" : "var(--Neutral-Gray6, #484848)",
                    };
                }} className="active">{category.title}</NavLink>
                              </li>
                ))}
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