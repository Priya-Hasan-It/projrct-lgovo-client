import React from 'react'
import { SiGooglemaps } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white '>
        <footer className="footer p-10 w-8/12 mx-auto ">
  <div>
   <div className='flex'>
   <h2 className='text-3xl text-white font-bold'>Glovo </h2> 
    <SiGooglemaps className="text-white text-2xl"/>
   </div>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    </div>
  )
}

export default Footer;