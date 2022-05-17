function Maestro(nombre, asignatura, horas) {
	this.nombre = nombre;
	this.asignatura = asignatura;
	this.horas = horas
}

var nombre = prompt("Ingresa tu nombre: ");
var asignatura = prompt("Ingresa la asignatura que imparte: ");
var horas = prompt("Ingrese la cantidad de horas que imparte la clase: ")
maestro = new Maestro(nombre, asignatura, horas);

Maestro.prototype.Asignarura = function() {
  alert("Imparto la clase de: " + this.asignatura);
}

Maestro.prototype.ImprimirAsignatura = function () {
  alert('Docente, materia que imparte y horas: ' + maestro.nombre + ", " +  maestro.asignatura + " ," + maestro.horas);
};

maestro.ImprimirAsignatura();
ma.Asignarura();
