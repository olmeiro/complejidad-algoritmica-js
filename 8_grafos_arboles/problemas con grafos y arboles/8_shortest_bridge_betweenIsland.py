# 1. Encontrar la primera isla
# 2. Encontrar la segunda isla
# 3. Encontrar el puente más corto entre las dos islas
# 4. Retornar el puente más corto
# 1. Encontrar la primera isla
# 1.1. Encontrar el primer 1
# 1.2. Encontrar todos los 1s que están conectados a ese 1
# 1.3. Guardar la posición de todos los 1s en una lista
# 2. Encontrar la segunda isla
# 2.1. Encontrar el primer 1 que no esté en la lista de la primera isla
# 2.2. Encontrar todos los 1s que están conectados a ese 1
# 2.3. Guardar la posición de todos los 1s en una lista
# 3. Encontrar el puente más corto entre las dos islas
# 3.1. Encontrar la distancia entre cada 1 de la primera isla y cada 1 de la segunda isla
# 3.2. Retornar la distancia más corta


def shortestBridge(mapa: list[list[int]]) -> int:
    findIsland = False
    for i in range(len(mapa)):
        for j in range(len(mapa[0])):
            if findIsland == True:
                break  # find first island
            if mapa[i][j] == 1:
                dfs(i, j)  # we use dfs to find all the island
                findIsland = True
                break
    # BFS: amount of steps to reach other island. here we use BFS because we want to find the shortest path
    amountMaterial = 0
    queue = []
    directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    while queue:
        queueCurrentLevel = []
        while queue:
            currentSpot = queue.pop(0)
            for x, y in directions:
                newX = x + currentSpot[0]
                newY = y + currentSpot[1]
                if not (0 <= newX < len(mapa)) or not (0 <= newY < len(mapa[0])) or mapa[newX][newY] == 2:
                    continue
                if mapa[newX][newY] == 1:
                    return amountMaterial
                queueCurrentLevel.append([newX, newY])
                mapa[newX][newY] = 2
        queue = queueCurrentLevel
        amountMaterial += 1
    return -1

def dfs(i: int, j: int, mapa: list[list[int]]) -> int:
    if 0 <= i < len(mapa) and 0 <= j < len(mapa[0]) and mapa[i][j] == 1:
        mapa[i][j] = 2
        dfs(i+1, j, mapa)
        dfs(i-1, j, mapa)
        dfs(i, j+1, mapa)
        dfs(i, j-1, mapa)


mapa = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
]
response = shortestBridge(mapa)
print(response) #1

mapa = [
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 1, 1],
]
response = shortestBridge(mapa)
print(response) #2

#Example:
#resource url leetcode: https://leetcode.com/problems/shortest-bridge/
