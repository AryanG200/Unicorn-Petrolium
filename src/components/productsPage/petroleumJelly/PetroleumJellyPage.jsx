import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductPageLayout from "../ProductPageLayout";
import FloatingSidebar from "../../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../../Common/products/ProductPageCommonSection";
import ProductKeyFeaturesSection from "../../../Common/products/ProductKeyFeaturesSection";
import QualityStandardsSection from "../../../Common/QualityStandardsSection";
import ApplicationsSection from "../../../Common/ApplicationsSection";
import PackagedResponsiblySection from "../../../Common/PackagedResponsiblySection";
import RelatedProductsSection from "../../../Common/RelatedProductsSection";
import { petroleumJellyData } from "./petroleumJellyData";
import { productsNavigationData } from "../productsNavigationData";
import { useMetaTags } from "../../../hooks/useMetaTags";

export default function PetroleumJellyPage() {
  const { t } = useTranslation('products');
  const pageData = t('pages.petroleum-jelly', { returnObjects: true });

  useMetaTags(
    pageData.meta.title,
    pageData.meta.description,
    pageData.meta.keywords
  );

  const data = {
    ...petroleumJellyData,
    name: pageData.name,
    description: pageData.purity,
    slider: petroleumJellyData.slider.map((slide, i) =>
      i === 0
        ? { ...slide, title: pageData.name, subtitle: pageData.purity }
        : slide
    ),
    commonSection: {
      ...petroleumJellyData.commonSection,
      title: pageData.common.title,
      description: pageData.common.description,
      additionalInfo: pageData.common.additionalInfo
    },
    applicationsSection: {
      ...petroleumJellyData.applicationsSection,
      finalProductUtilization: pageData.applications.items
    },
    packagedResponsibly: {
      ...petroleumJellyData.packagedResponsibly,
      packagingOptions: (petroleumJellyData.packagedResponsibly?.packagingOptions || []).map(opt => ({
        ...opt,
        type: opt.type.toLowerCase().includes('hdpe') ? t('packaging.hdpe') : t('packaging.ms')
      }))
    },
    keyFeatures: {
      ...petroleumJellyData.keyFeatures,
      heading: pageData.keyFeatures.heading,
      features: (petroleumJellyData.keyFeatures?.features || []).map((f, i) => ({
        ...f,
        title: i === 0 ? pageData.keyFeatures.compliance : pageData.keyFeatures.otherCompliances
      }))
    }
  };

  const sidebarRef = useRef(null);
  const sidebarColumnRef = useRef(null);
  const certificationsRef = useRef(null);
  const contentWrapperRef = useRef(null);

  return (
    <ProductPageLayout
      title={data.name}
      subtitle={data.description}
      bannerImage={data.bannerImage}
      slider={data.slider}
    >
      { }
      <div ref={contentWrapperRef} className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8 relative">
        <div ref={sidebarColumnRef} className="lg:col-span-3 relative">
          <div ref={sidebarRef} className="sticky top-[140px] self-start z-10 w-full">
            <FloatingSidebar navigationData={productsNavigationData} />
          </div>
        </div>

        <div className="lg:col-span-9 space-y-4">
          <ProductPageCommonSection data={data.commonSection} justifyText />
          <ApplicationsSection data={data.applicationsSection} />
          <PackagedResponsiblySection data={data.packagedResponsibly} />
          <ProductKeyFeaturesSection data={data.keyFeatures} />
        </div>
      </div>

      { }
      <div className="lg:hidden space-y-4 mb-4">
        <ProductPageCommonSection data={data.commonSection} justifyText />
        <ApplicationsSection data={data.applicationsSection} />
        <PackagedResponsiblySection data={data.packagedResponsibly} />
        <ProductKeyFeaturesSection data={data.keyFeatures} />
      </div>

      { }
      <div ref={certificationsRef} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <QualityStandardsSection />
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <RelatedProductsSection data={data.relatedProducts} onlyFirstCardHover={true} />
      </div>

      { }
      <div className="lg:hidden mb-8">
        <FloatingSidebar navigationData={productsNavigationData} />
      </div>

    </ProductPageLayout>
  );
}

