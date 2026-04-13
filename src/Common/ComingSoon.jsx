import React from "react";
import BannerWithNavigation from "./BannerWithNavigation";

export default function ComingSoon({ title = "Coming Soon", breadcrumbs }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <BannerWithNavigation title={title} breadcrumbs={breadcrumbs} />
      <div className="min-h-[40vh] flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <p className="text-xl md:text-2xl text-gray-700">
            This page is under construction.
          </p>
        </div>
      </div>
    </div>
  );
}
