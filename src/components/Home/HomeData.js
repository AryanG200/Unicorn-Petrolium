export const getHomeData = (t) => ({

  iconRoadHero: {
    heading: t('home.strengths.heading', "Our strengths"),
    subheading: t('home.strengths.subheading', "Excellence built on six decades of expertise and trust"),
    centerLogo: "",
    ctaText: t('home.strengths.ctaText', "Request info"),
    items: [
      {
        icon: "/assets/Icons/Property 1=Trophy.png",
        title: t('home.strengths.items.0.title', "Six decades of expertise"),
        description: t('home.strengths.items.0.description', "Pioneering quality ingredients for the cosmetic and pharmaceutical world since 1964"),
        image: "/assets/about/Artboard 3.jpg"
      },
      {
        icon: "/assets/Icons/Property 1=Flask.png",
        title: t('home.strengths.items.1.title', "Custom tailored formulations"),
        description: t('home.strengths.items.1.description', "Seamless procurement, personalized support — delivering quality raw materials from India to the world"),
        image: "/assets/about/Artboard 2.jpg"
      },
      {
        icon: "/assets/Icons/Property 1=Thermal.png",
        title: t('home.strengths.items.2.title', "Petrochemical specialties"),
        description: t('home.strengths.items.2.description', "High-performance petrochemicals and specialties refined to meet the needs of various industries"),
        image: "/assets/new-petro-image.jpg"
      }
    ]
  },

  hero: {
    title: t('home.hero.title', "Pioneering Excellence in Petroleum Specialties for 6+ Decades"),
    subtitle: "",
    primaryButton: t('home.hero.primaryButton', "Explore Products"),
    primaryButtonLink: "/products",
    secondaryButton: t('home.hero.secondaryButton', "Why Choose Us?"),
    secondaryButtonLink: "/about",
    backgroundImage: "/assets/hero-bg-home.jpg",
    primaryButtonColor: "#E99322",
    secondaryButtonColor: "#E99322",

    slider: [
      {
        title: t('home.hero.title', "Pioneering Excellence in Petroleum Specialties for 6+ Decades"),
        subtitle: "",
        image: "/assets/BannerImages/HOMEPage.jpg",
        mobileImage: "/assets/BannerImages/HOMEPage.jpg"
      },
      {
        title: "",
        subtitle: "",
        image: "/assets/BannerImages/HomeBannerDesktop2.jpg",
        mobileImage: "/assets/BannerImages/HomeBannerMobile2.jpg"
      }
    ]
  },


  strengths: {
    heading: t('home.strengths.heading', "Our Strengths"),
    subheading: t('home.strengths.subheading', "Excellence built on six decades of expertise and trust"),
    cards: [
      {
        icon: "/assets/Icons/Property 1=Trophy.png",
        title: t('home.strengths.items.0.title', "Six Decades Expertise and trust"),
        description: t('home.strengths.items.0.description', "Pioneering quality ingredients for the cosmetic and pharmaceutical world since 1964"),
        link: "/about",
      },
      {
        icon: "/assets/Icons/Property 1=Flask.png",
        title: t('home.strengths.items.1.title', "Custom tailored formulations"),
        description: t('home.strengths.items.1.description', "Innovating raw materials that power global cosmetic & pharma brands"),
        link: "/quality",
      },
      {
        icon: "/assets/Icons/Property 1=Handshake.png",
        title: t('home.strengths.items.2.title', "Customer-Centric Approach"),
        description: t('home.strengths.items.2.description', "Seamless procurement, personalized support delivering quality raw materials from India to the world"),
        link: "/contact",
      },
    ],
    buttonText: t('home.products.viewDetails', "View All Strengths →"),
    buttonLink: "/about",
  },


  products: {
    heading: t('home.products.heading', "Our core product portfolio"),
    subheading: t('home.products.subheading', "Where Innovation Meets Quality - Since 1964"),
    cards: [
      {
        image: "/assets/BannerImages/productsPage/PJ1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/PJ2.jpg",
        title: t('navbar.petroleumJelly', "Petroleum Jelly"),
        description: "A highly refined semi-solid hydrocarbon base offering excellent stability and superior oil retention, with a controlled melting range and no decolourization to ensure consistent purity and performance.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/petroleum-jelly",
      },
      {
        image: "/assets/BannerImages/productsPage/wmoo1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/wmoo2.jpg",
        title: t('navbar.whiteMineralOils', "White Mineral Oils"),
        description: "A highly refined, clear and odourless liquid hydrocarbon with low PAH content offering excellent lubricity and formulation flexibility across multiple viscosity grades, featuring a high viscosity index and very low PAH content for consistent, reliable performance.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/white-mineral-oils",
      },
      {
        image: "/assets/BannerImages/productsPage/lan1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/lan2.jpg",
        title: t('navbar.lanolin', "Lanolin"),
        description: "Highly refined, high-purity wool wax alcohol complex with controlled odor and color offering excellent emolliency and water-binding capacity for dermatological and topical formulations.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/lanolin",
      },
      {
        image: "/assets/BannerImages/productsPage/mwax1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/mwax2.jpg",
        title: t('navbar.microcrystallineWax', "Microcrystalline Wax"),
        description: "A thoroughly refined hydrocarbon wax with fine crystalline structure, offering enhanced oil retention, superior flexibility, cohesion, and structural integrity in semi-solid systems and binding performance for ointments, sticks, and balm formulations for cosmetic and pharmaceutical applications.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/microcrystalline-wax",
      },
      {
        image: "/assets/BannerImages/productsPage/hwax1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/hwax2.jpg",
        title: t('navbar.hardParaffinWax', "Hard Paraffin Wax"),
        description: "A high-purity solid hydrocarbon wax with a high melting point and low oil content, suitable for coatings, candles, and industrial processing applications, offering excellent thermal stability for molding and surface protection uses.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/paraffin-wax",
      },
      {
        image: "/assets/BannerImages/productsPage/bee1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/bee2.jpg",
        title: t('navbar.naturalBeeswax', "Natural Beeswax"),
        description: "A naturally derived, ester-rich purified beeswax with controlled color and minimal impurities, offering excellent plasticity, enhanced film formation, and emulsification support while delivering reliable structure in lipsticks, balms, creams, and other topical formulations.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/natural-beeswax",
      },
      {
        image: "/assets/BannerImages/productsPage/ew1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/ew2.jpg",
        title: t('navbar.emulsifyingWax', "Emulsifying Wax"),
        description: "An optimised emulsifying system designed to create stable oil-in-water and water-in-oil emulsions with consistent viscosity, ensuring uniform dispersion, enhanced texture, and long-term stability in cosmetic and pharmaceutical base formulations.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/emulsifying-wax",
      },
      {
        image: "/assets/BannerImages/productsPage/dpan1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/dpan2.jpg",
        title: t('navbar.dPanthenol', "D-panthenol"),
        description: "Provitamin B5 derivative with high purity and pharmacopeial compliance, offering humectant action, enhanced moisturisation, skin repair, and conditioning performance in topical formulations.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/d-panthenol",
      },
      {
        image: "/assets/BannerImages/productsPage/sur1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/sur2.jpg",
        title: t('navbar.surfactants', "Surfactants"),
        description: "Engineered surface-active compounds in powder and liquid form that deliver efficient emulsification, wetting, and detergency in home and personal care formulations, while offering optimised foaming and dispersing performance through controlled HLB values ensuring effective cleaning.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/surfactants",
      },
      {
        image: "/assets/BannerImages/productsPage/pr1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/pr2.jpg",
        title: t('navbar.preservatives', "Preservatives"),
        description: "Broad-spectrum antimicrobial preservation systems formulated to maintain microbiological stability and extend shelf life in regulated applications, carefully engineered for seamless compatibility across both aqueous and emulsion-based formulations.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/preservatives",
      },
      {
        image: "/assets/BannerImages/productsPage/u1.jpg",
        hoverImage: "/assets/BannerImages/productsPage/u2.jpg",
        title: t('navbar.uvFilters', "UV Filters"),
        description: "Photostable UV-absorbing agents that deliver reliable broad-spectrum protection against UVA and UVB radiation, helping enhance SPF performance while maintaining overall formulation stability.",
        buttonText: t('home.products.viewDetails', "View Details →"),
        link: "/products/uv-filters",
      },
    ],
    buttonText: t('home.products.viewAll', "View All Products →"),
    buttonLink: "/products",
  },


  industries: {
    heading: t('home.industries.heading', "Catering to diverse industries worldwide"),
    subheading: t('home.industries.subheading', "Shaping the future of cosmetic & pharmaceutical ingredients"),
    mobileTwoCols: true,
    desktopCols: 3,

    showDescriptions: false,
    cards: [
      {
        icon: "/assets/Icons/Property 1=pharma.png",
        label: t('navbar.pharmaceutical', "Pharmaceutical"),
        hoverDescription: "Petroleum jellies, mineral oil, waxes and specialty chemicals",
        link: "/applications/pharmaceutical",
      },
      {
        icon: "/assets/Icons/Property 1=cosmetic.png",
        label: t('navbar.cosmetics', "Cosmetic"),
        hoverDescription: "Petroleum jellies, mineral oil, waxes, UV filters and specialty chemicals",
        link: "/applications/cosmetics",
      },
      {
        icon: "/assets/Icons/Property 1=herbal.png",
        label: t('navbar.personalCare', "Personal Care"),
        hoverDescription: "Petroleum jellies, mineral oil, waxes, emulsifiers and specialty chemicals",
        link: "/applications/personal-care",
      },
      {
        icon: "/assets/Icons/Bulk.png",
        label: t('navbar.homeCare', "Home Care"),
        hoverDescription: "Oils, waxes, preservatives and specialty chemicals",
        link: "/applications/home-care",
      },
      {
        icon: "/assets/Icons/Property 1=petro.png",
        label: t('navbar.textile', "Textile"),
        hoverDescription: "Lubricants, protective coatings and specialty chemicals",
        link: "/applications/textile",
      },
      {
        icon: "/assets/Icons/Property 1=lube.png",
        label: t('navbar.lubricants', "Lubricants"),
        hoverDescription: "Oils, waxes and protective coatings",
        link: "/applications/lubricants",
      },
    ],
    centerLastRow: true,
  },


  qualityStandards: {
    heading: t('home.qualityStandards.heading', "Globally Recognized Quality & Safety Standards"),
    subheading: t('home.qualityStandards.subheading', "Driven by quality, trusted for generations."),
    certifications: [
      { name: "FDA", fullName: "FOOD AND DRUG ADMINISTRATION" },
      { name: "WHO-GMP", fullName: "GOOD MANUFACTURING PRACTICE" },
      { name: "ISO 9001:2015", fullName: "ISO 9001:2015" },
      { name: "HALAL", fullName: "HALAL" },
      { name: "REACH", fullName: "REACH" },
      { name: "PHARMEXCIL", fullName: "pharmexcil" },
      { name: "POLLUTION CONTROL BOARD", fullName: "POLLUTION CONTROL BOARD" },
    ],
    linkText: t('home.qualityStandards.viewAll', "View All Certifications →"),
    linkUrl: "/about",
  },




  statement: {
    heading: t('home.statement.heading', "Unicorn Petroleum Industries Pvt. Ltd."),
    subheading: t('home.statement.subheading', "60+ Years of Excellence, Innovation, and Trust"),
    text: t('home.statement.text', "Global Ingredients. Indian Expertise. Trusted Worldwide"),
    linkText: t('home.statement.learnMore', "Learn More About Us →"),
    linkUrl: "/about",
  },


  cta: {
    heading: t('home.cta.heading', "Ready to Partner with Unicorn Petroleum?"),
    subtitle: t('home.cta.subtitle', "Contact us today for custom formulations, bulk orders, or technical inquiries."),
    primaryButton: t('home.cta.primaryButton', "Contact Sales"),
    primaryButtonLink: "/contact",
    secondaryButton: t('home.cta.secondaryButton', "Request Sample"),
    secondaryButtonLink: "/contact#quote-form-section",
  },
});
