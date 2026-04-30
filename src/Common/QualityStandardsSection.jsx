import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function QualityStandardsSection({ title, subtitle, showLink = false }) {
  const { t } = useTranslation();

  const certifications = [
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/9001new.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/14001new.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/45001new.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/chemexilnew.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/evonew.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/fdanew.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/gmpnew.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/halalnew.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/mpcbnew.png",
    },
    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/pharmnew.png",
    },

    {
      code: "",
      full: "",
      logo: "/assets/Quality Standards Certificates/reachnew.png",
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
            {title || t('home.qualityStandards.heading')}
          </h2>
          {(subtitle !== undefined ? subtitle : t('home.qualityStandards.subheading')) && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600">{subtitle ?? t('home.qualityStandards.subheading')}</p>
          )}
        </div>

        { }
        <div className="block md:hidden">
          <style jsx>{`
            .certifications-swiper .swiper-pagination {
              position: relative !important;
              margin-top: 30px !important;
              bottom: auto !important;
            }
            .certifications-swiper .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: #d1d5db;
              opacity: 1;
              margin: 0 4px;
            }
            .certifications-swiper .swiper-pagination-bullet-active {
              background: #E99322;
            }
            @media (min-width: 768px) {
              .certifications-swiper {
                pointer-events: none !important;
              }
            }
          `}</style>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            allowTouchMove={true}
            simulateTouch={false}
            touchStartPreventDefault={false}
            touchMoveStopPropagation={false}
            touchRatio={1}
            touchAngle={45}
            threshold={5}
            className="certifications-swiper"
          >
            {certifications.map((cert, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center py-6">
                  <div className="w-20 h-20 bg-white rounded-lg p-2 shadow-sm border border-gray-100 flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.code}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        { }
        <div className="hidden md:flex flex-col items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8 max-w-6xl mx-auto">
          {/* Row 1: 6 items */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {certifications.slice(0, 6).map((cert, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-white rounded-lg p-3 shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-[#E99322]/30">
                  <img src={cert.logo} alt={cert.code} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="space-y-1">
                  {cert.code && <p className="text-xs sm:text-sm text-gray-800 font-semibold leading-tight">{cert.code}</p>}
                  {cert.full && <p className="text-xs text-gray-600 whitespace-pre-line leading-tight">{cert.full}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 5 items */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {certifications.slice(6).map((cert, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-white rounded-lg p-3 shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-[#E99322]/30">
                  <img src={cert.logo} alt={cert.code} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="space-y-1">
                  {cert.code && <p className="text-xs sm:text-sm text-gray-800 font-semibold leading-tight">{cert.code}</p>}
                  {cert.full && <p className="text-xs text-gray-600 whitespace-pre-line leading-tight">{cert.full}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showLink && (
          <div className="text-center">
            <Link to="/about" className="text-[#101301] font-medium hover:underline transition-colors text-sm sm:text-base">
              {t('home.qualityStandards.viewAll')}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}