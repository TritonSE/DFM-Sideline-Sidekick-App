import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },
  circle: {
    width: 24, // this should be a "props"-value in future
    height: 24, // this should be a "props"-value in future
    borderRadius: 24 / 2,
    backgroundColor: "#00629B",
    alignItems: "center",
    justifyContent: "center",
  },

  circleCaption: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
  mainText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    paddingLeft: 7,
    paddingRight: 27,
  },
  subpoints: {
    paddingTop: 5,
    paddingLeft: 38,
    paddingRight: 25,
    fontFamily: "Roboto-Regular",
  },
  point: {
    fontSize: 15,
    fontFamily: "Roboto-Regular",
  },
});

export default styles;
