import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17.5,
    paddingTop: 50,
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
    width: "45%",
    height: 90,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
export default styles;
