import React from "react";
import ApplicationsPageIndex from "../components/applicationPage/ApplicationsPageIndex";
import { useMetaTags } from "../hooks/useMetaTags";

const ApplicationPage = () => {
  useMetaTags(
    "Applications - Unicorn Petroleum | Industry Solutions",
    "Discover how Unicorn Petroleum products are used across pharmaceutical, cosmetic, personal care, home care, textile, and lubricants industries. Tailored solutions for diverse applications.",
    "petroleum applications, pharmaceutical applications, cosmetic applications, industrial applications, personal care, home care, textile, lubricants"
  );

  return (
    <div>
      <ApplicationsPageIndex />
    </div>
  );
};

export default ApplicationPage;
