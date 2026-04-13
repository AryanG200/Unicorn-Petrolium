import React, { useEffect, useRef, useState } from "react";





export default function IconRoadHero({ data = {} }) {
  const containerRef = useRef(null);
  const [visibleIndexes, setVisibleIndexes] = useState(new Set());
  const nodeRefs = useRef([]);
  const [lineStyle, setLineStyle] = useState({ top: "0px", bottom: "0px" });

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = Array.from(
      containerRef.current.querySelectorAll("[data-observe='true']")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setVisibleIndexes((prev) => new Set([...prev, idx]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = Array.isArray(data.items) ? data.items : [];

  
  useEffect(() => {
    const compute = () => {
      const sectionEl = containerRef.current;
      if (!sectionEl || nodeRefs.current.length === 0) return;
      const first = nodeRefs.current[0];
      const last = nodeRefs.current[nodeRefs.current.length - 1];
      if (!first || !last) return;
      const sRect = sectionEl.getBoundingClientRect();
      const fRect = first.getBoundingClientRect();
      const lRect = last.getBoundingClientRect();
      const fCenter = fRect.top + fRect.height / 2 - sRect.top;
      const lCenter = lRect.top + lRect.height / 2 - sRect.top;
      setLineStyle({ top: `${fCenter}px`, bottom: `${Math.max(0, sRect.height - lCenter)}px` });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [items.length]);

  return (
    <section className="relative w-full min-h-[80vh] pt-8 pb-16" ref={containerRef}>
      {}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#E99322] hidden md:block"
        style={lineStyle}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {}
        {(data.heading || data.subheading) && (
          <div className="text-center mb-12">
            {data.heading && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">{data.heading}</h2>
            )}
            {data.subheading && (
              <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-3">{data.subheading}</p>
            )}
          </div>
        )}

        {}
        <div className="space-y-12 sm:space-y-14 md:space-y-20">
          {items.map((item, index) => {
            const isLeftImage = index % 2 === 0; 
            const isVisible = visibleIndexes.has(index);
            const translate = isLeftImage ? "-translate-x-6" : "translate-x-6";
            const leftMask = {
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 88%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 88%)",
            };
            const rightMask = {
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 88%)",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 88%)",
            };
            const bottomMask = {
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
            };
            return (
              <div key={index} className="relative" data-observe="true" data-idx={index}>
                {}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" ref={(el)=> (nodeRefs.current[index] = el)}>
                  <div className="w-16 h-16 rounded-full bg-white border-[2px] border-[#EDA94E] shadow-md flex items-center justify-center">
                    {item.icon && item.icon.startsWith("/") ? (
                      <img src={item.icon} alt="icon" className="w-7 h-7 object-contain" />
                    ) : (
                      <span className="text-[#E99322] text-lg">★</span>
                    )}
                  </div>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${translate}`
                }`}>
                  {isLeftImage ? (
                    <>
                      <div className="pr-0 md:pr-6 relative">
                        {}
                        <img src={item.image} alt={item.title} className="block md:hidden w-full h-52 sm:h-64 object-cover rounded-xl shadow" style={bottomMask} />
                        {}
                        <img src={item.image} alt={item.title} className="hidden md:block w-full md:h-72 object-cover rounded-xl shadow" style={leftMask} />
                        <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-10">
                          <div className="w-16 h-16 rounded-full bg-white border-[2px] border-[#EDA94E] shadow-md flex items-center justify-center">
                            {item.icon && item.icon.startsWith("/") ? (
                              <img src={item.icon} alt="icon" className="w-7 h-7 object-contain" />
                            ) : (
                              <span className="text-[#E99322] text-lg">★</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="px-1 md:px-6 mt-8 md:mt-0 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700 text-sm sm:text-base max-w-[520px] mx-auto md:mx-0">{item.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="px-1 md:px-6 order-2 md:order-1 mt-8 md:mt-0 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700 text-sm sm:text-base max-w-[520px] mx-auto md:mx-0">{item.description}</p>
                      </div>
                      <div className="order-1 md:order-2 pl-0 md:pl-6 relative">
                        {}
                        <img src={item.image} alt={item.title} className="block md:hidden w-full h-52 sm:h-64 object-cover rounded-xl shadow" style={bottomMask} />
                        {}
                        <img src={item.image} alt={item.title} className="hidden md:block w-full md:h-72 object-cover rounded-xl shadow" style={rightMask} />
                        <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-10">
                          <div className="w-16 h-16 rounded-full bg-white border-[2px] border-[#EDA94E] shadow-md flex items-center justify-center">
                            {item.icon && item.icon.startsWith("/") ? (
                              <img src={item.icon} alt="icon" className="w-7 h-7 object-contain" />
                            ) : (
                              <span className="text-[#E99322] text-lg">★</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {}
        {data.ctaText && (
          <div className="text-center mt-12">
            <button className="bg-[#E99322] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#E99322]/90 transition-all duration-300 font-medium inline-flex items-center gap-2 text-sm sm:text-base">
              <span>{data.ctaText}</span>
              <span className="text-base sm:text-lg">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}


