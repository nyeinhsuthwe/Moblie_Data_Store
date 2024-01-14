/* eslint-disable react/jsx-no-undef */
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, FloatingLabel } from "flowbite-react";
import { Label, TextInput, Button } from 'flowbite-react';

const Topup = () => {
  return (
    <div className="">
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


      <div className=" mt-3 d-flex row container grid w-100 mx-auto gap-3 mb-3">
        <div className="bg-white shadow-md mt-1 py-3 mx-auto border border-1 border-danger rounded-4 col-12 col-sm-12 col-md-6 col-lg-6" style={{width:'600px'}}>
          <span
            className="fw-bold fs-6  text-danger font-semibold"
            style={{ marginLeft: "30px" }}
          >
            Top Up Number
          </span>
          <br />
          <div className=" d-flex row ">
          <div
          className="grid grid-flow-col justify-stretch space-x-4 mt-3 col-10 ms-3"
        //   style={{ marginLeft: "200px", marginRight: "600px" }}
        >
          <FloatingLabel
            variant="outlined"
            label="Enter Your Topup Number"
            color="error"
            className="fs-6"
            id='bill'
          />
        </div>
        <div className="col-1 ms-0 py-4 ">
        <i class="fa-solid fa-address-book text-danger fs-3"></i>
        </div>
          </div>
        </div>
       
        <div className="bg-white shadow-md mt-1 py-4 mx-auto border border-1 border-danger rounded-4 col-12 col-sm-12 col-md-6 col-lg-6" style={{width:'600px'}} >
        
        <div className="mb-2 block" color="error">
          <Label htmlFor="small" value="Voucher Code" className="fw-bold fs-6  text-danger font-semibold"
            style={{ marginLeft: "30px" }} />
        </div>
        
        
        <div className=" row d-flex">
        <div className="col-10 ms-3">
        <TextInput id="small" type="text" sizing="md" placeholder="Enter Voucher Code or Scan" className="2"  />
        </div>

        <div className="col-1 ms-0 py-2">
        <i className="fa-solid fa-qrcode text-danger fs-3"></i>
        </div>

        </div>


        </div>
        
      </div>

      
      
      <div className=" container-fluid bg-red-600 p-1  pb-3">
      <div className="flex  flex-col gap-4 card mx-auto pt-4 py-4 px-4 rounded-4 shadow-md mt-4" style={{width:'600px'}}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="small" className="fw-bold fs-6  text-danger font-semibold"
          style={{ marginLeft: "20px" }} value="Online Topup" />
        </div>
        <TextInput id="small" type="text" sizing="md" placeholder="Enter Amount" />

        <button type="button"   className="btn btn-white text-danger shadow-md border-secondary border-opacity-25 mt-3 mr-5" style={{fontSize:'13px'}} >1000</button>
         
        <button type="button"  className="btn btn-white text-danger shadow-md border-secondary border-opacity-25  mt-3 mr-5" style={{fontSize:'13px'}} >2000</button>
         
        <button type="button"  className="btn btn-white text-danger shadow-md border-secondary border-opacity-25  mt-3 mr-5" style={{fontSize:'13px'}} >3000</button>

        <button type="button"  className="btn btn-white text-danger shadow-md border-secondary border-opacity-25  mt-3 mr-5" style={{fontSize:'13px'}} >4000</button>
        
        <button type="button"  className="btn btn-white text-danger shadow-md border-secondary border-opacity-25  mt-3 mr-5" style={{fontSize:'13px'}} >5000</button>
     

        <button type="button"  className="btn btn-white text-danger shadow-md border-secondary border-opacity-25  mt-3 mr-5" style={{fontSize:'13px'}} >6000</button>
        
        <button type="button"  className="btn btn-white text-danger shadow-md border-secondary border-opacity-25  mt-3 mr-5" style={{fontSize:'13px'}} >7000</button>
        
        <button type="button"  className="btn btn-white text-danger shadow-md border-secondary border-opacity-25  mt-3 mr-5" style={{fontSize:'13px'}} >8000</button>
        
        <button type="button"  className="btn btn-white text-danger shadow-md border-secondary border-opacity-25  mt-3 mr-5" style={{fontSize:'13px'}} >9000</button>
        
        <button type="button"  className="btn btn-white text-danger shadow-md border-secondary border-opacity-25  mt-3 mr-5" style={{fontSize:'13px'}} >10000</button>


       <br/>
       <br/>
      
       <span className="fw-bold fs-6  text-danger font-semibold"
          style={{ marginLeft: "20px" }}>Payment Options.</span> <span className="text-muted">Please select amount to continue.</span>

       <div className="mt-4 d-flex ">
        <img src="https://en.myanmartechpress.com/wp-content/uploads/2019/07/unnamed-512x445-300x261.png" alt="" style={{width:'50px'}} className=" rounded-3 shadow-md img-thumbnail mx-auto " />
        <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/65/2c/67/652c677b-3bf2-4d28-caef-95a1348e3751/source/512x512bb.jpg" alt="" style={{width:'50px'}} className=" rounded-3 shadow-md img-thumbnail mx-auto " />
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/e4/40/a8/e440a830-a24a-a2ee-7404-0c457af838aa/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/512x512bb.jpg" alt="" style={{width:'50px'}} className=" rounded-3 shadow-md img-thumbnail mx-auto " />
        <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/cd/d1/2c/cdd12c50-22af-875d-a5f8-ff372b3375dd/source/512x512bb.jpg" alt="" style={{width:'50px'}} className=" rounded-3 shadow-md img-thumbnail mx-auto " />
        <img src="https://play-lh.googleusercontent.com/z-wRjDo9L-3c1-39ZH-VyKwofSHsmI79VH3T_pSqlj_fRhZSpc7zbDlFKS4hle0bLOk" alt="" style={{width:'50px'}} className=" rounded-3 shadow-md img-thumbnail mx-auto " />
        <img src="https://cdn3.iconfinder.com/data/icons/credit-cards-pos/309/visa_pay-1024.png" alt="" style={{width:'50px'}} className=" rounded-3 shadow-md img-thumbnail mx-auto " />
       
       </div>

       <div className="mt-4 flex flex-wrap gap-2">
       <Button type="button" color="failure" className="mx-auto"> Topup </Button>
       </div>
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default Topup;
