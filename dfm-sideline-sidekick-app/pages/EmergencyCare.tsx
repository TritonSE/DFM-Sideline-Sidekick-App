import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { Bookmark } from "../components/bookmark";

import BulletPoint from "../components/BulletPoint";

import styles from "./generalPrinciplesStyles";

const EmergencyCare = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Bold": Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.topRightContainer}>
        <Bookmark PageName="Emergency Page" />
      </View>
      <TouchableOpacity>
        <AntIcon name="close" style={styles.button} />
      </TouchableOpacity>
      <Text style={styles.title}>Emergency Care</Text>
      <Text style={styles.subTitle}>Emergency Care</Text>
      <BulletPoint letter="A" text="Activate EMS" subpoints={[]} />
      <BulletPoint letter="B" text="Move to Safe Location" subpoints={[]} />
      <BulletPoint letter="C" text="CPR and AED use are safe!" subpoints={[]} />
    </View>
  );
};

export default EmergencyCare;
