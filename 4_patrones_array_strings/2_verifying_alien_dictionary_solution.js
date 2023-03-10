const performance = require("perf_hooks");

var isAlienSorted = function (palabras, orden) {
  // Crear mapa del diccionario alienigena
  mapa_diccionario = new Map();
  for (let i = 0; i < orden.length; i++) {
    mapa_diccionario[orden[i]] = i;
  }

  // Revisar el orden de las palabras
  for (let i = 1; i < palabras.length; i++) { // T = 0(n)   S = 0(m) (lineal)
    if (comparar(palabras[i - 1], palabras[i]) === false) { //esta en desorden
      return false;
    }
  }
  return true; //ya que estan en orden nunca entro al anterior bucle para devolver false
};

// O(longitud de la palabra mÃ¡s larga)
var comparar = function (palabra1, palabra2) {
  const longitud = Math.min(palabra1.length, palabra2.length);
  for (let i = 0; i < longitud; i++) {
    if (mapa_diccionario[palabra1[i]] < mapa_diccionario[palabra2[i]]) {
      return true;
    }
    if (mapa_diccionario[palabra1[i]] > mapa_diccionario[palabra2[i]]) {
      return false;
    }
  }
  return palabra1.length <= palabra2.length; //cuando una palabra contiene a la otra
};

let inicio_tiempo = performance.performance.now();

const palabras5 = ["hola", "liliana", "kapi", "sonia", "zorro"]; //true
const orden_albeto5 = "hlabcdefgijkmnopqrstuvwxyz";

console.log(isAlienSorted(palabras5, orden_albeto5)); //true
let final_tiempo = performance.performance.now();
let duracion = final_tiempo - inicio_tiempo;
console.log(`El algoritmo contar ha durado ${duracion}ms.`); 

//teaher     = 2.581399977207184ms.
//miSolucion = 2.5579000115394592ms