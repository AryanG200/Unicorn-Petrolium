import React from "react";
import { getProductHoverImage, UNIVERSAL_HOVER_IMAGE } from "../Data/productHoverImages";

const PreservativeProductsSection = ({ data }) => {
  if (!data || !data.products || data.products.length === 0) {
    return null;
  }

  const toTitleCase = (value) => {
    if (!value) return "";
    return value
      .split(" ")
      .map((word) => {
        if (!word) return "";
        if (word === word.toUpperCase()) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Preservatives
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.products.map((product, index) => {
            const Wrapper = product.pdfUrl ? "a" : "div";
            const wrapperProps = product.pdfUrl
              ? {
                  href: product.pdfUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
            <Wrapper
              key={index}
              className="bg-white rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-lg transition-all duration-300 overflow-hidden h-36 group block"
              {...wrapperProps}
            >
              <div className="grid h-full" style={{ gridTemplateColumns: '40% 60%' }}>
                <div className="h-full w-full relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={product.hoverImage || getProductHoverImage(product.name)}
                    alt={`${product.name} hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = UNIVERSAL_HOVER_IMAGE;
                    }}
                  />
                </div>
                
                <div className="h-full">
                  <div className="w-full h-full px-6 py-0 flex items-center justify-center text-center">
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight relative -top-1">
                      {toTitleCase(product.name)}
                    </h3>
                  </div>
                </div>
              </div>
            </Wrapper>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreservativeProductsSection;
