var imagenes = [];
imagenes["500"] = "500.jpg";
imagenes["200"] = "200.jpg"
imagenes["100"] = "100.jpg"
imagenes["50"] = "50.jpg"

class Billete
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
		this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
	}
}

var caja = [];
caja.push( new Billete(500, 10) );
caja.push( new Billete(200, 15) );
caja.push( new Billete(100, 20) );
caja.push( new Billete(50, 50) );

contar();

var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var boton_saldo = document.getElementById("ver_saldo");
boton_saldo.addEventListener("click", saldo);

var boton_depositar = document.getElementById("deposito");
boton_depositar.addEventListener("click", deposito);

function deposito()
{
	var monto = prompt("Indica el valor a depositar: Billetes 500, 200, 100 y 50", );
	if(monto == 500 || monto == 200 ||  monto == 100 || monto == 50 )
	{
		if(monto == 500)
		{
			var cant_quin = prompt("Indica la cantidad", 1);
			while(isNaN(cant_quin))
			{
				cant_quin = prompt(cant_quin + "No es un valor correcto");
			}
			caja[0].cantidad = caja[0].cantidad + parseInt(cant_quin);
			resultado.innerHTML += "Se ha depositado " + cant_quin + " Billetes de: $" + monto + "<hr />";
		}

		if(monto == 200)
		{
			var cant_dos = prompt("Indica la cantidad", 1);
			while(isNaN(cant_dos))
			{
				cant_dos = prompt(cant_dos + "No es un valor correcto");
			}
			caja[1].cant_dos = caja[1].cantidad + parseInt(cant_dos);
			resultado.innerHTML += "Se ha depositado " + cant_dos + " Billetes de: $" + monto + "<hr />";
		}

		if(monto == 100)
		{
			var cant_cien = prompt("Indica la cantidad", 1);
			while(isNaN(cant_cien))
			{
				cant_cien = prompt(cant_cien + "No es un valor correcto");
			}
			caja[1].cant_cien = caja[1].cantidad + parseInt(cant_cien);
			resultado.innerHTML += "Se ha depositado " + cant_cien + " Billetes de: $" + monto + "<hr />";
		}

		if(monto == 50)
		{
			var cant_cincuenta = prompt("Indica la cantidad", 1);
			while(isNaN(cant_cincuenta))
			{
				cant_cincuenta = prompt(cant_diez + "No es un valor correcto");
			}
			caja[3].cantidad = caja[3].cantidad + parseInt(cant_cincuenta);
			resultado.innerHTML += "Se ha depositado " + cant_cincuenta + " Billetes de: $" + monto + "<hr />";
		}

	}
	else
	{
		resultado.innerHTML = ("Por favor ingrese valores correctos o su tarjeta quedara retenida" + "<hr />");
	}
}



function saldo()
{
	var monto = 0;
	for(var v of caja)
	{
		monto = monto + v.valor * v.cantidad;
		total = monto;
		resultado.innerHTML = "Su saldo actual es: " + monto + "<hr />";
	}
}

function entregarDinero()
{
	var dibujado = [];
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	if (total >= dinero)
	{
		for(bi of caja)
		{
			if (dinero > 0)
			{
				div = Math.floor(dinero/bi.valor);
				if (div>bi.cantidad)
				{
					papeles = bi.cantidad;
				}
				else
				{
					papeles = div;
				}
					bi.cantidad = bi.cantidad-papeles;
				for (var i = 0; i < papeles; i++)
				{
					dibujado.push ( new Billete(bi.valor, 1) );
				}
				dinero -= (bi.valor * papeles);
			}
		}
		if (dinero == 0)
		{
			resultado.innerHTML += "Se ha retirado: <br />";
			for(var e of dibujado)
			{		
				resultado.innerHTML += "<img src=" + e.imagen.src + " />";
			}
			resultado.innerHTML += "<hr />";
		contar();	
		}
		else
		{
			resultado.innerHTML += "No tengo los billetes para esa suma, intenta otro valor <hr />";
		}
	}
	else
	{
		resultado.innerHTML += "No hay dinero suficiente <hr />";
	}	
}

function contar()
{
	total = 0
	for (var tot of caja)
	{
		total = total + tot.valor * tot.cantidad;
	}
	console.log(total);
}
