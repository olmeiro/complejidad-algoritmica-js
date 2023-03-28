const alturas = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; //6

function trappingRainWater(heights) {
  let left = 0; 
  let right = heights.length - 1; 
  let leftMax = 0; 
  let rightMax = 0;
  let result = 0;

  while (left < right) { //. El ciclo se ejecutará desde los extremos del array hacia el centro, moviendo los punteros left y right según la altura de los elementos en el array.
    if (heights[left] < heights[right]) { //significa que la altura máxima a la izquierda es menor que la altura máxima a la derecha
      if (heights[left] >= leftMax) { 
        leftMax = heights[left]; 
      } else { //Si no es mayor o igual, significa que hay un espacio vacío que puede atrapar agua, y se agrega la cantidad de agua atrapada a result
        result += leftMax - heights[left]; 
      }
      left++; 
    } else { //significa que la altura máxima a la izquierda es mayor o igual que la altura máxima a la derecha
      if (heights[right] >= rightMax) { 
        rightMax = heights[right]; 
      } else {
        result += rightMax - heights[right]; 
      }
      right--; 
    }
  }

  return result; // devolvemos el resultado final
}


console.log(trappingRainWater(alturas));
