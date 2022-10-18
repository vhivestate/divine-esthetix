import React from 'react'

function Services() {
  return (
    <div>
{/* hero */}
    <div className="hero h-64 bg-fixed" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mccQegH1llhIfqRKMdAXiRthJjyBcQ1H1eBSvib3C8Nx5u_C181cxK4SgIMiBjg8lZJw4ul0AR1ZxSLO-bWrWZ8WrFU3-_wVy1qA0K530m8otUr5vNpgZBdEzMG52cbqwhyDZqoo8js9ZCM8sLZntIjyjRzx9jcPb8HhDyqcQz-MiC4NhBT4g4JjRFMn_hfb1?width=1024&height=683&cropmode=none")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                <h1 className="text-5xl font-light text-white">Services</h1>
            </div>
        </div>
    </div>

{/* first lash carousel */}
<h2 className='text-center text-4xl'>Lashes</h2>
    <div>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Classic Set</h2>
                <ul>
                    <dd>Full Set $80.00</dd>
                    <dd>2nd Week Fill $50.00</dd>
                    <dd>3rd Week Fill $60.00</dd>
                </ul>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
            </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 

    <div id="slide2" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Hybrid Set</h2>
                    <ul>
                        <dd>Full Set $100.00</dd>
                        <dd>2nd Week Fill $60.00</dd>
                        <dd>3rd Week Fill $70.00</dd>
                    </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 


    <div id="slide3" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Volume Set</h2>
                    <ul>
                        <dd>Full Set $120.00</dd>
                        <dd>2nd Week Fill $75.00</dd>
                        <dd>3rd Week Fill $90.00</dd>
                    </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
                </div>
            </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
    </div>
    </div>

    {/* second brow carousel */}

    <h2 className='text-center text-4xl'>Eyebrows</h2>
    <div>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Classic Set</h2>
                <ul>
                    <dd>Full Set $80.00</dd>
                    <dd>2nd Week Fill $50.00</dd>
                    <dd>3rd Week Fill $60.00</dd>
                </ul>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
            </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 

    <div id="slide2" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Hybrid Set</h2>
                    <ul>
                        <dd>Full Set $100.00</dd>
                        <dd>2nd Week Fill $60.00</dd>
                        <dd>3rd Week Fill $70.00</dd>
                    </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 


    <div id="slide3" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Volume Set</h2>
                    <ul>
                        <dd>Full Set $120.00</dd>
                        <dd>2nd Week Fill $75.00</dd>
                        <dd>3rd Week Fill $90.00</dd>
                    </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
                </div>
            </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
    </div>
    </div>


{/* Makeup */}

<h2 className='text-center text-4xl'>Makeup</h2>
    <div>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Classic Set</h2>
                <ul>
                    <dd>Full Set $80.00</dd>
                    <dd>2nd Week Fill $50.00</dd>
                    <dd>3rd Week Fill $60.00</dd>
                </ul>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
            </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 

    <div id="slide2" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Hybrid Set</h2>
                    <ul>
                        <dd>Full Set $100.00</dd>
                        <dd>2nd Week Fill $60.00</dd>
                        <dd>3rd Week Fill $70.00</dd>
                    </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 


    <div id="slide3" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Volume Set</h2>
                    <ul>
                        <dd>Full Set $120.00</dd>
                        <dd>2nd Week Fill $75.00</dd>
                        <dd>3rd Week Fill $90.00</dd>
                    </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
                </div>
            </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
    </div>
    </div>

{/* Waxes */}
<h2 className='text-center text-4xl'>Wax</h2>
    <div>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Classic Set</h2>
                <ul>
                    <dd>Full Set $80.00</dd>
                    <dd>2nd Week Fill $50.00</dd>
                    <dd>3rd Week Fill $60.00</dd>
                </ul>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
            </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 

    <div id="slide2" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Hybrid Set</h2>
                    <ul>
                        <dd>Full Set $100.00</dd>
                        <dd>2nd Week Fill $60.00</dd>
                        <dd>3rd Week Fill $70.00</dd>
                    </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 


    <div id="slide3" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Volume Set</h2>
                    <ul>
                        <dd>Full Set $120.00</dd>
                        <dd>2nd Week Fill $75.00</dd>
                        <dd>3rd Week Fill $90.00</dd>
                    </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Service</button>
                </div>
            </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
    </div>
    </div>

    </div>
  )
}

export default Services