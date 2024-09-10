class MCD {
  constructor(a, b) {
    this.validarNumeros(a, b);
    this.a = a;
    this.b = b;
  }

  validarNumeros(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      alert("Ambos numeros deben de ser enteros");
    } else if (a < 1 || b < 1) {
      alert("Ambos numeros deben ser mayores a uno");
    }
  }

  calcular() {
    return this.calcularMCD(this.a, this.b);
  }

  calcularMCD(a, b) {
    if (b === 0) {
      return a;
    }
    return this.calcularMCD(b, a % b);
  }
}

export default MCD;