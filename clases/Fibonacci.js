class Fibonacci {
    constructor(numero){
        this.numero = numero;
    }

    calcularfibonacci(n){
        if (n === 0){
            return 0;
        }
        else if (n === 1){
            return 1;
        }
        return this.calcularfibonacci(n - 1) + this.calcularfibonacci(n - 2)
    }

    generarSerie(){
        const serie = []

        for (let i = 0; i <= this.numero; i++){
            serie.push(this.calcularfibonacci(i))
        }
        return serie
    }
}

export default Fibonacci;