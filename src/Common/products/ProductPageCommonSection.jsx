import React from "react";
import { useNavigate } from "react-router-dom";

const ProductPageCommonSection = ({ data, alignLeft = false, justifyText = true }) => {
  const navigate = useNavigate();

  const handleRequestInfo = () => {
    navigate("/about#quote-form-section");
  };

  return (
    <section className="pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {data.title || "Product Title"}
          </h1>
          
          <div className={alignLeft ? "prose max-w-3xl mx-auto mb-8 text-left" : "prose max-w-none mb-8"}>
            <p className={`text-lg text-gray-600 leading-relaxed mb-6${justifyText ? " text-justify text-left" : ""}`}>
              {data.description || "Product description will come from the product's JSON file."}
            </p>

            {data.additionalInfo && (
              <p className={`text-lg text-gray-600 leading-relaxed mb-4${justifyText ? " text-justify text-left" : ""}`}>
                {data.additionalInfo}
              </p>
            )}

            {Array.isArray(data.bulletPoints) && data.bulletPoints.length > 0 && (
              <ul
                className={
                  alignLeft
                    ? "list-disc list-outside pl-5 md:pl-8 text-left text-base md:text-lg text-gray-600 space-y-2"
                    : "list-disc list-inside text-left text-lg text-gray-600 space-y-1"
                }
              >
                {data.bulletPoints.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button 
            onClick={handleRequestInfo}
            className="bg-[#E99322] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#E99322]/90 transition-all duration-300 flex items-center gap-2"
          >
            <span>Request Info</span>
            <span className="text-base sm:text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPageCommonSection;
