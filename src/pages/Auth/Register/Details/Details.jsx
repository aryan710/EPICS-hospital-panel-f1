import React, { useState } from "react";
import './Details.css'
//import ".../Register/Credentail/Credentail.css";
import {Link} from 'react-router-dom'
//import { useFormik } from "formik";
//import styled from "styled-components";
//import { signupSchema } from "../../../schemas";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GlobalStyle } from "../../../../Styles/globalStyles";




const Details = () => {
  const [PhoneNumber,setPhoneNumber] = useState('');
  const [valid,setValid] = useState(true);
  
  const handleChange =(value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

 
 return (
    <>
    <GlobalStyle/>
    
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                < p className="modal-desc">
                  To the Hospital panel for Hospitals.
                </p>
              
                <form >
                  <div className="input-block">
                    <label htmlFor="phone number" className="input-label">
                      Phone Number
                    </label>
                    <PhoneInput
                    country={'in'}
                      value={PhoneNumber}
                      onChange={handleChange}
                      inputProps={{
                        required:true,
                      }}
                      //name="name"
                      //id="name"
                      placeholder="Name"
                     
                    />
                    {!valid && (
                      <p className="form-error">Please enter a valid phone number!</p>
                    )}
                  </div>

                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Contact Email
                    </label>
                    <input
                      type="email"
                     // autoComplete="off"
                      name=" Contact email"
                      id="email"
                      placeholder="Email"
                     

                    />
                    

                  </div>

                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      //autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      
                    />
                    

                  </div>

                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      //autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      
                    />
                    
                  </div>
                  <div className="modal-buttons">
                  <a href="https://www.google.com/search?q=hospital&rlz=1C1ONGR_enIN965IN965&oq=hos&gs_lcrp=EgZjaHJvbWUqDwgCEAAYQxjJAxiABBiKBTIOCAAQRRgnGDsYgAQYigUyDggBEEUYJxg7GIAEGIoFMg8IAhAAGEMYyQMYgAQYigUyBggDEEUYQDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjMyM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8" className="">
                      Want to register using Gmail?
                    </a>

                    <button className="input-button" type="next" >
                      Submit
                    </button>
                  </div>
                </form>
                < p className="sign-up"><Link to="/login" className="m-2">Already have an account?</Link></p>
              </div>
              < div className="modal-right">
                <img src="https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo="
                  alt=""
                />


              </div>
            </div>
          </div>
        </div>







    </>
  );
};

export default Details;

