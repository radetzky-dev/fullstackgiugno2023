import React, { useState } from "react";

//questo componente è un funzione anziché una clase
function Clicca() {
  
    //il secondo dopo la , è un metodo di React
  const [conteggio, setConteggio] = useState(0);
  const [mioNome, setNome] = useState("Mario");

  return (
    <div>
      <p>Hai cliccato {conteggio} volte</p>
      <button
        onClick={() => {
          //creo una funzione qui perché sono già dentro una funzione
          setConteggio(conteggio + 1);
          setNome(mioNome + "x");
        }}
      >
        Cliccami
      </button>
      <p>Ti chiami {mioNome}</p>
    </div>
  );
}

export default Clicca;
