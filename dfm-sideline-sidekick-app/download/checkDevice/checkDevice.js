/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as Device from "expo-device";

// Returns true if device, false if emulator
export const checkDevice = () => {
  const isDevice = Device.isDevice;
  console.log("Currently on a physical device: ", isDevice);

  return isDevice;
};
