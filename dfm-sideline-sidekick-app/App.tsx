import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

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
  );
}