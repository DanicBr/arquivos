
function clicou() {
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")

}

function redirecionar(){
    window.open("https://tetris.com/play-tetris");/*esse abre em uma nova guia*/ 
    window.location.href = "https://tetris.com/play-tetris";/*esseabre na mesam guia*/
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"/*mostra esse texto enquanto nao passa o mouse*/
    elemento.innerHTML = "Obrigado por passar o mouse";
   // alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"/*mostra esse texto dps de passar o mouse*/
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}   

/*function soma (n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar =  true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));


//alert(soma(5,10));
*/

/*var lista = [“Alemanha”, “Inglaterra”, “Escócia”]
lista.push(“Polônia”);
lista.pop(“Inglaterra”);
*/

/*
var d = new Date();
alert(d.getMinutes()+1);
alert(d.getHours()+1);
alert(d.getMonth()+1);
alert(d.getDay()+1);
*/
/*
var count;
for(count = 0; count <= 5; count++)[
    alert(count)
]
*/

/*var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++ ; 
};
*/

/*var idade  =  prompt ("Qual a sua idade");
if (idade >= 18) {
    alert("maior idade");
} else{
    alert("menor de idade");]  
}
*/


/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "ciano"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

/*var lista = ["maça","bola de futebol","bicicleta","ouro"]
//lista.push("uva")
//lista.pop()
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
*/

/*var nome = "Danilo Alfa Henrique";
var idade = 15;
var idade2 = 10;
var frase = "Neymar é o melhor jogador do mundo!"
//alert(nome + " tem "+ idade+ " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade - idade2);
console.log(frase.toUpperCase());
//alert(frase.replace("cr7", "Neymar"));
*/
