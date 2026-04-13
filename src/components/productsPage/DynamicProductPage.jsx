import React from "react";
import { useParams } from "react-router-dom";
import StandardProductPage from "./StandardProductPage";

function toTitle(slug) {
  if (!slug) return "Product";
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export default function DynamicProductPage() {
  const { slug } = useParams();
  const title = toTitle(slug);
  return <StandardProductPage title={title} description="" />;
}


