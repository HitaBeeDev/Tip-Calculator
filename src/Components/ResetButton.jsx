function ResetButton({ onReset }) {
  return (
    <div>
      <button className="btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
