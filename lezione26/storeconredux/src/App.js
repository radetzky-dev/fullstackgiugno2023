import './App.css';
import Counter from "./features/counter/Counter";
import OtherCounter from "./features/counter/OtherCounter";
import Carrello from "./features/counter/Carrello";

function App() {
  return (
    <div>
    <h2>Il mio componente</h2>
    <Counter></Counter>
    <hr>
    </hr>
    <OtherCounter/>
    <hr></hr>
    <Carrello></Carrello>
    </div>
  );
}

export default App;
