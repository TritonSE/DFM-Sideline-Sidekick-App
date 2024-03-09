import { StyleSheet } from "react-native";

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
  topRightContainer: {
    position: 'absolute',
    top: 80,
    right: 0,
    padding: 10,
    zIndex: 1,
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
