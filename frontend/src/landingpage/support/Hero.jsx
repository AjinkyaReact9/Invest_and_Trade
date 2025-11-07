import React from 'react'

const Hero = () => {
  return (
    <section className='container-fluid' id='supportHero'>
      <div className='p-5' id='supportWrap'>
        <h4>Support</h4>
        <a className='text-white' href="/">Track Tickets</a>
      </div>
      <div className='row p-5 mt-2'>
        <div className='col-6'>
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input style={{width: '100%', borderRadius: '5px', borderColor:'#fff'}} className='p-3' type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected.' />
          <div className='mt-3'>
            <span><a className='text-white' href="/">Track account opening</a> &nbsp; <a className='text-white' href="/">Track segment activation</a>&nbsp;<a className='text-white' href="/">Intraday</a></span>
          </div>
          <div className='mt-3'>
            <span><a className='text-white' href="/">margins</a>&nbsp;<a className='text-white' href="/">Kite user manual</a></span>
          </div>
        </div>
        <div className='col-1'></div>
        <div className='col-5'>
          <h4>Featured</h4>
          <ol className=''>
            <li><a className='text-white' href="/">Current Takeovers and Delisting - January 2025</a></li>
            <li><a className='text-white' href="/">Latest intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Hero
