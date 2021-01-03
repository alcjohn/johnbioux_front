import React from "react";

interface SeoProps {
  seo: any;
}

const Seo: React.FC<SeoProps> = ({ seo }) => {
  if (!seo) {
    return null;
  }
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.metaDesc} />
      <script type="application/ld+json">{seo.schema.raw}</script>
    </>
  );
};
export default Seo;
