// Validar palíndromo (con k reemplazos)
// Dada una cadena de caracteres, averigua si la cadena dada es un palíndromo o no.Puedes eliminar un carácter de la cadena.Una cadena es un palíndromo si se lee igual hacia adelante y hacia atrás.

//   Ejemplo 1:

// # Entrada:
// s = "aba"
// # Salida:
// true
// Ejemplo 2:

// # Entrada:
// s = "abca"
// # Salida:
// true

// #Explicación: Podría eliminar el carácter 'c'.
function esPalindromo(cadena, k) {
  // Convertir la cadena a minúsculas y eliminar los caracteres no alfanuméricos
  var cadenaProcesada = cadena.toLowerCase().replace(/[^a-z0-9]+/g, '');
  // Invertir la cadena procesada
  var cadenaInvertida = cadenaProcesada.split('').reverse().join('');
  // Verificar si la cadena procesada es igual a la cadena invertida
  if(cadenaProcesada === cadenaInvertida) return true;

  cadena.split('');

  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] !== cadena[cadena.length - 1]){
      k -= 1
    }
    if (k < 0){
      return false;
    }
  }
}

s = "abca"
k = 1
console.log(esPalindromo(s, k))