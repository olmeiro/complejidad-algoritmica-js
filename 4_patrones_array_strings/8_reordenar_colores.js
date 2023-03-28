// Reordenar colores
// Dado un arreglo nums con n objetos de color rojo, blanco o azul, ordénalos en su lugar para que los objetos del mismo color sean adyacentes, con los colores en el orden rojo, blanco y azul.

// Utilizaremos los enteros 0, 1 y 2 para representar el color rojo, blanco y azul, respectivamente.

//   Reto 1: debes resolver este problema sin utilizar la función de ordenación de la biblioteca.

//     Reto 2: ¿podrías idear un algoritmo de una sola pasada utilizando solo un espacio extra constante ?

//       Ejemplo 1:

// # Entrada:
// nums = [2, 0, 2, 1, 1, 0]
// # Salida:
// [0, 0, 1, 1, 2, 2]
// Ejemplo 2:

// # Entrada:
// nums = [2, 0, 1]
// # Salida:
// [0, 1, 2]

function orderColors(nums){
 let len = nums.length;
 let rojo = 0; 
 let blanco = 0;
 let azul = len - 1;

 while(blanco <= azul){
  if(nums[blanco] === 0){
    [nums[rojo], nums[blanco]] = [nums[blanco], nums[rojo]];
    rojo++;
    blanco++;
  }else if(nums[blanco] === 1){
    blanco++
  }else {
    [nums[blanco], nums[azul]] = [nums[azul], nums[blanco]];
    azul--;
  }
 }
 return nums;
}
console.log(orderColors([2, 0, 2, 1, 1, 0]))
console.log(orderColors([0, 1, 2]))