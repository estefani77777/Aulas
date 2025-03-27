//getElementsByTagName  seleciona todas as que eu desejo 
let paragrafos =document.getElementsByTagName("p")
paragrafos[0].innerHTML = "Palmeiras 2 x 0, sem mundial"

//getElementById - seleciona um unico elemento do tipo ID
var titulo = document.getElementById("titulo")
titulo.innerHTML ="Alterado usando JS"

//getElementByClassName - seleciona todas os elementos do tipo class 
const caixas = document.getElementsByClassName("caixa")
caixas[0].style.backgroundColor = "red"
caixas[1].style.backgroundColor = "green"

//querySalector - Seleciona um elementos do tipo class ou Id
const paragrafoQuery = document.querySelector ("paragrafoQuery")
paragrafoQuery.style.backgroundColor = "blue"
paragrafoQuery.style.padding = "10px"

function alteraTexto () {
    let input = document.getElementsTagName ("input")[0].value
    titulo.innerHTML = input 
}
   
    function alterParagrafo (){
        let input = document.getElementsTagName ("input")[1].value
        paragrafoQuery.innerHTML = input
    }

//querySalector - Seleciona todos os elementos do tipo class ou Id
const caixaQuery = document.querySelectorAll(".caixaQuery")

caixaQuery[0].style.backgroundColor = "purple"
caixaQuery[1].style.backgroundColor = "black"
caixaQuery[1].style.color = "white"




