// 4. Invertir vocales
// Dada una cadena de caracteres, invierte solo todas las vocales de la cadena.
// Las vocales son ‘a’, ‘e’, ‘i’, ‘o’ y ‘u’, ‘A’, ‘E’, ‘I’, ‘O’, ‘U’.

// Ejemplo 1:

// # Entrada:
// s = "hola"
// # Salida:
// "halo"
// Ejemplo 2:

// # Entrada:
// s = s = "leetcode"
// # Salida:
// "leotcede"

// function invertir_vocales(s){
//   const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

//   //convertimos la cadena en una array:
//   s_array = s.split('')
//   for(let i = 0; i < s_array.length; i++){
//     if(vocales.includes(s_array[i])){
//       let vocal_index = vocales.indexOf(s_array[i])
//       s_array[i] = vocales[vocal_index + 1]
//     }
//   }

//   return s_array.join('')
// }

function invertirVocales(s) {
  const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let sLista = s.split('');
  for (let i = 0; i < sLista.length; i++) {
    if (vocales.includes(sLista[i])) {
      let vocalIndex = vocales.indexOf(sLista[i]);
      sLista[i] = vocales[vocalIndex + 1];
    }
  }
  return sLista.join('');
}


// console.log(invertir_vocales("leetcode"))
console.log(invertirVocales("leetcode"))