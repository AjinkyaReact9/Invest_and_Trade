import React from 'react'

const RaiseTicket = () => {
  return (
    <div className='container'>
      <div className='row'>
        <h3 className='text-center mt-5'>To create a ticket, select a relevant topic</h3>
        <div className='col-4 mt-5'>
          <p className='fs-5 p-3'><i className="fa fa-plus-circle mx-3" aria-hidden="true"></i>Account Opening</p>
          <div className='support-links p-3' style={{ listStyleType: 'none', lineHeight:'3', textDecoration: 'none' }}>
            <li><a href=''>Online Account Opening</a></li>
            <li><a href=''>Offline Account Opening</a></li>
            <li><a href=''>Company, Partnership and HUF Account Opening</a></li>
            <li><a href=''>NRI Account Opening</a></li>
            <li><a href=''>Charges at Zerodha</a></li>
            <li><a href=''>Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
            <li><a href=''>Getting Started</a></li>
          </div>
        </div>
        <div className='col-4 mt-5'>
          <p className='fs-5 p-3'><i className="fa fa-user mx-3" aria-hidden="true"></i>Your Zerodha Account</p>
          <div className='support-links p-3' style={{ listStyleType: 'none', lineHeight:'3' }}>
            <li><a href=''>Login Credentials</a></li>
            <li><a href=''>Account Modification and Segment Addition</a></li>
            <li><a href=''>DP ID and ban details</a></li>
            <li><a href=''>Your Profile</a></li>
            <li><a href=''>Transfer and conversion of shares</a></li>
          </div>
        </div>
        <div className='col-4 mt-5'>
          <p className='fs-5 p-3'><i className="fa fa-bar-chart mx-3" aria-hidden="true"></i>Your Zerodha Account</p>
          <div className='support-links p-3' style={{ listStyleType: 'none', lineHeight:'3' }}>
            <li><a href=''>Margin/leverage, Product and Order types</a></li>
            <li><a href=''>Kite Web and Mobile</a></li>
            <li><a href=''>Trading FAQs</a></li>
            <li><a href=''>Corporate Actions</a></li>
            <li><a href=''>Sentinel</a></li>
            <li><a href=''>Kite API</a></li>
            <li><a href=''>Pi and other platform</a></li>
            <li><a href=''>Stockreports+</a></li>
            <li><a href=''>GTT</a></li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RaiseTicket
