const listaNumeros = document.getElementById("dados").innerHTML.split('\n').map(Number);
console.log(listaNumeros);
let somatorio = 0;
//let numerosPositivos = 0;
for (let i = 0; i < listaNumeros.length; i++) {    
    if (listaNumeros[i] > 0) {
        numerosPositivos++;
        somatorio = somatorio + listaNumeros[i];
    }
}
let media = numerosPositivos > 0 ? (somatorio / numerosPositivos).toFixed(2) : "IMPOSSÍVEL CALCULAR";
console.log("média: " + media);