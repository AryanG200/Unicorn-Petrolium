import React from "react";

export default function CallToAction({ data }) {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
      <div className="w-full text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
          {data.heading}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">{data.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={data.primaryButtonLink}
            className="bg-[#E99322] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#E99322]/90 transition-all duration-300 font-medium flex items-center gap-2 justify-center text-sm sm:text-base"
          >
            <span>{data.primaryButton}</span>
            <span className="text-base sm:text-lg">→</span>
          </a>
          <a
            href={data.secondaryButtonLink}
            className="border-[1.5px] border-[#EDA94E] text-[#E99322] px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#E99322] hover:text-white transition-all duration-300 font-medium flex items-center gap-2 justify-center text-sm sm:text-base"
          >
            {data.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  );
} 