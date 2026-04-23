import React from "react";
import { Link } from "react-router-dom";


function MobileCardsLayout({ cards, showDescriptions }) {
  const cardsCount = cards.length;
  const isOdd = cardsCount % 2 !== 0;
  const regularCardsCount = isOdd ? cardsCount - 1 : cardsCount;

  return (
    <div className="md:hidden">
      <div className={`grid grid-cols-2 gap-4 ${isOdd ? 'mb-4' : ''}`}>
        {cards.slice(0, regularCardsCount).map((card, index) => {
          const CardWrapper = card.link ? Link : "div";
          const cardProps = card.link
            ? { to: card.link }
            : {};
          return (
            <CardWrapper
              key={`m-${index}`}
              {...cardProps}
              className={`bg-white p-4 rounded-2xl border-[1.5px] border-[#EDA94E] transition-all duration-300 text-center flex flex-col justify-center cursor-pointer ${
                card.link ? "hover:shadow-xl hover:border-[#E99322]" : ""
              }`}
              style={{ minHeight: '150px' }}
            >
              <div className="text-[#E99322] mb-2 flex justify-center">
                {card.icon && card.icon.startsWith('/') ? (
                  <img src={card.icon} alt={card.title || card.label || card.name} className="w-10 h-10 object-contain" />
                ) : (
                  card.icon
                )}
              </div>
              <div className="font-semibold text-gray-800 text-sm">
                {card.title || card.label || card.name}
              </div>
              {showDescriptions && (card.hoverDescription || card.description) && (
                <div className="text-gray-700 text-xs mt-1">
                  {card.hoverDescription || card.description}
                </div>
              )}
            </CardWrapper>
          );
        })}
      </div>
      {isOdd && cardsCount > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="col-span-2 justify-self-center w-[calc(50%-0.5rem)]">
            {(() => {
              const card = cards[cardsCount - 1];
              const CardWrapper = card.link ? Link : "div";
              const cardProps = card.link
                ? { to: card.link }
                : {};
              return (
                <CardWrapper
                  {...cardProps}
                  className={`bg-white p-4 rounded-2xl border-[1.5px] border-[#EDA94E] text-center flex flex-col justify-center cursor-pointer ${
                    card.link ? "hover:shadow-xl hover:border-[#E99322]" : ""
                  }`}
              style={{ minHeight: '150px' }}
            >
              <div className="text-[#E99322] mb-2 flex justify-center">
                {cards[cardsCount - 1].icon && cards[cardsCount - 1].icon.startsWith('/') ? (
                  <img src={cards[cardsCount - 1].icon} alt={cards[cardsCount - 1].title || cards[cardsCount - 1].label || cards[cardsCount - 1].name} className="w-10 h-10 object-contain" />
                ) : (
                  cards[cardsCount - 1].icon
                )}
              </div>
              <div className="font-semibold text-gray-800 text-sm">
                {cards[cardsCount - 1].title || cards[cardsCount - 1].label || cards[cardsCount - 1].name}
              </div>
              {showDescriptions && (cards[cardsCount - 1].hoverDescription || cards[cardsCount - 1].description) && (
                <div className="text-gray-700 text-xs mt-1">
                  {cards[cardsCount - 1].hoverDescription || cards[cardsCount - 1].description}
                </div>
              )}
                </CardWrapper>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CardsSection({ data }) {
  if (!data || !data.cards || data.cards.length === 0) {
    return null;
  }

  const cardsCount = data.cards.length;
  const lgColsClass = data.desktopCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  const gridClasses =
    cardsCount <= 4 && !data.desktopCols
      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      : `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${lgColsClass} gap-6`;

  const centerLastRow = Boolean(data.centerLastRow) && cardsCount > 4;
  const showDescriptions = data.showDescriptions !== false;

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {data.heading && (
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-tight">
              {data.heading}
            </h2>
            {data.subheading && (
              <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center">{data.subheading}</p>
            )}
          </div>
        )}

        {}
        {Boolean(data.mobileTwoCols) && (
          <MobileCardsLayout cards={data.cards} showDescriptions={showDescriptions} />
        )}

        {}
        {centerLastRow && cardsCount % 4 === 3 ? (
          <>
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {data.cards.slice(0, 4).map((card, index) => (
                <Link
                  key={index}
                  to={card.link || "#"}
                  className="bg-white p-4 sm:p-6 rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center flex flex-col h-[220px] sm:h-[240px] md:h-[260px]"
                >
                  <div className="flex-1 flex items-center justify-center text-[#E99322] text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {card.icon && card.icon.startsWith('/') ? (
                      <img 
                        src={card.icon} 
                        alt={card.title || card.label || card.name} 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto object-contain"
                      />
                    ) : (
                      card.icon
                    )}
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-[#E99322] transition-colors text-sm sm:text-base">
                    <span className="block">{card.title || card.label || card.name}</span>
                  </h3>
                </Link>
              ))}
            </div>
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-6 lg:hidden">
              {data.cards.slice(4).map((card, index) => (
                <Link
                  key={index + 4}
                  to={card.link || "#"}
                  className="bg-white p-6 rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center h-[260px] flex flex-col"
                >
                  <div className="flex-1 flex items-center justify-center text-[#E99322] text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {card.icon && card.icon.startsWith('/') ? (
                      <img 
                        src={card.icon} 
                        alt={card.title || card.label || card.name} 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto object-contain"
                      />
                    ) : (
                      card.icon
                    )}
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-[#E99322] transition-colors text-sm sm:text-base">
                    <span className="block">{card.title || card.label || card.name}</span>
                  </h3>
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex justify-center gap-6">
              {data.cards.slice(4).map((card, index) => (
                <Link
                  key={index + 4}
                  to={card.link || "#"}
                  className="w-[240px]"
                >
                  <div className="bg-white p-6 rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center h-[260px] flex flex-col">
                    <div className="flex-1 flex items-center justify-center text-[#E99322] text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {card.icon && card.icon.startsWith('/') ? (
                        <img 
                          src={card.icon} 
                          alt={card.title || card.label || card.name} 
                          className="w-14 h-14 mx-auto object-contain"
                        />
                      ) : (
                        card.icon
                      )}
                    </div>

                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#E99322] transition-colors">
                      <span className="block">{card.title || card.label || card.name}</span>
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className={`${gridClasses} ${Boolean(data.mobileTwoCols) ? 'hidden md:grid' : ''}`}>
            {data.cards.map((card, index) => (
              <Link
                key={index}
                to={card.link || "#"}
                className="bg-white p-4 sm:p-6 rounded-2xl border-[1.5px] border-[#EDA94E] hover:shadow-xl hover:border-[#EDA94E] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center flex flex-col h-[220px] sm:h-[240px] md:h-[260px]"
              >
                <div className="flex-1 flex items-center justify-center text-[#E99322] text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {card.icon && card.icon.startsWith('/') ? (
                    <img 
                      src={card.icon} 
                      alt={card.title || card.label || card.name} 
                      className="w-14 h-14 mx-auto object-contain"
                    />
                  ) : (
                    card.icon
                  )}
                </div>

                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#E99322] transition-colors">
                  <span className="block">{card.title || card.label || card.name}</span>
                  {showDescriptions && (card.hoverDescription || card.description) && (
                    <span className="block text-gray-600 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{card.hoverDescription || card.description}</span>
                  )}
                </h3>
              </Link>
            ))}
          </div>
        )}

        {data.buttonText && (
          <div className="text-center mt-4 sm:mt-6">
            <Link
              to={data.buttonLink || "/applications"}
              className="inline-flex items-center gap-2 bg-[#E99322] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#E99322]/90 transition-all duration-300 font-medium text-sm sm:text-base"
            >
              <span>{data.buttonText}</span>
              <span className="text-base sm:text-lg">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

