//index.js

let listaDeEstudantes = ["Helena", "Chico", "Mário"];
console.log(listaDeEstudantes)
let quantidadeDeEstudantes = listaDeEstudantes.length;
let inicio = 0;
console.log(quantidadeDeEstudantes);
 while (inicio < quantidadeDeEstudantes) {
     console.log(listaDeEstudantes[inicio]);
     inicio++;   
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

for (let numero = 1; numero <= 10; numero++) {
    console.log(numero);
}

listaDeEstudantes.push("José");
console.log(listaDeEstudantes);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
let listaDeAprovados = ["Helena", "Chico", "Mário", "josé"]
let quantidadeDeAprovados = listaDeAprovados.length;
if (quantidadeDeAprovados < 4 ) {
    listaDeAprovados.push("João");
    console.log(listaDeAprovados);
}else {

    console.log("Não é possivel inserir mais alunos");
}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxx
