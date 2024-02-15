import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { StyleSheet } from "react-native";

import { BottomNavBar, NavItem } from "./components/bar";
import BookmarkPage from "./pages/BookmarkPage";
// eslint-disable-next-line import/no-named-as-default
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import TabPage from "./pages/TabPage";

type RootStackParamList = {
  Home: undefined;
  Bookmark: undefined;
  Search: undefined;
  Tab: undefined;
};

type StackNavigation = StackNavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const BottomNavBarComponent = () => {
  const navigation = useNavigation<StackNavigation>();

  const navigationItems: NavItem[] = [
    {
      id: 1,
      icon: "bookmark",
      onClick: () => {
        navigation.navigate("Bookmark");
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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Bookmark" component={BookmarkPage} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchPage} options={{ headerShown: false }} />
        <Stack.Screen name="Tab" component={TabPage} options={{ headerShown: false }} />
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
