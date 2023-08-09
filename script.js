const pare = document.querySelector(".pare")
const siga = document.querySelector(".siga")
const atencao = document.querySelector(".atencao")



//abrir sinal VERMELHO
pare.onclick = function () {
    document.querySelector("#vermelho").classList.remove("opc")
    document.querySelector("#verde").classList.add("opc")
   document.querySelector("#amarelo").classList.add("opc")


}


//abrir sinal VERDE
siga.onclick = function () {
    document.querySelector("#vermelho").classList.add("opc")
    document.querySelector("#verde").classList.remove("opc")
    document.querySelector("#amarelo").classList.add("opc")

}


//abrir sinal AMARELO
atencao.onclick = function () {
    document.querySelector("#vermelho").classList.add("opc")
    document.querySelector("#verde").classList.add("opc")
    document.querySelector("#amarelo").classList.remove("opc")

}








