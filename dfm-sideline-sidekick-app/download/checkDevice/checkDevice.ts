import * as Device from "expo-device";

// Returns true if device, false if emulator
export const checkDevice = () => {
  const isDevice = Device.isDevice;
  console.log("Currently on a physical device: ", isDevice);

  return isDevice;
};
