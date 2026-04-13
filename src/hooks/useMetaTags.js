import { useEffect } from 'react';

export const useMetaTags = (title, description, keywords = '', robots = 'index, follow') => {
  useEffect(() => {
    
    if (title) {
      document.title = title;
    }

    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }

    
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', robots);
    } else {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      metaRobots.content = robots;
      document.head.appendChild(metaRobots);
    }

    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.content = title;
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      const newOgDescription = document.createElement('meta');
      newOgDescription.setAttribute('property', 'og:description');
      newOgDescription.content = description;
      document.head.appendChild(newOgDescription);
    }

    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    } else {
      const newTwitterTitle = document.createElement('meta');
      newTwitterTitle.name = 'twitter:title';
      newTwitterTitle.content = title;
      document.head.appendChild(newTwitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    } else {
      const newTwitterDescription = document.createElement('meta');
      newTwitterDescription.name = 'twitter:description';
      newTwitterDescription.content = description;
      document.head.appendChild(newTwitterDescription);
    }

  }, [title, description, keywords, robots]);
};
