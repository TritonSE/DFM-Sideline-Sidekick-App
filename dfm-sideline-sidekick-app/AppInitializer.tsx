/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect } from "react";
import { Platform } from "react-native";

import { downloadJSON } from "./download/downloadFromAPI";
import { useData } from "./functions/DataContext";

function AppInitializer() {
  const { updateJsonData } = useData();

  const deviceType = Platform.OS;

  // makes it so that it only checks the version once per app launch

  // true when there's connection

  // checks on app open, connect change
  useEffect(() => {
    async function matchConditions() {
      // if also connected, attempt to redownload
      let jsonData = await downloadJSON("data.json", deviceType, false);
      updateJsonData(jsonData);

      jsonData = await downloadJSON("data.json", deviceType, true);
      updateJsonData(jsonData);
    }

    void matchConditions();
  }, []);
  return null;
}

export default AppInitializer;
