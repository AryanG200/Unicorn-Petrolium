import React from "react";
import { Link } from "react-router-dom";

export default function NewsSection({ data }) {
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
            {data.heading}
          </h2>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border-[1.5px] border-[#EDA94E] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-stretch gap-3 sm:gap-4 p-3 sm:p-4">
                {}
                <div className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-40 lg:h-32 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {}
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 text-xs">
                    <span className="font-medium text-[#E99322] bg-[#E99322]/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs">
                      NEWS
                    </span>
                    <span className="text-gray-500 text-xs">{card.date}</span>
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 line-clamp-2 text-sm sm:text-base">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 md:line-clamp-3">
                    {card.description}
                  </p>

                  <Link
                    to={card.linkUrl || "/blog"}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[#E99322] hover:text-[#E99322]/80 font-medium text-xs sm:text-sm mt-2 sm:mt-3 self-end"
                  >
                    {card.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 