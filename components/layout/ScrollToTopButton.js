// ScrollToTopButton.js
import React from 'react';
import useScrollPosition from './useScrollPosition';

const ScrollToTopButton = () => {
  const scrollPosition = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className={"scrollToTopButton"} onClick={scrollToTop}
      style={{ display: scrollPosition > 100 ? 'flex' : 'none' }}>
      ↑
    </button>
  );
};

export default ScrollToTopButton;