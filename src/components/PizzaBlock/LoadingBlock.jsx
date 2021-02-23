import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="269" rx="6" ry="6" width="280" height="24" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="408" rx="0" ry="0" width="89" height="27" />
      <rect x="119" y="403" rx="35" ry="35" width="151" height="44" />
      <circle cx="130" cy="130" r="130" />
    </ContentLoader>
  );
}
export default LoadingBlock;
