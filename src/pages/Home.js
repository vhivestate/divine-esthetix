import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md space-x-4">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Serives</button>
          <button className="btn btn-primary"><Link to={'/book'}>Book</Link></button>
        </div>
      </div>
    </div>

{/* services section */}
    <h1>Services</h1>
    <div>
    <div className='service-cards flex flex-wrap justify-center'>
    <div className="card w-96 bg-neutral text-neutral-content">
    <div className="card-body items-center text-center">
        <h2 className="card-title">Lashes</h2>
            <ul>
            <li>Classic Set:
                <dd>Full Set $80.00</dd>
                <dd>2nd Week Fill $50.00</dd>
                <dd>3rd Week Fill $60.00</dd>
                </li>
            <li>Hybrid Set:
                <dd>Full Set $100.00</dd>
                <dd>2nd Week Fill $60.00</dd>
                <dd>3rd Week Fill $70.00</dd>
                </li>
            <li>Volume Set:
                <dd>Full Set $120.00</dd>
                <dd>2nd Week Fill $75.00</dd>
                <dd>3rd Week Fill $90.00</dd>
                </li>
            </ul>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Book Service</button>
        </div>
    </div>
    </div>

    <div className="card w-96 bg-neutral text-neutral-content">
    <div className="card-body items-center text-center">
        <h2 className="card-title">Eyebrows</h2>
            <ul>
            <li>Lash Lift: $60.00</li>
            <li>Lash Lift & Tint: $75.00</li>
            <li>Brow Lamination: $50.00</li>
            <li>Brow Lamination/ Henna Tint: $65.00</li>
            <li>Henna Brow Tint: $25.00</li>
            <li>Lash Tint: $20.00</li>
            </ul>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Book Service</button>
        </div>
    </div>
    </div>

    <div className="card w-96 bg-neutral text-neutral-content">
    <div className="card-body items-center text-center">
        <h2 className="card-title">Makeup</h2>
            <ul>
            <li>Bridal: $70.00/hr</li>
            <li>Date Night: $50.00</li>
            <li>Everyday Look: $30.00/hr</li>
            <li>Special Event: $45.00</li>
            </ul>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Book Service</button>
        </div>
    </div>
    </div>

    <div className="card w-96 bg-neutral text-neutral-content">
    <div className="card-body items-center text-center">
        <h2 className="card-title">Wax</h2>
            <ul>
            <li>Full Leg Wax: $65.00</li>
            <li>Half Leg Wax: $50.00</li>
            <li>Full Arm Wax: $40.00</li>
            <li>Half Arm Wax: $25.00</li>
            <li>Eyebrow Wax: $25.00</li>
            <li>Lip Wax: $15.00</li>
            </ul>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Book Service</button>
        </div>
    </div>
    </div>
    </div>
    </div>


    </div>
  )
}

export default Home