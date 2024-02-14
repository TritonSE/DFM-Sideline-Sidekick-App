import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { StyleSheet } from "react-native";
// import { NativeRouter, Routes, Route } from "react-router-native";

import ConditionsSection from "./ConditionsSection";
import HomeScreen from "./HomeScreen";

// In your App.tsx or where your navigation setup resides

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Conditions" component={ConditionsSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// export default function App() {
//   return (
//     // eslint-disable-next-line @typescript-eslint/no-use-before-define
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       {/* <ConditionsSection /> */}
//       <NativeRouter>
//         <Routes>
//           <Route exact path="/" element={<ConditionsSection />} />
//           <Route path="/emergencies/:emergencyObjectId" element={<ConditionsSection />} />
//         </Routes>
//       </NativeRouter>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
