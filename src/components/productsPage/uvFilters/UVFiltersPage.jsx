import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductPageLayout from "../ProductPageLayout";
import FloatingSidebar from "../../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../../Common/products/ProductPageCommonSection";
import QualityStandardsSection from "../../../Common/QualityStandardsSection";
import ApplicationsSection from "../../../Common/ApplicationsSection";
import CharacteristicsSection from "../../../Common/CharacteristicsSection";
import PackagedResponsiblySection from "../../../Common/PackagedResponsiblySection";
import RelatedProductsSection from "../../../Common/RelatedProductsSection";
import UVFilterProductsSection from "../../../Common/UVFilterProductsSection";
import { productsNavigationData } from "../productsNavigationData";
import { uvFiltersData } from "./uvFiltersData";
import { useMetaTags } from "../../../hooks/useMetaTags";

export default function UVFiltersPage() {
  const { t } = useTranslation('products');
  const pageData = t('pages.uv-filters', { returnObjects: true });

  useMetaTags(
    pageData.meta.title,
    pageData.meta.description,
    pageData.meta.keywords
  );

  const data = {
    ...uvFiltersData,
    name: pageData.name,
    description: pageData.purity,
    slider: uvFiltersData.slider.map((slide, i) =>
      i === 0
        ? { ...slide, title: pageData.name, subtitle: pageData.purity }
        : slide
    ),
    commonSection: {
      ...uvFiltersData.commonSection,
      title: pageData.common.title,
      description: pageData.common.description,
    },
    uvFilterProducts: {
      ...uvFiltersData.uvFilterProducts,
      products: uvFiltersData.uvFilterProducts.products.map((prod, i) => ({
        ...prod,
        name: pageData.products[i]?.name || prod.name,
        description: pageData.products[i]?.desc || prod.description,
      }))
    },
    applicationsSection: {
      ...uvFiltersData.applicationsSection,
      applications: pageData.applications.intro,
      applicationPoints: pageData.applications.points,
      finalProductUtilization: pageData.applications.items,
    },
    characteristicsSection: {
      ...uvFiltersData.characteristicsSection,
      heading: pageData.characteristics.heading,
      items: pageData.characteristics.items,
    },
    packagedResponsibly: {
      ...uvFiltersData.packagedResponsibly,
      packagingOptions: (uvFiltersData.packagedResponsibly?.packagingOptions || []).map(opt => {
        let translatedType = opt.type;
        const lowType = opt.type.toLowerCase();
        if (lowType.includes('hdpe')) translatedType = t('packaging.hdpe');
        else if (lowType.includes('fibre') || lowType.includes('fiber')) translatedType = t('packaging.fibre');
        
        return { ...opt, type: translatedType };
      })
    }
  };

  const sidebarRef = useRef(null);
  const sidebarColumnRef = useRef(null);
  const certificationsRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const contentColumnRef = useRef(null);
  const [sidebarStyle, setSidebarStyle] = useState({ position: 'sticky', top: '140px' });

  useEffect(() => {
    
    const updateSidebarHeight = () => {
      if (contentColumnRef.current && sidebarColumnRef.current) {
        
        const contentRect = contentColumnRef.current.getBoundingClientRect();
        const contentHeight = contentColumnRef.current.offsetHeight || contentRect.height;
        if (contentHeight > 0) {
          
          sidebarColumnRef.current.style.height = `${contentHeight}px`;
          sidebarColumnRef.current.style.minHeight = `${contentHeight}px`;
        }
      }
    };

    const timeoutId = setTimeout(() => {
      updateSidebarHeight();
      setTimeout(() => {
        if (handleScroll) handleScroll();
      }, 50);
    }, 200);

    updateSidebarHeight();
    window.addEventListener('resize', updateSidebarHeight);

    let resizeObserver;
    if (contentColumnRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        updateSidebarHeight();
      });
      resizeObserver.observe(contentColumnRef.current);
    }

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

      const certificationsRect = certifications.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      
      const topOffset = 140; 
      const sidebarHeight = sidebar.offsetHeight;
      const sidebarColumnWidth = sidebarColumn.offsetWidth;
      
      const certificationsTop = certificationsRect.top + window.scrollY;
      const wrapperTop = wrapperRect.top + window.scrollY;
      const currentScroll = window.scrollY;
      
      const sidebarBottomIfSticky = currentScroll + topOffset + sidebarHeight;
      
      if (wrapperRect.bottom > 0 && sidebarBottomIfSticky >= certificationsTop) {
        const maxScrollInWrapper = certificationsTop - wrapperTop - sidebarHeight - topOffset;
        setSidebarStyle({ 
          position: 'absolute',
          top: `${Math.max(0, maxScrollInWrapper)}px`,
          width: `${sidebarColumnWidth}px`,
          left: '0px',
          right: 'auto'
        });
      } else {
        setSidebarStyle({ 
          position: 'sticky', 
          top: `${topOffset}px`,
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
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('resize', updateSidebarHeight);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <ProductPageLayout title={data.name} subtitle={data.description} bannerImage={data.bannerImage} slider={data.slider}>
      <div ref={contentWrapperRef} className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8 relative items-start">
        <div ref={sidebarColumnRef} className="lg:col-span-3 relative self-start">
          <div ref={sidebarRef} className="z-10 w-full" style={sidebarStyle}>
            <FloatingSidebar navigationData={productsNavigationData} />
          </div>
        </div>

        <div ref={contentColumnRef} className="lg:col-span-9 space-y-4">
          <ProductPageCommonSection data={data.commonSection} />
          <UVFilterProductsSection data={data.uvFilterProducts} />
          <ApplicationsSection data={data.applicationsSection} />
          <CharacteristicsSection data={data.characteristicsSection} />
          <PackagedResponsiblySection data={data.packagedResponsibly} />
        </div>
      </div>

      <div className="lg:hidden space-y-4 mb-4">
        <ProductPageCommonSection data={data.commonSection} />
        <UVFilterProductsSection data={data.uvFilterProducts} />
        <ApplicationsSection data={data.applicationsSection} />
        <CharacteristicsSection data={data.characteristicsSection} />
        <PackagedResponsiblySection data={data.packagedResponsibly} />
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
