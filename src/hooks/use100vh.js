import { useState, useEffect } from 'react';

function use100vh() {
  let [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setVh(vh);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [vh]);
}

export default use100vh;
