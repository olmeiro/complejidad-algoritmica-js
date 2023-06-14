// # Programando K Closest Points to Origin con Python

function kClosest(puntos, K) {
  if (K === puntos.length) {
    return puntos;
  }
  let distancias = [];
  for (let [x, y] of puntos) {
    let distancia = Math.sqrt(x * x + y * y);
    distancias.push([distancia, [x, y]]);
  }
  distancias.sort((a, b) => a[0] - b[0]);
  let puntosMasCercanos = [];
  for (let i = 0; i < K; i++) {
    let [distanciaActual, coordenadas] = distancias[i];
    puntosMasCercanos.push(coordenadas);
  }
  return puntosMasCercanos;
}

console.log(
  kClosest(
    [
      [1, 3],
      [3, 4],
      [5, 6],
    ],
    1,
  ),
);
console.log(
  kClosest(
    [
      [13, -8],
      [1, 20],
      [-5, 5],
    ],
    2,
  ),
);
