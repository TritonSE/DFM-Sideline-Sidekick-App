import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");
const minDimension = Math.min(width, height);
let pressableRatio = 0;

// Calculate border radius and padding based on device dimensions
//const borderRadius = (10.75 / 130) * Math.min(width, height);
// const padding = 0.025 * Math.min(width, height);
//
//iPad = 0.3
//phone=0.45

//if (deviceWidth < deviceHeight): then ratio = 0.45
//if (deviceHeight < deviceWidth): then ratio = 0.3
const borderRadius = 0.035 * minDimension;

if (width > height) {
  pressableRatio = 0.3;
} else {
  pressableRatio = 0.5;
}

// Get the width of the device screen
// const screenWidth = Dimensions.get("window").width;

// // Calculate the number of columns based on the screen width
// const numColumns = Math.floor(screenWidth / 140); // Adjust the width of Pressable components

// // Calculate the width of each Pressable component
// const pressableWidth = screenWidth / numColumns;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingBottom: 0.42 * height, //Give user leeway for optimal scroll space
    // padding - We should not apply padding here as per Figma specification
  },
  subheader: {
    justifyContent: "center", // Center the text vertically
    // alignItems: "center", // Center the text horizontally
    paddingLeft: (16 / 390) * width,
    paddingVertical: (10 / 930.25) * height,
  },
  subheaderText: {
    color: "#182b49",
    fontFamily: "Roboto-Medium",
    fontSize: 18, //0.05 * minDimension,
    fontWeight: "500",
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
    borderRadius,
    width: (170 / 390.0) * width, //uses Figma measurements to set a width
    height: pressableRatio * (170 / 390.0) * width, //aspect ratio applied to width to set a height
  },
  pressableText: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    textAlignVertical: "top",
    color: "#ffffff",
    paddingHorizontal: (13.98 / (1 * 390)) * width, //Figma measurements for padding horizontal
    paddingVertical: (15.06 / (1 * 930.25)) * height, //Figma measurements for padding vertical
  },
});

export default styles;
