

function encriptar(){
  let text = document.getElementById("areaTexto").value.toLowerCase();
  text= text.replace(/e/igm, "enter");
  text= text.replace(/i/igm, "imes");
  text= text.replace(/a/igm, "ai");
  text= text.replace(/o/igm, "ober");
  text= text.replace(/u/igm, "ufat");

  

  document.getElementById("imagenalura").style.display = "none";
  document.getElementById("textoEncriptado").innerHTML =text;

  const txt = document.getElementById("areaTexto");
  txt.value = "";
  
}




function desencriptar(){
  
  let desencriptar = document.getElementById("areaTexto").value;
  desencriptar= desencriptar.replace(/enter/g,"e");
  desencriptar= desencriptar.replace(/imes/g,"i");
  desencriptar= desencriptar.replace(/ai/g,"a");
  desencriptar= desencriptar.replace(/ober/g,"o");
  desencriptar= desencriptar.replace(/ufat/g,"u");

  document.getElementById("textoEncriptado").innerHTML= desencriptar;

  const txt = document.getElementById("areaTexto");
  txt.value = "";

}



function copy(id_elemento) {
  let copyText = document.createElement("input");
  copyText.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(copyText);
  copyText.select();
  document.execCommand("copy");
  alert ("Texto guardado");
  document.body.removeChild(copyText);
  
}

