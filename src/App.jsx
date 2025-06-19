import { useState } from "react";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./steps/step1/Step1";
import Step2 from "./steps/step2/Step2";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";

export default function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const next = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prev = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        {step === 1 && <Step1 next={next} />}
        {step === 2 && <Step2 next={next} prev={prev} />}
        {step === 3 && <Step3 next={next} prev={prev} />}
        {step === 4 && <Step4 prev={prev} />}
        {step !== 1 && <ProgressBar step={step} totalSteps={totalSteps} />}
      </main>
    </>
  );
}
