"use client";

import { useState } from "react";
import { Input } from "../_components/Form-Input";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const checkInputSpecial = (string) => {
  return /^[a-zA-Z]+$/.test(string);
};

const addStepOneToLocalStorage = (value) => {
  localStorage.setItem("stepOne", JSON.stringify(value));
};

export const StepOne = (props) => {
  const { HandleNextStep } = props;

  const getStepOneFromLocalStorage = () => {
    const value = localStorage.getItem("stepOne");
    if (value) {
      return JSON.parse(value);
    } else {
      return {
        firstName: "",
        lastName: "",
        userName: "",
      };
    }
  };

  const [formValue, setFormValue] = useState(getStepOneFromLocalStorage());

  const [errorState, setErrorState] = useState({});

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValue({ ...formValue, [inputName]: inputValue });
  };

  const validate = () => {
    const errors = {};

    if (!checkInputSpecial(formValue.firstName)) {
      errors.firstName = "ajlahgu bn";
    }
    if (!checkInputSpecial(formValue.lastName)) {
      errors.lastName = "ajlahgu bn";
    }
    if (!checkInputSpecial(formValue.userName)) {
      errors.userName = "ajlahgu bn";
    }
    return errors;
  };

  const handleSubButton = () => {
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      setErrorState({});
      addStepOneToLocalStorage(formValue);
      HandleNextStep();
    } else {
      setErrorState(errors);
    }
  };

  // const disable = () => {
  //   return (
  //     formValue.firstName.length === 0 ||
  //     formValue.lastName.length === 0 ||
  //     formValue.userName.length === 0
  //   );
  // };

  return (
    <div className="container">
      <div className="cont">
        <div className="headerp">
          <div>
            <img src="/pinecone.png" alt="pinecone"></img>
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
              inputTag="First Name"
              Change={handleInputChange}
              name="firstName"
              value={formValue.firstName}
              error={errorState.firstName}
              errorMess={
                "First name cannot contain special characters or numbers."
              }
            />

            <Input
              inputTag="Last Name"
              Change={handleInputChange}
              name="lastName"
              value={formValue.lastName}
              error={errorState.lastName}
              errorMess={
                "Last name cannot contain special characters or numbers."
              }
            />
            <Input
              inputTag="User Name"
              Change={handleInputChange}
              name="userName"
              value={formValue.userName}
              error={errorState.userName}
              errorMess={
                "This username is already taken. Please choose another one."
              }
            />
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          // disabled={disable()}
          className="button1"
          onClick={handleSubButton}
        >
          Continue 1/3 <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
