import "./App.css"
import React from "react";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório" color="#5cce00">
        <Aleatorio min={0} max={1000000} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#6814ff">
        <Fragmento />
      </Card>
      <Card titulo="#02 - ComParâmetro" color="#ff6814">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Maria da Silva"
          nota={9.9}
        />
      </Card>
      <Card titulo=" #01 - Primeiro Componente" color="#005cce">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
