import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import ArrayPage from "./components/ArrayPage";
import Home from "./pages/Home";
import GeneralPrinciples from "./pages/generalPrinciples";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GeneralPrinciples" component={GeneralPrinciples} />

        <Stack.Screen name="ArrayPage" component={ArrayPage} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}

    //   {/* <GeneralPrinciples titleProp="Emergency Action Plan" contentProp={content}/> */}
    //   <StatusBar style="auto" />
    // </View>
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
