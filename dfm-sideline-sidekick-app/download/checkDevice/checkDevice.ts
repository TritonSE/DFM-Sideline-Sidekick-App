import * as Device from "expo-device";

// Returns true if device, false if emulator
export const checkDevice = () => {
  const isDevice : boolean = Device.isDevice;
  console.log("CURRENTLY ON A PHYSICAL DEVICE: ", isDevice);

  return isDevice;
};
