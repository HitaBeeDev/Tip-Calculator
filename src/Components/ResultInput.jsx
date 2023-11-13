function ResultInput({ bill, tip }) {
  return (
    <h3 className="result">
      Your final payment is{" "}
      <span className="result-amount"> ${bill + tip} </span>(${bill} (bill) + $
      {tip} (tip))
    </h3>
  );
}

export default ResultInput;
