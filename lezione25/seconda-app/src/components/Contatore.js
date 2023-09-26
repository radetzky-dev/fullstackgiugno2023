import React from "react";

class Contatore extends React.Component {
  constructor() {
    super();

    this.state = {
      conteggio: 0,
      nome: "mario",
    };
  }

  aumentaDecrementa(valore) {
    this.setState({
      conteggio: this.state.conteggio + valore,
    });
  }

  cambiaNome() {
    if (this.state.nome === "mario") {
      this.setState({
        nome: "marina",
      });
    } else {
      this.setState({
        nome: "mario",
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.conteggio}</h1>
        <button onClick={() => this.aumentaDecrementa(1)}>Aumenta</button>
        <button onClick={() => this.aumentaDecrementa(-1)}>Decrementa</button>
        <h1>Mi chiamo {this.state.nome}</h1>
        <button onClick={() => this.cambiaNome()}>Cambia</button>
      </div>
    );
  }
}

export default Contatore;
