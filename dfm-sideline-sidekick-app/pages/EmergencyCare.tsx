import { Text, TouchableOpacity, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

import BulletPoint from "../components/BulletPoint";
import styles from "./generalPrinciplesStyles"

const EmergencyCare = () => {
  return (
    <View style={styles.container}>
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
