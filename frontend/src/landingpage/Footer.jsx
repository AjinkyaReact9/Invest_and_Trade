import React from 'react'

const Footer = () => {
  return (
    <footer style={{backgroundColor: "rgba(250, 250, 250)"}}>
      <div className='container border-top mt-5'>
      <div className='row mt-5'>
        <div className='col-4'>
          <img src="" alt="" />
          <p>&copy; 2010 - 2025, Zerodha Broking Ltd.</p>
          <p>All rights reserved.</p>
          <div className='footer-icons'>
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
          <i class="fa fa-telegram" aria-hidden="true"></i>
          </div>

        </div>
        <div className='col-2 main-footer' >
          <ul className='list-style'>
            <li className='nav-head'>Account</li>
            <li className='li-list-style'>Open demat account</li>
            <li>Minor demat account</li>
            <li>NRI demat account</li>
            <li>Commodity</li>
            <li>Dematerialisation</li>
            <li>Fund transfer</li>
            <li>MTF</li>
            <li>Referral program</li>
          </ul>
        </div>
        <div className='col-2 main-footer'>
          <ul className='list-style'>
            <li className='nav-head'>Support</li>
            <li className='li-list-style'>Contact us</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
            <li>Bulletin</li>
            <li>Circular</li>
            <li>Z-Connect blog</li>
            <li>Downloads</li>
          </ul>
        </div>
        <div className='col-2 main-footer'>
          <ul className='list-style'>
            <li className='nav-head'>Company</li>
            <li className='li-list-style'>About</li>
            <li>Philosophy</li>
            <li>Press & media</li>
            <li>Careers</li>
            <li>Zerodha Cares (CSR)</li>
            <li>Zerodha.tech</li>
            <li>Open source</li>
          </ul>
        </div>
        <div className='col-2 main-footer'>
          <ul className='list-style'>
            <li className='nav-head'>Quick links</li>
            <li className='li-list-style'>Upcoming IPOs</li>
            <li>Brokerage charges</li>
            <li>Market holidays</li>
            <li>Calculators</li>
            <li>Markets</li>
            <li>Sectors</li>
            {/* <li>MTF</li>
            <li>Referral program</li> */}
          </ul>
        </div>
      </div>
      <div className='footer-small-text'>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com.
          Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
          Benefits: Effective Communication, Speedy redressal of the grievances
        </p>
        <p>
          <a href="#">Smart Online Dispute Resolution</a> |
          &nbsp;<a href="#">Grievances Redressal Mechanism</a>
        </p>
        <p>
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p>
      </div>


    </div>
    </footer>
  )
}

export default Footer
