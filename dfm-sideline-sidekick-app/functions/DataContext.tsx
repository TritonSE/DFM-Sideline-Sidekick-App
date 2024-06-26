import React, { ReactNode, createContext, useContext, useState } from "react";

export type MedicalEmergency = {
  title: string;
  overview: object;
  treatment: object;
  subtitle;
};

export type GeneralPrinciple = {
  title: string;
  content: object;
  subtitle: string;
};

export type Category = {
  title: string;
  items: string[];
  type: string;
};

type JsonDataStructure = {
  emergencies?: MedicalEmergency[]; // Optional array of MedicalEmergency
  generalPrinciples?: GeneralPrinciple[]; // Optional array of GeneralPrinciple
  categories?: Category[];
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
