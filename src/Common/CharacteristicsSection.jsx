import React from "react";

const CharacteristicsSection = ({ data }) => {
  if (!data || !Array.isArray(data.items) || data.items.length === 0) {
    return null;
  }

  return (
    <section className="pt-6 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {data.heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            {data.heading}
          </h2>
        )}
        <div className="max-w-5xl mx-auto">
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4 text-left">
            {data.items.map((item, index) => {
              const [heading, ...rest] = item.split(":");
              const hasHeading = rest.length > 0 && heading.trim().length > 0;
              const body = hasHeading ? rest.join(":").trim() : item;

              return (
                <li key={index} className="pl-2">
                  {hasHeading ? (
                    <>
                      <span className="font-semibold underline">{heading.trim()}:</span>{" "}
                      {body}
                    </>
                  ) : (
                    item
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CharacteristicsSection;
