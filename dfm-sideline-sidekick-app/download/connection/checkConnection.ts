/* eslint-disable @typescript-eslint/no-unsafe-return */
import NetInfo from "@react-native-community/netinfo";

export const checkConnection = async () => {
  let connected;

  await NetInfo.fetch().then((state) => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
    connected = state.isConnected;
  });

  return connected;
};
