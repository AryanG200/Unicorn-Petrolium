import React from 'react';
import ApplicationTemplate from '../ApplicationTemplate';
import { textileData } from './textileData';
import { useMetaTags } from '../../../hooks/useMetaTags';
import { useTranslation } from 'react-i18next';

export default function TextilePage() {
  const { t } = useTranslation('applications');
  const industryData = t('industries.textile', { returnObjects: true });

  useMetaTags(
    t('industries.textile.meta.title'),
    t('industries.textile.meta.description'),
    t('industries.textile.meta.keywords')
  );

  const translatedData = {
    ...textileData,
    hero: {
      ...textileData.hero,
      title: industryData.hero?.title || textileData.hero.title,
      description: industryData.hero?.description || textileData.hero.description
    },
    overview: {
      ...textileData.overview,
      title: industryData.overview?.title || textileData.overview.title,
      description: industryData.overview?.description || textileData.overview.description
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
        name: t('products.microcrystallineWax.name', 'Microcrystalline Wax'),
        link: "/products/microcrystalline-wax",
        description: t('products.microcrystallineWax.description'),
        image: "/assets/BannerImages/productsPage/mwax1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/mwax2.jpg"
      },
      {
        name: t('products.hardParaffinWax.name', 'Hard Paraffin Wax'),
        link: "/products/paraffin-wax",
        description: t('products.hardParaffinWax.description'),
        image: "/assets/BannerImages/productsPage/hwax1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/hwax2.jpg"
      },
      {
        name: t('products.lanolin.name', 'Lanolin'),
        link: "/products/lanolin",
        description: t('products.lanolin.description'),
        image: "/assets/BannerImages/productsPage/lan1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/lan2.jpg"
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
      title="Textile"
      breadcrumbsTitle={t('breadcrumbs.textile')}
      data={translatedData}
    />
  );
}
