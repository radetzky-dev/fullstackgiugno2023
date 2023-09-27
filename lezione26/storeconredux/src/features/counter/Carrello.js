import React from "react";
import { useSelector } from "react-redux";


function Carrello() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <div>
        <h3>Carrello degli acquisti</h3>
        Il carrello contiene <span>{count}</span> prodotti.
      </div>
    </div>
  );
}

export default Carrello;