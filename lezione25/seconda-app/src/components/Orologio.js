import React from "react";

class Orologio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ora: new Date(),
    };
  }

  aggiornaTempo() {
    this.setState((state) => ({
      ora: new Date(),
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.aggiornaTempo(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>{this.state.ora.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Orologio;
