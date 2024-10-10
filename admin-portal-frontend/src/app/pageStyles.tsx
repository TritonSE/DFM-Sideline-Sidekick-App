import { CSSProperties } from "react";

type Styles = {
  verticalNavBar: CSSProperties;
  horizontalNavBar: CSSProperties;
  emergencyFlow: CSSProperties;
  container: CSSProperties;
};

const styles: Styles = {
  verticalNavBar: {
    position: "relative",
    top: 0,
    left: 0,
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
  container: {
    height: "100%",
  },
};

export default styles;
