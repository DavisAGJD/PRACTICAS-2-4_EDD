class Factorial {
    constructor(numero){
        if (numero < 0 ){
            alert("El numero debe ser mayor o igual a cero");
        }
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