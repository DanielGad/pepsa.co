import { useState, useEffect, createContext } from "react";
import { node } from 'prop-types';
import { ReactNode } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext({ isVisible: false });

export const Provider = ({ children }: { children: ReactNode }) => {

  //////////////////////////
  // Control the slide effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])




  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Context.Provider value={{
     isVisible
    }}>
      {children}
    </Context.Provider>
  )
};

Provider.propTypes = {
  children: node.isRequired
};


