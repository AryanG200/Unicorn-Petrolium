import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POST_METADATA } from "../components/blogPage/BlogPageIndex";
import { useTranslation } from "react-i18next";

const SingleBlogPage = () => {
  const { id } = useParams();
  const { t } = useTranslation("blog");
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = BLOG_POST_METADATA.find(p => p.id === parseInt(id));
    if (meta) {
      const translatedPost = {
        ...meta,
        ...t(`posts.${meta.slug}`, { returnObjects: true })
      };
      setPost(translatedPost);
    }
  }, [id, t]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center animate-in fade-in duration-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("ui.postNotFound")}</h2>
          <Link to="/blog" className="text-[#E99322] hover:underline font-medium">← {t("ui.backToBlog")}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] min-h-[350px] w-full animate-in fade-in duration-1000">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = "/assets/hero-bg-home.jpg"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12 max-w-5xl mx-auto flex flex-col justify-end">
          <Link to="/blog" className="text-white/80 hover:text-white mb-6 flex items-center gap-2 w-fit group">
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t("ui.backToBlog")}
          </Link>
          <div className="flex items-center gap-3 mb-4 animate-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
            <span className="bg-[#E99322] text-white text-sm font-bold px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
              {post.category}
            </span>
            <span className="text-gray-200 text-sm font-medium drop-shadow-md">{post.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg animate-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16 animate-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <p className="text-xl sm:text-2xl font-medium text-gray-800 border-l-4 border-[#EDA94E] pl-6 mb-12 mt-2 italic leading-relaxed text-gray-600">
          {post.excerpt}
        </p>
        <div 
          className="prose prose-lg sm:prose-xl prose-gray max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </div>
  );
};

export default SingleBlogPage;
