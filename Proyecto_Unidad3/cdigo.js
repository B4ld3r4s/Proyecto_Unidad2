

function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("contenido").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}
function operacion1(){
	
   var n1= document.getElementById('caja_Am').value;
   var sum1= parseInt(n1) * 300;
   var n2= document.getElementById('caja_az').value;
   var sum2= parseInt(n2) * 400;
   var n3= document.getElementById('caja_ne').value;
   var sum3= parseInt(n3) * 500;
   var n4= document.getElementById('T_cam').value;
   var sum4= parseInt(n4) * 600; 
   var n5= document.getElementById('T_a').value;
   var sum5= parseInt(n5) * 300; 
    var suma6= sum1 + sum2 + sum3 + sum4 + sum5; 
    var sub= suma6 * .16;
    var total= suma6 + sub ;
    document.getElementById("h").innerHTML = total;
    document.getElementById("f").innerHTML = suma6; 
    document.getElementById('g').innerHTML= sub;
    document.getElementById("a").innerHTML = sum1;
    document.getElementById("b").innerHTML = sum2;
    document.getElementById("c").innerHTML = sum3;
    document.getElementById("d").innerHTML = sum4;
    document.getElementById("e").innerHTML = sum5;
}

function Borrar(){
location.reload(true);        

	
}
function compra(){
if (parseInt(document.getElementById("h").innerHTML)==0) {
		alert("Favor de seleccionar producto");
	}else{
		alert("Compra exitosa");
	}
	}






