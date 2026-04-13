import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import BannerWithNavigation from "../Common/BannerWithNavigation";
import QualityStandardsSection from "../Common/QualityStandardsSection";
import QuoteFormSection from "../Common/QuoteFormSection";
import { useMetaTags } from "../hooks/useMetaTags";

const ContactPage = () => {
  const { t } = useTranslation('contact');
  const location = useLocation();
  useMetaTags(
    "Contact Us | Unicorn Petroleum Industries",
    "Get in touch with Unicorn Petroleum Industries. Contact us for inquiries about petroleum jelly, mineral oils, waxes, and specialty chemicals. Located in Mumbai, India. Monday - Saturday, 9 AM - 6 PM IST.",
    "contact Unicorn Petroleum, Mumbai office, inquiry, quote request, customer support, India contact"
  );

  const breadcrumbs = [{ text: "Home", link: "/" }, { text: "Contact" }];

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

  return (
    <div className="min-h-screen">
      <BannerWithNavigation
        title={t('title')}
        subtitle={t('subtitle')}
        bannerImage="/assets/hero-bg-home.jpg"
        breadcrumbs={breadcrumbs}
      />

      {}
      <section className="py-12 md:py-16 w-full">
        <div className="w-full px-4">
          {}
          <div className="max-w-7xl mx-auto p-4 md:p-6 border border-gray-300 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-0 items-center w-full">
              {}
              <div className="md:hidden space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">{t('officeLocation')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">
                      {t('factory1')}
                    </p>
                    <p className="text-sm leading-relaxed break-words text-gray-800 mt-1">
                      {t('factory2')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">+91-22-42324121, +91-22-42324122</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">info@unicornpetro.co.in, manan@unicornpetro.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed break-words text-gray-800">{t('hoursVal')}</p>
                  </div>
                </div>
              </div>

              {}
              <div className="hidden md:block md:col-span-6 pl-4">
                <div className="grid grid-cols-[194px_1fr] gap-x-6 gap-y-4">
                  <div className="grid grid-cols-[24px_1fr] gap-x-3 items-start text-right w-full">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#E99322] whitespace-nowrap leading-relaxed">{t('mainOffice')}</p>
                  </div>
                  <p className="text-sm leading-relaxed break-words text-gray-800">{t('officeLocation')}</p>

                  <div className="grid grid-cols-[24px_1fr] gap-x-3 items-start text-right w-full">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#E99322] leading-relaxed">{t('factoryAddresses')}</p>
                  </div>
                  <div className="text-sm leading-relaxed break-words text-gray-800 space-y-1">
                    <p>{t('factory1')}</p>
                    <p>{t('factory2')}</p>
                  </div>

                  <div className="grid grid-cols-[24px_1fr] gap-x-3 items-start text-right w-full">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a11.037 11.037 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#E99322] leading-relaxed">{t('phones')}</p>
                  </div>
                  <p className="text-sm leading-relaxed break-words text-gray-800">+91-22-42324121, +91-22-42324122</p>

                  <div className="grid grid-cols-[24px_1fr] gap-x-3 items-start text-right w-full">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#E99322] leading-relaxed">{t('emails')}</p>
                  </div>
                  <p className="text-sm leading-relaxed break-words text-gray-800">info@unicornpetro.co.in, manan@unicornpetro.co.in</p>

                  <div className="grid grid-cols-[24px_1fr] gap-x-3 items-start text-right w-full">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#E99322]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#E99322] leading-relaxed">{t('workingHours')}</p>
                  </div>
                  <p className="text-sm leading-relaxed break-words text-gray-800">{t('hoursVal')}</p>
                </div>
              </div>
              
              {}
              <div className="md:hidden w-full h-64 rounded-lg overflow-hidden mt-6">
                <iframe
                  title="Unicorn Petroleum Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890!2d72.8765432!3d19.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a4dc1f2349%3A0xb8521a0cedb54cd4!2sUnit%20no.%201%2C%20UNICORN%20PETROLEUM%20INDUSTRIES%20PVT.%20LIMITED.%2C%20Riddhi%20Siddhi%2C%20CORPORATE%20PARK%2C%20Sion%20-%20Trombay%20Rd%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {}
              <div className="hidden md:block md:col-span-4 w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <iframe
                  title="Unicorn Petroleum Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890!2d72.8765432!3d19.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a4dc1f2349%3A0xb8521a0cedb54cd4!2sUnit%20no.%201%2C%20UNICORN%20PETROLEUM%20INDUSTRIES%20PVT.%20LIMITED.%2C%20Riddhi%20Siddhi%2C%20CORPORATE%20PARK%2C%20Sion%20-%20Trombay%20Rd%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <div id="quote-form-section" className="scroll-mt-24 pb-24">
        <QuoteFormSection mode="contact" title={t('sendMessage')} />
      </div>

    
    </div>
  );
};

export default ContactPage;