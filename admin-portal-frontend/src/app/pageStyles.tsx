import { CSSProperties } from "react";

type Styles = {
  verticalNavBar: CSSProperties;
  horizontalNavBar: CSSProperties;
  emergencyFlow: CSSProperties;
};

const styles: Styles = {
  verticalNavBar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 0,
  },
  horizontalNavBar: {
    height: "72px",
    // zIndex: 1,
    // position: 'absolute' as const
    zIndex: 100,
    position: "fixed",
  },
  emergencyFlow: {
    zIndex: 1,
  },
};

export default styles;
