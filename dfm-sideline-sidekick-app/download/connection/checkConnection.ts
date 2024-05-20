/* eslint-disable @typescript-eslint/no-unsafe-return */
import NetInfo from "@react-native-community/netinfo";

export const checkConnection = async () => {
  let connected;

  await NetInfo.fetch().then((state) => {
    connected = state.isConnected;
  });

  return connected;
};
