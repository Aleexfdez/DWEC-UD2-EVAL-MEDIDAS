import centralMedidas from "../js/centralMedidas.js";

var central1 = new centralMedidas();
//se le mete a mano en caso de Santander, las demás son aleatorias
var temperaturas = [-1, 23, 25, 12, 11, 10, 15, -4, 12, 22, 21, 20, 6, 11, -1, 23, 25, 12, 11, 10, 15, -4, 12, 22, 21, 20, 6, 11, -1, 23];
console.log(temperaturas.length);
central1.insertaMedidas("Santander", temperaturas);
central1.insertaAleatorio("Oviedo");
central1.insertaAleatorio("Madrid");
central1.insertaAleatorio("Valencia");
central1.insertaAleatorio("Cádiz");
console.log("Todo completo")
central1.toConsole();
console.log("Sin Madrid")
central1.eliminaCiudad('Madrid');
central1.toConsole();