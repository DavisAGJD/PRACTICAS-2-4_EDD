import Factorial from "./clases/Factorial.js";
import Fibonacci from "./clases/Fibonacci.js";
import MCD from "./clases/MCD.js";

const seleccionPractica = document.getElementById("work-selector");
const contenedor = document.querySelector(".container");

const formFactorial = document.getElementById("factorial");
const numFactorial = document.getElementById("factorial-number");
const factorialSpan = document.getElementById("resultado-factorial");

const formfibonacci = document.getElementById("fibonacci");
const numfibonacci = document.getElementById("fibonacci-number");
const fibonacciSpan = document.getElementById("resultado-fibonacci");

const formMcd = document.getElementById("mcd");
const num1Mcd = document.getElementById("mcd1");
const num2Mcd = document.getElementById("mcd2");
const mcdSpan = document.getElementById("resultado-mcd");

contenedor.style.display = "none";
ocultarFormularios();

function ocultarFormularios() {
  formFactorial.style.display = "none";
  formfibonacci.style.display = "none";
  formMcd.style.display = "none";
}

seleccionPractica.addEventListener("change", function (event) {
  ocultarFormularios();

  if (event.target.value) {
    contenedor.style.display = "block";
  } else {
    contenedor.style.display = "none";
  }

  switch (event.target.value) {
    case "factorial":
      formFactorial.style.display = "block";
      break;
    case "fibonacci":
      formfibonacci.style.display = "block";
      break;
    case "mcd":
      formMcd.style.display = "block";
      break;
  }
});

formFactorial.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = parseInt(numFactorial.value);

  try {
    const factorial = new Factorial(numero);
    const resultado = factorial.calcularFactorial();

    factorialSpan.textContent = `${resultado}`;
  } catch (error) {
    factorialSpan.textContent = error.message;
  }
});

formfibonacci.addEventListener("submit", (event) => {
  event.preventDefault();
  const numero = parseInt(numfibonacci.value);

  const fibonacci = new Fibonacci(numero);
  const resultado = fibonacci.generarSerie();

  fibonacciSpan.textContent = `La serie de Fibonacci hasta el número ${numero} es: ${resultado.join(
    ", "
  )}`;
});

formMcd.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero1 = parseInt(num1Mcd.value);
  const numero2 = parseInt(num2Mcd.value);

  try {
    const mcd = new MCD(numero1, numero2);
    const resultado = mcd.calcular();
    mcdSpan.textContent = `El MCD de ${numero1} y ${numero2} es: ${resultado}`;
  } catch (error) {
    mcdSpan.textContent = error.message;
  }
});
