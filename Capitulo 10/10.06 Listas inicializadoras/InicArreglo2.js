function iniciar(){
 const colores=["cyan","magenta","amarillo","negro"];
 const enteros1=[2,4,6,8];
 const enteros2=[2,,,8];
 imprimirArreglo("El arreglo colores contiene",colores,document.getElementById("salida1"));
 imprimirArreglo("El arreglo enteros1 contiene",enteros1,document.getElementById("salida2"));
 imprimirArreglo("El arreglo enteros2 contiene",enteros2,document.getElementById("salida3"));
}
function imprimirArreglo(titulo,arreglo,salida){let h=`<h2>${titulo}</h2><table><tr><th>Índice</th><th>Valor</th></tr>`;for(let i=0;i<arreglo.length;i++)h+=`<tr><td>${i}</td><td>${arreglo[i]===undefined?"undefined":arreglo[i]}</td></tr>`;salida.innerHTML=h+"</table>";}
window.addEventListener("load",iniciar);
