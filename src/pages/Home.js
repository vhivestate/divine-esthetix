import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    
    <button className="btn btn-active"><Link to={'/contact'}>link</Link></button>
    
    </div>
  )
}

export default Home