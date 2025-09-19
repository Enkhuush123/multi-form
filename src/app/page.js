"use client";

import { useState } from "react";
import { StepOne } from "./_feature/StepOne";
import { StepTwo } from "./_feature/StepTwo";
import "./index.css";
import { StepThree } from "./_feature/StepThree";
import { StepFour } from "./_feature/StepFour";

export default function Home() {
  const getSavedStep = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("currentStep");
      return saved ? Number(saved) : 1;
    }
  };
  const [step, setStep] = useState(getSavedStep);
  const saveStep = (next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", next);
    }
    setStep(next);
  };

  const nextStep = () => {
    saveStep(step + 1);
  };

  const backStep = () => {
    if (step === 1) return;
    saveStep(step - 1);
  };

  const backtostep = () => {
    if (step === 4) {
      saveStep(step - 3);
    }
  };
  return (
    <>
      {step === 1 && <StepOne HandleNextStep={() => nextStep()} />}

      {step === 2 && (
        <StepTwo
          HandleBackStep={() => backStep()}
          HandleNextStep={() => nextStep()}
        />
      )}
      {step === 3 && (
        <StepThree
          HandleBackStep={() => backStep()}
          HandleNextStep={() => nextStep()}
        />
      )}
      {step === 4 && <StepFour backtostep={() => backtostep()} />}
    </>
  );
}
