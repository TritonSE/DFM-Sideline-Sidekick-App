import { CSSProperties } from "react";

type Styles = {
  page: CSSProperties;
  container: CSSProperties;
  header: CSSProperties;
  subtitle: CSSProperties;
  subheader: CSSProperties;
  information: CSSProperties;
  textbox: CSSProperties;
  buttonContainer: CSSProperties;
  cancelButton: CSSProperties;
  publishButton: CSSProperties;
};

const styles: Styles = {
  page: {
    backgroundColor: "#E5EFF5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "1400px",
    overflowY: "auto",
    flexDirection: "column",
  },
  container: {
    width: "944px",
    height: "1050px",
    backgroundColor: "white",
    marginLeft: "350px",
    marginTop: "0px",
    borderRadius: "15px",
  },
  header: {
    color: "#182B49",
    fontSize: "24px",
    marginTop: "-47px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
  },
  subtitle: {
    marginTop: "30px",
    marginLeft: "30px",
    color: "#182B49",
    fontSize: "24px",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
  },
  subheader: {
    color: "#182B49",
    fontSize: "20px",
    fontWeight: "500",
    marginLeft: "30px",
    marginTop: "30px",
    marginBottom: "5px",
    fontFamily: "Roboto, sans-serif",
  },
  information: {
    color: "#6c6c6c",
    fontSize: "16px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    marginLeft: "30px",
  },
  textbox: {
    width: "884px",
    height: "40px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    fontFamily: "Roboto, sans-serif",
    color: "#333",
    marginLeft: "30px",
    marginTop: "-10px",
    marginBottom: "10px",
    zIndex: 3,
    position: "relative",
  },
  buttonContainer: {
    width: "944px",
    marginLeft: "350px",
    marginTop: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    marginLeft: "1px",
    textDecoration: "underline",
    fontSize: "17px",
    fontFamily: "Roboto, sans-serif",
  },
  publishButton: {
    width: "153px",
    height: "46px",
    backgroundColor: "#00629b",
    color: "White",
    borderRadius: "5px",
    marginRight: "1px",
    fontSize: "17px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "590",
    zIndex: 3,
    position: "relative",
  },
};

export default styles;
