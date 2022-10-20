import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'


function Home() {
  return (
    <div>
    <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url("https://i.pinimg.com/564x/3a/7f/67/3a7f675b3ada0db7d2ee3ff386a9107a.jpg")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md space-x-4">
          <h1 className="hero-logo mb-5 text-5xl font-bold text-white">Divine Esthetix</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn glass"><Link to={'/services'}>Services</Link></button>
          <button className="btn glass"><Link to={'/book'}>Book</Link></button>
        </div>
      </div>
    </div>

{/* services section */}
    <h1 className='text-center'>About</h1>

  

    </div>
  )
}

export default Home