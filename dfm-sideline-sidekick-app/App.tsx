import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {NavItem, BottomNavBar} from './components/bar'

export default function App() {
  const navigationItems: NavItem[] = [
    { id: 1, icon: 'bookmark', onClick: () => console.log('Home pressed') },
    { id: 2, icon: 'search', onClick: () => console.log('Search pressed') },
    { id: 3, icon: 'principles', onClick: () => console.log('Rectangle pressed') },
  ];

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
      <StatusBar style="auto" />
      <BottomNavBar items={navigationItems} />
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
