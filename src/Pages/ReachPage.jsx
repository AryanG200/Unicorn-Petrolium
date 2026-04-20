import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SliderHero from "../Common/SliderHero";
import { useMetaTags } from "../hooks/useMetaTags";

const ReachPage = () => {
  const { t } = useTranslation('reach');
  useMetaTags(
    "Global Reach - Unicorn Petroleum | Delivering Quality Beyond Borders",
    "Unicorn Petroleum exports to over 60 countries, serving world's most recognizable pharmaceutical, cosmetic, and FMCG companies. Over 60 years of excellence in quality petroleum products.",
    "global reach, exports, international markets, pharmaceutical companies, cosmetic companies, FMCG, worldwide distribution, India exports"
  );
  const [counts, setCounts] = useState({ years: 0, countries: 0, companies: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const desktopCounterRef = useRef(null);
  const mobileCounterRef = useRef(null);

  const breadcrumbs = [
    { text: "Home", link: "/" }, 
    { text: t('title') }
  ];

  useEffect(() => {
    if (isVisible) return; 

    const startCounters = () => {
      setIsVisible(true);
      
      const targets = { years: 60, countries: 60, companies: 750 };
      const duration = 2000;
      const increment = 16;
      let currentTime = 0;

      const timer = setInterval(() => {
        currentTime += increment;
        const progress = Math.min(currentTime / duration, 1);
        
        setCounts({
          years: Math.floor(targets.years * progress),
          countries: Math.floor(targets.countries * progress),
          companies: Math.floor(targets.companies * progress)
        });

        if (progress >= 1) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, increment);
    };

    const checkAndStart = () => {
      
      if (desktopCounterRef.current) {
        const rect = desktopCounterRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          startCounters();
          return;
        }
      }
      
      if (mobileCounterRef.current) {
        const rect = mobileCounterRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          startCounters();
        }
      }
    };

    
    const timeoutId = setTimeout(() => {
      checkAndStart();
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    
    if (desktopCounterRef.current) {
      observer.observe(desktopCounterRef.current);
    }
    if (mobileCounterRef.current) {
      observer.observe(mobileCounterRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      if (desktopCounterRef.current) {
        observer.unobserve(desktopCounterRef.current);
      }
      if (mobileCounterRef.current) {
        observer.unobserve(mobileCounterRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-white">
      {}
      <div className="relative h-[280px] sm:h-[380px] md:h-[500px] lg:h-[600px] overflow-visible md:-mt-8 pt-20 md:pt-16 mb-6 sm:mb-12 md:mb-32">
        {}
        <div className="absolute inset-0">
          {}
            {}
            {}
            <img 
              src="/assets/GLOBAL REACH IMAGE.jpg" 
              alt="Banner background" 
              className="w-full h-full object-cover"
            />
          {}
          {}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30"></div>
        </div>

        {}
        <div className="absolute top-24 sm:top-28 md:top-28 lg:top-32 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-7xl">
          <nav className="text-black font-semibold text-[10px] sm:text-xs md:text-sm lg:text-lg bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full inline-block mx-auto flex justify-center items-center overflow-x-auto scrollbar-hide whitespace-nowrap shadow-sm">
            <ol className="flex items-center space-x-1 sm:space-x-2 px-1">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li className="flex-shrink-0">
                    {crumb.link ? (
                      <a href={crumb.link} className="hover:text-[#E99322] transition-colors">
                        {crumb.text}
                      </a>
                    ) : (
                      <span className="text-gray-900">{crumb.text}</span>
                    )}
                  </li>
                  {index < breadcrumbs.length - 1 && <li className="text-gray-400">›</li>}
                </React.Fragment>
              ))}
            </ol>
          </nav>
        </div>

        {}
        <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4 z-10 pointer-events-none">
          <div
            ref={desktopCounterRef}
            className="grid grid-cols-3 gap-10 justify-items-center"
          >
            {}
            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center p-4 md:p-5 lg:p-6 shadow-2xl pointer-events-auto bg-gradient-to-b from-white/80 via-white/50 to-white/20 backdrop-blur-2xl border border-white/40">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E99322] mb-1">
                {counts.years}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#E99322]">
                {t('years')}
              </div>
            </div>

            {}
            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center p-4 md:p-5 lg:p-6 shadow-2xl pointer-events-auto bg-gradient-to-b from-white/80 via-white/50 to-white/20 backdrop-blur-2xl border border-white/40">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E99322] mb-1">
                {counts.countries}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#E99322]">
                {t('countries')}
              </div>
            </div>

            {}
            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center p-4 md:p-5 lg:p-6 shadow-2xl pointer-events-auto bg-gradient-to-b from-white/80 via-white/50 to-white/20 backdrop-blur-2xl border border-white/40">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E99322] mb-1">
                {counts.companies}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#E99322]">
                {t('companies')}
              </div>
            </div>
          </div>
        </div>

      </div>

      {}
      <section ref={mobileCounterRef} className="block md:hidden px-4 pt-4 pb-8 bg-white relative z-30 -mt-12 backdrop-vignette-fix">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
          {}
          <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-xl border border-[#EDA94E]/30 animate-fade-in">
            <div className="text-2xl font-bold text-[#E99322] mb-0.5">{counts.years}+</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-tight">{t('years')}</div>
          </div>

          {}
          <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-xl border border-[#EDA94E]/30 animate-fade-in">
            <div className="text-2xl font-bold text-[#E99322] mb-0.5">{counts.countries}+</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-tight">{t('countries')}</div>
          </div>

          {}
          <div className="col-span-2 bg-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-xl border border-[#EDA94E]/30 animate-fade-in">
            <div className="text-2xl font-bold text-[#E99322] mb-0.5">{counts.companies}+</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-tight">{t('companies')}</div>
          </div>
        </div>
      </section>

      {}
      <section className="py-[var(--section-padding-y)] px-4 bg-white md:mt-48">
        {}
        <div className="max-w-6xl mx-auto mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-gray-700">
            {t('subtitle')}
          </p>
        </div>
        <div className="max-w-6xl mx-auto space-y-6 text-center">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {t('desc1')}
          </p>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {t('desc2')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReachPage;
