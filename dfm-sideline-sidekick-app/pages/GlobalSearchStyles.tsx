import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17.5,
    paddingTop: 50,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 2,
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
  title: {
    color: "#182B49",
    fontSize: 28,
    fontFamily: "Roboto",
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "left",
    paddingTop: 10,
  },
  itemTitle: {
    padding: 10,
  },
  highlightedText: {
    color: "#00629B",
  },
  resultList: {
    paddingBottom: 350,
  },
});
export default styles;
