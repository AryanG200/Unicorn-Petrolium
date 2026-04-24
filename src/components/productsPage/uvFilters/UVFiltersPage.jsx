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
