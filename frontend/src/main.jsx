import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './landingpage/home/HomePage'
import Signup from './landingpage/signup/Signup'
import ProductPage from './landingpage/products/ProductsPage'
import PricingPage from './landingpage/pricing/PricingPage'
import Aboutpage from './landingpage/about/Aboutpage'
import SupportPage from './landingpage/support/SupportPage'
import Navbar from './landingpage/Navbar'
import Footer from './landingpage/Footer'
import NotFound from './landingpage/NotFound'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<Aboutpage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
