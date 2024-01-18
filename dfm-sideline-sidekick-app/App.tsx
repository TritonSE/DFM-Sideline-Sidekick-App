import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GeneralPrinciples from "./generalPrinciples";

export default function App() {
  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <View style={styles.container}>
      <GeneralPrinciples/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
