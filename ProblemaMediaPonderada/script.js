const listaNumeros = document.getElementById("dados").innerHTML.split('\n').map(Number);
const listaPesos = { 0: 2, 1: 3, 2: 5 };
let somatorioPesos = 0;
let valorXPeso = 0;
for (let i = 0; i < listaNumeros.length; i++) {
    valorXPeso = valorXPeso + listaNumeros[i] * listaPesos[i];
    somatorioPesos = somatorioPesos + listaPesos[i];
}
const media = valorXPeso / somatorioPesos;
console.log(media.toFixed(1));