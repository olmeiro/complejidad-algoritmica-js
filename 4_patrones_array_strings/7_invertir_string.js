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

/* Here is the explanation for the code above:
1. We have two pointers that will be moving towards the middle of the array from the left and from the right.
2. We have a mid point that will be used to know when to stop the loop.
3. We will be using a while loop that will stop when the left pointer is equal to the mid point.
4. Inside the while loop we will be swapping the characters at the pointers position.
5. We will also be incrementing the left pointer and decrementing the right pointer.
6. Finally we will be returning the array. */