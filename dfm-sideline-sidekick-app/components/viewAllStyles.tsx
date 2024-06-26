import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    textAlign: "left",
    alignSelf: "stretch",
  },
  title: {
    color: "#182B49",
    fontSize: 28,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "left",
    paddingTop: 10,
    paddingLeft: 12,
  },
  containerCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 10,
    paddingTop: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: 350,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCard2: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 15,
    // padding: 16,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 14,
    width: 350,
    height: 105,
    justifyContent: "center",
    alignItems: "center",
  },
  grayArea: {
    width: "35%",
    height: "100%",
    backgroundColor: "#E5EFF5",
    padding: 10,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  textArea: {
    width: "65%",
    padding: 10,
  },
  textTitle: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 5,
    textAlign: "center",
  },
  text: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 13,
  },
  lenItems: {
    color: "#182B49",
    fontWeight: "bold",
    paddingLeft: 12,
    paddingBottom: 15,
  },
  backButtonContainer: {
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 12,
  },
  backButton: {
    fontSize: 20,
  },
  headerShadowContainer: {
    overflow: "hidden",
    paddingBottom: 5,
  },
  headerShadow: {
    // shadowOffset: { width: 1, height: 3 },
    // shadowOpacity:  0.28,
    // shadowRadius: 2,
    // elevation: 5,

    backgroundColor: "white",
    // flexDirection: 'row',
    // borderRadius: 15,
    // padding: 16,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 14,
  },
  scroll: {
    paddingTop: 20,
  },
  bottomPad: {
    paddingBottom: 140,
  },
});

export default styles;
