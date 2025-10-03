let produto = {
    nome: "Computador",
    fabricante: "Positivo",
    preco: 2000,
    processador: "I3-2100"
}

//Acessando um item no objeto
console.log(produto.nome);
console.log(produto["nome"]);

//Adicionar um item no objeto
produto.armazenamento = "256 gb"
produto ["Memoria RAM"] = "8 gb"
console.log(produto);

//Remover elemento
delete produto.armazenamento
console.log(produto);
