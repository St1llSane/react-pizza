import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaBlockSkeleton = (props) => (
  <ContentLoader
    speed={1.5}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f2f2f2"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="124" r="125" />
    <rect x="0" y="270" rx="5" ry="5" width="280" height="24" />
    <rect x="0" y="310" rx="5" ry="5" width="280" height="84" />
    <rect x="0" y="415" rx="5" ry="5" width="87" height="27" />
    <rect x="122" y="405" rx="5" ry="5" width="151" height="44" />
  </ContentLoader>
)

export default PizzaBlockSkeleton
