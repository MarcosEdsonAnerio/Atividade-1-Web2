class Rachar {
    constructor(qtdTotal) {
        this.qtdTotal = qtdTotal;
    }

    calcularRacha() {
        let valorCarlos = Math.floor(this.qtdTotal / 3);
        let valorAndre = Math.floor(this.qtdTotal / 3);

        let valorFelipe = this.qtdTotal - (valorCarlos + valorAndre);

        return {
            carlos: valorCarlos,
            andre: valorAndre,
            felipe: valorFelipe
        };
    }
}

let racha = new Rachar(459.78);

let resultado = racha.calcularRacha();

console.log(`Carlos: R$ ${resultado.carlos.toFixed(2)}`);
console.log(`André: R$ ${resultado.andre.toFixed(2)}`);
console.log(`Felipe: R$ ${resultado.felipe.toFixed(2)}`);