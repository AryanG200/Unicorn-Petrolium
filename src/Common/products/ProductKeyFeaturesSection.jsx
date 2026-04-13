import React from "react";

const ProductKeyFeaturesSection = ({ data }) => {
  if (!data || !data.features) {
    return null;
  }

  const isSingleCard = Array.isArray(data.features) && data.features.length === 1;

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            {data.heading || "Key Features"}
          </h3>
        </div>

        <div className={`grid ${isSingleCard ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6 max-w-[756px] mx-auto justify-items-center`}>
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 w-full h-[350px] max-w-[360px] mx-auto flex flex-col justify-center items-center"
            >
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-orange-50 rounded-full flex items-center justify-center">
                  {feature.icon && typeof feature.icon === 'string' && feature.icon.startsWith('/') ? (
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <span className="text-orange-500 text-xl">{feature.icon}</span>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
              </div>

              {Array.isArray(feature.items) && feature.items.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductKeyFeaturesSection;
