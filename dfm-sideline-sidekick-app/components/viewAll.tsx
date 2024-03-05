import React, { useState , useEffect } from "react";
import { Text, View, Platform } from "react-native";
import * as FileSystem from "expo-file-system";
import { downloadJSON } from "../download/downloadFromAPI";

import styles from "./viewAllStyles";

const ViewAll: React.FC<any> = () => {
    const [jsonOutput, setJsonOutput] = useState<any | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const deviceType = Platform.OS;
          const result = await downloadJSON("data.json", deviceType);
          setJsonOutput(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

    console.log("LOLOLOLOLOLOL");
    console.log(jsonOutput.emergencies[0], jsonOutput.emergencies[1]);
    
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  };
  
  export default ViewAll;