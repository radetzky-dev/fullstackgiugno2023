import React from "react";
import { useState } from "react";

function MyButton({ contatore, onClick }) {
  return <button onClick={onClick}>Hai cliccato {contatore} volte.</button>;
}

export default function Delega() {
  const [contatore, setContatore] = useState(0);

  function Incrementa() {
    setContatore(contatore + 1);
  }

  return (
    <div>
    <h1>Contatori di click</h1>
      <MyButton contatore={contatore} onClick={Incrementa} />
      <MyButton contatore={contatore} onClick={Incrementa} />
    </div>
  );
}
