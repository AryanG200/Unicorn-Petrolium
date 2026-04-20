import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProductPath } from "../Data/productLinks";

const RelatedProductsSection = ({ data }) => {
  const { t } = useTranslation('products');
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  if (!data || !data.relatedProducts || data.relatedProducts.length === 0) {
    return null;
  }

  const products = data.relatedProducts;
  const visibleCount = 3; 

  
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const effectiveVisibleCount = isMobile ? 1 : visibleCount;
    if (products.length <= effectiveVisibleCount) return; 

    const startAutoSlide = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }

      autoScrollIntervalRef.current = setInterval(() => {
        if (isPaused) return;
        
        setCurrentIndex((prev) => {
          const maxIndex = Math.max(0, products.length - visibleCount);
          return prev >= maxIndex ? 0 : prev + 1;
        });
      }, 3500); 
    };

    startAutoSlide();

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [products.length, isPaused]);

  
  useEffect(() => {
    const el = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const effectiveVisibleCount = isMobile ? 1 : visibleCount;
    if (!el || products.length <= effectiveVisibleCount) return;
    
    
    const timeoutId = setTimeout(() => {
      const firstCard = el.querySelector('.related-product-card');
      if (!firstCard) return;
      
      const cardWidth = firstCard.offsetWidth;
      const isMobile = window.innerWidth < 768;
      const gap = isMobile ? 16 : 32; 
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      el.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [currentIndex, products.length]);

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('ui.relatedProducts')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('ui.exploreOtherProducts')}
          </p>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {products.map((product, index) => {
            return (
            <div
              key={index}
              className="related-product-card flex-shrink-0 w-[calc(85%-16px)] md:w-[calc(33.333%-21.33px)] bg-white rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {}
              <div className="md:hidden">
                <div className="w-full h-48 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e)=>{ e.target.style.display='none'; const fallback=e.target.nextSibling; if(fallback && fallback.dataset.fallback==='1'){ fallback.style.display='flex'; } }}
                  />
                  <div data-fallback="1" className="hidden absolute inset-0 bg-gray-200 items-center justify-center">
                    <span className="text-gray-600 font-semibold">{product.name}</span>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
                    {product.name}
                  </h3>
                  <Link to={product.link || getProductPath(product.name)} className="bg-[#E99322] text-white px-5 py-2 rounded-full font-medium hover:bg-[#E99322]/90 transition-all duration-300 inline-flex items-center whitespace-nowrap min-w-[150px] justify-center">
                        {t('ui.viewDetails')}
                  </Link>
                </div>
              </div>

              {}
              <div className="hidden md:grid h-36" style={{ gridTemplateColumns: '40% 60%' }}>
                <div className="h-full w-full relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e)=>{ e.target.style.display='none'; const fallback=e.target.nextSibling; if(fallback && fallback.dataset.fallback==='1'){ fallback.style.display='flex'; } }}
                  />
                  <div data-fallback="1" className="hidden absolute inset-0 bg-gray-200 items-center justify-center">
                    <span className="text-gray-600 font-semibold">{product.name}</span>
                  </div>
                </div>
                
                <div className="h-full">
                  <div className="w-full h-full px-6 py-3 flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight min-h-[2.25rem] flex items-center justify-center">
                      {product.name}
                    </h3>
                    <div className="mt-auto w-full flex justify-center">
                      <Link to={product.link || getProductPath(product.name)} className="bg-[#E99322] text-white px-4 py-1.5 rounded-full font-medium hover:bg-[#E99322]/90 transition-all duration-300 inline-flex items-center whitespace-nowrap min-w-[120px] justify-center text-sm">
                            {t('ui.viewDetails')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {}
        {products.length > (window.innerWidth < 768 ? 1 : visibleCount) && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.max(1, products.length - (window.innerWidth < 768 ? 0 : (visibleCount - 1))) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#E99322] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedProductsSection;
