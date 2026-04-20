import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductHoverImage, UNIVERSAL_HOVER_IMAGE } from "../Data/productHoverImages";
import { getProductPath } from "../Data/productLinks";

export default function ProductPortfolioSection({ data }) {
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  const [isPaused, setIsPaused] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const scrollTimeoutRef = useRef(null);

  
  const duplicatedCards = [...data.cards, ...data.cards];

  
  
  
  const getCardLink = (card) => {
    if (card.link && card.link !== "/products") {
      return card.link;
    }
    return getProductPath(card.title);
  };

  
  useEffect(() => {
    if (!containerRef.current || !isManualScroll || !marqueeRef.current) return;

    const container = containerRef.current;
    const marquee = marqueeRef.current;
    
    const computedStyle = window.getComputedStyle(marquee);
    const transform = computedStyle.transform;
    let currentTranslateX = 0;
    
    if (transform && transform !== 'none') {
      const matrix = transform.match(/matrix\(([^)]+)\)/);
      if (matrix) {
        currentTranslateX = parseFloat(matrix[1].split(',')[4]) || 0;
      }
    }
    
    const scrollPosition = Math.abs(currentTranslateX);
    container.scrollLeft = scrollPosition;
  }, [isManualScroll]);

  
  useEffect(() => {
    if (!containerRef.current || !isManualScroll) return;

    const container = containerRef.current;
    const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.85 : window.innerWidth < 1024 ? window.innerWidth / 2 : window.innerWidth / 4;
    const gap = window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 28 : 36;
    const scrollWidth = (cardWidth + gap) * data.cards.length;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      
      if (scrollLeft >= scrollWidth - 10) {
        container.scrollLeft = scrollLeft - scrollWidth;
      }
      else if (scrollLeft <= 10) {
        container.scrollLeft = scrollWidth + scrollLeft;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isManualScroll, data.cards.length]);

  
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
    setIsManualScroll(true);
    
    if (marqueeRef.current) {
      marqueeRef.current.style.animation = 'none';
      const currentScroll = containerRef.current?.scrollLeft || 0;
      marqueeRef.current.style.transform = `translateX(-${currentScroll}px)`;
    }
    if (containerRef.current) {
      containerRef.current.style.overflowX = 'auto';
      const marquee = marqueeRef.current;
      if (marquee) {
        const computedStyle = window.getComputedStyle(marquee);
        const transform = computedStyle.transform;
        if (transform && transform !== 'none') {
          const matrix = transform.match(/matrix\(([^)]+)\)/);
          if (matrix) {
            const currentTranslateX = parseFloat(matrix[1].split(',')[4]) || 0;
            containerRef.current.scrollLeft = Math.abs(currentTranslateX);
          }
        }
      }
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
      if (deltaX > deltaY && deltaX > 10) {
        isDragging.current = true;
      }
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    resumeAutoSlide();
  };

  
  const handleMouseDown = (e) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    setIsPaused(true);
    setIsManualScroll(true);
    
    if (marqueeRef.current) {
      marqueeRef.current.style.animation = 'none';
      const currentScroll = containerRef.current?.scrollLeft || 0;
      marqueeRef.current.style.transform = `translateX(-${currentScroll}px)`;
    }
    if (containerRef.current) {
      containerRef.current.style.overflowX = 'auto';
      containerRef.current.style.cursor = 'grabbing';
    }
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current && containerRef.current) {
      const deltaX = touchStartX.current - e.clientX;
      containerRef.current.scrollLeft += deltaX;
      touchStartX.current = e.clientX;
    }
  };

  const resumeAutoSlide = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      setIsManualScroll(false);
      if (marqueeRef.current) {
        marqueeRef.current.style.animation = '';
        marqueeRef.current.style.transform = '';
      }
      if (containerRef.current) {
        containerRef.current.style.overflowX = 'hidden';
        containerRef.current.style.cursor = 'default';
      }
    }, 2000);
  };

  const handleMouseUp = () => {
    const wasDragging = isDragging.current;
    const wasManualScroll = isManualScroll;
    
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    
    if (containerRef.current) {
      containerRef.current.style.cursor = wasManualScroll ? 'grab' : 'default';
    }
    
    if (wasManualScroll || wasDragging) {
      resumeAutoSlide();
    }
  };

  
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">{data.subheading}</p>
        </div>

        <div className="relative">
          {}
          <div 
            ref={containerRef}
            className="marquee-container relative w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              cursor: 'default',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin',
              scrollbarColor: '#E99322 transparent',
            }}
          >
            <style>{`
              @keyframes marquee-scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .marquee-animation {
                animation: marquee-scroll ${Math.max(data.cards.length * 2.5, 20)}s linear infinite;
              }
              .marquee-paused {
                animation-play-state: paused;
              }
              @media (max-width: 640px) {
                .marquee-animation {
                  animation-duration: ${Math.max(data.cards.length * 2, 15)}s;
                }
              }
              .marquee-container::-webkit-scrollbar {
                height: 6px;
              }
              .marquee-container::-webkit-scrollbar-track {
                background: transparent;
              }
              .marquee-container::-webkit-scrollbar-thumb {
                background: #E99322;
                border-radius: 3px;
              }
              .marquee-container::-webkit-scrollbar-thumb:hover {
                background: #E99322;
              }
            `}</style>
            
            <div 
              ref={marqueeRef}
              className={`flex gap-5 sm:gap-7 md:gap-9 py-1 ${!isManualScroll ? 'marquee-animation' : ''} ${!isManualScroll && isPaused ? 'marquee-paused' : ''}`}
              style={{
                width: 'fit-content',
                willChange: isManualScroll ? 'auto' : 'transform',
                display: 'flex',
              }}
            >
              {duplicatedCards.map((card, index) => (
                <div 
                  key={`${card.title}-${index}`} 
                  className="product-card flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
                >
                  <Link
                    to={getCardLink(card)}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border-[1.5px] border-[#EDA94E] flex flex-col h-full"
                  >
                    <div className="h-40 sm:h-44 md:h-48 overflow-hidden relative">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <img
                        src={card.hoverImage || getProductHoverImage(card.title)}
                        alt={`${card.title} hover`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = UNIVERSAL_HOVER_IMAGE;
                        }}
                      />
                    </div>

                    <div className="px-4 py-4 sm:p-6 md:p-7 flex flex-col flex-1 text-center sm:text-left">
                      <h3 className="font-semibold text-gray-800 mb-1 sm:mb-3 group-hover:text-[#E99322] transition-colors text-sm sm:text-base min-h-[1.5rem] sm:min-h-[2rem]">
                        {card.title}
                      </h3>

                      <p className="text-gray-600 text-xs sm:text-sm mb-4 min-h-[5rem] sm:min-h-[6rem] md:min-h-[7rem]">
                        {card.description}
                      </p>

                      <span className="bg-[#E99322] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm hover:bg-[#E99322]/90 transition-all duration-300 hover:shadow-lg inline-flex items-center mx-auto sm:mx-0 mt-auto">
                        {card.buttonText}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 