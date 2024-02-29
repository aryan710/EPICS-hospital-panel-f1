
import React, { useState } from "react";
import "../Register/Register.css";
//import { Form, Input } from "antd";
//import { Link } from "react-router-dom";
import Credentail from "./Credential/Credentail";
import Details from "./Details/Details";
const steps = {
  1: Credentail,
  2: Details,
};
const Register = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step === 2) {
    } else {
      setStep(step + 1);
    }
  };
  const Step = steps[step];
  return (
    <>
      <Step nextStep={nextStep}/>
    </>
  );
};

export default Register;
