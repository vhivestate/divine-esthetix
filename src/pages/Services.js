import React from 'react'

function Services() {
  return (
    <div>
    <div className='service-cards'>
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
        <h2 className="card-title">Wax</h2>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Book Service</button>
        </div>
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default Services