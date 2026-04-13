




const UNIVERSAL_HOVER_IMAGE = "/assets/RELATED PROD IMG/Petroleum jelly.png";

export const productHoverImages = {
  "Petroleum Jelly": "/assets/RELATED PROD IMG/Petroleum Jelly (2).png",
  "White Mineral Oils": "/assets/RELATED PROD IMG/Mineral Oil.png",
  "Microcrystalline Wax": "/assets/RELATED PROD IMG/New Hover Images/micro2.jpg",
  "Hard Paraffin Wax": "/assets/RELATED PROD IMG/New Hover Images/paraffin2.jpg",
  "Natural Beeswax": "/assets/RELATED PROD IMG/New Hover Images/beeswax2.jpg",
  "Emulsifying Wax": "/assets/RELATED PROD IMG/New Hover Images/emulsifying2.jpg",
  "D-Panthenol": "/assets/RELATED PROD IMG/D-Panthenol.png",
  "Preservatives": "/assets/RELATED PROD IMG/Frame 531 (4).png",
  "Surfactants": "/assets/RELATED PROD IMG/sodium-salphate.png",
  "UV Filters": "/assets/RELATED PROD IMG/ExtraUV/Frame 531 (12).png",
  "UV Filters (dermatological)": "/assets/RELATED PROD IMG/ExtraUV/Frame 531 (12).png",
  "UV Filters (makeup/SPF)": "/assets/RELATED PROD IMG/ExtraUV/Frame 531 (13).png",
  "Waxes": "/assets/RELATED PROD IMG/Beeswax2 (2).png",
  "Specialty Chemicals": "/assets/RELATED PROD IMG/sodium-salphate.png",
  "Mineral Oil": "/assets/RELATED PROD IMG/Mineral Oil.png",
};


export const getProductHoverImage = (name) => {
  const specificImage = productHoverImages[name];
  
  return specificImage || UNIVERSAL_HOVER_IMAGE;
};


export { UNIVERSAL_HOVER_IMAGE };


