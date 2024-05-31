const styles = {
    verticalNavBar: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 0
    },
    horizontalNavBar: {
      height: '72px',
      zIndex: 1,
      position: 'absolute' as const
    },
    blankPage: {
      position: 'absolute' as const,
      zIndex: 2,
      backgroundColor: 'white',
      top: '50vh',
      left: '50vw',
      bottom: '50vh',
    },
  };
  
export default styles;
  