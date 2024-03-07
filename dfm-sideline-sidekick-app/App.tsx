import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect } from "react";
import { Platform, StyleSheet } from "react-native";

import { BottomNavBar, NavItem } from "./components/bar";
import { checkConnection } from "./download/connection/checkConnection";
import { downloadJSON } from "./download/downloadFromAPI";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import TabPage from "./pages/TabPage";
import GeneralPrinciples from "./pages/generalPrinciples";
import EmergencyCare from "./pages/EmergencyCare";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Tab: undefined;
  GeneralPrinciples: undefined;
};

type StackNavigation = StackNavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const BottomNavBarComponent = () => {
  const navigation = useNavigation<StackNavigation>();

  const navigationItems: NavItem[] = [
    {
      id: 1,
      icon: "home",
      onClick: () => {
        navigation.navigate("Home");
      },
    },
    {
      id: 2,
      icon: "search",
      onClick: () => {
        navigation.navigate("Search");
      },
    },
    {
      id: 3,
      icon: "principles",
      onClick: () => {
        navigation.navigate("Tab");
      },
    },
  ];

  return <BottomNavBar items={navigationItems} />;
};

export default function App() {
  const deviceType = Platform.OS;

  // makes it so that it only checks the version once per app launch
  let attempted = false;

  // true when there's connection
  let connected = false;

  // checks on app open, connect change
  useEffect(() => {
    // stores if connected
    console.log("ATTEMPTED BEFORE:", attempted);

    async function matchConditions() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      connected = await checkConnection();
      // if also connected, attempt to redownload
      if (connected && !attempted) {
        await downloadJSON("data.json", deviceType);

        attempted = true; // latches
      }
    }

    void matchConditions();
  }, [connected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchPage} options={{ headerShown: false }} />
        <Stack.Screen name="Tab" component={TabPage} options={{ headerShown: false }} />

        <Stack.Screen name="GeneralPrinciples" component={GeneralPrinciples} options={{ headerShown: false }} />
      </Stack.Navigator>
      <BottomNavBarComponent />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
