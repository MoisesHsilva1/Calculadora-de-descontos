let Valor = document.querySelector('#Conteudo-valor');
let Desconto = document.querySelector('#Conteudo-valor-desconto');
let Resultado = document.querySelector('#resultado')

function validarCampo() {
    if(Valor.value== '' || Desconto.value == '') {
        window.alert('Digite um valor para calcular');
        return false;
    } else {
    let calculo =
      parseFloat(Valor.value) *
      parseFloat(Desconto.value) / 100
     Resultado.textContent = 'O preço final com desconto é: ' + calculo
    }
return true;

}

document.querySelector('.Button-Calcular').addEventListener('click', function(){
    validarCampo() 
});
    
