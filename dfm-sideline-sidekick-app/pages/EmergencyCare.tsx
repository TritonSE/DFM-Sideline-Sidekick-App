import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

import BulletPoint from "../components/BulletPoint";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    textAlign: "left",
    alignSelf: "stretch",
    paddingLeft: 25,
  },
  title: {
    color: "#182B49",
    fontSize: 28,
    fontFamily: "Roboto",
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "left",
    paddingTop: 10,
  },
  subTitle: {
    color: "#182B49",
    fontSize: 21,
    fontFamily: "Roboto",
    fontWeight: "700",
    marginBottom: 5,
    textAlign: "left",
  },
  button: {
    fontSize: 25,
  },
});

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
