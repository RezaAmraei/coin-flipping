import logo from "./logo.svg";
import "./App.css";

function App() {
  function fiveHeads() {
    return new Promise((resolve, reject) => {
      // your code here!
      let attempts = 0;
      let headsCount = 0;
      while (attempts < 100 && headsCount < 5) {
        let coinFlip = Math.random() > 0.5 ? "heads" : "tails";
        if (coinFlip == "heads") {
          headsCount++;
          attempts++;
          if (headsCount == 5) {
            resolve(`You flipped 5 heads in a row in ${attempts} attempts!`);
          }
        } else {
          attempts++;
          headsCount = 0;
        }
      }
      reject("You failed to flip 5 heads in a row in 100 attemps");
    });
  }
  fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  console.log("When does this run now?");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
}

export default App;
