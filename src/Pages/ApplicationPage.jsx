import React from "react";
import ComingSoon from "../Common/ComingSoon";
import { useMetaTags } from "../hooks/useMetaTags";

const ApplicationPage = () => {
  useMetaTags(
    "Applications - Unicorn Petroleum | Industry Solutions",
    "Discover how Unicorn Petroleum products are used across pharmaceutical, cosmetic, personal care, home care, textile, and lubricants industries. Tailored solutions for diverse applications.",
    "petroleum applications, pharmaceutical applications, cosmetic applications, industrial applications, personal care, home care, textile, lubricants"
  );

  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Applications" }
  ];
  return <ComingSoon title="Applications" breadcrumbs={breadcrumbs} />;
};

export default ApplicationPage;
