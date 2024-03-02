import React, { ReactNode, createContext, useContext, useState } from "react";

type DataContextType = {
  jsonData: any;
  updateJsonData: (data: any) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jsonData, setJsonData] = useState<any>(null);

  const updateJsonData = (data: any) => {
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
