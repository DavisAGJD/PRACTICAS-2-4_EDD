class Factorial {
    constructor(numero){
        this.numero = numero;
    }

    calcularFactorial(num = this.numero){
        if (num === 0 || num === 1){
            return 1;
        }
        return num * this.calcularFactorial(num - 1);
    }
}

export default Factorial;