# Programando K Closest Points to Origin con Python
# no hay tipo nativo para colas de prioridad pero usamos una libreria heappq:
import heapq
from typing import List


def kClosest(puntos: List[List[int]], K: int) -> List[List[int]]:
    if K == len(puntos):
        return puntos
    distancias = []
    for x, y in puntos:
        distancia = (x*x + y*y)**(1/2)
        distancias.append((distancia, [x, y]))
    heapq.heapify(distancias)
    puntosMasCercanos = []
    for _ in range(K):
        distanciaActual, coordenadas = heapq.heappop(distancias)  # log
        puntosMasCercanos.append(coordenadas)
    return puntosMasCercanos


# Example usage
result = kClosest([[1, 3], [3, 4], [5, 6]], 2)
print(result)  # [[1,3]]
