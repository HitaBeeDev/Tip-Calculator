import Title from "./Title";
import AmountInput from "./AmountInput";
import PercentageInput from "./PercentageInput";
import ResultInput from "./ResultInput";
import ResetButton from "./ResetButton";
import { useState } from "react";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="container">
      <Title />
      <AmountInput bill={bill} onSetBill={setBill} />
      <PercentageInput percentage={percentage1} onSelect={setPercentage1}>
        How would you rate the service?
      </PercentageInput>
      <PercentageInput percentage={percentage2} onSelect={setPercentage2}>
        What did your friend think of the service?
      </PercentageInput>
      <ResultInput bill={bill} tip={tip} />
      <ResetButton onReset={handleReset} />
    </div>
  );
}

export default TipCalculator;
