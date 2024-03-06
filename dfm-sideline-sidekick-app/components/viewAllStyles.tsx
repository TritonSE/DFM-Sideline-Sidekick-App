import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },
  containerCard: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
    paddingBottom: 10,
    paddingTop: 30,
  },
  card: {
    backgroundColor: 'white', 
    borderRadius: 15, 
    padding: 16, 
    shadowColor: 'black', 
    shadowOffset: { 
        width: 0, 
        height: 4, 
    }, 
    shadowOpacity: 0.3, 
    shadowRadius: 6, 
    elevation: 14, 
    width: 350, 
    height: 100, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  cardTitle: {

  },
  cardDescription: {

  },
});

export default styles;