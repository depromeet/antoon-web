import { useState, useEffect } from 'react';

function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  function listener() {
    setIsScrolled(window.pageYOffset >= 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return isScrolled;
}

export default useScroll;
