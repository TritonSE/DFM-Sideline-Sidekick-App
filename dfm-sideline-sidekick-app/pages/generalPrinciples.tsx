import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

import BulletPoint from "../components/BulletPoint";

import styles from "./generalPrinciplesStyles";

const GeneralPrinciples = (title, content) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Bold": Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntIcon name="close" style={styles.button} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{content.title}</Text>
      <BulletPoint
        letter="A"
        text="Risk Warning"
        subpoints={[
          {
            text: "Thunder = risk (lightning within 8-10 mile radius)",
          },
          { text: "Can occur w/o clouds or rain" },
          { text: "Avoid landlines (cellphone is safe)" },
        ]}
      />
      <BulletPoint
        letter="B"
        text="Resuming Activity"
        subpoints={[
          {
            text: "30 min after last sound of thunder or sight of lightning",
            subpoints: [
              {
                text: "“Half an hour since thunder roars, now it’s safe to go outdoors”",
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default GeneralPrinciples;