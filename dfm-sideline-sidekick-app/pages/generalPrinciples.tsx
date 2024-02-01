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

const GeneralPrinciples = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntIcon name="close" style={styles.button} />
      </TouchableOpacity>
      <Text style={styles.title}>General Principles</Text>
      <Text style={styles.subTitle}>General Principles</Text>
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
