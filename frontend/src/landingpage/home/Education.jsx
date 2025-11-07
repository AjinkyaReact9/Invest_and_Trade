import React from 'react'

const Education = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 mt-5'>
          <img src="media/images/index-education.svg" alt="education image" />
        </div>
        <div className='col-6 mt-5 p-3'>
          <h3 className='p-3'>Free and open market education</h3>
          <p className='p-3'>Varsity, the largest online stock market education book in the world 
            covering everything from the basics to advanced trading.</p>
            <a style={{fontSize: '20px'}} href="">Varsity<i style={{marginLeft: '5px', fontSize: '20px'}} class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <h3 className='p-3'>Free and open market education</h3>
          <p className='p-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a style={{fontSize: '20px'}} href="">TradingQ&A<i style={{marginLeft: '5px', fontSize: '20px'}} class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education
