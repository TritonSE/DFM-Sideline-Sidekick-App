import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 80,
        marginBottom: 150,
      },
      android: {
        marginTop: 40,
        marginBottom: 110,
      },
      default: {
        marginTop: 50,
        marginBottom: 120,
      },
    }),
  },
  title: {
    color: "#182B49",
    fontSize: 32,
    fontFamily: "Roboto-Bold",
    marginBottom: 20,
    textAlign: "left",
    paddingTop: 10,
  },
  subtitle: {
    color: "#182B49",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    fontWeight: "600",
    textAlign: "left",
    maxWidth: "70%",
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
  cancelButton: {
    paddingLeft: 10,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },
  categories: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    width: "100%",
  },
  categoryButton: {
    backgroundColor: "#00629B",
    marginVertical: 10,
    paddingRight: 20,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 5,
    borderRadius: 10,
    width: "43%",
    height: 90,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  searchText: {
    color: "#CCCCCC",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAll: {
    marginRight: 10,
  },
  viewAllRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  horizontalPadding: {
    paddingHorizontal: 17,
  },
  topPadding: {
    paddingTop: 10,
  },
});
export default styles;
