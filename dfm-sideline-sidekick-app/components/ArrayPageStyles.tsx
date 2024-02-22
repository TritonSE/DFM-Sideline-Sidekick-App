import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
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
    paddingVertical: 8,
  },
  enumeration: {
    marginRight: 8,
    fontSize: 40,
    paddingRight: 10,
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
    marginVertical: 10,
    marginRight: 15,
    marginLeft: 35,
  },
});
export default styles;
