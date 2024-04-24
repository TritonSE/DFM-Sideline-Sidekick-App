import { useEffect } from "react";
import { Platform } from "react-native";

import { useData } from "./DataContext";
import { downloadJSON } from "./download/downloadFromAPI";

function AppInitializer() {
  const { updateJsonData } = useData();

  const deviceType = Platform.OS;

  // makes it so that it only checks the version once per app launch
  let attempted = false;

  // true when there's connection

  // checks on app open, connect change
  useEffect(() => {
    // stores if connected
    console.log("ATTEMPTED BEFORE:", attempted);

    async function matchConditions() {
      // if also connected, attempt to redownload
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const jsonData = await downloadJSON("data.json", deviceType);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      updateJsonData(jsonData);

      attempted = true; // latches
    }

    void matchConditions();
  }, []);
  return null;
}

export default AppInitializer;
