import BlogPageIndex from "../components/blogPage/BlogPageIndex";
import { useMetaTags } from "../hooks/useMetaTags";
import { useTranslation } from "react-i18next";

const BlogPage = () => {
  const { t } = useTranslation("blog");

  useMetaTags(
    t("meta.title", "Blog - Unicorn Petroleum | Insights & Industry News"),
    t("meta.description", "Stay updated with the latest news, insights, and industry trends from Unicorn Petroleum. Read our articles on petrochemical specialties, wax applications, and more."),
    t("meta.keywords", "Unicorn Petroleum blog, petroleum industry news, petrochemical insights, wax applications, quality standards")
  );

  return (
    <div>
      <BlogPageIndex />
    </div>
  );
};

export default BlogPage;
