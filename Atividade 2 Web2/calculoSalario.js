class Funcionario {
    
    constructor(nome, salario) {
        this.nome = nome; 
        this.salario = salario;
    }

    calcularSalario() {
        return (this.salario * 0.2);
    }

    descontoInss() {
        return (this.salario - 0.08)
    }
}

let funcionario1 = new Funcionario("Marcos", 1500);

console.log(`Salario BRUTO ${funcionario1.calcularSalario()}`);
console.log(`Salario Com disconto ${funcionario1.descontoInss()}`);