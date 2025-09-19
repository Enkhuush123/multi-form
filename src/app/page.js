"use client";

import { useState } from "react";
import { StepOne } from "./_feature/StepOne";
import { StepTwo } from "./_feature/StepTwo";
import "./index.css";
import { StepThree } from "./_feature/StepThree";
import { StepFour } from "./_feature/StepFour";

export default function Home() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const backStep = () => {
    if (setStep(step === 1)) {
      return;
    } else {
      setStep(step - 1);
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
      {step === 4 && <StepFour />}
    </>
  );
}
