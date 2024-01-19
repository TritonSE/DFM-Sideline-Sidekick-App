import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function ConditionsSection() {
  const [isOverviewPressed, setIsOverviewPressed] = useState<boolean>(true);
  const [isTreatmentPressed, setIsTreatmentPressed] = useState<boolean>(false);


  function onOverviewPress() {
    if (!isOverviewPressed) {
      setIsOverviewPressed(!isOverviewPressed);
      setIsTreatmentPressed(false);
    }
  }
  
  function onTreatmentPress() { 
    if (!isTreatmentPressed) {
      setIsTreatmentPressed(!isTreatmentPressed);
      setIsOverviewPressed(false);
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/ic_caretleft.png")} />
      <View style={styles.margin}>
        <Text style={styles.subtitle}>Medical Emergency</Text>
        <Text style={styles.condition}>Cervical Spine Injury</Text>
      </View>
      <View style={styles.menu}>
        <Pressable style={ isOverviewPressed ? styles.menuButtonSelected : styles.menuButton } onPress={onOverviewPress}>
          <Text style={ isOverviewPressed ? styles.menuTextSelected : styles.menuText }
          >Overview
          </Text>
        </Pressable>
        <Pressable style={ isTreatmentPressed ? styles.menuButtonSelected : styles.menuButton } onPress={onTreatmentPress}>
          <Text style={ isTreatmentPressed ? styles.menuTextSelected : styles.menuText }>
            How To Treat
          </Text>
        </Pressable>
      </View>
      <View style={styles.information}>
        <View style={isOverviewPressed ? styles.overview : styles.overviewHidden}>

          <View style={styles.infoSection}>
            <Text style={styles.descriptionTitle}>
              Importance
            </Text>
            <Text style={styles.descriptionInfo}>
              The cervical spine is not stabilized or protected by ribs or other surrounding structures, so fractures are more common and can be unstable. This creates risk for potential damage to the spinal cord resulting in quadriplegia and death and could be made worse by moving patients without proper immobilization
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.descriptionTitle}>
              Mechanism of Injury
            </Text>
            <Text style={styles.descriptionInfo}>
              {"  ·  Direct blow to head/neck\n  ·  Axial loading to spine, esp. w/neck in flexion"}
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.descriptionTitle}>
              Diagnosis
            </Text>
            <Text style={styles.descriptionInfo}>
              {"  ·  Local pain\n  ·  Ecchymosis, and swelling"}
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.descriptionTitle}>
              Physical Exam
            </Text>
            <Text style={styles.descriptionInfo}>
              {"  ·  TTP over spinous process or vertebral bodies"}
            </Text>
          </View>

        </View>
        <View style={isTreatmentPressed ? styles.howToTreat : styles.howToTreatHidden}>

          <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>
                Acute Management
              </Text>
              <Text style={styles.descriptionInfo}>
              {"  ·  Immobilize with spine board, cervical-collar, and barriers to lateral head movement (or whole body vacuum splint)  \n  ·  If this is not available, immobilize by placing hands on patient shoulders and using forearms to immobilize head"}
              </Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>
                Dispo
              </Text>
              <Text style={styles.descriptionInfo}>
                {"  ·  Emergency transport to ED for CT (most accurate) +/- XR"}
              </Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>
                Considerations
              </Text>
              <Text style={styles.descriptionInfo}>
                {"If any suspicion for injury, send to ED. However, less likely if the following criteria are met:\n  ·  No cervical spine tenderness\n  ·  Normal alertness/consciousness/GCS 15\n  ·  No major distracting injuries\n  ·  Normal neurologic status (full strength/sensation in all extremities)\n  ·  Ability to actively rotate neck to 45 degrees laterally in both directions\n"}
              </Text>
            </View>

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0, //inquire about changing flex
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop:77
  },
  margin: {
    marginLeft: 16,
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 45,
  },
  menuText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#000000",
    textAlign: "left",
    marginLeft: 16,
  },
  menuButton: {
    borderBottomWidth: 3,
    borderColor: "#D5D5D5",
    width: "50%",
  },
  menuButtonSelected: {
    borderBottomWidth: 3,
    borderColor: "#000000",
    width: "50%",
  },
  menuTextSelected: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#000000",
    textAlign: "left",
    marginLeft: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: "#00629B",
  },
  condition: {
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: "bold",
    color: "#182B49",
  },
  image: {
    width:24,
    height:24,
    marginLeft:16,
    marginBottom:43,
    
  },
  information: {
    marginLeft:16,
    marginTop:38,
    marginRight:16,
  },
  overview: {
  },
  howToTreat: {

  },
  overviewHidden: {
    display:'none'
  },
  howToTreatHidden: {
    display:'none'
  },
  descriptionTitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
  },
  descriptionInfo: {
    marginTop: 5,
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#000000",
  },
  infoSection: {
    marginTop:15
  }
});
