import "./App.css";

import React from "react";
import ReactDOM from "react-dom";

function Populate(myList) {
  return myList.map((i) => <li key={i.toString()}>{i}</li>);
}

function NumberList(props) {
  console.log(props);
  const numbers = props.items;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

function App() {
  let myList = [
    "aTtività 1",
    "atTività 2",
    "attività 3",
    "attività 4",
    "attività 5",
  ];
  let myList2 = [
    "spesa 1",
    "speSa 2",
    "attività 3",
    "attività 4",
    "attività 5",
  ];

  let demo = React.createElement(
    "div",
    { style: { color: "green" } },
    React.createElement("h1", { className: "title" }, "To do list"),
    React.createElement(
      "h1",
      { className: "title" },
      "Questo è un altro titolo"
    ),
    React.createElement(
      "ul",
      null,
      //myList.map(i => React.createElement("li", null, i))
      Populate(myList)
    ),
    React.createElement("ul", null, Populate(myList2))
  );

 // ReactDOM.render(demo, document.getElementById("root"));

  const items = ["attività 1", "attività 2", "attività 3", "att 4"];

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<NumberList items={items} />);
 

}

export default App;
