import React, { ReactNode, createContext, useContext, useState } from "react";

type MedicalEmergency = {
  title: string;
  overview: object;
  treatment: object;
  content: object;
};

type GeneralPrinciple = {
  title: string;
  overview: object;
  content: object;
};

type JsonDataStructure = {
  emergencies?: MedicalEmergency[]; // Optional array of MedicalEmergency
  generalPrinciples?: GeneralPrinciple[]; // Optional array of GeneralPrinciple
};

type DataContextType = {
  jsonData: JsonDataStructure | null;
  updateJsonData: (data: JsonDataStructure) => void;
};
const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jsonData, setJsonData] = useState<JsonDataStructure | null>(null);

  const updateJsonData = (data: JsonDataStructure) => {
    setJsonData(data);
  };

  return (
    <DataContext.Provider value={{ jsonData, updateJsonData }}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
