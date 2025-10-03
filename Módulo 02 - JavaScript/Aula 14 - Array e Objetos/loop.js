// for i in range (1, 10, 1):
//      print(i)

for (let i = 0; i <= 10; i++) {
    console.log(i);   
}

let listaProdutos = ["Computador", "Notebook", "Teclado", "Mouse"]


//Percorrer array - for
for (let i = 0; i < listaProdutos.length; i++) {
    console.log(listaProdutos[i]); 
}

//Percorrer array - forEach
listaProdutos.forEach((produto) => {
    console.log(produto);
    
})