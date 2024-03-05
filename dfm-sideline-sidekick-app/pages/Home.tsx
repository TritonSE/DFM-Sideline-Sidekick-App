import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, StyleSheet, View } from "react-native";

import { RootStackParamList } from "./generalPrinciples";

const title = "Emergency Action Plan";

// const content =
//   {
//   title: 'General Principles',
//   content: {
//     '"If you see it, flee it; if you can hear it, clear it.” (National Lightning Safety Institute)': "",
//     "Assign roles": "Weather Monitor\n Chain of Command/Decision-maker"
//     }
//   }
//   ;

const content = [
  {
    title: "General Principles",
    content: {
      '"If you see it, flee it; if you can hear it, clear it.” (National Lightning Safety Institute)':
        "",
      "Assign roles": "Weather Monitor\n Chain of Command/Decision-maker",
    },
  },
  {
    title: "General Principles 2",
    content: {
      '"If you see it, flee it; if you can hear it, clear it.” (National Lightning Safety Institute)':
        "",
      "Assign roles": "Weather Monitor\n Chain of Command/Decision-maker",
    },
  },
];

const styles = StyleSheet.create({
  container2: {
    width: "100%",
  },
});

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    navigation.navigate("GeneralPrinciples", { titleProp: title, contentProp: content });
  };

  return (
    <View style={styles.container2}>
      <Button title="Go to General Principles" onPress={handleNavigation} />
    </View>
  );
}
