/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Carousel } from "flowbite-react";
import Packstitle from "./Packstitle";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import AlertBox from "./AlertBox";

const Home = ({data}) => {
  console.log(data);
  return (
    <div className="font-semibold bg-red-600">
       <Header/>
      
      <div className="container mt-1">
        <div className="grid">
          <div className="h-64 sm:h-64 xl:h-80 2xl:h-96 mt-2">
            <Carousel pauseOnHover>
              <img
                src="https://itigic.com/wp-content/uploads/2020/04/wifi-speed.jpg"
                alt="..."
                
              />
              <img
                src="/img/photo_2023-12-24_19-03-42.jpg"
                alt="..."
                style={{height:'340px'}}
                
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/574d60aef85082d3b6cb20d2/1562750698963-9RL5WH9GJ2YT1QQXGI21/sim_clone_web+kopie.png"
                alt="..."
               
              />
            </Carousel>
          </div>
        </div>
        <Card className="mt-3 pl-10  border-4 border-gray-300 pb-0 pt-3">
          <div className="row">
            <div className="col-6 col-sm-3 col-md-3 col-lg-3">
                <p className="text-muted fs-6 fw-bold">09770584872</p>
                <p className=" fs-5 fw-bold">1234ks</p>

            </div>

            <div className="col-6 col-sm-3 col-md-3 col-lg-3 mt-3">
            <span className="border border-danger border-4  rounded-circle border-danger px-2 py-6 fw-bold text-muted ">450 mb</span>
            <p className=" fw-bold text-muted mt-7 ml-6">Data</p>
            </div>

            <div className="col-6 col-sm-3 col-md-3 col-lg-3 mt-3">
            <span className="border border-danger border-4  rounded-circle border-danger px-2 py-6 fw-bold text-muted ">54mins</span>
            <p className=" fw-bold text-muted mt-7 ml-5">Voice</p>
            </div>

            <div className="col-6 col-sm-3 col-md-3 col-lg-3 mt-3">
            <NavLink to='/topup' style={{textDecoration:'none'}}>
            <span className="border border-danger border-4  rounded-circle border-danger px-2 py-6 fw-bold text-muted "><i className="fa-regular fa-plus ms-2"></i><i className="fa-solid fa-mobile-screen-button ms-2 w-6"></i></span>
            <p className=" fw-bold text-muted mt-7 ml-4">Topup</p>
            </NavLink>
            </div>

          </div>
          
        </Card>
       
        <Packstitle/>
        <div className="d-flex justify-content-center gap-2 mt-2 row mb-3">
            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }} 
            >
              <div>
                <p className=" fw-bold">480MB for 999Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">400MB for 899Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">385MB for 799Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">575MB for 1199Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">1GB for 2199Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">1400MB for 2899Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">2GB for 4299Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>

            <Card
              className="mt-3 shadow-md text-center border-3 border-gray-300 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              style={{ width: "200px" }}
            >
              <div>
                <p className=" fw-bold">2350MB for 4899Ks</p>
                <p className="  text-muted">Validity: 30days</p>
                <AlertBox/>
              </div>
            </Card>
          
            </div>
         
      </div>
      
    </div>
  );
};

export default Home;
