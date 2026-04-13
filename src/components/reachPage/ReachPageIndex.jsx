import React from 'react';
import BannerWithNavigation from '../../Common/BannerWithNavigation';
import QualityStandardsSection from '../../Common/QualityStandardsSection';

const ReachPageIndex = () => {
  const breadcrumbs = [{ text: 'Home', link: '/' }, { text: 'Global Reach' }];

  return (
    <div className="min-h-screen">
      {}
      <BannerWithNavigation
        title={null}
        subtitle={null}
        bannerImage="/assets/hero-bg-home.jpg"
        breadcrumbs={breadcrumbs}
      />

      {}
      <section className="py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2">Global Reach</h1>
          <p className="text-base md:text-lg text-gray-700 mb-8">Delivering Quality Beyond Borders</p>
          <p className="text-gray-700 leading-7 text-left">
            With a legacy that spans over six decades, we’ve established a robust export network that connects us to
            clients across continents. Our commitment to quality, consistency, and timely delivery has enabled us to
            serve leading pharmaceutical, personal care, and industrial brands around the world.
          </p>
          <p className="text-gray-700 leading-7 mt-4 text-left">
            We are fully equipped to meet international documentation, regulatory, and logistical requirements — making
            global procurement seamless and dependable for our partners.
          </p>
        </div>
      </section>

      <QualityStandardsSection title="Certifications" subtitle={''} />
    </div>
  );
};

export default ReachPageIndex;
