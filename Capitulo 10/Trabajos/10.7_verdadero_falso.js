// Ejercicio 10.7
// a) Falso: se indica el nombre del arreglo y el índice del elemento.
// b) Falso: declarar una variable por sí sola no reserva automáticamente
//    un arreglo con elementos; hay que crear el arreglo.
// c) Falso: una forma válida es var p = new Array(100);
//    o var p = Array(100).
// d) Falso: puede inicializarse con fill(), sin usar for.
// e) Falso: puede recorrerse de otra manera; los for anidados son una
//    solución habitual, pero no son obligatorios.

var p = new Array(100);
var quinceCeros = new Array(15).fill(0);
