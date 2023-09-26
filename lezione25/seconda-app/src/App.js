import "./App.css";

import React from "react";
import ReactDOM from "react-dom";

function Populate(myList)
{
  return myList.map(i => React.createElement("li", null, i));
}


function App() {

  let myList = ["aTtività 1","atTività 2","attività 3","attività 4", "attività 5"];
  let myList2 = ["spesa 1","speSa 2","attività 3","attività 4", "attività 5"];

  let demo = React.createElement(
    "div",
    { style: { color: "green" } },
    React.createElement("h1", { className: "title" }, "To do list"),
    React.createElement("h1", { className: "title" }, "Questo è un altro titolo"),
    React.createElement(
      "ul",
      null,
      //myList.map(i => React.createElement("li", null, i))
      Populate(myList)
    ),
    React.createElement(
      "ul",
      null,
      Populate(myList2)
    )
  );

  ReactDOM.render(demo, document.getElementById("root"));
}

export default App;
