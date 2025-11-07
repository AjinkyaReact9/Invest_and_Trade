import React from 'react'

const Awards = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 mt-5'>
          <img style={{width: '70%'}} src='media/images/ecosystem.png' alt='awards img' />
        </div>
        <div className='col-6 mb-5'>
          <h2>Trust with confidence</h2>
          <div className='row'>
            <div className='col-6 p-5'>
              <h3>Customer-first always</h3>
              <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments,
                making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
              <h3>No spam or gimmicks</h3>
              <p>
                No gimmicks, spam, "gamification", or annoying push notifications.
                High quality apps that you use at your pace, the way you like. Our philosophies.
              </p>
            </div>
            <div className='col-6 p-5'>
              <h3>The Zerodha universe</h3>
              <p>
                Not just an app, but a whole ecosystem.
                Our investments in 30+ fintech startups offer you tailored services specific to your needs.
              </p>
              <h3>Do better with money</h3>
              <p>
                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,
                but actively help you do better with your money.
              </p>
            </div>
          </div>
        </div>
        <img src="media/images/press-logos.png" alt="press image" />
      </div>
    </div>
  )
}

export default Awards
