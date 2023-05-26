import React from 'react'
import Hero from '../Hero/Hero'
import Restaurants from '../Restaurants/Restaurants'
import Delivered from '../Delivered/Delivered'
import CountriesDeliver from '../CountriesDeliver/CountriesDeliver'
import DownloadApp from '../DownloadApp/DownloadApp'
import LetsTogether from '../LetsTogether/LetsTogether'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Restaurants/>
        <Delivered/>
        <CountriesDeliver/>
        <DownloadApp/>
        <LetsTogether/>
    </div>
  )
}

export default Home