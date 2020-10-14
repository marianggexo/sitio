var divhtml=document.getElementById("div_msg");
var X=document.getElementById("cordenada1");
var Y=document.getElementById("cordenada2");
var boton=document.getElementById("boton_mostrar");
boton.addEventListener("click",cordenada_click);

function cordenada_click
{
	X=parseInt(cordenada1.value);
	Y=parseInt(cordenada2.value);
}