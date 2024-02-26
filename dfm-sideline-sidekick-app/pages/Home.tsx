import { Button, StyleSheet, View } from "react-native";

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

export default function Home({ navigation }) {
  return (
    <View style={styles.container2}>
      <Button
        title="Go to General Principles"
        onPress={() =>
          navigation.navigate("GeneralPrinciples", { titleProp: title, contentProp: content })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    width: "100%",
  },
});