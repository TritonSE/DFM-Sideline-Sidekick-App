import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const minDimension = Math.min(width, height);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05, // 5% of screen width/height
    paddingTop: height * 0.06927, // ~7% of screen width/height
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
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "500",
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
    fontFamily: "Roboto-Regular",
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
  resultList: {
    paddingBottom: 350,
  },
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff",
  //     alignItems: "flex-start",
  //     justifyContent: "center",
  //     ...Platform.select({
  //       ios: {
  //         paddingTop: 80,
  //       },
  //       android: {
  //         paddingTop: 40,
  //       },
  //       default: {
  //         paddingTop: 50,
  //       },
  //     }),
  //   },
  margin: {
    marginLeft: 16,
    marginTop: 20,
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 16,
  },
  topRightContainer: {
    position: "absolute",
    top: 80,
    right: 0,
    padding: 10,
    zIndex: 1,
  },
  menuText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#000000",
    textAlign: "left",
    marginLeft: 16,
  },
  menuButton: {
    borderBottomWidth: 3,
    borderColor: "#D5D5D5",
    width: "50%",
  },
  menuButtonSelected: {
    borderBottomWidth: 3,
    borderColor: "#000000",
    width: "50%",
  },
  menuTextSelected: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: "#000000",
    textAlign: "left",
    marginLeft: 16,
  },
  //   subtitle: {
  //     fontFamily: "Roboto-Bold",
  //     fontSize: 18,
  //     color: "#00629B",
  //     marginLeft: 2,
  //   },
  //   title: {
  //     fontFamily: "Roboto-Bold",
  //     fontSize: 32,
  //     color: "#182B49",
  //     marginLeft: 2,
  //   },
  subtitle2: {
    fontFamily: "Roboto-Bold",
    fontSize: 28,
    color: "#182B49",
    marginLeft: 2,
  },
  image: {
    width: 24,
    height: 24,
    marginLeft: 16,
    marginBottom: 22,
  },
  information: {
    marginLeft: 16,
    marginTop: 0,
    marginRight: 16,
  },
  overview: {},
  howToTreat: {},
  overviewHidden: {
    display: "none",
  },
  howToTreatHidden: {
    display: "none",
  },
  descriptionTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    color: "#000000",
  },
  descriptionInfo: {
    marginTop: 5,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#000000",
  },
  infoSection: {
    marginTop: 15,
  },
  list: {
    paddingLeft: 10,
    marginRight: 50,
    marginTop: 5,
  },
  listItem: {
    flexDirection: "row",
  },
  bullet: {
    marginRight: 5,
    fontSize: 18,
    color: "#000000",
  },
  itemText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#000000",
  },
});

export default styles;
