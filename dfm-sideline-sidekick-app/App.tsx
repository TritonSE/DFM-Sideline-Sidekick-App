import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { StyleSheet } from "react-native";

import AppInitializer from "./AppInitializer";
import { BottomNavBar, NavItem } from "./components/bar";
import ViewAll from "./components/viewAll";
import { DataProvider } from "./functions/DataContext";
import ConditionsSection from "./pages/ConditionsSection";
import HomePage from "./pages/HomePage";
import MainPrinciples from "./pages/MainPrinciples";
import SearchPage from "./pages/SearchPage";
// import TabPage from "./pages/TabPage";
import GeneralPrinciples from "./pages/generalPrinciples";
import GeneralPrinciplesMain from "./pages/generalPrinciplesMain";

type DocumentBase = {
  _id: string;
  title: string;
  subtitle?: string;
  overview?: object;
  treatment?: object;
  content?: object;
};

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  ViewAll: undefined;
  GPM: undefined;
  Tab: undefined;
  MedicalConditions: { emergency: DocumentBase };
  GeneralPrinciples: { contentProp: DocumentBase };
  EmergencyPrinciples: { generalPrinciple: DocumentBase };
  MainPrinciples: { generalPrinciple: DocumentBase };
};

type StackNavigation = StackNavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const BottomNavBarComponent = () => {
  const navigation = useNavigation<StackNavigation>();

  const navigationItems: NavItem[] = [
    {
      id: 1,
      routeName: "Home",
      icon: "home",
      onClick: () => {
        navigation.navigate("Home");
      },
    },
    {
      id: 2,
      routeName: "Search",
      icon: "search",
      onClick: () => {
        navigation.navigate("Search");
      },
    },
    {
      id: 3,
      routeName: "Principles",
      icon: "principles",
      onClick: () => {
        navigation.navigate("GPM");
      },
    },
  ];

  return <BottomNavBar items={navigationItems} />;
};

export default function App() {
  return (
    <DataProvider>
      <AppInitializer />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="ViewAll" component={ViewAll} options={{ headerShown: false }} />
          <Stack.Screen
            name="Search"
            component={SearchPage}
            options={{ headerShown: false, animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="GPM"
            component={GeneralPrinciplesMain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MedicalConditions"
            component={ConditionsSection}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GeneralPrinciples"
            component={GeneralPrinciples}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainPrinciples"
            component={MainPrinciples}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <BottomNavBarComponent />
        <StatusBar style="auto" />
      </NavigationContainer>
    </DataProvider>
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
