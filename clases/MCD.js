class MCD {
  constructor(a, b) {
    this.a = a;
    this.b = b;
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