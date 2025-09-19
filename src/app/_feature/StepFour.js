"use client";

import { useState } from "react";
import { Input } from "../_components/Form-Input";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const StepFour = ({ backtostep }) => {
  return (
    <div className="container">
      <div className="cont">
        <div className="headerp">
          <div>
            <div>
              <img src="/pinecone.png" alt="pinecone"></img>
            </div>
            <div className="header">
              <p>You're All Set 🔥</p>
            </div>
            <div className="headertext">
              <p>We have received your submission. Thank you!</p>
            </div>
          </div>
          <div>
            <button className="return" type="button" onClick={backtostep}>
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
