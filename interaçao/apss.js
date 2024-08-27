var textInput = document.querySelector("#input-texto");
var outPut = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="copia">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
    
    console.log('clicou')
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="copia">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar(){
    var textCop = document.getElementById('copia');

    textCop.select();
    document.execCommand('copy');
    alert("Texto copiado");
}