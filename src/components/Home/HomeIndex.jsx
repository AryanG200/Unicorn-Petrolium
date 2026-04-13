import React from "react";
import { useTranslation } from "react-i18next";
import SliderHero from "../../Common/SliderHero";
import IconRoadHero from "../../Common/IconRoadHero";
import FGridSection from "../../Common/FGridSection";
import ProductPortfolioSection from "../../Common/ProductPortfolioSection";
import CardsSection from "../../Common/CardsSection";
import QualityStandardsSection from "../../Common/QualityStandardsSection";
import NewsSection from "../../Common/NewsSection";
import CallToAction from "../../Common/CallToAction";
import CompanyStatement from "../../Common/CompanyStatement";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { getHomeData } from "./HomeData";

const HomeIndex = () => {
  const { t } = useTranslation();
  const homeData = getHomeData(t);
  const firstSectionRef = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {}
      <SliderHero
        title={homeData.hero.title}
        subtitle={homeData.hero.subtitle}
        slides={homeData.hero.slider}
        bannerImage={homeData.hero.backgroundImage}
        autoPlayInterval={5000}
        primaryButton={homeData.hero.primaryButton}
        primaryButtonLink={homeData.hero.primaryButtonLink}
        secondaryButton={homeData.hero.secondaryButton}
        secondaryButtonLink={homeData.hero.secondaryButtonLink}
        primaryButtonColor={homeData.hero.primaryButtonColor}
        secondaryButtonColor={homeData.hero.secondaryButtonColor}
        overlapClass="md:-mt-4"
        paddingTopClass="pt-0 md:pt-[68px]"
      />

      {}
      <div ref={firstSectionRef.ref} className={`scroll-animate ${firstSectionRef.isVisible ? 'visible' : ''}`}>
        <IconRoadHero data={homeData.iconRoadHero} />
      </div>

      {}
      <ProductPortfolioSection data={homeData.products} />

      {}
      <CardsSection data={{ ...homeData.industries, centerLastRow: true }} />

      {}
      <QualityStandardsSection />

      {}
      <NewsSection data={homeData.news} />

      {}
      {}

      {}
      <CallToAction data={homeData.cta} />
    </div>
  );
};

export default HomeIndex;
