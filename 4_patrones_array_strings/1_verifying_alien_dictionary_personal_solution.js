//Dada una secuencia de palabras escritas y dado un orden de alfabeto, devuelve verdadero si y solo si las palabras dadas están ordenadas lexicográficamente:


// const palabras = ["conocer", "cono"]; //false
// const orden_albeto = "abcdefghijklmnopqrstuvwxyz";

// const palabras2 = ["habito", "hacer", "lectura", "sonreir"]; //true
// const orden_albeto2 = "hlabcdefgijkmnopqrstuvwxyz";

// const palabras3 = ["carro", "hacer", "lectura", "sonreir"]; //false
// const orden_albeto3 = "hlabcdefgijkmnopqrstuvwxyz";

// const palabras4 = ["hacer", "hacienda", "lectura", "sonreir", "gracia"]; //false
// const orden_albeto4 = "hlabcdefgijkmnopqrstuvwxyz";

const performance = require("perf_hooks");

function orderLexico(palabras, orden) {
  const ordenArr = orden.split("");
  let result = [];
  for (let i = 0; i < palabras.length; i++) {
    let currentWord = palabras[i];
    let nextWord = palabras[i + 1];
    let resultCurrentWordArr = [];
    if (nextWord !== undefined) {
      let currentWordArr = currentWord.split(""); //arr de letras
      let nextWordArr = nextWord.split("");
      for (let j = 0; j < currentWordArr.length; j++) {
        let currentWordIndexOrden = ordenArr.indexOf(currentWordArr[j]);
        let nextWordIndexOrden = ordenArr.indexOf(nextWordArr[j]);
        if (currentWordIndexOrden === nextWordIndexOrden) {
          continue;
        } else if (currentWordIndexOrden < nextWordIndexOrden) {
          resultCurrentWordArr.push(true);
          break;
        } else {
          resultCurrentWordArr.push(false);
          break;
        }
      }
      let resultCurrentWord = resultCurrentWordArr.reduce((prev, next) => {
        if (!prev) {
          return false;
        }
        return !!next;
      }, true);
      result.push(resultCurrentWord);
    }
  }
  return result.reduce((prev, next) => {
    if (!prev) {
      return false;
    }
    return !!next;
  }, true);
}

let inicio_tiempo = performance.performance.now();

const palabras5 = ["hola", "liliana", "kapi", "sonia", "zorro"]; //true
const orden_albeto5 = "hlabcdefgijkmnopqrstuvwxyz";

// console.log(orderLexico(palabras, orden_albeto)); //false
// console.log(orderLexico(palabras2, orden_albeto2)); //true
// console.log(orderLexico(palabras3, orden_albeto3)); //false
// console.log(orderLexico(palabras4, orden_albeto4)); //false

console.log(orderLexico(palabras5, orden_albeto5)); //true
let final_tiempo = performance.performance.now();
let duracion = final_tiempo - inicio_tiempo;
console.log(`El algoritmo contar ha durado ${duracion}ms.`); //2.5579000115394592ms
