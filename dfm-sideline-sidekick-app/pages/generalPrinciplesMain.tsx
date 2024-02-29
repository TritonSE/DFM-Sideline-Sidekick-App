import { useEffect, useState } from "react";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import React from "react";
import * as Font from "expo-font";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./generalPrinciplesMainStyles";

const PressableComponent = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
  );

 const GeneralPrinciplesMain = () => {
    const [pressed, setPressed] = useState<boolean>(false);
//   const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": Roboto_400Regular,
        "Roboto-Bold": Roboto_700Bold,
    });

//   useEffect(() => {
//     async function loadFont() {
//       try {
//         await Font.loadAsync({
//           // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//           "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//           // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//           "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//         });
//         setIsFontsLoaded(true);
//       } catch (error) {
//         console.error("Error loading fonts:", error);
//       }
//     }

//     void loadFont();
//   }, []);

  function onPress() {
    setPressed(true);
  }

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView>
        <View>
            <Pressable style={styles.pressable}>
                <Text style={styles.pressableText}>Emergency Action Plan</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );

 };

 export default GeneralPrinciplesMain;
