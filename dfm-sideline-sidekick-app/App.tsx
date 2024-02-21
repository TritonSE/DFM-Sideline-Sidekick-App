import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GeneralPrinciples from "./pages/generalPrinciples";

// const content = 
//   {
//   title: 'Risk Warning',
//   content: [
//     {
//       text: "Thunder = risk (lightning within 8-10 mile radius)",
//     },
//     { text: "Can occur w/o clouds or rain" },
//     { text: "Avoid landlines (cellphone is safe)" },
//   ],
//   }
// ;

const content = 
  {
  title: 'General Principles',
  content: {
    '"If you see it, flee it; if you can hear it, clear it.” (National Lightning Safety Institute)': "",
    "Assign roles": "Weather Monitor\n Chain of Command/Decision-maker"
    }
  }
;

export default function App() {
  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <GeneralPrinciples titleProp="Emergency Action Plan" contentProp={content}/>
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