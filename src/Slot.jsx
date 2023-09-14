export default function Slot({ val1, val2, val3 }) {
  let isWinner = val1 === val2 && val1 === val3;

  return (
    <div>
      <h1></h1>
      {val1} {val2} {val3}
      <p style={{ color: isWinner ? "green" : "Red" }}>
        {isWinner ? "You Win" : "You Lose"}
      </p>
      <p>{isWinner ? "Congratulations" : "You Suck Again"}</p>
    </div>
  );
}
