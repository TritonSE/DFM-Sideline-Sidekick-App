import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

import styles from "./ConditionSectionStyles";

export default function ConditionsSection() {
  const [isOverviewPressed, setIsOverviewPressed] = useState<boolean>(true);
  const [isTreatmentPressed, setIsTreatmentPressed] = useState<boolean>(false);
  const [isFontsLoaded, setIsFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        });
        setIsFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    }
  
    void loadFont();
  }, []);

  type BulletListProps = {
    items: string[];
  }

  const BulletList = ({ items }: BulletListProps) => (
    <View style={styles.list}>
      {items.map((item: string, index: number) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.bullet}>{"\u2022"}</Text>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );

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

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image style={styles.image} source={require("./assets/ic_caretleft.png")} />
        <View style={styles.margin}>
          <Text style={styles.subtitle}>Medical Emergency</Text>
          <Text style={styles.title}>Cervical Spine Injury</Text>
        </View>

        <View style={styles.menu}>
          <Pressable
            style={isOverviewPressed ? styles.menuButtonSelected : styles.menuButton}
            onPress={onOverviewPress}
          >
            <Text style={isOverviewPressed ? styles.menuTextSelected : styles.menuText}>
              Overview
            </Text>
          </Pressable>
          <Pressable
            style={isTreatmentPressed ? styles.menuButtonSelected : styles.menuButton}
            onPress={onTreatmentPress}
          >
            <Text style={isTreatmentPressed ? styles.menuTextSelected : styles.menuText}>
              How To Treat
            </Text>
          </Pressable>
        </View>

        <View style={styles.information}>
          <View style={isOverviewPressed ? styles.overview : styles.overviewHidden}>
            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Importance</Text>
              <Text style={styles.descriptionInfo}>
                The cervical spine is not stabilized or protected by ribs or other surrounding
                structures, so fractures are more common and can be unstable. This creates risk for
                potential damage to the spinal cord resulting in quadriplegia and death and could be
                made worse by moving patients without proper immobilization
              </Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Mechanism of Injury</Text>
              <BulletList
                items={[
                  "Direct blow to head/neck",
                  "Axial loading to spine, esp. w/neck in flexion",
                ]}
              />
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Diagnosis</Text>
              <BulletList items={["Local pain", "Ecchymosis, and swelling"]} />
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Physical Exam</Text>
              <BulletList items={["TTP over spinous process or vertebral bodies"]} />
            </View>
          </View>

          <View style={isTreatmentPressed ? styles.howToTreat : styles.howToTreatHidden}>
            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Acute Management</Text>
              <BulletList
                items={[
                  "Immobilize with spine board, cervical-collar, and barriers to lateral head movement (or whole body vacuum splint)",
                  "If this is not available, immobilize by placing hands on patient shoulders and using forearms to immobilize head",
                ]}
              />
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Dispo</Text>
              <BulletList items={["Emergency transport to ED for CT (most accurate) +/- XR"]} />
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.descriptionTitle}>Considerations</Text>
              <Text style={styles.descriptionInfo}>
                If any suspicion for injury, send to ED. However, less likely if the following
                criteria are met:
              </Text>
              <BulletList
                items={[
                  "No cervical spine tenderness",
                  "Normal alertness/consciousness/GCS 15",
                  "No major distracting injuries",
                  "Normal neurologic status (full strength/sensation in all extremities)",
                  "Ability to actively rotate neck to 45 degrees laterally in both directions",
                ]}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}