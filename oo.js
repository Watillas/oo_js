class pessoa{
    constructor(nome, idade, trabalho){
        this.nome = nome;
        this.idade = idade;
        this.trabalho = trabalho;
    }
}

 class funcionario1 extends pessoa{ 
     constructor (nome, idade, trabalho){
        super(nome, idade, trabalho)
        this.salario = salario;
     }

 }

 class funcionario2 extends pessoa {
    constructor (nome, idade, trabalho){
        super(nome,idade,trabalho)
        this.linguagem = linguagem;
    }

 }


 const pessoa1 = new pessoa1 ("watillas" , 23, "back-end" , 3000 , "pyhton")
 const pessoa2 = new pessoa2 ("matheus",18,"front-end",2500,"html")
 const pessoa3 = new pessoa3 ("julio",30,"dev",5000,"js")

 console.log(pessoa1);
 console.log(pessoa2);
 console.log(pessoa3);
