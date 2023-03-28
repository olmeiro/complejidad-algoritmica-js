// 2. Invertir string
// Escribe una función que invierta una cadena.La cadena de entrada se da como un arreglo de caracteres.

//   Reto: hacerlo modificando la lista de entrada con O(1) de memoria extra.

//     Ejemplo 1:

// # Entrada:
// s = ["h", "e", "l", "l", "o"]
// # Salida:
// ["o", "l", "l", "e", "h"]
// Ejemplo 2:

// # Entrada:
// s = ["H", "a", "n", "n", "a", "h"]
// # Salida:
// ["h", "a", "n", "n", "a", "H"]

function invertString(s){
  let p1 = 0;
  let p2 = s.length - 1;
  let mid = p2 / 2;

  while(p1 < mid){
    [s[p1], s[p2]] = [s[p2], s[p1]];
    p1++;
    p2--;
  }

  return s;
}

console.log(invertString(["h", "a", "n", "n", "a", "H"]))
console.log(invertString(["h", "e", "l", "l", "o"]))