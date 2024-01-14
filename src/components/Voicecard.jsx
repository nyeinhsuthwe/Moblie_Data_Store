import React from 'react'
import { Card, Carousel } from "flowbite-react";
import AlertBox from "./AlertBox";
import { NavLink } from "react-router-dom";
import Header from './Header';


const Voicecard = () => {
  return (
    <div className=' bg-white'>
      <Header/>
        <div className="container font-semibold">
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
            <h5 className="text-center mt-3 text-muted font-semibold fs-6 fw-bold">Voice Packs</h5>
            <div className="d-flex justify-content-center gap-2 mt-2 row mb-3">
            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }} 
            >
              <div>
                <p className=" fw-bold">75mins for 999Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">55mins for 899Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">30mins for 799Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">80mins for 1199Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">100mins for 2199Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">125mins for 2899Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">155mins for 4299Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">200mins for 4899Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>
            
            </div>
            
    
    </div>
    </div>
  )
}

export default Voicecard