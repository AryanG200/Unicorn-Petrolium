import React, { useState, useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useLocation } from "react-router-dom";
import QualityStandardsSection from "../Common/QualityStandardsSection";
import QuoteFormSection from "../Common/QuoteFormSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useMetaTags } from "../hooks/useMetaTags";
import VideoBanner from "../Common/VideoBanner";

const AboutPage = () => {
  const { t } = useTranslation(['about', 'reach']);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    if (!id) return;
    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (!target) return;
      const offset = 120;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };


    const timeoutIds = [
      setTimeout(scrollToTarget, 0),
      setTimeout(scrollToTarget, 300),
      setTimeout(scrollToTarget, 800),
    ];

    return () => timeoutIds.forEach(clearTimeout);
  }, [location.hash]);
  useMetaTags(
    t('meta.title'),
    t('meta.description'),
    t('meta.keywords')
  );

  const coreValuesRef = useScrollAnimation();
  const manufacturingRef = useScrollAnimation();
  const [counts, setCounts] = useState({ years: 0, countries: 0, companies: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const desktopCounterRef = useRef(null);
  const mobileCounterRef = useRef(null);

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Banner Section with overlapping counters */}
      <div className="relative h-[280px] sm:h-[380px] md:h-[500px] lg:h-[600px] overflow-visible md:-mt-8 pt-20 md:pt-16 mb-6 sm:mb-12 md:mb-32">
        <div className="absolute inset-0">
          <img
            src="/assets/GLOBAL REACH IMAGE.jpg"
            alt="Banner background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30"></div>
        </div>

        <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4 z-10 pointer-events-none">
          <div ref={desktopCounterRef} className="grid grid-cols-3 gap-10 justify-items-center">
            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center p-4 md:p-5 lg:p-6 shadow-2xl pointer-events-auto bg-gradient-to-b from-white/80 via-white/50 to-white/20 backdrop-blur-2xl border border-white/40">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E99322] mb-1">
                {counts.years}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#E99322]">
                {t('reach:years', 'years')}
              </div>
            </div>

            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center p-4 md:p-5 lg:p-6 shadow-2xl pointer-events-auto bg-gradient-to-b from-white/80 via-white/50 to-white/20 backdrop-blur-2xl border border-white/40">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E99322] mb-1">
                {counts.countries}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#E99322]">
                {t('reach:countries', 'countries')}
              </div>
            </div>

            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center p-4 md:p-5 lg:p-6 shadow-2xl pointer-events-auto bg-gradient-to-b from-white/80 via-white/50 to-white/20 backdrop-blur-2xl border border-white/40">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E99322] mb-1">
                {counts.companies}+
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#E99322]">
                {t('reach:companies', 'companies')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile counters */}
      <section ref={mobileCounterRef} className="block md:hidden px-4 pt-4 pb-8 bg-white relative z-30 -mt-12 backdrop-vignette-fix">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-xl border border-[#EDA94E]/30 animate-fade-in">
            <div className="text-2xl font-bold text-[#E99322] mb-0.5">{counts.years}+</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-tight">{t('reach:years', 'years')}</div>
          </div>

          <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-xl border border-[#EDA94E]/30 animate-fade-in">
            <div className="text-2xl font-bold text-[#E99322] mb-0.5">{counts.countries}+</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-tight">{t('reach:countries', 'countries')}</div>
          </div>

          <div className="col-span-2 bg-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-xl border border-[#EDA94E]/30 animate-fade-in">
            <div className="text-2xl font-bold text-[#E99322] mb-0.5">{counts.companies}+</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-tight">{t('reach:companies', 'companies')}</div>
          </div>
        </div>
      </section>

      {/* Intro section (with md:mt-48 to handle overlap) */}
      <section className="py-[var(--section-padding-y)] px-4 border-b-0 md:mt-48">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1D33] mb-3 tracking-tight">
            Unicorn Petroleum Industries Pvt. Ltd.
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1D33] mb-10">
            A legacy of excellence
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify text-left">
            {t('intro.p1')}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed text-justify text-left">
            {t('intro.p2')}
          </p>
        </div>
      </section>
      { }
      <div className="w-full px-4">
        <div className="max-w-xs md:max-w-2xl mx-auto">
          <div className="h-[2px] bg-[#EDA94E]"></div>
        </div>
      </div>

      { }
      <section className="py-[var(--section-padding-y)] px-4 bg-gray-50 border-b-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src="/assets/about/Icon.png"
                alt="Our belief icon"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t('belief.title')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify text-left">
            <Trans i18nKey="belief.text" t={t}>
              We, at Unicorn, firmly believe in <strong>Total Customer Satisfaction</strong>, providing customers with the best solutions to suit their diverse applications with tailor-made, consistently superior products, along with efficient services at reasonable costs. The name "<strong>UNICORN</strong>" is now synonymous for ethical practices, superior consistent quality and customer oriented management.
            </Trans>
          </p>
        </div>
      </section>

      { }
      <section className="py-[var(--section-padding-y)] px-4 border-b-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <img
                src="/assets/about/Icon (1).png"
                alt="Icon placeholder"
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t('vision.title')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify text-left">
            <Trans i18nKey="vision.text" t={t}>
              Become a customer-centric, result oriented organization, with sustainable resources, for over-all self and society development. We aim to be recognized as trend-setters for <strong>setting the standards of excellence in the field of petrochemical specialties</strong> in the Indian sub-continent. We are committed to meeting our commitments to our valuable customers, stake-holders and employees in an ethical, professional manner.
            </Trans>
          </p>
        </div>
      </section>

      { }
      <section className="py-[var(--section-padding-y)] px-4 bg-gray-50 border-b-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src="/assets/about/Icon (2).png"
                alt="Our mission icon"
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t('mission.title')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify text-left">
            <Trans i18nKey="mission.text" t={t}>
              To strive earnestly to meet the expectations and aspirations of our customers vis-a-vis <strong>quality, consistency and compatibility of our products</strong>, while maintaining the highest standards of integrity, value and business ethics. To innovate and develop customer centric products to suit diverse applications.
            </Trans>
          </p>
        </div>
      </section>
      { }
      <div className="w-full px-4">
        <div className="max-w-xs md:max-w-2xl mx-auto">
          <div className="h-[2px] bg-[#EDA94E]"></div>
        </div>
      </div>

      { }
      <section className="py-[var(--section-padding-y)] px-4 bg-white" ref={coreValuesRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t('values.title')}</h2>

          { }
          <div className="relative overflow-visible">
            { }
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-[#E99322] hidden md:block animate-draw-line" style={{ top: '9%', height: '83%' }}></div>

            { }
            <div className="md:hidden space-y-10 pb-8">
              { }
              <div className="text-center opacity-100">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/about/Icons2.png"
                    alt="Commitment icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain animate-icon-float"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{t('values.items.customer.title')}</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-sm mx-auto">
                  {t('values.items.customer.desc')}
                </p>
              </div>

              { }
              <div className="text-center opacity-100">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/about/Icons2 (1).png"
                    alt="Quality icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain animate-icon-float"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{t('values.items.quality.title')}</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-sm mx-auto">
                  {t('values.items.quality.desc')}
                </p>
              </div>

              { }
              <div className="text-center opacity-100">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/about/Icons2 (2).png"
                    alt="Ethical icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain animate-icon-float"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{t('values.items.ethics.title')}</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-sm mx-auto">
                  {t('values.items.ethics.desc')}
                </p>
              </div>

              { }
              <div className="text-center opacity-100">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/about/Icons2 (3).png"
                    alt="Integrity icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain animate-icon-float"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{t('values.items.integrity.title')}</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-sm mx-auto">
                  {t('values.items.integrity.desc')}
                </p>
              </div>

              { }
              <div className="text-center opacity-100">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/about/Icons2 (4).png"
                    alt="Safety icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{t('values.items.safety.title')}</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-sm mx-auto">
                  {t('values.items.safety.desc')}
                </p>
              </div>
            </div>

            { }
            <div className="hidden md:block space-y-16 pb-8 min-h-[600px]">
              { }
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('values.items.customer.title')}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('values.items.customer.desc')}
                  </p>
                </div>
                <div className="w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src="/assets/about/Icons2.png"
                    alt="Commitment icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              { }
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src="/assets/about/Icons2 (1).png"
                    alt="Quality icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="w-1/2 pl-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('values.items.quality.title')}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('values.items.quality.desc')}
                  </p>
                </div>
              </div>

              { }
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('values.items.ethics.title')}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('values.items.ethics.desc')}
                  </p>
                </div>
                <div className="w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src="/assets/about/Icons2 (2).png"
                    alt="Ethical icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              { }
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src="/assets/about/Icons2 (3).png"
                    alt="Integrity icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="w-1/2 pl-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('values.items.integrity.title')}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('values.items.integrity.desc')}
                  </p>
                </div>
              </div>

              { }
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('values.items.safety.title')}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('values.items.safety.desc')}
                  </p>
                </div>
                <div className="w-16 h-16 flex items-center justify-center z-10">
                  <img
                    src="/assets/about/Icons2 (4).png"
                    alt="Safety icon"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      { }
      <div className="w-full px-4">
        <div className="max-w-xs md:max-w-2xl mx-auto">
          <div className="h-[2px] bg-[#EDA94E]"></div>
        </div>
      </div>

      { }
      <section className="py-[var(--section-padding-y)] px-4 bg-white" ref={manufacturingRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">{t('facilities.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { }
            <div className="bg-white rounded-2xl border-[1.5px] border-[#EDA94E] text-center overflow-hidden">
              <div className="w-full">
                <img
                  src="/assets/about/Advance production units.jpg"
                  alt="Advance production units"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "/assets/about/packaging.jpg";
                  }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('facilities.items.production.title')}</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t('facilities.items.production.desc')}
                </p>
              </div>
            </div>

            { }
            <div className="bg-white rounded-2xl border-[1.5px] border-[#EDA94E] text-center overflow-hidden">
              <div className="w-full">
                <img
                  src="/assets/about/r&d.jpg"
                  alt="In-house R&D & QC lab"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('facilities.items.qa.title')}</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t('facilities.items.qa.desc')}
                </p>
              </div>
            </div>

            { }
            <div className="bg-white rounded-2xl border-[1.5px] border-[#EDA94E] text-center overflow-hidden">
              <div className="w-full border-b border-[#EDA94E]">
                <img
                  src="/assets/about/packaging (1).jpg"
                  alt="Flexible packaging options"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('facilities.items.packaging.title')}</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t('facilities.items.packaging.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      { }
      <div className="w-full px-4">
        <div className="max-w-xs md:max-w-2xl mx-auto">
          <div className="h-[2px] bg-[#EDA94E]"></div>
        </div>
      </div>

      { }
      <section className="py-8">
        { }
        <div className="relative w-full mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E99322]/20 via-[#E99322] to-[#E99322]/20"></div>
          <div className="relative py-8">
            <h2 className="text-4xl font-bold text-white text-center">{t('differentiators.title')}</h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          { }
          <div className="relative">
            { }
            <div className="absolute top-[-10%] left-[15.4%] w-0.5 h-[23%] bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-10%] left-[31%] w-0.5 h-[73%] bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-12%] left-[50%] w-0.5 h-[25%] bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-10%] left-[68.9%] w-0.5 h-[78%] bg-[#E99322] hidden lg:block"></div>
            <div className="absolute top-[-10%] left-[84.5%] w-0.5 h-[23%] bg-[#E99322] hidden lg:block"></div>

            { }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
              { }
              <div className="text-center relative">
                <div className="absolute top-8 left-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="absolute top-8 right-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg relative z-10">
                  <img
                    src="/assets/about/Icons2 (5).png"
                    alt="Icon placeholder"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('differentiators.items.regulatory.title')}</h3>
                <p className="text-gray-700">{t('differentiators.items.regulatory.desc')}</p>
              </div>

              { }
              <div className="text-center relative">
                <div className="absolute top-8 left-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="absolute top-8 right-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg relative z-10">
                  <img
                    src="/assets/about/Icons2 (7).png"
                    alt="Icon placeholder"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('differentiators.items.environment.title')}</h3>
                <p className="text-gray-700">{t('differentiators.items.environment.desc')}</p>
              </div>

              { }
              <div className="text-center relative">
                <div className="absolute top-8 left-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="absolute top-8 right-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg relative z-10">
                  <img
                    src="/assets/about/Icons2 (2).png"
                    alt="Icon placeholder"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('differentiators.items.ethical.title')}</h3>
                <p className="text-gray-700">{t('differentiators.items.ethical.desc')}</p>
              </div>
            </div>

            { }
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
                { }
                <div className="text-center relative">
                  <div className="absolute top-8 left-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                  <div className="absolute top-8 right-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                  <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg relative z-10">
                    <img
                      src="/assets/about/Icons2 (6).png"
                      alt="Icon placeholder"
                      className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('differentiators.items.timely.title')}</h3>
                  <p className="text-gray-700">{t('differentiators.items.timely.desc')}</p>
                </div>

                { }
                <div className="text-center relative">
                  <div className="absolute top-8 left-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                  <div className="absolute top-8 right-0 h-[2px] bg-[#E99322]/30 md:hidden w-[calc(50%-40px)]"></div>
                  <div className="w-16 h-16 bg-[#E99322] rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-white shadow-lg relative z-10">
                    <img
                      src="/assets/about/Icons2 (1).png"
                      alt="Icon placeholder"
                      className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('differentiators.items.quality.title')}</h3>
                  <p className="text-gray-700">{t('differentiators.items.quality.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      { }
      <div className="w-full px-4">
        <div className="max-w-xs md:max-w-2xl mx-auto">
          <div className="h-[2px] bg-[#EDA94E]"></div>
        </div>
      </div>

      { }
      <div id="quote-form-section" className="scroll-mt-24 pb-24">
        <QuoteFormSection mode="contact" title={t('contact.title')} />
      </div>

      { }
      <QualityStandardsSection title={t('certifications.title')} subtitle="" />
    </div>
  );
};

export default AboutPage;