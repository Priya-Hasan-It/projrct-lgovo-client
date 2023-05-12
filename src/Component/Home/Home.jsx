import React from 'react'
import Hero from '../Hero/Hero'
import Restaurants from '../Restaurants/Restaurants'
import Delivered from '../Delivered/Delivered'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Restaurants/>
        <Delivered/>
    </div>
  )
}

export default Home