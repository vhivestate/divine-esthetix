import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function Nav() {
    return (
      <nav className="navbar bg-transparent text-white fixed top-0 z-40">
      <div className="navbar bg-transparent">
      <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/gallery'}>Gallery</Link></li>
            <li><Link to={'/contact'}>Book</Link></li> 
            <li><Link to={'/faqs'}>FAQs</Link></li>
          </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"> <Link to={'/'}>Divine Esthetix</Link></a>
      </div>
      <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/gallery'}>Gallery</Link></li>
            <li><Link to={'/contact'}>Book</Link></li> 
            <li><Link to={'/faqs'}>FAQs</Link></li>
          </ul>
      </div>
      </div>
      </nav>
      )
    }

export default Nav
