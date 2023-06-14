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

""" The code above does the following, explained in English:
1. If the number of points in the list is equal to K, we just return the entire list.
2. We create an empty list called distances.
3. We loop through all the points and calculate the distance of each point from the origin and store the distance and the coordinates of the point in the list distances.
4. We then convert the list distances into a min heap.
5. We then pop the first K entries from the heap and return the list of the coordinates of the points. """
