// eslint-disable-next-line import/namespace
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",

    height: 155,
    width: "100%",

    marginTop: 10,
    marginBottom: 5,

    justifyContent: "center",
    alignContent: "center",
  },
  viewPager: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  page: {
    ...Platform.select({
      ios: {
        marginLeft: 50,
        marginRight: 50,
      },
      android: {
        marginLeft: 25,
        marginRight: 25,
      },
      default: {
        marginLeft: 65,
      },
    }),

    padding: 15,

    borderRadius: 10,
    width: 200,
    height: 125,

    justifyContent: "center",
    alignContent: "center",

    FontFamily: "Roboto",
    color: "#000000",

    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)",

    // To add shadows for IOS devices
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
  },
  progress: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  dotActive: {
    borderRadius: 50,
    width: 9,
    height: 9,

    marginLeft: 2.5,
    marginRight: 2.5,

    backgroundColor: "#00629B",
  },
  dot: {
    borderRadius: 50,
    width: 9,
    height: 9,

    marginLeft: 2.5,
    marginRight: 2.5,

    backgroundColor: "#D9D9D9",
  },
});

export default styles;
