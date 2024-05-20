import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 8,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 79,
    elevation: 10,

    shadowColor: "rgba(0, 0, 0, 0.5)",

    // To add shadows for IOS devices
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});

export default styles;
