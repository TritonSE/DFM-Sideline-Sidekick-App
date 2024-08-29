"use client";

import React from "react";

import { CreateEmergencyRequest, createEmergency } from "../../../emergencies";
import AnotherPage from "../page";

import styles from "./EmergencyFlowStyles";

export type EmergencyFlowProps = {
  onSubmit?: () => void;
};

type InputBlockProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const InputBlock: React.FC<InputBlockProps> = ({ label, value, onChange }) => (
  <>
    <p style={styles.information}>{label}</p>
    <input
      type="text"
      placeholder="Add details"
      style={styles.textbox}
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  </>
);

type Overview = {
  Importance?: string;
  "Mechanism of Injury"?: string[];
  Diagnosis?: string[];
  "Physical Exam"?: string[];
};

type Treatment = {
  "Acute Management"?: string[];
  Dispo?: string[];
  Considerations?: string;
};

const EmergencyFlow: React.FC = () => {
  const [emergencyTitle, setEmergencyTitle] = React.useState("");
  const [emergencySubtitle, setEmergencySubtitle] = React.useState("");
  const [importance, setImportance] = React.useState("");
  const [riskFactors, setRiskFactors] = React.useState("");
  const [mechanismOfInjury, setMechanismOfInjury] = React.useState("");
  const [diagnosis, setDiagnosis] = React.useState("");
  const [physicalExam, setPhysicalExam] = React.useState("");
  const [acuteManagement, setAcuteManagement] = React.useState("");
  const [dispo, setDispo] = React.useState("");
  const [considerations, setConsiderations] = React.useState("");

  const handlePublish = () => {
    //make an object of type CreateEmergencyRequest
    //use createEmergency to make the emergency in DB
    //redirect back to main page
    // const emergency: CreateEmergencyRequest = {
    //   title: emergencyTitle,
    //   overview: {
    //     Importance: importance,
    //     "Mechanism of Injury": mechanismOfInjury.split(","),
    //     Diagnosis: diagnosis.split(","),
    //     "Physical Exam": physicalExam.split(","),
    //   },
    //   treatment: {
    //     "Acute Management": acuteManagement.split(","),
    //     Dispo: dispo.split(","),
    //     Considerations: considerations,
    //   },
    //   content: {},
    // };

    const addPropertyIfNotEmpty = (obj: Record<string, unknown>, key: string, value: string) => {
      if (value && value.trim() !== "") {
        obj[key] = value.includes(",") ? value.split(",") : value;
      }
    };

    const overview: Overview = {};
    addPropertyIfNotEmpty(overview, "Importance", importance);
    addPropertyIfNotEmpty(overview, "Mechanism of Injury", mechanismOfInjury);
    addPropertyIfNotEmpty(overview, "Diagnosis", diagnosis);
    addPropertyIfNotEmpty(overview, "Physical Exam", physicalExam);

    const treatment: Treatment = {};
    addPropertyIfNotEmpty(treatment, "Acute Management", acuteManagement);
    addPropertyIfNotEmpty(treatment, "Dispo", dispo);
    addPropertyIfNotEmpty(treatment, "Considerations", considerations);

    const emergency: CreateEmergencyRequest = {
      title: emergencyTitle,
      subtitle: emergencySubtitle,
      ...(Object.keys(overview).length > 0 && { overview }),
      ...(Object.keys(treatment).length > 0 && { treatment }),
      content: {},
    };

    createEmergency(emergency)
      .then((result) => {
        if (result.success) {
          // clear the form
          setEmergencyTitle("");
          setEmergencySubtitle("");
          setImportance("");
          setRiskFactors("");
          setMechanismOfInjury("");
          setDiagnosis("");
          setPhysicalExam("");
          setAcuteManagement("");
          setDispo("");
          setConsiderations("");
          //redirect to homepage/main page
        } else {
          // You should always clearly inform the user when something goes wrong.
          // In this case, we're just doing an `alert()` for brevity, but you'd
          // generally want to show some kind of error state or notification
          // within your UI. If the problem is with the user's input, then use
          // the error states of your smaller components (like the `TextField`s).
          // If the problem is something we don't really control, such as network
          // issues or an unexpected exception on the server side, then use a
          // banner, modal, popup, or similar.

          alert(result.error);
          console.log(result);
        }
      })
      .catch((error: unknown) => {
        // Handle any errors that occur during the request
        console.error("An error occurred while creating emergency:", error);
      });
  };

  return (
    <AnotherPage>
      <form style={styles.page}>
        <div style={styles.container}>
          <p style={styles.header}>Global Search &gt; Medical &gt; Add an injury</p>
          <p style={styles.subtitle}>Injury details</p>
          <InputBlock label="Name of injury*" value={emergencyTitle} onChange={setEmergencyTitle} />

          <InputBlock
            label="Page Description"
            value={emergencySubtitle}
            onChange={setEmergencySubtitle}
          />

          <p style={styles.subheader}>Overview</p>

          <InputBlock label="Importance" value={importance} onChange={setImportance} />

          <InputBlock label="Risk factors" value={riskFactors} onChange={setRiskFactors} />

          <InputBlock
            label="Mechanism of Injury"
            value={mechanismOfInjury}
            onChange={setMechanismOfInjury}
          />

          <InputBlock label="Diagnosis" value={diagnosis} onChange={setDiagnosis} />

          <InputBlock label="Physical Exam" value={physicalExam} onChange={setPhysicalExam} />

          <p style={styles.subheader}>How to Treat</p>

          <InputBlock
            label="Acute Management"
            value={acuteManagement}
            onChange={setAcuteManagement}
          />

          <InputBlock label="Dispo" value={dispo} onChange={setDispo} />

          <InputBlock label="Considerations" value={considerations} onChange={setConsiderations} />
        </div>

        <div style={styles.buttonContainer}>
          <button style={styles.cancelButton}>Close</button>
          <button style={styles.publishButton} onClick={handlePublish}>
            Publish
          </button>
        </div>
      </form>
    </AnotherPage>
  );
};

export default EmergencyFlow;
