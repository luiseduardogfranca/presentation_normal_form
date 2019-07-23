// x = 3.46;
// document.write(Math.ceil(x)+"<br>");
// document.write(Math.floor(x)+"\<br>");
// document.write(Math.round(x)+"<br>");

// num = new Number(23);
// document.write("Tipo de objeto: "+typeof(num)+" = "+num+"<br>");

// var n = "a23.45";
// (isNaN(n)) ? document.write(n+"-True, não é número"):document.write(n+"-False, é número"+"<br>");
// import neataptic from 'neataptic';

// const neataptic = require('neataptic');
var network;

window.onload = function() {
  network = new neataptic.Architect.Perceptron(2, 10, 6, 5, 35, 1);
  drawGraph(network.graph(1000, 1000), '.draw');
};