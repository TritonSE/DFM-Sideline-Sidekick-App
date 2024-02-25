/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as Device from "expo-device";

// Returns true if device, false if emulator
export const checkDevice = () => {
  const isDevice : boolean = Device.isDevice;
  console.log("CURRENTLY ON A PHYSICAL DEVICE: ", isDevice);

  return isDevice;
};
