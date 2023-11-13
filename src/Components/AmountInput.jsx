function AmountInput({ bill, onSetBill }) {
  return (
    <div>
      <label className="label">
        Could you tell me the amount for the bill?
      </label>
      <input
        type="text"
        placeholder="Bill amount..."
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        className="input"
      ></input>
    </div>
  );
}

export default AmountInput;
