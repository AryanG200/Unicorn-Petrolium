import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { agrochemicalData } from './agrochemicalData';
import { useMetaTags } from '../../../hooks/useMetaTags';
import { useTranslation } from 'react-i18next';

export default function AgrochemicalPage() {
  const { t } = useTranslation('applications');
  const industryData = t('industries.agrochemical', { returnObjects: true });
  
  useMetaTags(
    t('industries.agrochemical.meta.title'),
    t('industries.agrochemical.meta.description'),
    t('industries.agrochemical.meta.keywords')
  );

  const translatedData = {
    ...agrochemicalData,
    hero: {
      ...agrochemicalData.hero,
      title: industryData.hero?.title || agrochemicalData.hero.title,
      description: industryData.hero?.description || agrochemicalData.hero.description
    },
    overview: {
      ...agrochemicalData.overview,
      title: industryData.overview?.title || agrochemicalData.overview.title,
      description: industryData.overview?.description || agrochemicalData.overview.description
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
        name: t('products.hardParaffinWax.name', 'Hard Paraffin Wax'),
        link: "/products/paraffin-wax",
        description: t('products.hardParaffinWax.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/paraffinwax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/paraffin2.jpg"
      },
      {
        name: t('products.emulsifyingWax.name', 'Emulsifying Wax'),
        link: "/products/emulsifying-wax",
        description: t('products.emulsifyingWax.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/emulsifyingwax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/emulsifying2.jpg"
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
      },
      {
        name: t('products.uvFilters.name', 'UV Filters'),
        link: "/products/uv-filters",
        description: t('products.uvFilters.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/uvfilters.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/uvFilters.jpg"
      }
    ]
  };

  return (
    <ApplicationTemplate
      title="Agrochemical"
      breadcrumbsTitle={t('breadcrumbs.agrochemical')}
      data={translatedData}
    />
  );
}
