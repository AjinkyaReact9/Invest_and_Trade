import React from 'react'

const LeftSection = ({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, coin }) => {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-6 p-3'>
          <img src={imageURL} style={{width: '80%'}} />
        </div>
        <div className='col-6 p-3 mt-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {/* <a href={coin}>Coin<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> */}
            <a href={tryDemo}>Try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft: '50px'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className='mt-3'>
            <a href={googlePlay}><img src='../../media/images/google-play-badge.svg' /></a>
            <a href={appStore} style={{marginLeft: '50px'}}><img src='../../media/images/appstore-badge.svg' /></a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LeftSection
