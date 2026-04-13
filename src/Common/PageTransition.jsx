import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathnameRef = useRef(location.pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathnameRef.current = location.pathname;
      return;
    }

    
    const isProductPage = location.pathname.startsWith('/products/');
    const isApplicationPage = location.pathname.startsWith('/applications/');
    const prevIsProductPage = prevPathnameRef.current.startsWith('/products/');
    const prevIsApplicationPage = prevPathnameRef.current.startsWith('/applications/');
    
    
    if ((isProductPage && prevIsProductPage) || (isApplicationPage && prevIsApplicationPage)) {
      prevPathnameRef.current = location.pathname;
      return;
    }

    
    if (location.pathname !== prevPathnameRef.current) {
      setIsTransitioning(true);
      
      
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        prevPathnameRef.current = location.pathname;
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="relative">
      {}
      {isTransitioning && (
        <div className="fixed inset-0 bg-white z-[9998] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            {}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-[#E99322]/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-[#E99322] rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/assets/logo 1.png" 
                  alt="Unicorn logo" 
                  className="w-8 h-8 object-contain animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {}
      <div 
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;

