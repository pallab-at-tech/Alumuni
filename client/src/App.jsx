import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/common/Header'
import Home from './page/Home'
import Footer from "./Component/common/Footer"

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Footer/> 
    </>
  )
}

export default App
