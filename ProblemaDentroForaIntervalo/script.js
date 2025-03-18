const listaNumeros = document.getElementById("dados").innerHTML.split('\n').map(Number);
const numerosDentroIntervalo = [];
const numerosForaIntervalo = [];
for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] >= 10 && listaNumeros[i] <= 20) {
        numerosDentroIntervalo.push(listaNumeros[i]);
    }
    else {
        numerosForaIntervalo.push(listaNumeros[i]);
    }
}
console.log("números dentro do intervalo: " + numerosDentroIntervalo.length);
console.log("números fora do intervalo: " + numerosForaIntervalo.length);