import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  function plusCount() {
    setCount(count + 1);
  }

  function minusCount() {
    setCount(count - 1);
  }
  const Messi = function () {
    alert("message");
  };
  const Ronaldo = () => {
    alert("lol");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>lets go</h1>
        {count} count
        <button onClick={plusCount}>Add</button>
        <button onClick={minusCount}>Add</button>
        <button onClick={Messi}>Vote for Messi</button>
        <button onClick={Ronaldo}>Vote for Ronaldo</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
