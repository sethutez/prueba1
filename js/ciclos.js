//condicionales if-else
var a=10;
var b=12;
//identificacion numero mayor

if (a>b) {
document.write("El numero mayor es: "+a);
}else{
	document.write("El numero mayor es: "+b)
}
document.write("<br>");
//ciclo for
//numero del 0 al 10
for (var ola = 0; ola < 11; ola++) {
	document.write(ola)
}

document.write("<br>");
//ciclo while
var ola=0; 
while(ola<11){
document.write(ola);
ola++;
}

document.write("<br>");
var ola=0;

do{
	ola++;
	document.write("<br>"+""+ ola);
}while(ola<11);
document.write("<br>");

//seleccion multiple
//caos o switch case
//validar si un numero entre 1 y 4 1=hijo 2=hija 3=padre 4=madre
document.write("<br>");
var familia=1;
switch(familia){
	case 1:document.write("Es hijo");
	break;

	case 2: document.write("Es hija");
	break;

	case 3:document.write("Es padre");
	break;
   case 4:
	document.write("Eres Madre");
	break;

   
	default:
document.write("La opción no se encontró en el rango de valores.");

}




 