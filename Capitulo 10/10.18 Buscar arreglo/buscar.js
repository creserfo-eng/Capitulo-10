const a=new Array(100);for(let i=0;i<a.length;i++)a[i]=2*i;
function botonPresionado(){const valEntrada=document.getElementById("valEntrada");const resultado=document.getElementById("resultado");const claveBusqueda=parseInt(valEntrada.value,10);if(Number.isNaN(claveBusqueda)){resultado.textContent="Introduzca un número entero.";return;}const elemento=a.indexOf(claveBusqueda);resultado.textContent=elemento!==-1?`Se encontró el valor en el elemento ${elemento}`:"No se encontró el valor";}
function iniciar(){document.getElementById("botonBuscar").addEventListener("click",botonPresionado);}
window.addEventListener("load",iniciar);
