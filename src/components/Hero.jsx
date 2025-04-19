import React from 'react'
// UI's
import CategoryDropdown from './ui/CategoryDropdown'
import HeroBanner from './ui/HeroBanner'

const Hero = () => {
  return (
    <div className='flex gap-5'>
      {/* Category Dropdown */}
      <CategoryDropdown/>
      {/* Hero Banner */}
      <HeroBanner/>
    </div>
  )
}

export default Hero