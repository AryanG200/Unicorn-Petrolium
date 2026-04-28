import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  const { t } = useTranslation(['translation', 'contact']);
  return (
    <>
      {}
      <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 py-3 sm:py-4 md:py-5 px-4">
            {t('home.statement.text')}
          </p>
        </div>

      {}
      <footer className="bg-[#F8DEBA]">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {}
            <div>
              <div className="mb-4 inline-flex items-center gap-1.5">
                <Link to="/" className="inline-flex items-center">
                  <img src="/assets/logo 1.png" alt="Unicorn logo" className="h-10 w-auto" />
                </Link>
                <a
                  href="https://www.easternpetroleum.in/"
                  className="inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/logo 2.png" alt="Eastern Petroleum logo" className="h-12 w-auto pt-1" />
                </a>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
              {t('footerText.partner')}
              </p>
              {}
            </div>

            {}
            <div className="md:ml-12">
              <h3 className="font-semibold text-gray-800 mb-4">{t('footerText.quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-[#E99322] transition-colors"
                  >
                    {t('navbar.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-600 hover:text-[#E99322] transition-colors"
                  >
                    {t('navbar.products')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/applications"
                    className="text-gray-600 hover:text-[#E99322] transition-colors"
                  >
                    {t('navbar.applications')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-[#E99322] transition-colors"
                  >
                    {t('navbar.contactUs')}
                  </Link>
                </li>
              </ul>
            </div>

            {}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                {t('footerText.contactHeader')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FiPhone className="text-[#E99322] mr-3" />
                  <span className="text-gray-600 text-sm">
                    +91 22 4232 4121 | +91 22 4232 4122
                  </span>
                </div>
                <div className="flex items-center">
                  <FiMail className="text-[#E99322] mr-3" />
                  <span className="text-gray-600 text-sm">
                  info@unicornpetro.co.in | manan@unicornpetro.co.in 
                  </span>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="text-[#E99322] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 text-xs sm:text-sm">
                  {t('contact:officeLocation', "Unit No. 1, Riddhi Siddhi Corporate Park, VN Purav Marg, (Sion Trombay Road), Chembur, Mumbai - 400071, MH, India.")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="bg-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-xs sm:text-sm text-center md:text-left">
              {t('footerText.copyright')}
            </p>
            <div className="flex space-x-3 sm:space-x-4 mt-2 md:mt-0">
              {}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 