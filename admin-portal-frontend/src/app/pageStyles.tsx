import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  verticalNavBar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 0,
  },
  horizontalNavBar: {
    height: "72px",
    zIndex: 1,
    position: "fixed",
  },
  emergencyFlow: {
    zIndex: 2,
  },
};

export default styles;
