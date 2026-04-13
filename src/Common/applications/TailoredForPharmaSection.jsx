import React from "react";

export default function TailoredForPharmaSection({ data }) {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{data.heading}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{data.subheading}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {data.features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            <div className="flex items-center justify-center text-[#E99322] text-5xl mb-6">
              {feature.icon && feature.icon.startsWith('/') ? (
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-16 h-16 mx-auto object-contain"
                />
              ) : (
                feature.icon
              )}
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
