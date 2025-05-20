//Switch Case - Menu
//if 

//Metodos de pagamento
// 1 - pix - 10% de desconto
// 2 - debito - 5% de desconto
// 3 - credito - valor total


function calcularPagamento(){

let formaPagamento = document.querySelector("#formaPagamento").value
let valorTotal = parseFloat(document.querySelector("#valorCompra").value)
console.log(formaPagamento, valorTotal);
let resultado =document.querySelector("#resultado")
let valorFinal

if(valorTotal<=0 || isNaN(valorTotal)){
   resultado.innerHTML = "Por favor informe um valor valido"   
}
else{

switch (formaPagamento){
    case "pix": 
        valorFinal = valorTotal * 0.9
        resultado.innerHTML = `valor Final foi de R$ ${valorFinal}`;
        break
    case "debito":     
         valorFinal = valorTotal * 0.95
         resultado.innerHTML = `valor Final foi de R$ ${valorFinal}`;
         break
    case "credito":
        resultado.innerHTML = `valor Final foi de R$ ${valorFinal}`;
         break
     default:
        resultado.innerHTML = "informe uma forma de pagamento valida";
        break
    }
  }
}