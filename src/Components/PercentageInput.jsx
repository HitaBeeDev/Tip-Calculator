function PercentageInput({ children, percentage, onSelect }) {
  return (
    <div>
      <label className="label">{children}</label>
      <select
        className="input"
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Absolutely Dissatisfied (0%)</option>
        <option value="5">Meh, So-So! (5%)</option>
        <option value="10">It was Acceptable. (10%)</option>
        <option value="15">Pretty Good Experience! (15%)</option>
        <option value="20">Absolutely Fantastic, The Best! (20%)</option>
      </select>
    </div>
  );
}

export default PercentageInput;
