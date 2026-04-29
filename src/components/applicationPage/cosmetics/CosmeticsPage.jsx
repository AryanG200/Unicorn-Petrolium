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
        image: "/assets/BannerImages/productsPage/ew2.jpg",
        hoverImage: "/assets/BannerImages/productsPage/ew2.jpg"
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
        name: t('products.dPanthenol.name', 'D-Panthenol'),
        link: "/products/d-panthenol",
        description: t('products.dPanthenol.description'),
        image: "/assets/BannerImages/productsPage/dpan1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/dpan2.jpg"
      },
      {
        name: t('products.uvFilters.name', 'UV Filters'),
        link: "/products/uv-filters",
        description: t('products.uvFilters.description'),
        image: "/assets/BannerImages/productsPage/u1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/u2.jpg"
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
      title="Cosmetics"
      breadcrumbsTitle={t('breadcrumbs.cosmetics')}
      data={translatedData}
    />
  );
}
