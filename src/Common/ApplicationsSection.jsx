import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ApplicationsSection = ({ data }) => {
  const { t } = useTranslation('products');
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const autoRef = useRef(null);
  const timeoutRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    const sectionEl = sectionRef.current;
    if (!el || !sectionEl) return;

    
    const canScroll = () => {
      if (!el) return false;
      return el.scrollWidth > el.clientWidth;
    };

    const advance = () => {
      if (!el || !canScroll()) return;
      const atEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 220, behavior: 'smooth' });
      }
    };

    const startInterval = () => {
      if (autoRef.current || !canScroll()) return;
      
      advance();
      autoRef.current = setInterval(() => {
        if (!canScroll()) {
          stopAuto();
          return;
        }
        advance();
      }, 2500);
    };

    const startAutoDelayed = () => {
      if (timeoutRef.current || autoRef.current || !canScroll()) return;
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        startInterval();
      }, 2500);
    };

    const stopAuto = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (autoRef.current) {
        clearInterval(autoRef.current);
        autoRef.current = null;
      }
    };

    const maybeStartIfVisible = () => {
      if (!sectionEl || !canScroll()) return;
      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      const ratio = Math.max(0, Math.min(visibleHeight / Math.max(1, rect.height), 1));
      if (ratio >= 0.4) startAutoDelayed();
    };

    
    let observer;
    const onEnter = () => stopAuto();
    const onLeave = () => {
      if (canScroll()) {
        startAutoDelayed();
      }
    };

    const initTimeout = setTimeout(() => {
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && canScroll()) {
                startAutoDelayed();
              } else {
                stopAuto();
              }
            });
          },
          { threshold: 0.4 }
        );
        observer.observe(sectionEl);
        
        maybeStartIfVisible();
      } else {
        
        startAutoDelayed();
      }

      if (el) {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        
        el.addEventListener('touchstart', onEnter, { passive: true });
        el.addEventListener('touchend', onLeave, { passive: true });
        el.addEventListener('touchcancel', onLeave, { passive: true });
      }
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      stopAuto();
      if (observer) observer.disconnect();
      if (el) {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.removeEventListener('touchstart', onEnter);
        el.removeEventListener('touchend', onLeave);
        el.removeEventListener('touchcancel', onLeave);
      }
    };
  }, [data]);

  if (!data || !data.applications || !data.finalProductUtilization) {
    return null;
  }

  return (
    <section ref={sectionRef} className="pt-6 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            {t('ui.finalProductUtilization')}
          </h3>
          
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-[1.5px] border-[#EDA94E] rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:bg-gray-50"
            >
              <FiChevronLeft className="text-gray-600 text-lg" />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-[1.5px] border-[#EDA94E] rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:bg-gray-50"
            >
              <FiChevronRight className="text-gray-600 text-lg" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide px-12 py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {data.finalProductUtilization.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 bg-white border-[1.5px] border-[#EDA94E] rounded-full text-gray-700 font-semibold md:font-bold md:text-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
