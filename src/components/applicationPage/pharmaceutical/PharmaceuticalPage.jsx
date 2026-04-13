import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { pharmaceuticalData } from './pharmaceuticalData';
import { useMetaTags } from '../../../hooks/useMetaTags';
import { useTranslation } from 'react-i18next';

export default function PharmaceuticalPage() {
  const { t } = useTranslation('applications');
  const industryData = t('industries.pharmaceutical', { returnObjects: true });
  
  useMetaTags(
    t('meta.title'),
    t('meta.description'),
    t('meta.keywords')
  );

  const translatedData = {
    ...pharmaceuticalData,
    hero: {
      ...pharmaceuticalData.hero,
      title: industryData.hero?.title || pharmaceuticalData.hero.title,
      description: industryData.hero?.description || pharmaceuticalData.hero.description
    },
    overview: {
      ...pharmaceuticalData.overview,
      title: industryData.overview?.title || pharmaceuticalData.overview.title,
      description: industryData.overview?.description || pharmaceuticalData.overview.description
    },
    relatedProducts: [
      {
        name: t('products.petroleumJelly.name', 'Petroleum Jelly'),
        link: "/products/petroleum-jelly",
        description: t('products.petroleumJelly'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Petroleumjelly.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/Petroleumjelly.jpg"
      },
      {
        name: t('products.whiteMineralOils.name', 'White Mineral Oils'),
        link: "/products/white-mineral-oils",
        description: t('products.whiteMineralOils'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/whiteMineraloil1.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/WhiteMineraloil.jpg"
      },
      {
        name: t('products.lanolin.name', 'Lanolin'),
        link: "/products/lanolin",
        description: t('products.lanolin'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/lanolin.jpg",
        hoverImage: "/assets/RELATED PROD IMG/NEW IMAGES/lanolin.jpg"
      },
      {
        name: t('products.naturalBeeswax.name', 'Natural Beeswax'),
        link: "/products/natural-beeswax",
        description: t('products.naturalBeeswax'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Naturalbeeswax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/beeswax2.jpg"
      },
      {
        name: t('products.emulsifyingWax.name', 'Emulsifying Wax'),
        link: "/products/emulsifying-wax",
        description: t('products.emulsifyingWax'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/emulsifyingwax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/emulsifying2.jpg"
      },
      {
        name: t('products.dPanthenol.name', 'D-Panthenol'),
        link: "/products/d-panthenol",
        description: t('products.dPanthenol'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Dpanthenol.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/Panthenol.jpg"
      },
      {
        name: t('products.preservatives.name', 'Preservatives'),
        link: "/products/preservatives",
        description: t('products.preservatives'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Preservative.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/preservative.jpg"
      }
    ]
  };

  return (
    <ApplicationTemplate
      title="Pharmaceutical"
      breadcrumbsTitle={t('breadcrumbs.pharmaceutical')}
      data={translatedData}
    />
  );
}
