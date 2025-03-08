const listaNumeros = document.getElementById("dados")
                                        .innerHTML.split('\n')
                                                .map(x => Number(x));
let maiorNumero = 0;
for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] > maiorNumero) {
        maiorNumero = listaNumeros[i];
    }
}
console.log(maiorNumero);