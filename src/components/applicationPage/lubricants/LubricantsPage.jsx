import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { lubricantsData } from './lubricantsData';
import { useMetaTags } from '../../../hooks/useMetaTags';
import { useTranslation } from 'react-i18next';

export default function LubricantsPage() {
  const { t } = useTranslation('applications');
  const industryData = t('industries.lubricants', { returnObjects: true });
  
  useMetaTags(
    t('industries.lubricants.meta.title'),
    t('industries.lubricants.meta.description'),
    t('industries.lubricants.meta.keywords')
  );

  const translatedData = {
    ...lubricantsData,
    hero: {
      ...lubricantsData.hero,
      title: industryData.hero?.title || lubricantsData.hero.title,
      description: industryData.hero?.description || lubricantsData.hero.description
    },
    overview: {
      ...lubricantsData.overview,
      title: industryData.overview?.title || lubricantsData.overview.title,
      description: industryData.overview?.description || lubricantsData.overview.description
    },
    relatedProducts: [
      {
        name: t('products.whiteMineralOils.name', 'White Mineral Oils'),
        link: "/products/white-mineral-oils",
        description: t('products.whiteMineralOils.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/whiteMineraloil1.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/WhiteMineraloil.jpg"
      },
      {
        name: t('products.petroleumJelly.name', 'Petroleum Jelly'),
        link: "/products/petroleum-jelly",
        description: t('products.petroleumJelly.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Petroleumjelly.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/Petroleumjelly.jpg"
      },
      {
        name: t('products.hardParaffinWax.name', 'Hard Paraffin Wax'),
        link: "/products/paraffin-wax",
        description: t('products.hardParaffinWax.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/paraffinwax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/paraffin2.jpg"
      },
      {
        name: t('products.microcrystallineWax.name', 'Microcrystalline Wax'),
        link: "/products/microcrystalline-wax",
        description: t('products.microcrystallineWax.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/microcrystalline wax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/micro2.jpg"
      },
      {
        name: t('products.lanolin.name', 'Lanolin'),
        link: "/products/lanolin",
        description: t('products.lanolin.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/lanolin.jpg",
        hoverImage: "/assets/RELATED PROD IMG/NEW IMAGES/lanolin.jpg"
      },
      {
        name: t('products.preservatives.name', 'Preservatives'),
        link: "/products/preservatives",
        description: t('products.preservatives.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Preservative.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/preservative.jpg"
      }
    ]
  };

  return (
    <ApplicationTemplate
      title="Lubricants"
      breadcrumbsTitle={t('breadcrumbs.lubricants')}
      data={translatedData}
    />
  );
}
