import React from "react";
import './Credentail.css'
//import ".../Register/Credentail/Credentail.css";
import {Link} from 'react-router-dom'
import { useFormik } from "formik";
//import styled from "styled-components";
import { GlobalStyle } from "../../../../Styles/globalStyles";
import { signupSchema } from "../../../schemas";


const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const Credentail = ({ nextStep }) => {
  const { values, handleBlur,errors,touched, handleChange, handleSubmit } = 
  

  useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);

    },

  });

  const handleNext = (e) => {
    e.preventDefault();

    nextStep();
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

                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      //autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                     value={values.name}
                    onChange={handleChange}
                     onBlur={handleBlur}

                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                     // autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}

                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}

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
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}

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
                      value={values.confirm_password}
                      onChange={handleChange}
                     onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                  <a href="https://www.google.com/search?q=hospital&rlz=1C1ONGR_enIN965IN965&oq=hos&gs_lcrp=EgZjaHJvbWUqDwgCEAAYQxjJAxiABBiKBTIOCAAQRRgnGDsYgAQYigUyDggBEEUYJxg7GIAEGIoFMg8IAhAAGEMYyQMYgAQYigUyBggDEEUYQDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjMyM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8" className="">
                      Want to register using Gmail?
                    </a>

                    <button className="input-button" type="next" onClick={handleNext}>
                      Next
                    </button>
                    <button className="input-button" type="next" onClick={handleSubmit}>
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

export default Credentail;
