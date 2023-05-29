import { useState } from "react";
import "./App.css";
useState;

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

export default function App() {
  const [firstNumber, setfirstNumber] = useState(randomNumber());
  const [secondNumber, setsecondNumber] = useState(randomNumber());
  const [inputNumber, setInputNumber] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  // Calculo la variable isCorrect en función de las variables de estado. Yo tengo la certeza que cada vez que se cambia una variable de estado, esta instrucción se vuelve a ejecutar
  let isCorrect = firstNumber + secondNumber === +inputNumber;

  function handleClick() {
    setShowMessage(true);
  }

  function handleReset(){
    setShowMessage(false)
    setInputNumber('')
    setfirstNumber(randomNumber())
    setsecondNumber(randomNumber())
  }

  return (
    <div className="App">
      <div id="canvas">
        <div id="primary-number">{firstNumber}</div>
        <div id="add">+</div>
        <div id="secondary-number">{secondNumber}</div>
        <div id="equal">=</div>
        <div>
          <input
            type="number"
            id="guess"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
          />
        </div>
        <div>
          {/* mini-reto. Codifica los eventos necesarios y funciones, para que al hacer click en "Check", me muestre POR CONSOLA si la suma es correcta o no. NO HACE FALTA MÁS VARIABLES DE ESTADO */}
          <button id="btn" onClick={handleClick}>
            Check
          </button>
          {/* Que al pulsar el botón de Reset, se debe calcular un número aleatorio nuevo, y se debe limpiar el input , y ocultar el mensaje */}
          <button onClick={handleReset}> Reset</button>
        </div>
      </div>

      {showMessage ? (
        <div>
          {isCorrect && <p className="correct">El resultado es correcto</p>}{" "}
          {!isCorrect && (
            <p className="incorrect">El resultado es incorrecto</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
