/**
 * Complejidad Temporal -> O(n) + O(10) -> O(n)
 * Complejidad Espacial -> O(1)
 * Espacio Auxiliar -> O(1)
 */

//Complejidad temporal: O(1)
function fibonacci(numero) {
  const secuenciaFibonacci = [1]; //O(1) 

  let valorPrevio = 0; //O(1)
  let valorActual = 1; //O(1)

  if (numero === 1) {  //O(1)
    return secuenciaFibonacci; //O(1)
  }

  let i = numero - 1; //O(1)

  while (i) { //O(n)
    valorActual += valorPrevio; //O(1)
    valorPrevio = valorActual - valorPrevio; //O(1)
    secuenciaFibonacci.push(valorActual); //O(1) //solo impacta el último elemento del array
    i -= 1; //O(1)
  }

  return secuenciaFibonacci; //O(1)
}

//Complejidad espacial: O(n) + O(6) -> O(n)
function fibonacci(numero) { //O(1)
  const secuenciaFibonacci = [1]; //O(1) 'variable'

  let valorPrevio = 0; //O(1)
  let valorActual = 1; //O(1)

  if (numero === 1) { //O(1)
    return secuenciaFibonacci;
  }

  let i = numero - 1; //O()1

  while (i) { //O(n)
    valorActual += valorPrevio;
    valorPrevio = valorActual - valorPrevio;
    secuenciaFibonacci.push(valorActual); //O(1)
    i -= 1;
  }

  return secuenciaFibonacci;
}
