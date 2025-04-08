//Array
let timesPaulistas =["Santos","Sao Paulo","Palmeiras","ponte preta"]

//Acessar um item do Array
console.log(timesPaulistas[0])

//Verificar o tamanho da lista
console.log (timesPaulistas.length)

//Adicionar um item no final do Array
timesPaulistas.push("Corinthians")
console.log(timesPaulistas)

//Adicionar um item no inicio do array
timesPaulistas.unshift("Guarani")

//Removendo um item no comeco do array
timesPaulistas.shift()
console.log(timesPaulistas)

//Remover um item no fim do array 
timesPaulistas.pop()
console.log (timesPaulistas)

//Verificar a posiçaõ de um item 
console.log (timesPaulistas.indexOf("Santos") )

// Metodo splice()
//  - Adicionar 
//  - Remover
//  - Modificar

// Remover um item a partir de uma posiçao
//array.splice (pocicaao,quantidadeDeItensRemovidos)
timesPaulistas.splice(1,1)
console.log (timesPaulistas)

//Remover um item a partir de um valor
timesPaulistas.splice(timesPaulistas.indexOf("santos"),1)
console.log(timesPaulistas)

//Adicionando itens dentro de um Array
timesPaulistas.splice(0,0,"Santos","sao paulo","palmeiras", "corithians")
console.log(timesPaulistas)

//Modificando itens de um array
timesPaulistas.splice(2,2,"Guarani","ponte preta")
console.log(timesPaulistas)

//percorrer um array
console.log("Maiores timmes paulistas");
let i = 0;

timesPaulistas.forEach((times) =>{
  i++
   console.log(i , "-",time);
})
