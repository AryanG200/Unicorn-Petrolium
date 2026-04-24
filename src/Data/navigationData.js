
export const navigationData = {
  about: {
    title: "About Us",
    link: "/about"
  },
  applications: {
    title: "Applications",
    categories: [
      { id: 'pharmaceutical', name: 'Pharmaceutical', link: '/applications/pharmaceutical' },
      { id: 'cosmetics', name: 'Cosmetics', link: '/applications/cosmetics' },
      { id: 'personal-care', name: 'Personal Care', link: '/applications/personal-care' },
      { id: 'home-care', name: 'Home Care', link: '/applications/home-care' },
      { id: 'textile', name: 'Textile', link: '/applications/textile' },
      { id: 'lubricants', name: 'Lubricants', link: '/applications/lubricants' }
    ]
  },
  products: {
    title: "Products",
    categories: [
      { id: 'petroleum-jelly', name: 'Petroleum Jelly', link: '/products/petroleum-jelly' },
      { id: 'white-mineral-oils', name: 'White Mineral Oils', link: '/products/white-mineral-oils' },
      { id: 'microcrystalline-wax', name: 'Microcrystalline Wax', link: '/products/microcrystalline-wax' },
      { id: 'paraffin-wax', name: 'Hard Paraffin Wax', link: '/products/paraffin-wax' },
      { id: 'natural-beeswax', name: 'Natural Beeswax', link: '/products/natural-beeswax' },
      { id: 'lanolin', name: 'Lanolin', link: '/products/lanolin' },
      { id: 'emulsifying-wax', name: 'Emulsifying Wax', link: '/products/emulsifying-wax' },
      { id: 'd-panthenol', name: 'D-Panthenol', link: '/products/d-panthenol' },
      { id: 'preservatives', name: 'Preservatives', link: '/products/preservatives' },
      { id: 'surfactants', name: 'Surfactants', link: '/products/surfactants' },
      { id: 'uv-filters', name: 'UV Filters', link: '/products/uv-filters' }
    ]
  }
};


export const getNavigationData = (section) => {
  return navigationData[section] || null;
};

export default navigationData;
