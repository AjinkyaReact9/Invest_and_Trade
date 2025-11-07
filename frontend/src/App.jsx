
import './App.css'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './landingpage/home/HomePage'
import Signup from './landingpage/signup/Signup'
import ProductPage from './landingpage/products/ProductsPage'
import PricingPage from './landingpage/pricing/PricingPage'

function App() {

  return (
    <>
      <HomePage />
      {/* <Signup />
      <ProductPage />
      <PricingPage /> */}
    </>
  )
}

export default App
