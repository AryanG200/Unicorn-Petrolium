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
            const productId = product.id || (
              product.name.toLowerCase().includes('mineral') ? 'white-mineral-oils' :
              product.name.toLowerCase().includes('microcrystalline') ? 'microcrystalline-wax' :
              product.name.toLowerCase().includes('paraffin') ? 'paraffin-wax' :
              product.name.toLowerCase().includes('petroleum jelly') ? 'petroleum-jelly' :
              product.name.toLowerCase().includes('lanolin') ? 'lanolin' :
              product.name.toLowerCase().includes('panthenol') ? 'd-panthenol' :
              product.name.toLowerCase().includes('surfactant') ? 'surfactants' :
              product.name.toLowerCase().includes('preservative') ? 'preservatives' :
              product.name.toLowerCase().includes('uv filter') ? 'uv-filters' :
              product.name.toLowerCase().includes('emulsifying') ? 'emulsifying-wax' :
              product.name.toLowerCase().includes('beeswax') ? 'natural-beeswax' :
              null
            );

            const displayName = productId ? t(`categories.${productId}.name`) : t(product.name);
            const displayDesc = productId ? t(`categories.${productId}.desc`) : "";

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
                    alt={displayName}
                    className="w-full h-full object-cover"
                    onError={(e)=>{ e.target.style.display='none'; const fallback=e.target.nextSibling; if(fallback && fallback.dataset.fallback==='1'){ fallback.style.display='flex'; } }}
                  />
                  <div data-fallback="1" className="hidden absolute inset-0 bg-gray-200 items-center justify-center">
                    <span className="text-gray-600 font-semibold">{displayName}</span>
                  </div>
                </div>
                
                <div className="p-6 text-center flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                    {displayName}
                  </h3>
                  {displayDesc && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {displayDesc}
                    </p>
                  )}
                  <Link to={product.link || (productId ? `/products/${productId}` : getProductPath(product.name))} className="bg-[#E99322] text-white px-5 py-2 rounded-full font-medium hover:bg-[#E99322]/90 transition-all duration-300 inline-flex items-center whitespace-nowrap min-w-[150px] justify-center mt-auto">
                        {t('ui.viewDetails')}
                  </Link>
                </div>
              </div>

              {}
              <div className="hidden md:grid min-h-[200px]" style={{ gridTemplateColumns: '40% 60%' }}>
                <div className="h-full w-full relative">
                  <img
                    src={product.image}
                    alt={displayName}
                    className="w-full h-full object-cover"
                    onError={(e)=>{ e.target.style.display='none'; const fallback=e.target.nextSibling; if(fallback && fallback.dataset.fallback==='1'){ fallback.style.display='flex'; } }}
                  />
                  <div data-fallback="1" className="hidden absolute inset-0 bg-gray-200 items-center justify-center">
                    <span className="text-gray-600 font-semibold">{displayName}</span>
                  </div>
                </div>
                
                <div className="flex flex-col bg-white">
                  <div className="w-full flex-grow px-4 lg:px-6 py-5 flex flex-col items-center justify-center text-center">
                    <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-2 leading-tight min-h-[2.5rem] flex items-center justify-center">
                      {displayName}
                    </h3>
                    {displayDesc && (
                      <p className="text-xs lg:text-sm text-gray-600 mb-4 line-clamp-3">
                        {displayDesc}
                      </p>
                    )}
                    <div className="mt-auto pt-1 w-full flex justify-center">
                      <Link to={product.link || (productId ? `/products/${productId}` : getProductPath(product.name))} className="bg-[#E99322] text-white px-4 py-1.5 rounded-full font-medium hover:bg-[#E99322]/90 transition-all duration-300 inline-flex items-center whitespace-nowrap min-w-[120px] justify-center text-xs lg:text-sm shadow-sm hover:shadow-md">
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
