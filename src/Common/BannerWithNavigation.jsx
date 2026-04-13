import React from "react";
import { Link } from "react-router-dom";

export default function BannerWithNavigation({
  children,
  title,
  subtitle,
  bannerImage = "/assets/hero-bg-home.jpg",
  breadcrumbs
}) {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] overflow-hidden md:-mt-16 pt-4 md:pt-8">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-white/25" />

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
        <div className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-1/2 -translate-x-1/2 z-20 breadcrumbs-container">
          <nav className="text-black font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
            <ol className="flex items-center space-x-1 sm:space-x-2">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li>
                    {crumb.link ? (
                      <Link to={crumb.link} className="hover:text-gray-700">
                        {crumb.text}
                      </Link>
                    ) : (
                      <span className="text-gray-900">{crumb.text}</span>
                    )}
                  </li>
                  {index < breadcrumbs.length - 1 && <li>›</li>}
                </React.Fragment>
              ))}
            </ol>
          </nav>
        </div>
      )}
    </div>
  );
}
