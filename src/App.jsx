import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import WhyChooseUs from './components/WhyChooseUs'
import Product from './components/Product'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
       <Header/>
       <WhyChooseUs/>
       <Product/>
       <Footer/>
    </>
  )
}

export default App
