function iniciar(){
 const n1=new Array(5), n2=[];
 for(let i=0;i<n1.length;i++) n1[i]=i;
 for(let i=0;i<5;i++) n2[i]=i;
 imprimirArreglo("Arreglo n1:",n1,document.getElementById("salida1"));
 imprimirArreglo("Arreglo n2:",n2,document.getElementById("salida2"));
}
function imprimirArreglo(encabezado,arreglo,salida){
 let contenido=`<h2>${encabezado}</h2><table><thead><tr><th>Índice</th><th>Valor</th></tr></thead><tbody>`;
 for(let i=0;i<arreglo.length;i++) contenido+=`<tr><td>${i}</td><td>${arreglo[i]}</td></tr>`;
 salida.innerHTML=contenido+"</tbody></table>";
}
window.addEventListener("load",iniciar);
