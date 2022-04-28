function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'criancahomem.png')
                document.body.style.background= '#43443f'
            }
                else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'jovemhomem.png')
                    document.body.style.background= '#endregion9c8c72'

                }
                else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src', 'adultohomem.png')
                    document.body.style.background= '#a9b2af'
                }
            else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
                document.body.style.background= '#a9b2af'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'criancamulher.png')
                document.body.style.background= '#a99a7b'
            }
                else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'jovemmulher.png')
                    document.body.style.background= '#c2c3c5'
                }
                else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src', 'adultamulher.png')
                    document.body.style.background= '#bfc2b7'
                }
            else {
                //idoso
                img.setAttribute('src', 'idosamulher.png')
                document.body.style.background= '#aa8b77'
        }
        
        
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}