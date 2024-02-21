import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";

import { getEmergency } from "./emergencies";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [emergency, setEmergency] = useState(null);

  useEffect(() => {
    async function fetchEmergency() {
      try {
        //It seems to work on Android and iPad
        //Test Case: Cervical Spine Injury - demonstrate recursive rendering
        const emergencyObjectId = "65b36d110c9c60394b37f7a1";
        //Separate Test Case here: To Be Deleted Emergency - demonstrates textual rendering
        //const emergencyObjectId = "65b369a8e8fe96a404d4fd6b";
        //Test Case: New Emergency Placeholder Four - demonstrates blank rendering (only title in db)
        //const emergencyObjectId = "65c2ef26b87b638ac61beb09";
        //Test Case: Cervical Strain - demonstrates simple placeholder headers
        //const emergencyObjectId = "65b36f12640d62464e0dd129";
        const result = await getEmergency(emergencyObjectId);
        if (result.success) {
          setEmergency(result.data);
        } else {
          console.error("Error fetching emergency data:", result.error);
        }
      } catch (error) {
        console.error("Error fetching emergency data:", error);
      }
    }

    void fetchEmergency();
  }, []);

  const handlePress = () => {
    if (emergency !== null) {
      navigation.navigate("Conditions", { emergency });
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <Text>Navigate to ConditionsSection</Text>
    </Pressable>
  );
}
