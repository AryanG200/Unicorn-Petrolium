import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductPageLayout from "./ProductPageLayout";
import FloatingSidebar from "../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../Common/products/ProductPageCommonSection";
import ProductKeyFeaturesSection from "../../Common/products/ProductKeyFeaturesSection";
import QualityStandardsSection from "../../Common/QualityStandardsSection";
import ApplicationsSection from "../../Common/ApplicationsSection";
import PackagedResponsiblySection from "../../Common/PackagedResponsiblySection";
import RelatedProductsSection from "../../Common/RelatedProductsSection";
import { productsNavigationData } from "./productsNavigationData";
import { buildStandardProductData } from "./standardProductData";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function StandardProductPage({ title, description }) {
  const { t } = useTranslation('products');
  const data = buildStandardProductData({ name: title, description, t });
  
  
  const metaTitle = `${title} - Unicorn Petroleum | Premium Quality Products`;
  const metaDescription = description || `Explore ${title} from Unicorn Petroleum. High-quality product for pharmaceutical, cosmetic, and industrial applications. Request a quote today.`;
  const metaKeywords = `${title.toLowerCase()}, petroleum products, specialty chemicals, pharmaceutical ingredients, cosmetic ingredients, industrial chemicals, Unicorn Petroleum`;
  
  useMetaTags(metaTitle, metaDescription, metaKeywords);
  const sidebarRef = useRef(null);
  const sidebarColumnRef = useRef(null);
  const certificationsRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const [sidebarStyle, setSidebarStyle] = useState({ position: 'sticky', top: '140px' });

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.innerWidth < 1024) {
        setSidebarStyle({ position: 'relative', top: '0px' });
        return;
      }

      if (!sidebarRef.current || !certificationsRef.current || !contentWrapperRef.current || !sidebarColumnRef.current) {
        return;
      }

      const sidebar = sidebarRef.current;
      const sidebarColumn = sidebarColumnRef.current;
      const certifications = certificationsRef.current;
      const wrapper = contentWrapperRef.current;

      const certificationsTop = certifications.getBoundingClientRect().top + window.scrollY;
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const currentScroll = window.scrollY;
      const topOffset = 140; 
      const sidebarHeight = sidebar.offsetHeight;
      const sidebarColumnWidth = sidebarColumn.offsetWidth;
      
      
      const stopScrollPosition = certificationsTop - sidebarHeight - topOffset - 20;
      
      
      if (currentScroll < stopScrollPosition) {
        setSidebarStyle({ 
          position: 'sticky', 
          top: `${topOffset}px`,
          width: `${sidebarColumnWidth}px`,
          left: '0px',
          right: 'auto'
        });
      } else {
        
        const maxScrollDistance = stopScrollPosition - wrapperTop;
        setSidebarStyle({ 
          position: 'absolute',
          top: `${maxScrollDistance}px`,
          width: `${sidebarColumnWidth}px`,
          left: '0px',
          right: 'auto'
        });
      }
    };

    
    let rafId = null;
    const onScroll = () => {
      
      if (window.innerWidth < 1024) {
        return;
      }
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <ProductPageLayout title={data.name} subtitle={data.description}>
      {}
      <div ref={contentWrapperRef} className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8 relative">
        <div ref={sidebarColumnRef} className="lg:col-span-3 relative">
          <div ref={sidebarRef} className="self-start z-10 w-full" style={sidebarStyle}>
            <FloatingSidebar navigationData={productsNavigationData} />
          </div>
        </div>

        <div className="lg:col-span-9 space-y-8">
          <ProductPageCommonSection data={data.commonSection} />
          <ApplicationsSection data={data.applicationsSection} />
          <PackagedResponsiblySection data={data.packagedResponsibly} />
          <ProductKeyFeaturesSection data={data.keyFeatures} />
        </div>
      </div>

      <div className="lg:hidden space-y-8 mb-8">
        <ProductPageCommonSection data={data.commonSection} />
        <ApplicationsSection data={data.applicationsSection} />
        <PackagedResponsiblySection data={data.packagedResponsibly} />
        <ProductKeyFeaturesSection data={data.keyFeatures} />
      </div>

      {}
      <div ref={certificationsRef} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <QualityStandardsSection />
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <RelatedProductsSection data={data.relatedProducts} />
      </div>

      <div className="lg:hidden mb-8">
        <FloatingSidebar navigationData={productsNavigationData} />
      </div>

    </ProductPageLayout>
  );
}


