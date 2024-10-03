class Aluno {
    
    constructor(nome, nota1, nota2, nota3, nota4) {
        this.nome = nome; 
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    calcularMedia() {
        return (this.nota1 + this.nota2 + this.nota3) / 4;
    }

    verificarSituacao() {
        const media = this.calcularMedia();
        if (media > 7.0) {
            return "Aluno Aprovado";
        } else if (media === 7.0) {
            return "Aluno em Recuperação";
        } else {
            return "Aluno Reprovado";
        }
    }
}

let aluno1 = new Aluno("Marcos", 3, 3, 3);

console.log(`Média de ${aluno1.nome}: ${aluno1.calcularMedia()}`);

console.log(aluno1.verificarSituacao());