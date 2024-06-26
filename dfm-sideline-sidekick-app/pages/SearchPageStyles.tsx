import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const minDimension = Math.min(width, height);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05, // 5% of screen width/height
    paddingTop: height * 0.06927, // ~7% of screen width/height
    backgroundColor: "#FFFFFF",
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: height * 0.015, // 1.5% of screen width/height
    //paddingHorizontal: width * 0.005, // 4% of screen width/height
  },
  cancelButton: {
    paddingLeft: width * 0.02, // 2% of screen width/height
    marginBottom: height * 0.008, // 0.8% of screen width/height
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },
  listItemTextContainer: {
    flex: 1,
    //marginRight: 30,
  },
  listItemTitle: {
    fontSize: 18, //minDimension * 0.06, // 6% of screen width/height
    fontWeight: "500",
    paddingBottom: height * 0.012, // 1.2% of screen width/height
  },
  recentItemTitle: {
    color: "#484848",
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  listItemSubtitle: {
    fontSize: 13, //minDimension * 0.035, // 3.5% of screen width/height
    color: "grey",
  },
  subtitle: {
    color: "#182B49",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    fontWeight: "600",
    paddingTop: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "lightgrey",
    //marginHorizontal: width * 0.04, // 4% of screen width/height
    marginVertical: height * 0.01, // 1% of screen width/height
  },
  title: {
    color: "#182B49",
    fontSize: 28, //minDimension * 0.1, // 10% of screen width/height
    fontWeight: "700",
    marginBottom: height * 0.02, // 2% of screen width/height
    textAlign: "left",
    paddingTop: height * 0.007, // 0.7% of screen width/height
    fontFamily: "Roboto-Bold",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchSection: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: minDimension * 0.02, // 2% of screen width
    margin: 0,
    marginBottom: height * 0.01, // 1% of screen height
  },
  searchIcon: {
    padding: minDimension * 0.02, // 2% of screen width
  },
  input: {
    flex: 1,
    paddingVertical: height * 0.01, // 1% of screen height
    color: "#424242",
  },
  itemTitle: {
    padding: minDimension * 0.02, // 2% of screen height/width
  },
  highlightedText: {
    color: "#00629B",
  },
  list: {
    height: "100%",
  },
  resultList: {
    ...Platform.select({
      ios: {
        marginBottom: 185,
      },
      android: {
        marginBottom: 210,
      },
      default: {
        marginBottom: 210,
      },
    }),
  },
});

export default styles;
