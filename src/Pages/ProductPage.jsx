import React from "react";
import ProductsPageIndex from "../components/productsPage/ProductsPageIndex";
import { useMetaTags } from "../hooks/useMetaTags";

const ProductPage = () => {
  useMetaTags(
    "Products - Unicorn Petroleum | Premium Petroleum Products & Specialty Chemicals",
    "Explore Unicorn Petroleum's comprehensive range of products including petroleum jelly, mineral oils, waxes, preservatives, surfactants, UV filters, and specialty chemicals for pharmaceutical, cosmetic, and industrial applications.",
    "petroleum products, petroleum jelly, mineral oils, paraffin wax, microcrystalline wax, beeswax, emulsifying wax, D-panthenol, preservatives, parabens, surfactants, UV filters, specialty chemicals"
  );

  return (
    <div>
      <ProductsPageIndex />
    </div>
  );
};

export default ProductPage;
