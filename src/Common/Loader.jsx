import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    
    if (document.readyState === 'complete') {
      handleLoadComplete();
    } else {
      window.addEventListener('load', handleLoadComplete);
      
      const timeout = setTimeout(handleLoadComplete, 2000);
      return () => {
        window.removeEventListener('load', handleLoadComplete);
        clearTimeout(timeout);
      };
    }
  }, []);

  const handleLoadComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  };

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {}
        <div className="relative w-20 h-20">
          {}
          <div className="absolute inset-0 border-4 border-[#E99322]/20 rounded-full"></div>
          {}
          <div className="absolute inset-0 border-4 border-transparent border-t-[#E99322] rounded-full animate-spin"></div>
          {}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/assets/logo 1.png" 
              alt="Unicorn logo" 
              className="w-10 h-10 object-contain animate-pulse"
            />
          </div>
        </div>
        
        {}
        <p className="text-[#E99322] font-medium text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;

