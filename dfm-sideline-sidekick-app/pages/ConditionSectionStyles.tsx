import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        paddingTop: 80,
      },
      android: {
        paddingTop: 40,
      },
      default: {
        paddingTop: 50,
      },
    }),
  },
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
  subtitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    color: "#00629B",
    marginLeft: 2,
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 32,
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
