import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <div className='container mt-5 '>
      <div className='row mt-5'>
        <div className='col-6'>
          <img src="" alt="" />
        </div>
        <div className='col-6'>
          <h3 className=''>
            People
          </h3>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. 
            Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <Link className='about-links' to={'/'}>Homepage</Link> / <Link className='about-links' >TradingQnA</Link> / <Link className='about-links' >Twitter</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Team
