import React from 'react'
// UI's
import CategoryDropdown from './ui/CategoryDropdown'
import HeroBanner from './ui/HeroBanner'

const Hero = () => {
  return (
    <div>
      {/* Category Dropdown */}
      <CategoryDropdown/>
      {/* Hero Banner */}
      <HeroBanner/>
    </div>
  )
}

export default Hero