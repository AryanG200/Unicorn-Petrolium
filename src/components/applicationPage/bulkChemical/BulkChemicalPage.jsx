import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { bulkChemicalData } from './bulkChemicalData';
import { useMetaTags } from '../../../hooks/useMetaTags';
import { useTranslation } from 'react-i18next';

export default function BulkChemicalPage() {
  const { t } = useTranslation('applications');
  const industryData = t('industries.home-care', { returnObjects: true });

  useMetaTags(
    t('industries.home-care.meta.title'),
    t('industries.home-care.meta.description'),
    t('industries.home-care.meta.keywords')
  );

  const translatedData = {
    ...bulkChemicalData,
    hero: {
      ...bulkChemicalData.hero,
      title: industryData.hero?.title || bulkChemicalData.hero.title,
      description: industryData.hero?.description || bulkChemicalData.hero.description
    },
    overview: {
      ...bulkChemicalData.overview,
      title: industryData.overview?.title || bulkChemicalData.overview.title,
      description: industryData.overview?.description || bulkChemicalData.overview.description
    },
    relatedProducts: [
      {
        name: t('products.whiteMineralOils.name', 'White Mineral Oils'),
        link: "/products/white-mineral-oils",
        description: t('products.whiteMineralOils.description'),
        image: "/assets/BannerImages/productsPage/wmoo1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/wmoo2.jpg"
      },
      {
        name: t('products.naturalBeeswax.name', 'Natural Beeswax'),
        link: "/products/natural-beeswax",
        description: t('products.naturalBeeswax.description'),
        image: "/assets/BannerImages/productsPage/bee1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/bee2.jpg"
      },
      {
        name: t('products.hardParaffinWax.name', 'Hard Paraffin Wax'),
        link: "/products/paraffin-wax",
        description: t('products.hardParaffinWax.description'),
        image: "/assets/BannerImages/productsPage/hwax1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/hwax2.jpg"
      },
      {
        name: t('products.preservatives.name', 'Preservatives'),
        link: "/products/preservatives",
        description: t('products.preservatives.description'),
        image: "/assets/BannerImages/productsPage/pr1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/pr2.jpg"
      },
      {
        name: t('products.surfactants.name', 'Surfactants'),
        link: "/products/surfactants",
        description: t('products.surfactants.description'),
        image: "/assets/BannerImages/productsPage/sur1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/sur2.jpg"
      }
    ]
  };

  return (
    <ApplicationTemplate
      title="Home Care"
      breadcrumbsTitle={t('breadcrumbs.home-care')}
      data={translatedData}
    />
  );
}
