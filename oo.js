class pessoa{
    constructor(nome, idade, trabalho){
        this.nome = nome;
        this.idade = idade;
        this.trabalho = trabalho;
    }
}

class salario extends pessoa{ 
     constructor (nome, idade, trabalho,salario){
        super(nome, idade, trabalho)
        this.salario = salario;
     }

 }

 class linguagem extends pessoa {
    constructor (nome, idade, trabalho, linguagem){
        super(nome,idade,trabalho)
        this.linguagem = linguagem;
    }

 }


 const pessoa1 = new salario("watillas" , 23, "back-end" , 3000 )
 const pessoa2 = new linguagem ("matheus",18,"front-end",2500,"html")
 const pessoa3 = new linguagem("julio",30,"dev",5000,"js")

 console.log(pessoa1);
 console.log(pessoa2);
 console.log(pessoa3);
