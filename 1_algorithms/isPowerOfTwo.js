/**
 * Complejidad Temporal -> O(n)
 * Complejidad Espacial -> O(1)
 * Espacio Auxiliar -> O(1)
 */

//Complejidad temporal: O(n) + O(7) -> O(n)
function isPowerOfTwo(n) {
  if (n < 1) { //O(1)
    return false;//O(1)
  }

  let numeroDividido = n; //O(1)
  while (numeroDividido !== 1) { //O(n)
    if (numeroDividido % 2 !== 0) { //O(1)
      return false; //O(1)
    }
    numeroDividido = numeroDividido / 2; //O(1)
  }

  return true; //O(1)
}

//Complejidad espacial: O(1)
function isPowerOfTwo(n) { //O(1)
  if (n < 1) { //O(1)
    return false;
  }

  let numeroDividido = n; //O(1)
  while (numeroDividido !== 1) { // no crea espacio en memoria
    if (numeroDividido % 2 !== 0) { //no crea espacio en memoria
      return false;
    }
    numeroDividido = numeroDividido / 2; //no crea espacio en memoria
  }

  return true;
}
