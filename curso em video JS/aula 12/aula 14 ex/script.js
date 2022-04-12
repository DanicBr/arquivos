function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res') 
    if (fano.value.length == 0 || Number (fano.value > ano)){
        window.alert('verifique os dados, e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'homem' 
            if (idade >=0 && idade < 10) {
                console.log('criança')
            } else if (idade >=10 && idade < 21) {
                console.log('adolecente')
            }else if (idade < 50 ){
                console.log('adulto')
            }else{
                console.log('idoso')
            }

        }else{
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                // n vai ir pq n sei, e eu n quero fazer as imgs por preguiça c:
            } else if (idade >=10 && idade < 21) {
                
            }else if (idade < 50 ){

            }else{
                
            }
        }
        res.innerHTML = `detectamos ${genero} com  ${idade} anos.`
        res.appendChild(console.log) /*é pra addicionar algo, o cara do curso adicionou uma img, e como eu fiqui com preguiça de editar a imagm, eu n tenho uma imagem pra colar, e n consgui colar o console.log*/
    }
}