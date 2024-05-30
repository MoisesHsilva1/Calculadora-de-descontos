let Valor = document.querySelector('#Conteudo-valor');
let Desconto = document.querySelector('#Conteudo-valor-desconto');
let Resultado = document.querySelector('#resultado')

function validarCampo() {
    if(Valor.value == '' || Desconto.value == '') {
        window.alert('Digite um valor para calcular');
        return false;
    } else {
        Valor.value == 0 || Desconto.value == 0
        window.alert('Digite um valor acima de 0');
        return false;
    }
    return true;
}

function calcularDesconto () {
  let PreçoOriginal = parseFloat(Valor.value);
  let percetualDesconto = parseFloat(Desconto.value);

  if (percetualDesconto > 0 || percetualDesconto > 100) {
     window.alert('digite um valor valido para desconto!!');
     return;
}
 let DescontoFinal = (percetualDesconto / 100) * PreçoOriginal
 let PrecoFinal = PreçoOriginal 

 for (let i = 0; i < DescontoFinal; i += 0.01){
    PrecoFinal += 0.01;
}
 Resultado.textContent = 'O preço final com desconto é: ' + precoFinal.toFixed(2);
}
document.querySelector('.Button-Calcular').addEventListener('click', function(){
    if (validarCampo()) {
        calcularDesconto();
     };
});
    
