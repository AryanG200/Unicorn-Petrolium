import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { cosmeticsData } from './cosmeticsData';
import { useMetaTags } from '../../../hooks/useMetaTags';
import { useTranslation } from 'react-i18next';

export default function CosmeticsPage() {
  const { t } = useTranslation('applications');
  const industryData = t('industries.cosmetics', { returnObjects: true });
  
  useMetaTags(
    t('industries.cosmetics.meta.title'),
    t('industries.cosmetics.meta.description'),
    t('industries.cosmetics.meta.keywords')
  );

  const translatedData = {
    ...cosmeticsData,
    hero: {
      ...cosmeticsData.hero,
      title: industryData.hero?.title || cosmeticsData.hero.title,
      description: industryData.hero?.description || cosmeticsData.hero.description
    },
    overview: {
      ...cosmeticsData.overview,
      title: industryData.overview?.title || cosmeticsData.overview.title,
      description: industryData.overview?.description || cosmeticsData.overview.description
    },
    relatedProducts: [
      {
        name: t('products.petroleumJelly.name', 'Petroleum Jelly'),
        link: "/products/petroleum-jelly",
        description: t('products.petroleumJelly.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Petroleumjelly.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/Petroleumjelly.jpg"
      },
      {
        name: t('products.whiteMineralOils.name', 'White Mineral Oils'),
        link: "/products/white-mineral-oils",
        description: t('products.whiteMineralOils.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/whiteMineraloil1.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/WhiteMineraloil.jpg"
      },
      {
        name: t('products.naturalBeeswax.name', 'Natural Beeswax'),
        link: "/products/natural-beeswax",
        description: t('products.naturalBeeswax.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Naturalbeeswax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/beeswax2.jpg"
      },
      {
        name: t('products.emulsifyingWax.name', 'Emulsifying Wax'),
        link: "/products/emulsifying-wax",
        description: t('products.emulsifyingWax.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/emulsifyingwax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/emulsifying2.jpg"
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
        name: t('products.dPanthenol.name', 'D-Panthenol'),
        link: "/products/d-panthenol",
        description: t('products.dPanthenol.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Dpanthenol.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/Panthenol.jpg"
      },
      {
        name: t('products.uvFilters.name', 'UV Filters'),
        link: "/products/uv-filters",
        description: t('products.uvFilters.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/uvfilters.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/uvFilters.jpg"
      },
      {
        name: t('products.preservatives.name', 'Preservatives'),
        link: "/products/preservatives",
        description: t('products.preservatives.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/Preservative.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/preservative.jpg"
      },
      {
        name: t('products.surfactants.name', 'Surfactants'),
        link: "/products/surfactants",
        description: t('products.surfactants.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/surfactant.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/surfactant.jpg"
      }
    ]
  };

  return (
    <ApplicationTemplate
      title="Cosmetics"
      breadcrumbsTitle={t('breadcrumbs.cosmetics')}
      data={translatedData}
    />
  );
}
