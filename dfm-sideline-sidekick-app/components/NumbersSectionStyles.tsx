import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },
  numbersSection: {
    height: 50,
    position: "relative",
    width: 50,
  },
  numbersSectionElement: {
    color: "--dfm-navy",
    fontSize: 32,
    fontWeight: 400,
    left: 0,
    letterSpacing: 0.64,
    lineHeight: 48,
    position: "absolute",
    top: -1,
    whitespace: "nowrap",
    width: 40,
  },
  numbersSectionText: {
    fontSize: 32,
    fontWeight: "400",
    color: "rgba(24, 43, 73, 1)",
  },
});

export default styles;
