import React, { useState, useEffect } from 'react';

// Custom hook to get window width
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to handle window resizing
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Event listener to update the width on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
}

// Custom HOC to inject width into the component
function withWidthHOC(Component) {
  return function WithWidth(props) {
    const width = useWindowWidth();

    return <Component {...props} width={width} />;
  };
}

export default withWidthHOC;
