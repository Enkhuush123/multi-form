"use client";

import { useState, useEffect } from "react";
import { Input } from "../_components/Form-Input";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const addStepThreeToLocalStorage = (values) => {
  localStorage.setItem("stepThree", JSON.stringify(values));
};

export const StepThree = (props) => {
  const { HandleBackStep, HandleNextStep } = props;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedForm = localStorage.getItem("stepThree");
      const savedImage = localStorage.getItem("stepThreeImage");

      if (savedForm) setFormValue(JSON.parse(savedForm));
      if (savedImage) setImage(savedImage);
    }
  }, []);

  const [formValue, setFormValue] = useState({ date: "" });

  const [errorState, setErrorState] = useState({});

  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base = reader.result;
        setImage(base);
        localStorage.setItem("stepThreeImage", base);
      };
      reader.readAsDataURL(file);

      setImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValue({ ...formValue, [inputName]: inputValue });
  };

  const validate = () => {
    const errors = {};

    if (!formValue.date) {
      errors.date = "ajlahgu bn";
    } else {
      const birthdate = new Date(formValue.date);
      const today = new Date();

      let age = today.getFullYear() - birthdate.getFullYear();
      const month = today.getMonth() - birthdate.getMonth();

      if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
      }
      if (age < 18) {
        errors.date = "ajlahgu bn";
      }
    }

    if (!image) {
      errors.image = "ajlahgu bn";
    }

    return errors;
  };
  console.log("ajlahgu bn");

  const handleSubButton = () => {
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      setErrorState({});
      addStepThreeToLocalStorage(formValue);
      localStorage.setItem("stepThreeImage", image);

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
          <div className="date">
            <div>
              <p>
                Date of birth <span className="span">*</span>
              </p>
            </div>
            <div>
              <input
                name="date"
                value={formValue.date}
                onChange={handleInputChange}
                className={errorState.date ? "dateinputerr " : "dateinput"}
                type="date"
              ></input>
            </div>
            {errorState.date && <p className="psan"> Please select a date.</p>}
          </div>
          <div className="imageupload">
            <div>
              <p className="profile">
                Profile image <span className="span">*</span>
              </p>
            </div>
            <div className={errorState.image ? "imgdiverr" : "imgdiv"}>
              <label>
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="uploadbox">
                  {image ? (
                    <img className="img" src={image} alt="img" />
                  ) : (
                    <div className="icondiv">
                      <div className="icon">
                        <img
                          src="uploadicon.svg"
                          alt="upload"
                          className="uploadicon"
                        />
                      </div>
                      <div
                        className={
                          errorState.image
                            ? "imgplaceholdererr"
                            : "imgplaceholder"
                        }
                      >
                        <p>Upload your image</p>
                      </div>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>
          {errorState.image && <p className="psan">Image cannot be blank</p>}
        </div>
        <div>
          {image && (
            <button
              type="button"
              onClick={() => setImage(null)}
              className="removebutt"
            >
              Remove photo
            </button>
          )}
        </div>
      </div>
      <div className="buttondiv">
        <button className="button2" onClick={HandleBackStep}>
          <FaChevronLeft />
          Back
        </button>
        <button type="button" className="button1" onClick={handleSubButton}>
          Submit 3/3 <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
