export function buildStandardProductData({ name, description, t }) {
  const resolvedName = name || "Product";
  const resolvedDescription = description || "";

  return {
    name: resolvedName,
    description: resolvedDescription,

    commonSection: {
      title: resolvedName,
      description: resolvedDescription,
      additionalInfo: t('standard.additionalInfo', "This page follows Unicorn's standard layout. Provide brochure and specs as needed."),
      brochureUrl: "#",
    },

    applicationsSection: {
      productName: resolvedName.toLowerCase(),
      applications: t('standard.applicationsPlaceholder', "Content will be updated from Figma desktop copy. This placeholder keeps alignment consistent."),
      finalProductUtilization: t('standard.useCases', { returnObjects: true, defaultValue: ["Use case 1", "Use case 2", "Use case 3"] }),
    },

    packagedResponsibly: {
      packagingOptions: [
        { icon: "/assets/Icons/ICON/Icon 4.jpg.jpeg", type: t('standard.packaging.bags', "Bags"), weight: "25 kg" },
        { icon: "box", type: t('standard.packaging.cartons', "Cartons"), weight: "25 kg" },
      ],
    },

    keyFeatures: {
      heading: t('standard.features.heading', `Key Features of ${resolvedName} from Unicorn`),
      features: [
        {
          icon: "/assets/Icons/Property 1=Compliance.png",
          title: t('standard.features.quality.title', "Quality & Compliance"),
          items: t('standard.features.quality.items', { returnObjects: true, defaultValue: ["Consistent quality", "Regulatory conformance", "Reliable supply"] }),
        },
        {
          icon: "/assets/Icons/Property 1=Compliance.png",
          title: t('standard.features.versatility.title', "Application Versatility"),
          items: t('standard.features.versatility.items', { returnObjects: true, defaultValue: ["Multiple end uses", "Stable performance", "Formulation friendly"] }),
        },
      ],
    },

    relatedProducts: {
      relatedProducts: [
        { name: t('standard.related.mineralOil', "Mineral Oil"), image: "/assets/RELATED PROD IMG/NEW IMAGES/whiteMineraloil1.jpg" },
        { name: t('standard.related.microcrystalline', "Microcrystalline Wax"), image: "/assets/RELATED PROD IMG/NEW IMAGES/microcrystalline wax.jpg" },
        { name: t('standard.related.paraffin', "Hard Paraffin Wax"), image: "/assets/RELATED PROD IMG/NEW IMAGES/paraffinwax.jpg" },
      ],
    },
  };
}

export default buildStandardProductData;


