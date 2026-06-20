import { useEffect } from 'react';

import { useLocation } from 'wouter'; 

export default function ScrollToHash() {

  const [location] = useLocation(); 

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50); 
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]); 

  return null;
}
