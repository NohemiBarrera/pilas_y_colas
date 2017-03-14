var nombres = ["ma", "me", "mi", "mo", "mu"];
var apellidos = ["mu", "mo", "mi", "me", "ma"];

function Stack(){


 this.push = function (element) {
   nombres.push(element);
 };
 this.pop = function () {
     return nombres.pop();
 };
 this.peek = function () {
   return nombres[nombres.length - 1];
 };
 this.isEmpty = function () {
   return nombres.length == 0;
 };
 this.size = function () {
   return nombres.length;
 };
 this.clear = function () {
   nombres = [];
 };
 this.print = function () {
   return console.log(nombres.toString());
 };
}

var nombre = [];
while(nombres != 0){
 var a = nombres.pop();
 var b = apellidos.pop();
 var c = a + " " + b;
 nombre.push(c);
 console.log(nombre);
}