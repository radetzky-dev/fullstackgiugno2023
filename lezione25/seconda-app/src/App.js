import "./App.css";

import React from "react";


import HelloWorld from "./components/HelloWrold";

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

function Welcome(props) {
  return <h1>Hello Welcome, {props.name}</h1>;
}

function Saluta(props) {
  const surname = props.surname;
  return (
    <h2>
      Ciao {props.name} {surname.toUpperCase()}
    </h2>
  );
}

//vedi https://medium.com/@martin.crabtree/react-js-using-children-props-c83d5b259756#:~:text=The%20%7B%20props.,be%20rendered%20by%20the%20child.
function MyTitle (props) {
  return <h5>TEST : {props.children}</h5>;
}

function GetGreeting(props) {
  if (props.name) {
    return <Welcome name={props.name}/>;
  }
  return <h1>Hello, Stranger.</h1>;
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

  //const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render();

  /*
  root.render(
    React.createElement(ingredientList, { items: myIngredients }, null)
  );
  */

  //  root.render(React.createElement(threeColumns, null, null));

  let myName = "Paolo";
  let mySurname = "Rossi";

  return (
    <div>
      <h2>Il mio componente</h2>
      <HelloWorld/>
      <h1>Esempio JSX</h1>
      <Welcome name={myName} />
      <Saluta name="Paolo" surname={mySurname} />
      <hr></hr>
      <GetGreeting name={myName} />
      <NumberList items={myList} />
      <MyTitle> <p>Prova</p> </MyTitle>
    </div>
  );
}

export default App;
