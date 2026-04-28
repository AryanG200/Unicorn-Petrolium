import React from "react";
import { Link } from "react-router-dom";

export default function BannerWithNavigation({
  children,
  title,
  subtitle,
  bannerImage = "/assets/hero-bg-home.jpg",
  breadcrumbs,
  backgroundPosition = "center",
  backgroundSize = "cover",
  heightClass = "h-[400px] sm:h-[500px] md:h-[550px] md:-mt-16",
  style = {},
  backgroundColor = "transparent",
  showOverlay = true
}) {
  return (
    <div 
      className={`relative w-full ${heightClass} overflow-hidden pt-4 md:pt-8`}
      style={style}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: "no-repeat",
          backgroundColor: backgroundColor,
        }}
      />
      {showOverlay && <div className="absolute inset-0 bg-white/25" />}

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-black max-w-4xl mx-auto px-4">
          {title && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>

      {breadcrumbs && (
        <div className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-1/2 -translate-x-1/2 z-20 breadcrumbs-container w-[95%] max-w-7xl">
          <nav className="text-black font-semibold text-xs sm:text-sm md:text-base lg:text-lg bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full inline-block mx-auto flex justify-center items-center overflow-x-auto scrollbar-hide whitespace-nowrap shadow-sm">
            <ol className="flex items-center space-x-1 sm:space-x-2 px-1">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li className="flex-shrink-0">
                    {crumb.link ? (
                      <Link to={crumb.link} className="hover:text-[#E99322] transition-colors">
                        {crumb.text}
                      </Link>
                    ) : (
                      <span className="text-gray-900">{crumb.text}</span>
                    )}
                  </li>
                  {index < breadcrumbs.length - 1 && <li className="text-gray-400">›</li>}
                </React.Fragment>
              ))}
            </ol>
          </nav>
        </div>
      )}
    </div>
  );
}
