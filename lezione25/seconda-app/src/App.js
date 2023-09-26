import "./App.css";

import React from "react";
import ReactDOM from "react-dom";

function App() {
  let demo = React.createElement(
    "div",
    { style: { color: "green" } },
    React.createElement("h1", { className: "title" }, "To do list"),
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, "Prima riga"),
      React.createElement("li", null, "Seconda riga")
    )
  );

  ReactDOM.render(demo, document.getElementById("root"));
}

export default App;
