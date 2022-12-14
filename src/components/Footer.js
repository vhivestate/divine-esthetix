import React from 'react'
import { Instagram } from 'react-feather';
import { Mail } from 'react-feather';



function Footer() {
    
    return (
<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">Services</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Gallery</a> 
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">

          <a href='https://www.instagram.com/divine.esthetix/'> <Instagram></Instagram> </a>



          <a href="mailto:garcia.valeria001@gmail.com"> <Mail></Mail> </a>
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by Divine Esthetix</p>
  </div>
</footer>

    )
  }


export default Footer      

