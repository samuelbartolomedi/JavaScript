// Get input data and convert to numbers
const listaNumeros = document.getElementById("dados").innerHTML
    .split('\n')
    .map(Number);

// Define weight mapping
const PESOS = {
    1: 2,
    2: 3,
    3: 5,
    default: 1
};

// Calculate weighted average
function calcularMediaPonderada(numeros) {
    let somatorioTotal = 0;
    let somaPesos = 0;

    for (const numero of numeros) {
        const peso = PESOS[numero] || PESOS.default;
        somatorioTotal += numero * peso;
        somaPesos += peso;
    }

    return somatorioTotal / somaPesos;
}