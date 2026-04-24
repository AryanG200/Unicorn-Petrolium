import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductPageLayout from "../ProductPageLayout";
import FloatingSidebar from "../../../Common/FloatingSidebar";
import ProductPageCommonSection from "../../../Common/products/ProductPageCommonSection";
import QualityStandardsSection from "../../../Common/QualityStandardsSection";
import ApplicationsSection from "../../../Common/ApplicationsSection";
import PackagedResponsiblySection from "../../../Common/PackagedResponsiblySection";
import PreservativeProductsSection from "../../../Common/PreservativeProductsSection";
import RelatedProductsSection from "../../../Common/RelatedProductsSection";
import { productsNavigationData } from "../productsNavigationData";
import { preservativesData } from "./preservativesData";
import { useMetaTags } from "../../../hooks/useMetaTags";

export default function PreservativesPage() {
  const { t } = useTranslation('products');
  const pageData = t('pages.preservatives', { returnObjects: true });

  useMetaTags(
    pageData.meta.title,
    pageData.meta.description,
    pageData.meta.keywords
  );

  const data = {
    ...preservativesData,
    name: pageData.name,
    description: pageData.purity,
    slider: preservativesData.slider.map((slide, i) =>
      i === 0
        ? { ...slide, title: pageData.name, subtitle: pageData.purity }
        : slide
    ),
    commonSection: {
      ...preservativesData.commonSection,
      title: pageData.common.title,
      description: pageData.common.description,
      additionalInfo: pageData.common.additionalInfo,
    },
    preservativeProducts: {
      ...preservativesData.preservativeProducts,
      products: preservativesData.preservativeProducts.products.map((prod, i) => ({
        ...prod,
        name: pageData.products[i]?.name || prod.name,
        description: pageData.products[i]?.desc || prod.description,
      }))
    },
    applicationsSection: {
      ...preservativesData.applicationsSection,
      applications: pageData.applications.intro,
      applicationPoints: pageData.applications.points,
      finalProductUtilization: pageData.applications.items,
    },
    packagedResponsibly: {
      ...preservativesData.packagedResponsibly,
      packagingOptions: (preservativesData.packagedResponsibly?.packagingOptions || []).map(opt => {
        let translatedType = opt.type;
        const lowType = opt.type.toLowerCase();
        if (lowType.includes('bag')) translatedType = t('packaging.bags');
        else if (lowType.includes('fibre') || lowType.includes('fiber')) translatedType = t('packaging.fibre');
        else if (lowType.includes('ibc')) translatedType = t('packaging.ibc');
        else if (lowType.includes('hdpe')) translatedType = t('packaging.hdpe');
        
        return { ...opt, type: translatedType };
      })
    }
  };

  const sidebarRef = useRef(null);
  const sidebarColumnRef = useRef(null);
  const certificationsRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const contentColumnRef = useRef(null);

  return (
    <ProductPageLayout title={data.name} subtitle={data.description} bannerImage={data.bannerImage} slider={data.slider}>
      <div ref={contentWrapperRef} className="hidden lg:grid lg:grid-cols-12 gap-8 mb-8 relative items-start">
        <div ref={sidebarColumnRef} className="lg:col-span-3 relative self-stretch">
          <div ref={sidebarRef} className="sticky top-[140px] z-10 w-full">
            <FloatingSidebar navigationData={productsNavigationData} />
          </div>
        </div>

        <div ref={contentColumnRef} className="lg:col-span-9 space-y-4">
          <ProductPageCommonSection data={data.commonSection} />
          <PreservativeProductsSection data={data.preservativeProducts} />
          <ApplicationsSection data={data.applicationsSection} />
          <PackagedResponsiblySection data={data.packagedResponsibly} />
        </div>
      </div>

      <div className="lg:hidden space-y-4 mb-4">
        <ProductPageCommonSection data={data.commonSection} />
        <PreservativeProductsSection data={data.preservativeProducts} />
        <ApplicationsSection data={data.applicationsSection} />
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
