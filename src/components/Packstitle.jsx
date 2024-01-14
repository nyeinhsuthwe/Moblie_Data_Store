import React from 'react'
import {NavLink} from 'react-router-dom'

const Packstitle = () => {
  return (
    <div className='container font-semibold'>
        <h5 className="text-center mt-3 text-white font-semibold">Buy Packs</h5>
            <div className="mt-3 justify-content-center w-100 d-flex">
              <NavLink to='/home'>
              <i className="fa-solid fa-angles-left  me-5  text-danger bg-white p-2  rounded-3 shadow-md fs-5 fw-bold"></i>
              </NavLink>
              <NavLink to='/datacard'>
              <button type="button" className="btn bg-white text-danger fw-bold shadow-md rounded-5 ms-4 font-semibold" style={{fontSize:'15px'}}>
                Internet
              </button>
              </NavLink>
              <NavLink to='/Voicecard'>
              <button type="button" className="btn bg-white text-danger fw-bold shadow-md rounded-5 ms-4 font-semibold" style={{fontSize:'15px'}}>
                Voice
              </button>
              </NavLink>
              <NavLink to='/stk'>
              <button type="button" className="btn bg-white text-danger fw-bold shadow-md rounded-5 ms-4 font-semibold" style={{fontSize:'15px'}}>
                SateTineKya
              </button>
              </NavLink>
              <NavLink to='/home'>
              <i className="fa-solid fa-angles-right  ms-5 text-danger bg-white p-2 shadow-md rounded-3 fs-5 fw-bold"></i>
              </NavLink>
            </div>
    </div>
  )
}

export default Packstitle