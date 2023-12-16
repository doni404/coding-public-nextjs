// useScrollPosition.js
import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  // State to store the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Set up scroll event listener
    window.addEventListener('scroll', updatePosition);

    // Clean up event listener
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
