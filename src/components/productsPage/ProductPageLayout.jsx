import React, { useMemo, useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { productsNavigationData } from "./productsNavigationData";
import SliderHero from "../../Common/SliderHero";

export default function ProductPageLayout({
  children,
  title,
  subtitle,
  bannerImage = "/assets/hero-bg-home.jpg",
  slider = [],
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const swipeStartX = useRef(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('right');
  const contentRef = useRef(null);

  
  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
    if (prevLocationRef.current !== location.pathname) {
      setIsTransitioning(true);
      
      
      const items = productsNavigationData?.categories ?? [];
      const prevIdx = items.findIndex(item => item.link === prevLocationRef.current);
      const currentIdx = items.findIndex(item => item.link === location.pathname);
      
      if (prevIdx !== -1 && currentIdx !== -1) {
        setAnimationDirection(currentIdx > prevIdx ? 'right' : 'left');
      }
      
      
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
      
      prevLocationRef.current = location.pathname;
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const { prevItem, nextItem, currentItem } = useMemo(() => {
    const items = productsNavigationData?.categories ?? [];
    if (items.length === 0) return { prevItem: null, nextItem: null, currentItem: null };

    
    let idx = items.findIndex((c) => c.link === location.pathname);
    
    if (idx === -1) {
      idx = items.findIndex((c) => Array.isArray(c.subItems) && c.subItems.some((s) => s.link === location.pathname));
    }

    if (idx === -1) {
      
      return { prevItem: null, nextItem: null, currentItem: null };
    }

    const prev = items[(idx - 1 + items.length) % items.length];
    const next = items[(idx + 1) % items.length];
    const current = items[idx];
    return { prevItem: prev, nextItem: next, currentItem: current };
  }, [location.pathname]);

  const resolvedTitle = title || currentItem?.name || (location.pathname === "/products" ? "Products" : "Product");
  const resolvedSubtitle = subtitle || "";

  const handleNavigation = (link, direction) => {
    if (isTransitioning) return;
    
    setAnimationDirection(direction);
    setIsTransitioning(true);
    
    // Navigate after a brief delay to allow exit animation
    setTimeout(() => {
      navigate(link);
    }, 200);
  };

  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    swipeStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchEnd = (e) => {
    if (!isSwiping || isTransitioning) return;
    const endX = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : null;
    if (endX == null || swipeStartX.current == null) {
      setIsSwiping(false);
      return;
    }
    const dx = endX - swipeStartX.current;
    const threshold = 50;
    if (dx > threshold && prevItem?.link) {
      handleNavigation(prevItem.link, 'left');
    } else if (dx < -threshold && nextItem?.link) {
      handleNavigation(nextItem.link, 'right');
    }
    setIsSwiping(false);
    swipeStartX.current = null;
  };
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden" style={{ marginTop: '-3%' }}>
      <SliderHero
        title={title || resolvedTitle}
        subtitle={subtitle || resolvedSubtitle}
        bannerImage={bannerImage}
        slides={slider}
        breadcrumbsTopClass="top-16 sm:top-20 md:top-28 lg:top-36"
        breadcrumbsNavClass="text-black font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base px-2 sm:px-4 -mt-[21%] md:mt-2 lg:mt-4"
         contentPosition="bottom"
         contentBackground="none"
         fullWidthContent={true}
      />

      {}
      <div className="relative max-w-7xl mx-auto px-4 py-6 overflow-x-hidden">
        <div ref={contentRef} className="page-transition-content">
          {children}
        </div>
      </div>
    </div>
  );
}
