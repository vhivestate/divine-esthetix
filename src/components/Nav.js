import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function Nav() {
    return (
        <div>
        <div>
            <div>
            <ul tabIndex={0}>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/gallery'}>Gallery</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
            </div>
        </div>
        <div className="navbar-end">

        </div>
        </div>
      )
    }

export default Nav