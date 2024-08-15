export default function Options({ reset, totalFeedback, updateFeedback }) {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={reset} disabled={!totalFeedback}>
        Reset
      </button>
    </div>
  );
}
