import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ciao mondo!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Impara React
        </a>
        <h2>Hello!</h2>
        <Button variant="primary" className="mr-1">
          Primary
        </Button>
      </header>
    </div>
  );
}

export default App;
