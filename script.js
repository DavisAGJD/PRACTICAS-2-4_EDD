//Importacion de las clases al script principal
import Factorial from "./clases/Factorial.js";
import Fibonacci from "./clases/Fibonacci.js";
import MCD from "./clases/MCD.js";

//Obtencion de elementos del DOM
const seleccionPractica = document.getElementById("work-selector");
const contenedor = document.querySelector(".container");

//Elementos del formulario factorial
const formFactorial = document.getElementById("form-factorial");
const numFactorial = document.getElementById("factorial-number");
const factorialSpan = document.getElementById("resultado-factorial");

//Elementos del formulario fibonucci
const formfibonacci = document.getElementById("form-fibonacci");
const numfibonacci = document.getElementById("fibonacci-number");
const fibonacciSpan = document.getElementById("resultado-fibonacci");

//Elementos del formulario MCD
const formMcd = document.getElementById("form-mcd");
const num1Mcd = document.getElementById("mcd1");
const num2Mcd = document.getElementById("mcd2");
const mcdSpan = document.getElementById("resultado-mcd");

contenedor.style.display = "none";
ocultarFormularios();

//Funcion para ocultar los formularios de los problemas
function ocultarFormularios() {
  formFactorial.style.display = "none";
  formfibonacci.style.display = "none";
  formMcd.style.display = "none";
}

//Funcion que reacciona al evento "change" para aparecer formularios
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

//funcion que reacciona al "submit" del formulario de factorial"
formFactorial.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = parseInt(numFactorial.value);

  if (isNaN(numero) || numero <= 0) {
    alert("Por favor, ingrese un número válido mayor a 0.");
    return;
  }

  try {
    const factorial = new Factorial(numero);
    const resultado = factorial.calcularFactorial();
    factorialSpan.textContent = `${resultado}`;
  } catch (error) {
    factorialSpan.textContent = error.message;
  }
});

//funcion que reacciona al "submit" del formulario de fibonacci"
formfibonacci.addEventListener("submit", (event) => {
  event.preventDefault();
  const numero = parseInt(numfibonacci.value);

  // Validación del número ingresado
  if (isNaN(numero) || numero <= 0) {
    alert("Por favor, ingrese un número válido mayor a 0.");
    return;
  }

  const fibonacci = new Fibonacci(numero);
  const resultado = fibonacci.generarSerie();

  fibonacciSpan.textContent = `La serie de Fibonacci hasta el número ${numero} es: ${resultado.join(
    ", "
  )}`;
});

//funcion que reacciona al "submit" del formulario de MCD"
formMcd.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero1 = parseInt(num1Mcd.value);
  const numero2 = parseInt(num2Mcd.value);

  // Validación de los números ingresados
  if (
    isNaN(numero1) ||
    numero1 <= 0 ||
    isNaN(numero2) ||
    numero2 <= 0 ||
    !Number.isInteger(numero1 || !Number.isInteger(numero2))
  ) {
    alert(
      "Por favor, ingrese dos números válidos enteros y que sean mayores a 0."
    );
    return;
  }

  try {
    const mcd = new MCD(numero1, numero2);
    const resultado = mcd.calcular();
    mcdSpan.textContent = `El MCD de ${numero1} y ${numero2} es: ${resultado}`;
  } catch (error) {
    mcdSpan.textContent = error.message;
  }
});
