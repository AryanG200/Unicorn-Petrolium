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

  return (
    <ProductPageLayout title={data.name} subtitle={data.description}>
      {}
      <div ref={contentWrapperRef} className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8 relative">
        <div ref={sidebarColumnRef} className="lg:col-span-3 relative">
          <div ref={sidebarRef} className="sticky top-[140px] self-start z-10 w-full">
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


