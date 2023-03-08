function complejidad_cuadrática(matriz){
  for (let i = 0; i <= matriz.length; i++) {
    for (let j = 0; j <= matriz.length; j++) {
      if (matriz[i][j] !== 0) {
        console.log(matriz[i][j]);
      }
    }
  }
}

//el primer ciclo itera por columnas y el segundo por los elementos
//de cada fila que lo hace O(n^2)