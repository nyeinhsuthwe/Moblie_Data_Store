/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Label, TextInput } from "flowbite-react";



const Login = () => {
  return (
    <div className="font-semibold">
      <div className="container mt-3">
        <div className="grid">
          
          <div className=""  >
            <div className="flex max-w-xs flex-col gap-1 mt-3" >
              
                <div className="mb-2 block text-danger" >
                <i className="fa-solid fa-phone me-2"></i>
                  <Label
                    htmlFor="small"
                    value="Phone :"
                    className="text-danger"
                  />
                </div>
                <TextInput  id="small" type="text" sizing="sm" />
              
                <div className="mb-2 block text-danger">
                <i class="fa-solid fa-user-lock me-2"></i>
                  <Label
                    htmlFor="small"
                    value="Password :"
                    className="text-danger"
                  />
                </div>
                <TextInput id="small" type="text" sizing="sm" />
              
              <div className="flex flex-wrap gap-3 mt-3 rounded-lg" >
                
              <a href="/home" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700  dark:focus:ring-red-800" style={{textDecoration:'none'}}>Login</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
