function btnEncriptado(){
        var encriptar = document.getElementById('entrada_texto').value;
        var encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        document.getElementById("salida_texto").value = encriptado
        document.getElementById("entrada_texto").value=" ";
}
//const
function btnDesencriptador(){
var desencriptar= document.getElementById ("desencriptar_texto").value;
var desencriptado= desncriptar.replace(/enter/gi, "e"). replace(/imes/gi, "i"). replace(/ai/gi, "a").replace(/ober/gi,"o").replace(/ufat/gi, "u");
document.getElementById("salida_texto").value= desencriptado
document.getElementById("entrada_texto").value="";

}

 function btnCopiar(){
    var copyText = document.getElementById("salida_texto");
    copyText.select();
    document.execCommand("Copy");
    document.getElementById("salida_texto").value=" ";
}