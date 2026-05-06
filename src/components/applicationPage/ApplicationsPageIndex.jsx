import React, { useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import ApplicationPageLayout from './ApplicationPageLayout';
import { applicationsData } from './applicationsData';
import { applicationsNavigationData } from './applicationsNavigationData';

export default function ApplicationsPageIndex() {
  const { t } = useTranslation('applications');
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.add('animate-fade-in-up');
    }
  }, []);

  const getAllApplications = () => {
    return applicationsNavigationData.categories.map(category => {
      // Find matching data from applicationsData for description/image if needed
      const dataMatch = applicationsData.industries.find(ind => ind.id === category.id);
      
      return {
        ...category,
        name: t('categories.' + category.id + '.name', category.name),
        description: t('industries.' + category.id + '.hero.description', dataMatch?.description || 'Serving diverse industries with premium petroleum specialties')
      };
    });
  };

  const allApplications = getAllApplications();

  return (
    <ApplicationPageLayout 
      title={t('hero.title', "Our Applications")} 
      subtitle={t('hero.description', "Providing high-quality solutions across diverse industries")}
      bannerImage="/assets/BannerImages/applications%20desktop.jpg"
    >
      <div ref={containerRef} className="space-y-12">
        {/* Hero Text Section */}
        <section className="text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('hero.title', "Industry Applications")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description', "Discover how our petroleum products are used across various industries worldwide.")}
          </p>
        </section>

        {/* Application Cards Grid */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('index.completePortfolio', "Complete Application Portfolio")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allApplications.map((app, index) => (
              <Link 
                key={app.id} 
                to={app.link} 
                className={`group block border-[1.5px] border-[#EDA94E] rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-stagger-in animate-stagger-${(index % 6) + 1}`}
              >
                <div className="mb-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#E99322] transition-colors">
                    {app.name}
                  </h4>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed line-clamp-2 min-h-[3rem]">
                  {app.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-sm font-bold text-[#E99322] group-hover:text-[#E99322]/80 uppercase tracking-wider">
                    {t('index.viewApplication', "Explore Solutions")}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E99322]/10 group-hover:bg-[#E99322]/20 flex items-center justify-center transition-colors">
                    <span className="text-[#E99322] text-sm">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Help/Contact Section */}
        <section className="text-center bg-gradient-to-r from-[#E99322]/5 to-[#EDA94E]/5 rounded-2xl p-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('index.helpTitle', "Need a Custom Solution?")}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('index.helpDesc', "Our technical experts can help you find or develop the perfect product for your specific application requirements.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-[#E99322] text-white font-bold rounded-full hover:bg-[#E99322]/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('index.contactBtn', "Contact Us")}
            </Link>
            <Link 
              to="/products" 
              className="inline-flex items-center px-8 py-3 border-[1.5px] border-[#EDA94E] text-[#E99322] font-bold rounded-full hover:bg-[#E99322]/5 transition-all duration-300"
            >
              {t('index.productsBtn', "View Products")}
            </Link>
          </div>
        </section>
      </div>
    </ApplicationPageLayout>
  );
}
