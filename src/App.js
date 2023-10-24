import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";






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

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

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
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>

          <tbody>
            {" "}
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </tbody>
        </table>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default App;
