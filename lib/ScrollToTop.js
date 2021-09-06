import React, { useEffect, useState } from 'react';
import * as s from '../styles/Layout.styled';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const main = document.querySelector('#skip');

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    main.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (main.offsetTop > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    main.addEventListener('scroll', toggleVisibility);

    return () => main.removeEventListener('scroll', toggleVisibility);
  }, []);

  // scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <s.BackUpStairsWrapper>
      {isVisible && (
        <s.BackUpStairsButton type="button" onClick={scrollToTop}>
          <h3>Back up</h3>
        </s.BackUpStairsButton>
      )}
    </s.BackUpStairsWrapper>
  );
}
