import React from "react";
import "./App.css";
import Header from "./componentes/header";
import Quadrado from "./componentes/quadrado";
import Soma from "./componentes/soma";

function App() {
  return (
    <div className="App">
      <Header nome="Nury" />

      <h1>Hello</h1>

      <hr />

      <Soma primeiro={7} segundo={22} />
      <Soma primeiro={2} segundo={22} />

      <div className="grupo-quadrado">
        <Quadrado>
          <Soma primeiro={2} segundo={5} />
          Teste
          <p>Batata</p>
        </Quadrado>

        <br />

        <Quadrado>
          <label>Preencha seu nome</label>
          <input type="text" />
        </Quadrado>
      </div>
    </div>
  );
}

export default App;
