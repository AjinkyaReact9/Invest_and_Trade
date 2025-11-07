import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 p-5'>
          <h3>Charges explained</h3>
          <br />
          <p className='brokerage-heading fs-5'>Securities/Commodities transaction tax</p>
          <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.</p>
          <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.
            Important to keep a tab.</p>
          <p className='brokerage-heading fs-5'>Transaction/Turnover Charges</p>
          <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016.
            (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
          </p>
          <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
          <p className='brokerage-heading fs-5'>Call & trade</p>
          <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
        </div>
        <div className='col-6 p-5'>
          <br />
          <br />
          <p className='brokerage-heading fs-5'>GST</p>
          <p className='brokerage-heading fs-5'>SEBI Charges</p>
          <p className='brokerage-heading fs-5'>DP (Depository participant) charges</p>
          <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
          <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
          <p>
            Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
          </p>
          <p className='brokerage-heading fs-5'>Pledging charges</p>
          <p>₹30 + GST per pledge request per ISIN.</p>
          <p className='brokerage-heading fs-5'>AMC (Account maintenance charges)</p>
          <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000.
            To learn more about BSDA, <a href="/">Click here</a></p>
          <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).
            To learn more about AMC, <a href="/">Click here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Brokerage
