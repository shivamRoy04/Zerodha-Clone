import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import './index.css'
import HomePage from './landing_page/home/Homepage'
import Signup from './landing_page/signup/Signup'
import Pricing from './landing_page/pricing/Pricingpage'
import Product from './landing_page/products/Universe'
import Support from './landing_page/support/SupportPage'
import About from './landing_page/about/About'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import Notfound from './landing_page/Notfound'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/pricing' element={<Pricing/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/support' element={<Support/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='*' element={<Notfound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
