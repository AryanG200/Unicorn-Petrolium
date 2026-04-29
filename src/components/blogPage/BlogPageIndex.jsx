import React from "react";
import BannerWithNavigation from "../../Common/BannerWithNavigation";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// IDs and non-translatable fields
export const BLOG_POST_METADATA = [
  { id: 1, slug: "post1", image: "/assets/about/packaging.jpg" },
  { id: 2, slug: "post2", image: "/assets/about/r&d.jpg" },
  { id: 3, slug: "post3", image: "/assets/about/Advance production units.jpg" },
];

export default function BlogPageIndex() {
  const { t } = useTranslation("blog");

  const blogPosts = BLOG_POST_METADATA.map(post => ({
    ...post,
    ...t(`posts.${post.slug}`, { returnObjects: true })
  }));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative animate-in fade-in duration-700 pt-14">
      <BannerWithNavigation
        bannerImage="/assets/BannerImages/blognewtoday.jpg"
        title={<span className="relative -top-16 sm:-top-28 md:-top-36">Our Blog</span>}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundColor="#ffffff"
        showOverlay={false}
        heightClass="h-[400px] sm:h-[500px] md:h-[550px]"
      />

      <div className="flex-grow max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border-[1.5px] border-[#EDA94E] overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full animate-in slide-in-from-bottom-8 fade-in fill-mode-both"
              style={{ animationDelay: `${index * 150}ms`, animationDuration: '700ms' }}
            >
              <Link to={`/blog/${post.id}`} className="relative h-48 overflow-hidden shrink-0 block group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "/assets/hero-bg-home.jpg";
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#E99322] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  {post.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <Link to={`/blog/${post.id}`} className="text-xl font-bold text-gray-900 mb-3 hover:text-[#E99322] transition-colors block">
                  {post.title}
                </Link>
                <p className="text-gray-700 text-base mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1 text-[#E99322] font-semibold group/link text-left mt-auto hover:text-[#c47719] transition-colors w-fit"
                >
                  {t("ui.readMore")}
                  <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
