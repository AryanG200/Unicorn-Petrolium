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
        name: t('products.microcrystallineWax.name', 'Microcrystalline Wax'),
        link: "/products/microcrystalline-wax",
        description: t('products.microcrystallineWax.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/microcrystalline wax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/micro2.jpg"
      },
      {
        name: t('products.hardParaffinWax.name', 'Hard Paraffin Wax'),
        link: "/products/paraffin-wax",
        description: t('products.hardParaffinWax.description'),
        image: "/assets/RELATED PROD IMG/NEW IMAGES/paraffinwax.jpg",
        hoverImage: "/assets/RELATED PROD IMG/New Hover Images/paraffin2.jpg"
      },
      {
        name: t('products.lanolin.name', 'Lanolin'),
        link: "/products/lanolin",
        description: t('products.lanolin.description'),
        image: "/assets/RELATED%20PROD%20IMG/lanolin-1.jpg",
        hoverImage: "/assets/RELATED%20PROD%20IMG/lanolin1.jpg"
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
      title="Textile"
      breadcrumbsTitle={t('breadcrumbs.textile')}
      data={translatedData}
    />
  );
}
