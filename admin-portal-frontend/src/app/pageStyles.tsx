import { CSSProperties } from "react";

type Styles = {
  verticalNavBar: CSSProperties;
  horizontalNavBar: CSSProperties;
  emergencyFlow: CSSProperties;
};

const styles: Styles = {
  verticalNavBar: {
    position: "relative",
    top: 0,
    left: 0,
    width: "50%",
    zIndex: 0,
  },
  horizontalNavBar: {
    height: "72px",
    zIndex: 100,
    position: "fixed",
  },
  emergencyFlow: {
    zIndex: 1,
  },
};

export default styles;
