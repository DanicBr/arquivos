var dia = new Date()
var hora = dia.getDay()

console.log(hora)

switch (hora){
    case 0:
        console.log("Bom Domingo")
        break;

    case 1:
        console.log("Boa Segunda")
        break
        
    case 2:
        console.log("Boa terça")
        break

    case 3:
        console.log("Boa quarta")
        break

    case 4:
        console.log("Boa Quinta")
        break

    case 5:
        console.log("Boa sexta")
        break

    default:
        console.log("Bom sabado")
        break;


}