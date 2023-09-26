import "./App.css";

import React from "react";
import ReactDOM from "react-dom";

function Populate(myList) {
  return myList.map((i) => <li key={i.toString()}>{i}</li>);
}

function ingredientList(props) {
  console.log(props.items);
  return React.createElement(
    "ul",
    { className: "ingredienti" },
    props.items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  );
}

const myIngredients = [
  "1 cup",
  "1 crunh",
  "1 egg",
  "1 tea",
  "1 milk",
  "1 apple",
];

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  console.log(props);
  const numbers = props.items;
  const listItems = numbers.map((i) => (
    <ListItem key={i.toString()} value={i} />
  ));
  return <ul>{listItems}</ul>;
}

function MyElem() {
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
    React.createElement("ul", null, Populate(myList2))
  );

  return demo;
}

/*
function PrepareVisual(myList) {
  return React.createElement(
    "div",
    { className: "colonna" },
    React.createElement(MyElem, null, null),
    React.createElement(NumberList, { props: myList }, null)
  );
} */

function threeColumns() {
  return React.createElement(
    "div",
    { className: "colonna" },
    React.createElement(
      "div",
      { className: "singleColumn" },
      React.createElement(ingredientList, { items: myIngredients }, null)
    ),
    React.createElement(
      "div",
      { className: "singleColumn" },
      React.createElement(ingredientList, { items: myIngredients }, null)
    ),
    React.createElement(
      "div",
      { className: "singleColumn" },
      React.createElement(ingredientList, { items: myIngredients }, null)
    )
  );
}

function App() {
  let myList = [
    "aTtività 1",
    "atTività 2",
    "attività 3",
    "attività 4",
    "attività 5",
  ];

  // ReactDOM.render(demo, document.getElementById("root"));

  const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(<NumberList items={myList} />);

  /*
  root.render(
    React.createElement(ingredientList, { items: myIngredients }, null)
  );
  */


  root.render(React.createElement(threeColumns, null, null));

}

export default App;
