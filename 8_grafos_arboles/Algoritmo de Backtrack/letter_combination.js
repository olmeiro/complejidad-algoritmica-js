let listaPalabras = []; // lista de palabras
let pad = {}; // diccionario de teclas
pad['2'] = "abc";
pad['3'] = "def";
pad['4'] = "ghi";
pad['5'] = "jkl";
pad['6'] = "mno";
pad['7'] = "pqrs";
pad['8'] = "tuv";
pad['9'] = "wxyz";

function generarCombinaciones(i, numeroCelular, path, listaPalabras, pad) {
  if (i == numeroCelular.length) {
    if (path != "") {
      listaPalabras.push(path);
    }
    return; // termina la recursividad
  }
  for (let ch of pad[numeroCelular[i]]) {
    generarCombinaciones(i + 1, numeroCelular, path + ch, listaPalabras, pad);
  }
}

function letterCombinations(numeroCelular) {
  generarCombinaciones(0, numeroCelular, "", listaPalabras, pad); // cero es la posicion actual para recorrer el numero celular
  return listaPalabras;
}

/* This is an example for calling this function: */
let numeroCelular = "23";
let listaPalabrasToShuffle = letterCombinations(numeroCelular);
console.log(listaPalabrasToShuffle);

/* This code is contributed by PrinciRaj1992 */
/* This code is modified by me */
// in cmd: node letter_combination_phone.js