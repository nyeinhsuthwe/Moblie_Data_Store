import { Navbar} from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom' 


const Header = () => {
  return (
    <div className='sticky-top '>

   <Navbar className='fluid sticky-top  bg-white shadow py-1 '>
      
      <h4 className=" fw-bold  text-danger self-center whitespace-nowrap text-xl font-semibold mt-1">Data Myanmar</h4>
      
      <Navbar className='mx-auto'>
       <NavLink to='/home'  style={{textDecoration:'none'}}>
        <span className='text-danger fw-bold' style={{fontSize:'14px'}}>Home</span>
       </NavLink>
       <NavLink to='/topup' style={{textDecoration:'none'}}>
        <span className='text-danger fw-bold ml-5'  style={{fontSize:'14px'}}>Topup</span>
       </NavLink>
       <NavLink to='/datacard' style={{textDecoration:'none'}}>
        <span className='text-danger fw-bold ml-5'  style={{fontSize:'14px'}}>Buy Packs</span>
       </NavLink>

       <NavLink to='/about' style={{textDecoration:'none'}}>
        <span className='text-danger fw-bold ml-5'  style={{fontSize:'14px'}}>About Me</span>
       </NavLink>
       
      </Navbar>

     
     <NavLink to='/side'><button type="button"><i className="fa-solid fa-bars text-danger fs-4 me-4"></i></button></NavLink>
     
      
       </Navbar>




        </div>
    
  )
}

export default Header
