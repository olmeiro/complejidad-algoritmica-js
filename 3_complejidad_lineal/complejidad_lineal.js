/**
 * Complejidad Temporal -> O(2n) + O(4) -> O(n)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(n)
 */

function complejidad_lineal(lista){
  let suma = 0; //O(1)
  let multiplicacion = 1;//O(1)

  for (let i = 0; i < lista.length; i++) {//O(n)
    suma += i;
  }
 
  for (let i = 0; i < lista.length; i++) { //O(1)
    multiplicacion *= i;
  }

  return { suma, multiplicacion }; //O(1)
}

//complejidad espacial: O(2n + 2) -> O(n)
function complejidad_lineal(lista) { //O(n)
  let suma = 0; //O(1)
  let multiplicacion = 1;//O(1)

  for (let i = 0; i < lista.length; i++) {//O(n)
    suma += i;
  }
 
  for (let i = 0; i < lista.length; i++) { //O(n)
    multiplicacion *= i;
  }

  return {suma, multiplicacion}; 
}