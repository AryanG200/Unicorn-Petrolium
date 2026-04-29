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
        image: "/assets/BannerImages/productsPage/wmoo2.jpg",
        hoverImage: "/assets/BannerImages/productsPage/wmoo1.jpg"
      },
      {
        name: t('products.petroleumJelly.name', 'Petroleum Jelly'),
        link: "/products/petroleum-jelly",
        description: t('products.petroleumJelly.description'),
        image: "/assets/BannerImages/productsPage/PJ1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/PJ2.jpg"
      },
      {
        name: t('products.hardParaffinWax.name', 'Hard Paraffin Wax'),
        link: "/products/paraffin-wax",
        description: t('products.hardParaffinWax.description'),
        image: "/assets/BannerImages/productsPage/hwax2.jpg",
        hoverImage: "/assets/BannerImages/productsPage/hwax1.jpg"
      },
      {
        name: t('products.microcrystallineWax.name', 'Microcrystalline Wax'),
        link: "/products/microcrystalline-wax",
        description: t('products.microcrystallineWax.description'),
        image: "/assets/BannerImages/productsPage/mwax1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/mwax2.jpg"
      },
      {
        name: t('products.lanolin.name', 'Lanolin'),
        link: "/products/lanolin",
        description: t('products.lanolin.description'),
        image: "/assets/BannerImages/productsPage/lan1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/lan2.jpg"
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
      title="Lubricants"
      breadcrumbsTitle={t('breadcrumbs.lubricants')}
      data={translatedData}
    />
  );
}
