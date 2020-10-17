var divhtml=document.getElementById("div_msg");
var valorX=document.getElementById("cordenada1");
var valorY=document.getElementById("cordenada2");
var boton=document.getElementById("boton_mostrar");
boton.addEventListener("click",cordenada_click);

function cordenada_click()
{
	
	div_msg.innerHTML="Cuandrante:";
	var x=parseInt(cordenada1.value);
	var y=parseInt(cordenada2.value);

	if (x > 0.0 && y > 0.0)
	{	
	texto.innerHTML = "Q1";
	}
	else if (x < 0.0 && y > 0.0)
	{
	texto.innerHTML = "Q2";
	}
	else if (x < 0.0 && y < 0.0)
	{
	texto.innerHTML = "Q3";
	}
	else if (x > 0.0 && y < 0.0)
	{
	texto.innerHTML = "Q4";
	}
	else if (x == 0.0 && y == 0.0)
	{
	texto.innerHTML = "Origem";
	}
	else if (x == 0.0 && y != 0.0)
	{
	texto.innerHTML = "Eixo Y";
	}
	else if (x != 0.0 && y == 0.0)
	{
	texto.innerHTML = "Eixo X";
	}
}