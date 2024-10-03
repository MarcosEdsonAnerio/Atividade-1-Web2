class VendaCamisetas {
    constructor(qtdPequena, qtdMedia, qtdGrande) {
        this.precoPequena = 10;
        this.precoMedia = 12;
        this.precoGrande = 15;
        this.qtdPequena = qtdPequena;
        this.qtdMedia = qtdMedia;
        this.qtdGrande = qtdGrande;
    }

    calcularValorTotal() {
        let totalPequenas = this.qtdPequena * this.precoPequena;
        let totalMedias = this.qtdMedia * this.precoMedia;
        let totalGrandes = this.qtdGrande * this.precoGrande;
        return totalPequenas + totalMedias + totalGrandes;
    }
}

let camisetas = new VendaCamisetas(9, 5, 6);

console.log(`O valor total arrecadado será: R$ ${camisetas.calcularValorTotal()}`);
