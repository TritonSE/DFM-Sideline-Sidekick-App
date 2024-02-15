import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    textAlign: "left",
    alignSelf: "stretch",
    paddingLeft: 25,
  },
  title: {
    color: "#182B49",
    fontSize: 28,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "left",
    paddingTop: 10,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: "500",
    paddingBottom: 10,
  },
  listItemSubtitle: {
    fontSize: 13,
    color: "grey",
  },
  divider: {
    height: 1,
    backgroundColor: "lightgrey",
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export default styles;
