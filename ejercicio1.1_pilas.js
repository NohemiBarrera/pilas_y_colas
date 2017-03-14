function Persona (nombre,apellido){
  this.nombre=nombre;
  this.apellido=apellido;
}
var personas = [];
personas.push(new Persona("Nohemi", "Barrera"));
personas.push(new Persona("Nancy","Zitle"));
personas.push(new Persona("Lucero","Ramos"));

personas.unshift(new Persona("Ivan", "Medina"));

for(var i=0; i<personas.length; i++){
  document.write(personas[i].nombre + " " + personas[i].apellido + "<br/>");
}