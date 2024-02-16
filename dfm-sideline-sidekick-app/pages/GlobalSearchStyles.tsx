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
    paddingHorizontal: 15,
  },
  cancelButton: {
    paddingLeft: 10,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
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
    borderRadius: 10,
    margin: 0,
    marginBottom: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: "#424242",
  },
  itemTitle: {
    padding: 10,
  },
  highlightedText: {
    color: "#00629B",
  },
});
export default styles;
