import React, { useEffect, useState } from "react";

//questo componente è un funzione anziché una clase
function TestEffetto() {
  //il secondo dopo la , è un metodo di React
  const [conteggio, setConteggio] = useState(0);

  useEffect(() => {
    document.title = "Hai cliccato " + conteggio + " volte";
    if (conteggio > 0) {
      document.body.style.background = "red";
    }
  });

  return (
    <div>
      <p>Hai cliccato {conteggio} volte</p>
      <button onClick={() => setConteggio(conteggio + 1)}>Cliccami</button>
    </div>
  );
}

export default TestEffetto;
