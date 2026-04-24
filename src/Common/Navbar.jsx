import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight, FiPhone, FiMail, FiSearch, FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [mobileNestedDropdowns, setMobileNestedDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'pt', label: 'Português' },
    { code: 'fr', label: 'Français' },
    { code: 'zh', label: '中文' },
    { code: 'ru', label: 'Русский' },
    { code: 'ar', label: 'العربية' },
    { code: 'de', label: 'Deutsch' },
    { code: 'nl', label: 'Nederlands' }
  ];

  const hoverTimeoutRef = useRef(null);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setLangDropdownOpen(false);
  };
  const nestedHoverTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => {
      const next = !prev;
      if (!next) {
        setMobileDropdowns({});
        setMobileNestedDropdowns({});
      }
      return next;
    });
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveNestedDropdown(null);
  };

  const openDropdown = (index) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (nestedHoverTimeoutRef.current) clearTimeout(nestedHoverTimeoutRef.current);
    setActiveDropdown(index);
  };

  const closeDropdownWithDelay = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    }, 200);
  };

  const openNestedDropdown = (nestedKey) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (nestedHoverTimeoutRef.current) clearTimeout(nestedHoverTimeoutRef.current);
    setActiveNestedDropdown(nestedKey);
  };

  const closeNestedDropdownWithDelay = () => {
    if (nestedHoverTimeoutRef.current) clearTimeout(nestedHoverTimeoutRef.current);
    nestedHoverTimeoutRef.current = setTimeout(() => {
      setActiveNestedDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdowns = document.querySelectorAll('.dropdown-container');
      let clickedOutside = true;
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target)) clickedOutside = false;
      });
      if (clickedOutside) setActiveDropdown(null);
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileDropdowns({});
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (nestedHoverTimeoutRef.current) clearTimeout(nestedHoverTimeoutRef.current);
    };
  }, []);

  const menuItems = [
    {
      name: t('navbar.aboutUs'),
      link: "/about",
      hasDropdown: false,
    },
    {
      name: t('navbar.products'),
      link: "/products",
      hasDropdown: true,
      dropdownItems: [
        {
          name: t('navbar.excipients'),
          link: "/products",
          subItems: [
            { name: t('navbar.petroleumJelly'), link: "/products/petroleum-jelly" },
            { name: t('navbar.whiteMineralOils'), link: "/products/white-mineral-oils" },
            { name: t('navbar.lanolin'), link: "/products/lanolin" },
          ],
        },
        {
          name: t('navbar.waxes'),
          link: "/products",
          subItems: [
            { name: t('navbar.microcrystallineWax'), link: "/products/microcrystalline-wax" },
            { name: t('navbar.hardParaffinWax'), link: "/products/paraffin-wax" },
            { name: t('navbar.naturalBeeswax'), link: "/products/natural-beeswax" },
            { name: t('navbar.emulsifyingWax'), link: "/products/emulsifying-wax" },
          ],
        },
        { name: t('navbar.dPanthenol'), link: "/products/d-panthenol" },
        { name: t('navbar.preservatives'), link: "/products/preservatives" },
        { name: t('navbar.surfactants'), link: "/products/surfactants" },
        { name: t('navbar.uvFilters'), link: "/products/uv-filters" }
      ]
    },
    {
      name: t('navbar.applications'),
      link: "/applications/pharmaceutical",
      hasDropdown: true,
      dropdownItems: [
        { name: t('navbar.pharmaceutical'), link: "/applications/pharmaceutical" },
        { name: t('navbar.cosmetics'), link: "/applications/cosmetics" },
        { name: t('navbar.personalCare'), link: "/applications/personal-care" },
        { name: t('navbar.homeCare'), link: "/applications/home-care" },
        { name: t('navbar.textile'), link: "/applications/textile" },
        { name: t('navbar.lubricants'), link: "/applications/lubricants" },
        { name: t('navbar.agrochemical'), link: "/applications/agrochemical" }
      ]
    },
    { name: t('navbar.globalReach'), link: "/reach", hasDropdown: false },
    { name: t('navbar.blog'), link: "/blog", hasDropdown: false },
    { name: t('navbar.events'), link: "/events", hasDropdown: false },
    { name: t('navbar.contactUs'), link: "/contact", hasDropdown: false }

  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      { }
      { }

      <nav className="py-2 border-b border-white/20 shadow-lg relative z-30 bg-white/60 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-full">
            { }
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => {
                  setIsOpen(false);
                  setActiveDropdown(null);
                  setActiveNestedDropdown(null);
                  window.scrollTo(0, 0);
                }}
              >
                <img src="/assets/logo 1.png" alt="Unicorn logo" className="h-9 w-auto" />
              </Link>
            </div>

            { }
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative dropdown-container" onMouseEnter={() => openDropdown(index)} onMouseLeave={closeDropdownWithDelay}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center space-x-1 text-gray-800 transition-colors relative group"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <FiChevronDown className={`text-sm transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === index && (
                        <div className="absolute top-full left-0 pt-2 z-50" onMouseEnter={() => openDropdown(index)} onMouseLeave={closeDropdownWithDelay}>
                          <div className="w-56 bg-white/90 backdrop-blur-md shadow-xl rounded-md py-2 border border-gray-400">
                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => {
                              const nestedKey = `${index}-${dropdownIndex}`;
                              const hasNested = dropdownItem.subItems && dropdownItem.subItems.length > 0;

                              if (hasNested) {
                                return (
                                  <div
                                    key={nestedKey}
                                    className="relative border-b border-gray-400 last:border-b-0"
                                    onMouseEnter={() => openNestedDropdown(nestedKey)}
                                    onMouseLeave={closeNestedDropdownWithDelay}
                                  >
                                    <button
                                      className="flex w-full px-6 py-4 text-base font-semibold text-black hover:bg-[#E99322]/10 items-center justify-between"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <span className="flex-1 text-left">{dropdownItem.name}</span>
                                      <FiChevronRight className="ml-6 text-black" />
                                    </button>
                                    {activeNestedDropdown === nestedKey && (
                                      <div
                                        className="absolute top-0 left-full w-56 bg-white/90 backdrop-blur-md shadow-xl rounded-md py-2 border border-gray-400"
                                        style={{ marginLeft: '4px' }}
                                        onMouseEnter={() => openNestedDropdown(nestedKey)}
                                        onMouseLeave={closeNestedDropdownWithDelay}
                                      >
                                        {dropdownItem.subItems.map((subItem, subIndex) => (
                                          <Link
                                            key={`${nestedKey}-${subIndex}`}
                                            to={subItem.link}
                                            className="flex px-6 py-3 text-sm font-semibold text-black hover:bg-[#E99322]/10 border-b border-gray-300 last:border-b-0 items-center justify-between"
                                            onClick={() => {
                                              setActiveDropdown(null);
                                              setActiveNestedDropdown(null);
                                              window.scrollTo(0, 0);
                                            }}
                                          >
                                            <span className="flex-1">{subItem.name}</span>
                                            <span className="text-black font-bold ml-6">&gt;</span>
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                );
                              }

                              return (
                                <Link
                                  key={nestedKey}
                                  to={dropdownItem.link}
                                  className="flex px-6 py-4 text-base font-semibold text-black hover:bg-[#E99322]/10 border-b border-gray-400 last:border-b-0 items-center justify-between"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    window.scrollTo(0, 0);
                                  }}
                                >
                                  <span className="flex-1">{dropdownItem.name}</span>
                                  <span className="text-black font-bold ml-6">&gt;</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="text-gray-800 transition-colors relative group"
                      onClick={() => { window.scrollTo(0, 0); }}
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            { }
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-800 hover:text-[#E99322] transition-colors bg-gray-100 px-3 py-1.5 rounded-full"
                >
                  <FiGlobe className="text-lg" />
                  <span className="text-sm font-semibold uppercase">{i18n.language || 'en'}</span>
                  <FiChevronDown className="text-xs" />
                </button>
                {langDropdownOpen && (
                  <div className="absolute top-full mt-2 right-0 w-36 bg-white/95 backdrop-blur-md shadow-xl rounded-xl py-2 flex flex-col border border-gray-200 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`text-left px-4 py-2 text-sm hover:bg-[#E99322]/10 transition-colors ${i18n.language === lang.code ? 'font-bold text-[#E99322]' : 'text-gray-700'}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <FiSearch className="text-gray-800 text-xl cursor-pointer hover:text-[#E99322] transition-colors" />
              <button className="bg-[#E99322] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#E99322]/90 transition-all duration-300">
                {t('navbar.whatsappUs')}
              </button>
            </div>

            { }
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800">
                {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>

          { }
          {isOpen && (
            <div className="md:hidden py-6 border-t border-gray-300/30 rounded-b-xl bg-white shadow-2xl animate-fade-in-up">
              <div className="flex flex-col space-y-1">
                {menuItems.map((item, index) => (
                  <div key={index} className="px-2">
                    {item.hasDropdown ? (
                      <div className="rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleMobileDropdown(index)}
                          className={`w-full text-left px-4 py-4 flex items-center justify-between transition-colors ${mobileDropdowns[index] ? 'bg-[#E99322]/5 text-[#E99322]' : 'text-gray-800 hover:bg-gray-50'
                            }`}
                        >
                          <span className="font-bold text-base">{item.name}</span>
                          <FiChevronDown className={`text-lg transition-transform duration-300 ${mobileDropdowns[index] ? 'rotate-180' : ''}`} />
                        </button>

                        {mobileDropdowns[index] && (
                          <div className="bg-[#E99322]/5 py-2 px-4 space-y-2 animate-fade-in">
                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => {
                              const nestedKey = `${index}-${dropdownIndex}`;
                              const hasNested = dropdownItem.subItems && dropdownItem.subItems.length > 0;

                              if (hasNested) {
                                return (
                                  <div key={nestedKey} className="rounded-md overflow-hidden bg-white/50 mb-1">
                                    <button
                                      onClick={() => setMobileNestedDropdowns(prev => ({
                                        ...prev,
                                        [nestedKey]: !prev[nestedKey]
                                      }))}
                                      className="w-full text-left px-4 py-3 text-gray-800 flex items-center justify-between hover:bg-white/80"
                                    >
                                      <span className="text-sm font-semibold">{dropdownItem.name}</span>
                                      <FiChevronDown className={`text-xs transition-transform ${mobileNestedDropdowns[nestedKey] ? 'rotate-180' : ''}`} />
                                    </button>

                                    {mobileNestedDropdowns[nestedKey] && (
                                      <div className="bg-white/30 py-1 space-y-1 border-t border-gray-200/50">
                                        {dropdownItem.subItems.map((subItem, subIndex) => (
                                          <Link
                                            key={`${nestedKey}-${subIndex}`}
                                            to={subItem.link}
                                            className="block px-8 py-3 text-sm text-gray-700 hover:text-[#E99322] border-b border-gray-100 last:border-b-0"
                                            onClick={() => {
                                              setIsOpen(false);
                                              setMobileDropdowns({});
                                              setMobileNestedDropdowns({});
                                              window.scrollTo(0, 0);
                                            }}
                                          >
                                            {subItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                );
                              }

                              return (
                                <Link
                                  key={nestedKey}
                                  to={dropdownItem.link}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:text-[#E99322] hover:bg-white rounded-md transition-all"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setMobileDropdowns({});
                                    setMobileNestedDropdowns({});
                                    window.scrollTo(0, 0);
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.link}
                        className="block px-4 py-4 text-gray-800 hover:text-[#E99322] font-bold text-base hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="px-6 py-6 border-t border-gray-100 mt-6 flex flex-col gap-6">
                {/* Mobile Language Switcher */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">{t('navbar.selectLanguage') || 'Select Language'}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`px-2 py-2 rounded-lg text-xs font-semibold transition-all border ${i18n.language === lang.code
                          ? 'bg-[#E99322] text-white border-[#E99322] shadow-md'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-[#E99322]/30 hover:bg-[#E99322]/5'
                          }`}
                      >
                        {lang.label.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-[#E99322] text-white px-6 py-4 rounded-xl text-base font-bold hover:bg-[#E99322]/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#E99322]/20">
                  <FaWhatsapp className="text-xl" />
                  {t('navbar.whatsappUs')}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}