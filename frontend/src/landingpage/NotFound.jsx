import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container p-5 m-5'>
      <div className='row text-center'>
        <h2 >404 Page Not Found</h2>
        <p>Sorry, the page you are finding does not exist.</p>
        <Link to={'/'}><button className='p-2 btn btn-primary fs-5 mb-5' style={{width: '20%', margin: "0 auto"}}>Home</button></Link>
      </div>
    </div>
  )
}

export default NotFound
