

var divhtml=document.getElementById("div_msg");
var volumen=document.getElementById("texto_n1");

var boton=document.getElementById("boton_calcula");
boton.addEventListener("click",radio_click);

function radio_click()
 {
 	pi=3.14159;
 	r=parseInt(radio1.value);
	var volumen =(4.0/3)*pi*r*r*r;
	
	div_msg.innerHTML="VOLUME:" + volumen;
}