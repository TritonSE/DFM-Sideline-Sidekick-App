"use client";

import React, { ReactNode, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

import GpComponent from "./GPComponent";
import HomeComponent from "./HomeComponent";
import SearchComponent from "./SearchComponent";
import { Category, getAllCategories } from "../api/Categories";
import styles from "./VerticalNavBarStyles";

const VerticalNavBar: React.FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getAllCategories();
        setCategories(fetchedCategories as never);
      } catch (error) {
        console.log("Fetch categories failed.");
      }
    };

    void fetchData();
  }, [categories]);

  type CustomAccordionProps = {
    children: ReactNode;
  };

  const CustomAccordion = ({ children }: CustomAccordionProps) => {
    //const decoratedOnClick = useAccordionButton(eventKey, () => {});

    return <div>{children}</div>;
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div></div>

        <div style={styles.accordionContainer}>
          <Accordion defaultActiveKey="0">
            <a href="#homepagelink" style={{ textDecoration: "none" }}>
              <Card style={{ border: "none", borderBottom: "none" }}>
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

            <Accordion.Item eventKey="1" style={{ border: "none" }}>
              <Accordion.Header>
                <div style={styles.cardDivs}>
                  <div style={styles.image}>
                    <SearchComponent height={30.855} width={30.855} color={"#182B49"} />
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
            <Accordion.Item eventKey="2" style={{ border: "none" }}>
              <Accordion.Header>
                <div style={styles.cardDivs}>
                  <div style={styles.image}>
                    {/* <Image src={gpIcon} alt={'General Principles'} style={styles.gpIcon} /> */}
                    <GpComponent />
                  </div>
                  <a
                    href="/general-principles"
                    style={{ textDecoration: "none", color: "var(--bs-accordion-btn-color)" }}
                  >
                    General Principles
                  </a>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ul style={{ listStyleType: "none" }}>
                  <li style={styles.listItem}>
                    <Link
                      href={"/general-principles/"}
                      style={{
                        textDecoration: "none",
                        color: "var(--bs-accordion-btn-color)",
                        fontWeight: "bold",
                      }}
                    >
                      All
                    </Link>
                  </li>
                  {categories.map((category: Category) => (
                    <li key={category._id}>
                      {/* Generate unique link for each category */}
                      <Link
                        href={`/general-principles/${encodeURIComponent(category.title)}`}
                        style={{
                          textDecoration: "none",
                          color: "var(--bs-accordion-btn-color)",
                        }}
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                  {/* <li style={styles.listItem}>Emergency Action Plan</li>
                  <li style={styles.listItem}>Trauma Centers</li>
                  <li style={styles.listItem}>Burn Centers</li>
                  <li style={styles.listItem}>Stroke Centers</li>
                  <li style={styles.listItem}>Serious On-Field Injury</li>
                  <li style={styles.listItem}>Catastrophic Incident</li>
                  <li style={styles.listItem}>Adminstering Medication</li>
                  <li style={styles.listItem}>Muscle Injuries</li>
                  <li style={styles.listItem}>Ligament Injuries</li>
                  <li style={styles.listItem}>Dislocations/Sublaxations</li>
                  <li style={styles.listItem}>Fractures</li> */}
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
