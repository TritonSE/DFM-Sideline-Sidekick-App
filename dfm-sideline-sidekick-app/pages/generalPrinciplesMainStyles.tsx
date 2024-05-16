import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen");

// Calculate border radius and padding based on device dimensions
//const borderRadius = (10.75 / 130) * Math.min(width, height);
// const padding = 0.025 * Math.min(width, height);
//
//iPad = 0.3
//phone=0.45

// Get the width of the device screen
// const screenWidth = Dimensions.get("window").width;

// // Calculate the number of columns based on the screen width
// const numColumns = Math.floor(screenWidth / 140); // Adjust the width of Pressable components

// // Calculate the width of each Pressable component
// const pressableWidth = screenWidth / numColumns;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingBottom: 0.42 * height, //Give user leeway for optimal scroll space
    // padding - We should not apply padding here as per Figma specification
  },
  subheader: {
    justifyContent: "center", // Center the text vertically
    // alignItems: "center", // Center the text horizontally
    paddingLeft: 17,
    paddingVertical: 10,
  },
  subheaderText: {
    color: "#182b49",
    fontFamily: "Roboto-Medium",
    fontSize: 20, //0.05 * minDimension,
    fontWeight: "600",
  },
  grid: {
    flexDirection: "column",
    // alignItems: "space-evenly",
    justifyContent: "space-between", // Adjust this as per your spacing requirements
  },
  row: {
    flexDirection: "row",
    // alignItems: "flex-start",
    justifyContent: "space-evenly", // Adjust this as per your spacing requirements
    marginBottom: (10 / 930.25) * height, // Add margin to separate rows
  },
  pressable: {
    backgroundColor: "#00629b",
    borderColor: "#00000033",
    borderRadius: 10,
    width: "43%", //uses Figma measurements to set a width
    height: 90, //aspect ratio applied to width to set a height
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)",

    // To add shadows for IOS devices
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    paddingRight: 20,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 5,
  },
  pressableText: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    textAlignVertical: "top",
    color: "#ffffff",
  },
  bottomMargin: {
    paddingBottom: 15,
  },
  whiteBack: {
    backgroundColor: "white",
  },
});

export default styles;
