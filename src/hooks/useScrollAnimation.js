import { useEffect, useRef, useState } from 'react';


export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          } else if (options.once === false) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return { ref, isVisible };
};


export const useStaggeredAnimation = (itemCount, options = {}) => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const itemElements = container.querySelectorAll('[data-stagger-item]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-stagger-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
            
            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -30px 0px'
      }
    );

    itemElements.forEach((el) => observer.observe(el));

    return () => {
      itemElements.forEach((el) => observer.unobserve(el));
    };
  }, [itemCount, options.threshold, options.rootMargin, options.once]);

  return { containerRef, visibleItems };
};
