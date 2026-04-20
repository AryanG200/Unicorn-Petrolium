import React, { useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import ProductPageLayout from './ProductPageLayout';
import { productsData } from './productsData';
import { productsNavigationData } from './productsNavigationData';

export default function ProductsPageIndex() {
  const { t } = useTranslation('products');
  const containerRef = useRef(null);

  useEffect(() => {
    
    if (containerRef.current) {
      containerRef.current.classList.add('animate-fade-in-up');
    }
  }, []);

  
  const getAllProducts = () => {
    const allProducts = [];
    productsNavigationData.categories.forEach(category => {
      allProducts.push({
        ...category,
        name: t('categories.' + category.id + '.name', category.name),
        isMainCategory: true,
        description: t('categories.' + category.id + '.desc', getCategoryDescription(category.id))
      });
    });
    return allProducts;
  };

  const getCategoryDescription = (categoryId) => {
    const descriptions = {
      'petroleum-jelly': 'Versatile emollient and protective agent for skin care applications',
      'white-mineral-oils': 'High-quality mineral oils for various industrial and cosmetic uses',
      'microcrystalline-wax': 'Fine-grained wax with excellent binding and coating properties',
      'paraffin-wax': 'Versatile wax products for multiple industrial applications',
      'natural-beeswax': 'Pure natural wax with excellent emulsifying properties',
      'lanolin': 'Refined wool grease for cosmetic, pharmaceutical, and industrial use',
      'emulsifying-wax': 'Specialized wax for creating stable emulsions',
      'd-panthenol': 'Provitamin B5 for enhanced skin conditioning and healing',
      'preservatives': 'Antimicrobial agents to extend product shelf life',
      'surfactants': 'Surface-active agents for cleaning and emulsification',
      'uv-filters': 'UV protection agents for sun care formulations'
    };
    return descriptions[categoryId] || 'High-quality product for various applications';
  };

  const getSubItemDescription = (subItemId) => {
    const descriptions = {
      'light-mineral-oil': 'Light viscosity mineral oil for cosmetic and pharmaceutical applications',
      'heavy-mineral-oil': 'Heavy viscosity mineral oil for industrial lubrication',
      'soft-paraffin': 'Soft consistency paraffin wax for topical applications',
      'hard-paraffin': 'Hard consistency paraffin wax for industrial uses',
      'parabens': 'Traditional preservative system for cosmetic products',
      'phenoxyethanol': 'Broad-spectrum preservative with excellent compatibility',
      'anionic': 'Anionic surfactants for effective cleaning and foaming',
      'nonionic': 'Nonionic surfactants for gentle cleaning applications',
      'organic-filters': 'Organic UV filters for broad-spectrum sun protection',
      'inorganic-filters': 'Inorganic UV filters for physical sun protection'
    };
    return descriptions[subItemId] || 'Specialized product variant with unique properties';
  };

  const allProducts = getAllProducts();

  return (
    <ProductPageLayout title={t('index.title', "Our Products")} subtitle={t('index.subtitle', "Comprehensive range of high-quality petroleum and specialty products")}>
      <div ref={containerRef} className="space-y-12">
        {}
        <section className="text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('index.heroTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('index.heroSubtitle')}
          </p>
        </section>

        {}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('index.completePortfolio')}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {allProducts.map((product, index) => (
              <Link 
                key={product.id} 
                to={product.link} 
                className={`group block border-[1.5px] border-[#EDA94E] rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-stagger-in animate-stagger-${(index % 6) + 1}`}
              >
                <div className="mb-4">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-[#E99322] transition-colors line-clamp-2 min-h-[3rem] sm:min-h-0">
                    {product.name}
                  </h4>
                  {product.parentCategory && (
                    <p className="text-sm text-[#E99322] font-medium mb-2">
                      {product.parentCategory}
                    </p>
                  )}
                </div>
                
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-[#E99322] group-hover:text-[#E99322]/80">
                    {product.isMainCategory ? t('index.viewCategory') : t('index.viewProduct')}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E99322]/10 group-hover:bg-[#E99322]/20 flex items-center justify-center transition-colors">
                    <span className="text-[#E99322] text-sm">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {}
        <section className="text-center bg-gradient-to-r from-[#E99322]/5 to-[#EDA94E]/5 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {t('index.helpTitle')}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('index.helpDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-[#E99322] text-white font-medium rounded-full hover:bg-[#E99322]/90 transition-all duration-300"
            >
              {t('index.contactBtn')}
            </Link>
            <Link 
              to="/applications" 
              className="inline-flex items-center px-6 py-3 border-[1.5px] border-[#EDA94E] text-[#E99322] font-semibold rounded-lg hover:bg-[#E99322]/5 transition-colors"
            >
              {t('index.applicationsBtn')}
            </Link>
          </div>
        </section>
      </div>
    </ProductPageLayout>
  );
}
