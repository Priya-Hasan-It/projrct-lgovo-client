import React from 'react'
import { Link } from 'react-router-dom'
import { SiGooglemaps } from 'react-icons/si';

const Navbar = () => {
  return (
    <div className='bg-amber-400'>
        <div className="navbar w-8/12 mx-auto pt-8">
  <div className="navbar-start">
    
    <Link className=" normal-case text-3xl text-emerald-600 font-bold">Glovo </Link><SiGooglemaps className="text-emerald-600 text-2xl"/>
  </div>
  
  <div className="navbar-end">
    <a className="btn bg-emerald-600 hover:bg-emerald-700 border-none rounded-3xl font-bold px-6 ">Get started</a>
  </div>
</div>
    </div>
  )
}

export default Navbar