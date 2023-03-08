// Complejidad temporal
// O(log n) - En el peor de los casos O(1) - En el mejor de los casos(Si el elemento central de la matriz inicial es el elemento de destino)

// Complejidad espacial
// O(1) - Para un enfoque iterativo O(log n) - Para un enfoque recursivo debido a la pila de llamadas de recursividad

function busquedad_binaria(lista, target){
  let apuntador_izq = 0;
  let apuntador_der = lista.length -1;

  while(apuntador_der >= apuntador_izq){
    const mitad = Math.floor(apuntador_izq +(apuntador_der - apuntador_izq) / 2);

    if(lista[mitad] === target){
      return mitad;
    }

    if(target < lista[mitad]){
      apuntador_der = mitad - 1;
    }else{
      apuntador_izq = mitad + 1;
    }
  }
  return -1;
}

console.log(busquedad_binaria([1,3,8,14,15,22,22,23,28,30,32,33,44,47], 61));
console.log(busquedad_binaria([1,3,8,14,15,22,22,23,28,30,32,33,44,47], 28));