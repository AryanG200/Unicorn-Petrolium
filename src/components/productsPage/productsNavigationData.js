export const productsNavigationData = {
  categories: [
    {
      id: "petroleum-jelly",
      name: "Petroleum Jelly",
      hasSubItems: false,
      isActive: true,
      link: "/products/petroleum-jelly"
    },
    {
      id: "white-mineral-oils",
      name: "White Mineral Oils",
      hasSubItems: true,
      isActive: false,
      link: "/products/white-mineral-oils",
      subItems: [
        { id: "light-mineral-oil", name: "Light Mineral Oil", link: "/products/light-mineral-oil" },
        { id: "heavy-mineral-oil", name: "Heavy Mineral Oil", link: "/products/heavy-mineral-oil" }
      ]
    },
    {
      id: "lanolin",
      name: "Lanolin",
      hasSubItems: false,
      isActive: false,
      link: "/products/lanolin"
    },
    {
      id: "microcrystalline-wax",
      name: "Microcrystalline Wax",
      hasSubItems: false,
      isActive: false,
      link: "/products/microcrystalline-wax"
    },
    {
      id: "paraffin-wax",
      name: "Hard Paraffin Wax",
      hasSubItems: true,
      isActive: false,
      link: "/products/paraffin-wax",
      subItems: [
        { id: "soft-paraffin", name: "Soft Paraffin", link: "/products/soft-paraffin" },
        { id: "hard-paraffin", name: "Hard Paraffin", link: "/products/hard-paraffin" }
      ]
    },
    {
      id: "natural-beeswax",
      name: "Natural Beeswax",
      hasSubItems: false,
      isActive: false,
      link: "/products/natural-beeswax"
    },
    {
      id: "emulsifying-wax",
      name: "Emulsifying Wax",
      hasSubItems: false,
      isActive: false,
      link: "/products/emulsifying-wax"
    },
    {
      id: "d-panthenol",
      name: "D-Panthenol",
      hasSubItems: false,
      isActive: false,
      link: "/products/d-panthenol"
    },
    {
      id: "preservatives",
      name: "Preservatives",
      hasSubItems: true,
      isActive: false,
      link: "/products/preservatives",
      subItems: [
        { id: "parabens", name: "Parabens", link: "/products/parabens" },
        { id: "phenoxyethanol", name: "Phenoxyethanol", link: "/products/phenoxyethanol" }
      ]
    },
    {
      id: "surfactants",
      name: "Surfactants",
      hasSubItems: true,
      isActive: false,
      link: "/products/surfactants",
      subItems: [
        { id: "anionic", name: "Anionic", link: "/products/anionic" },
        { id: "nonionic", name: "Nonionic", link: "/products/nonionic" }
      ]
    },
    {
      id: "uv-filters",
      name: "UV Filters",
      hasSubItems: true,
      isActive: false,
      link: "/products/uv-filters",
      subItems: [
        { id: "organic-filters", name: "Organic Filters", link: "/products/organic-filters" },
        { id: "inorganic-filters", name: "Inorganic Filters", link: "/products/inorganic-filters" }
      ]
    }
  ]
};

export default productsNavigationData; 