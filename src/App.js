import "./styles.css";
import Slot from "./Slot";
export default function App() {
  return (
    <div className="App">
      <h1>Slot Machine</h1>
      <Slot
        val1={Math.floor(Math.random() * 10)}
        val2={Math.floor(Math.random() * 10)}
        val3={Math.floor(Math.random() * 10)}
      />
    </div>
  );
}
