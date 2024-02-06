import { StyleSheet } from "react-native";
import * as Font from 'expo-font';

let customFonts = {
  'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf')
};

Font.loadAsync(customFonts);

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
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "left",
    paddingTop: 10,
  },
  subTitle: {
    color: "#182B49",
    fontSize: 21,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    marginBottom: 5,
    textAlign: "left",
  },
  button: {
    fontSize: 25,
  },
});

export default styles;