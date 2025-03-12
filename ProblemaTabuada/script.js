const numeroParaGerarTabuada = document.getElementById("dados").innerHTML.split('\n').map(Number)[0];
const numerosParaMultiplicar = Object.values(Object.fromEntries(
    Array.from({ length: 10 }, (_, i) => [i, i + 1])
));
//console.log(listaNumeroParaMultiplicar);
//console.log(numeroParaGerarTabua);
const tabuada = [];
for (let i = 0; i < numerosParaMultiplicar.length; i++) {
    let resultado = numeroParaGerarTabuada * numerosParaMultiplicar[i];
    tabuada.push(resultado);
}
for (let i = 0; i < tabuada.length; i++) {
    console.log(numeroParaGerarTabuada + " X " + numerosParaMultiplicar[i] + " = " + tabuada[i]);
}