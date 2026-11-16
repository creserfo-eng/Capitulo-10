// Ejercicio 10.9: arreglo de 2 filas por 3 columnas.
var t = [
  [0, 0, 0],
  [0, 0, 0]
];

// b) Filas: 2.
// c) Columnas: 3.
// d) Elementos: 2 * 3 = 6.
// e) Fila 1 (segunda fila en índices JavaScript): t[1][0], t[1][1], t[1][2].
// f) Tercera columna: t[0][2], t[1][2].

// g) Fila 1, columna 2 (índices desde cero):
t[1][2] = 0;

// h) Inicializar cada elemento con instrucciones directas:
t[0][0] = 0; t[0][1] = 0; t[0][2] = 0;
t[1][0] = 0; t[1][1] = 0; t[1][2] = 0;

// i) Inicializar con for anidados:
for (var fila = 0; fila < t.length; fila++) {
  for (var columna = 0; columna < t[fila].length; columna++) {
    t[fila][columna] = 0;
  }
}

// j) Determinar e imprimir el valor mínimo:
var minimo = Math.min(...t[0], ...t[1]);
console.log("Mínimo:", minimo);

// k) Mostrar la primera fila sin repetición:
console.log(t[0]);

// l) Imprimir en formato tabular con índices de columnas y filas:
console.log("   0  1  2");
for (var i = 0; i < t.length; i++) {
  console.log(i + "  " + t[i].join("  "));
}
