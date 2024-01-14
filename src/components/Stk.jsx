import React from 'react'
import { Carousel } from "flowbite-react";
import {NavLink} from "react-router-dom";
import Header from './Header';


const Stk = () => {
  return (
    
    <div>
      <Header/>
      <div className='container font-semibold'>
        <div className="h-64 sm:h-64 xl:h-80 2xl:h-96 mt-2">
            <Carousel pauseOnHover>
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d4ce519393359.562d9a1c7f287.png"
                alt="..."
              />
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d4ce519393359.562d9a1c7f287.png"
                alt="..."
              />
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d4ce519393359.562d9a1c7f287.png"
                alt="..."
              />
            </Carousel>
          </div>
          <div className='container font-semibold'>
        <h5 className="text-center mt-3 text-white font-semibold">Buy Packs</h5>
            <div className="mt-3 justify-content-center w-100 d-flex">
              <NavLink to='/home'>
              <i className="fa-solid fa-angles-left  me-5  text-white bg-danger p-2  rounded-3 shadow-md fs-5 fw-bold"></i>
              </NavLink>
              <NavLink to='/datacard'>
              <button type="button" className="btn text-white bg-danger fw-bold shadow-md rounded-5 ms-4 font-semibold" style={{fontSize:'15px'}}>
                Internet
              </button>
              </NavLink>
              <NavLink to='/Voicecard'>
              <button type="button" className="btn text-white bg-danger fw-bold shadow-md rounded-5 ms-4 font-semibold" style={{fontSize:'15px'}}>
                Voice
              </button>
              </NavLink>
              <NavLink to='/stk'>
              <button type="button" className="btn text-white bg-danger fw-bold shadow-md rounded-5 ms-4 font-semibold" style={{fontSize:'15px'}}>
                SateTineKya
              </button>
              </NavLink>
              <NavLink to='/home'>
              <i className="fa-solid fa-angles-right  ms-5 text-white bg-danger p-2 shadow-md rounded-3 fs-5 fw-bold"></i>
              </NavLink>
            </div>
    </div>
           <h5 className="text-center mt-3 text-muted font-semibold fs-6 fw-bold">Sate Tine Kya</h5>
           
    </div>
    </div>
  )
}

export default Stk