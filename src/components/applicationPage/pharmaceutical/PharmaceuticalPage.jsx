import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { pharmaceuticalData } from './pharmaceuticalData';
import { useMetaTags } from '../../../hooks/useMetaTags';
import { useTranslation } from 'react-i18next';

export default function PharmaceuticalPage() {
  const { t } = useTranslation('applications');
  const industryData = t('industries.pharmaceutical', { returnObjects: true });

  useMetaTags(
    t('industries.pharmaceutical.meta.title'),
    t('industries.pharmaceutical.meta.description'),
    t('industries.pharmaceutical.meta.keywords')
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
        description: t('products.petroleumJelly.description'),
        image: "/assets/BannerImages/productsPage/PJ1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/PJ2.jpg"
      },
      {
        name: t('products.whiteMineralOils.name', 'White Mineral Oils'),
        link: "/products/white-mineral-oils",
        description: t('products.whiteMineralOils.description'),
        image: "/assets/BannerImages/productsPage/wmoo1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/wmoo2.jpg"
      },
      {
        name: t('products.lanolin.name', 'Lanolin'),
        link: "/products/lanolin",
        description: t('products.lanolin.description'),
        image: "/assets/BannerImages/productsPage/lan1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/lan2.jpg"
      },
      {
        name: t('products.naturalBeeswax.name', 'Natural Beeswax'),
        link: "/products/natural-beeswax",
        description: t('products.naturalBeeswax.description'),
        image: "/assets/BannerImages/productsPage/bee1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/bee2.jpg"
      },
      {
        name: t('products.emulsifyingWax.name', 'Emulsifying Wax'),
        link: "/products/emulsifying-wax",
        description: t('products.emulsifyingWax.description'),
        image: "/assets/BannerImages/productsPage/ew1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/ew2.jpg"
      },
      {
        name: t('products.dPanthenol.name', 'D-Panthenol'),
        link: "/products/d-panthenol",
        description: t('products.dPanthenol.description'),
        image: "/assets/BannerImages/productsPage/dpan1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/dpan2.jpg"
      },
      {
        name: t('products.preservatives.name', 'Preservatives'),
        link: "/products/preservatives",
        description: t('products.preservatives.description'),
        image: "/assets/BannerImages/productsPage/pr1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/pr2.jpg"
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
