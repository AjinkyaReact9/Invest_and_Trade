import React from 'react'

const Pricing = () => {
  return (
    <div className='container' style={{marginTop: '150px', marginBottom: '35px'}}>
      <div className='row'>
        <div className='col-6'>
          <h2 className='mb-5 fs-15'>Unbeatable pricing</h2>
          <p style={{fontSize: '25px'}}>We pioneered the concept of discount broking and price transparency in India. 
            Flat fees and no hidden charges.</p>
            <div>
              <a style={{marginLeft: '5px', fontSize: '20px'}} href="">See pricing <i style={{marginLeft: '5px', fontSize: '20px'}} class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
        <div className='col-2'>
          <img src="media/images/pricing-eq.svg" alt="price image" /><p style={{fontSize: '20px'}}> Free account opening</p>
        </div>
        <div className='col-2'>
          <img src="media/images/pricing-eq.svg" alt="price image" /><p style={{fontSize: '20px'}}> Free equity delivery and direct mutual funds</p>
        </div>
        <div className='col-2'>
          <img src="media/images/other-trades.svg" alt="price image" /><p style={{fontSize: '20px'}}> Intraday and F&O</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
