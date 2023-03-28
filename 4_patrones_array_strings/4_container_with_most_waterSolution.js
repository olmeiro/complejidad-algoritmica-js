// const alturas = [1,8,6,2,5,4,8,3,7] //49
const alturas = [8, 1, 6, 2, 5, 4, 1, 3, 7] //56

export function maxArea(alturas) {
  let izquierda = 0;
  let derecha = alturas.length - 1;
  let areaMaxima = 0;

  while (izquierda < derecha) {
    const areaActual = (derecha - izquierda) * Math.min(alturas[izquierda], alturas[derecha]);
    areaMaxima = Math.max(areaMaxima, areaActual);

    if (alturas[izquierda] < alturas[derecha]) {
      izquierda += 1;
    } else {
      derecha -= 1;
    }
  }

  return areaMaxima;
}