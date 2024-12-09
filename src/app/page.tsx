import React from 'react'
import Header from './components/Header'
import Hero  from './components/Hero'
import Best from './components/Best'
import Essential from './components/Essential'
import Fetured from './components/Fetured'
import Footer from './components/Footer'


export default function Home() {
  return (
    <div>
      
      <Hero/>
      <Best/>
      <Fetured/>
      <Essential/>
   
    </div>
  )
}
