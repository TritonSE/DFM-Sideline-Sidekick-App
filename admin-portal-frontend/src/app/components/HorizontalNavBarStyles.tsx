const HorizonalNavBarStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    height: "72px",
    width: "100vw",
    padding: "0 1vw",
    boxShadow: "0px 1px 0px 0px #D9D9D9",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoBackground: {
    width: "40px",
    height: "40px",
    backgroundColor: "var(--DFM-Navy, #182B49)",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0.7vw",
  },
  logoText: {
    fontWeight: "bold",
    marginRight: "20vw",
  },
  searchBarContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    marginRight: "20vw",
    width: "20vw",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
  },
  profileBackground: {
    width: "40px",
    height: "40px",
    backgroundColor: "#00629B",
    borderRadius: "4.683px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0.7vw",
  },
  profileLogoText: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  profileText: {
    fontWeight: "bold",
  },
};

export default HorizonalNavBarStyles;
