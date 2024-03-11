import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, StyleSheet, View, Platform } from "react-native";

import { RootStackParamList } from "../components/viewAll";

import React, { useState , useEffect } from "react";
import * as FileSystem from "expo-file-system";
import { downloadJSON } from "../download/downloadFromAPI";

// export type RootStackParamList = {
//     viewAll: { arrayProp: string; title: Content } | undefined;
//   };

const title = "Emergency Action Plan";

const styles = StyleSheet.create({
  container2: {
    width: "100%",
  },
});

// const temparray = [{"How To Treat": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "Overview": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "__v": 0, "_id": "65b1be139595a25c775c8353", "title": "Cervical Strain"}, {"How To Treat": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "Overview": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "__v": 0, "_id": "65b1be1c5e979611161aa446", "title": "Cervical Dystonia"}, {"How To Treat": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "Overview": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "__v": 0, "_id": "65b1be25a26940b07230d04b", "title": "Cervical Dysplasia"}, {"How To Treat": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "Overview": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "__v": 0, "_id": "65b1be2bcf978bb8631dac90", "title": "Cervical"}, {"__v": 0, "_id": "65b2021b2c6d799e370663f8", "content": "Additional content for the new emergency", "overview": "Overview of the new emergency", "title": "New Emergency", "treatment": "Treatment for the new emergency"}, {"__v": 0, "_id": "65b369a8e8fe96a404d4fd6b", "content": "Additional content for the new emergency", "overview": "Overview of the new emergency", "title": "To Be Deleted Emergency", "treatment": "Treatment for the new emergency"}, {"__v": 0, "_id": "65b36d110c9c60394b37f7a1", "overview": {"Diagnosis": [Array], "Importance": "The cervical spine is not stabilized or protected by ribs or other surrounding structures, so fractures are more common and can be unstable. This creates risk for potential damage to the spinal cord resulting in quadriplegia and death and could be made worse by moving patients without proper immobilization", "Mechanism of Injury": [Array], "Physical Exam": [Array]}, "title": "Cervical Spine Injury", "treatment": {"Acute Management": [Array], "Considerations": [Object], "Dispo": [Array]}}, {"__v": 0, "_id": "65b36f12640d62464e0dd129", "overview": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "title": "Cervical Strain", "treatment": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}}, {"__v": 0, "_id": "65b9cd3eaf25a994dd6072fb", "title": "New Emergency Placeholder Two"}, {"__v": 0, "_id": "65c2ede2a86385e517385785", "title": "New Emergency Placeholder Three"}, {"__v": 0, "_id": "65c2ef26b87b638ac61beb09", "title": "New Emergency Placeholder Four"}, {"__v": 0, "_id": "65d78c96a8ab3d54a6f067f5", "overview": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "title": "Test with a lot of bullet points", "treatment": {"Acute Management": [Array], "Dispo": [Array]}}]
const temparray = [{"How To Treat": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "Overview": {"Placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}, "__v": 0, "_id": "65b1be139595a25c775c8353", "title": "Cervical Strain"}]

const fetch = () => {
    const [jsonOutput, setJsonOutput] = useState<any | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const deviceType = Platform.OS;
          const result = await downloadJSON("data.json", deviceType);
          setJsonOutput(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

    return jsonOutput;
}

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const data = fetch();

  const handleNavigation = () => {
    navigation.navigate("ViewAll", { arrayProp: data.emergencies, title: title }); //change this to data.emergencies wafter fixing fetching
  };

  return (
    <View style={styles.container2}>
      <Button title="Go to View All" onPress={handleNavigation} />
    </View>
  );
}
