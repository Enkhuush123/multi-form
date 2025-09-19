"use client";

import { useState } from "react";
import { Input } from "../_components/Form-Input";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const checkEmail = (string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(string);
};

const checkInputNumbers = (string) => {
  return /^[0-9]{8}$/.test(string);
};

const checkPassword = (string) => {
  return /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(string);
};

const addStepTwoToLocalStorage = (values) =>
  localStorage.setItem("stepTwo", JSON.stringify(values));

export const StepTwo = (props) => {
  const { HandleBackStep, HandleNextStep } = props;

  const getStepTwoFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const values = localStorage.getItem("stepTwo");
      if (values) {
        return JSON.parse(values);
      }
    }

    return {
      email: "",
      phonenumber: "",
      password: "",
      confirmpass: "",
    };
  };

  const [formValue, setFormValue] = useState(getStepTwoFromLocalStorage);

  const [errorState, setErrorState] = useState({});

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValue({ ...formValue, [inputName]: inputValue });
  };

  const validate = () => {
    const errors = {};

    if (!checkEmail(formValue.email)) {
      errors.email = "ajlahgu bn";
    }
    if (!checkInputNumbers(formValue.phonenumber)) {
      errors.phonenumber = "ajlahgu bn";
    }

    if (!checkPassword(formValue.password)) {
      errors.password = "ajlahgu bn";
    }
    if (formValue.confirmpass !== formValue.password) {
      errors.confirmpass = "ajlahgu bn";
    }

    return errors;
  };
  console.log("ajlahgu bn");

  const handleSubButton = () => {
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      setErrorState({});
      addStepTwoToLocalStorage(formValue);
      HandleNextStep();
    } else {
      setErrorState(errors);
    }
  };
  // const disable = () => {
  //   return (
  //     formValue.email.length === 0 ||
  //     formValue.phonenumber.length === 0 ||
  //     formValue.password.length === 0 ||
  //     formValue.confirmpass.length === 0
  //   );
  // };

  return (
    <div className="container">
      <div className="cont">
        <div className="headerp">
          <div>
            <img
              src="/pinecone.png"
              alt="pinecone"
              width={60}
              height={60}
            ></img>
          </div>
          <div className="header">
            <p>Join Us! 😎</p>
          </div>
          <div className="headertext">
            <p>Please provide all current information accurately.</p>
          </div>
        </div>
        <div className="border">
          <div className="inputtext1">
            <Input
              inputTag="Email"
              Change={handleInputChange}
              name="email"
              value={formValue.email}
              error={errorState.email}
              errorMess={"Please provide a valid email address."}
              Placeholder={"Email"}
            />
            <Input
              inputTag="Phone Number"
              Change={handleInputChange}
              name="phonenumber"
              value={formValue.phonenumber}
              error={errorState.phonenumber}
              errorMess={"Please enter a valid phone number."}
              Placeholder={"Phone Number"}
            />
            <Input
              inputTag="Password"
              Change={handleInputChange}
              name="password"
              value={formValue.password}
              error={errorState.password}
              errorMess={"Password must include letters and numbers."}
              Placeholder={"Create passwrod"}
              type="password"
            />
            <Input
              inputTag="Confirm Password"
              Change={handleInputChange}
              name="confirmpass"
              value={formValue.confirmpass}
              error={errorState.confirmpass}
              errorMess={"Passwords do not match. Please try again."}
              Placeholder={"Confirm password"}
              type="password"
            />
          </div>
        </div>
      </div>
      <div className="buttondiv">
        <button className="button2" onClick={HandleBackStep}>
          <FaChevronLeft />
          Back
        </button>
        <button
          type="button"
          // disabled={disable()}
          className="button1"
          onClick={handleSubButton}
        >
          Continue 2/3 <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
