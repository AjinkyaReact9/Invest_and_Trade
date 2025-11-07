import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container border-bottom mb-5'>
      <div className='text-center mt-5 p-5 product-hero-text'>
          <h2>Zerodha Products</h2>
          <p>Sleek, modern, and intuitive trading platforms</p>
          <p>Check out our <Link className='product-hero-links' to={'/'}>investment offerings</Link><i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
        </div>
    </div>
  )
}

export default Hero
