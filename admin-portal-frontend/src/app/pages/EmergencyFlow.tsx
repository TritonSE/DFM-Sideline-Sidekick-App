import React from "react";
import styles from "./EmergencyFlowStyles";
import searchIcon from "../icons/ic_search_grey.png";
import Image from "next/image";

const EmergencyFlow: React.FC = () => {

  return (
    <div style = {styles.page}>
      <div style = {styles.container}>
        <p style = {styles.header}>
          Global Search &gt; Medical &gt; Add an injury
        </p>
        <p style = {styles.subtitle}>
          Injury details
        </p>
        <p style = {styles.information}>
          Name of injury*
        </p>
        <input
        type="text"
        placeholder="Enter a name"
        style={styles.textbox}
        />


        <p style = {styles.subheader}>
          Overview
        </p>

        <p style = {styles.information}>
          Importance
        </p>
        <input
        type="text"
        placeholder="Add details"
        style={styles.textbox}
        />

        <p style = {styles.information}>
          Risk factors
        </p>
        <input
        type="text"
        placeholder="Add details"
        style={styles.textbox}
        />

        <p style = {styles.information}>
          Mechanism of Injury
        </p>
        <input
        type="text"
        placeholder="Add details"
        style={styles.textbox}
        />

        <p style = {styles.information}>
          Diagnosis
        </p>
        <input
        type="text"
        placeholder="Add details"
        style={styles.textbox}
        />

        <p style = {styles.information}>
          Physical Exam
        </p>
        <input
        type="text"
        placeholder="Add details"
        style={styles.textbox}
        />


        <p style = {styles.subheader}>
          How to treat
        </p>

        <p style = {styles.information}>
          Acute Management
        </p>
        <input
        type="text"
        placeholder="Add details"
        style={styles.textbox}
        />

        <p style = {styles.information}>
          Dispo
        </p>
        <input
        type="text"
        placeholder="Add details"
        style={styles.textbox}
        />

        <p style = {styles.information}>
          Considerations
        </p>
        <input
        type="text"
        placeholder="Add details"
        style={styles.textbox}
        />

      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.cancelButton}>
          Close
        </button>
        <button style={styles.publishButton}>
          Publish
        </button>
      </div>
    </div>

    
  );
};

export default EmergencyFlow;
