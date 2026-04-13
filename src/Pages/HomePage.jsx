import React from 'react'
import HomeIndex from '../components/Home/HomeIndex'
import { useMetaTags } from '../hooks/useMetaTags'

const HomePage = () => {
  useMetaTags(
    "Unicorn Petroleum - Premium Petroleum Products & Specialty Chemicals",
    "Unicorn Petroleum Industries is a leading manufacturer of premium petroleum products including petroleum jelly, mineral oils, waxes, and specialty chemicals for pharmaceutical, cosmetic, and industrial applications. Established in 1964.",
    "petroleum jelly, mineral oil, paraffin wax, microcrystalline wax, pharmaceutical ingredients, cosmetic ingredients, industrial chemicals, specialty chemicals, beeswax, emulsifying wax, D-panthenol, preservatives, surfactants, UV filters"
  );

  return (
    <div>
        <HomeIndex/>
    </div>
  )
}

export default HomePage