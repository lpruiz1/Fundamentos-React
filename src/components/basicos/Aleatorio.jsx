import React from "react";

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default (props) => {
  const { min, max } = props;
  const aleatorio = numeroAleatorio(min, max);
  return (
    <div>
      <h2>Veja aqui seu número aleatório!</h2>
      <p>
        <strong>número mínimo:</strong> {min}
      </p>
      <p>
        <strong>número máximo:</strong> {max}
      </p>
      <p>
        <strong>número escolhido:</strong> {parseInt(aleatorio)}
      </p>
    </div>
  );
};