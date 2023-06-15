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

class shortestBridge(self, A):
    def dfs(A, i, j):
        if i < 0 or j < 0 or i > len(A)-1 or j > len(A[0])-1:
            return
        if self.visited[i][j] or A[i][j] == 0:
            return
        self.visited[i][j] = True
        self.queue.append((i, j))
        for k in range(4):
            rr = i + self.rowVector[k]
            cc = j + self.colVector[k]
            dfs(A, rr, cc)

        self.visited = [[False for i in range(len(A[0]))] for j in range(len(A))]
        self.rowVector = [1, -1, 0, 0]
        self.colVector = [0, 0, 1, -1]
        self.queue = []
        found = False
        for i in range(len(A)):
            if found:
                break
            for j in range(len(A[0])):
                if A[i][j] == 1:
                    dfs(A, i, j)
                    found = True
                    break
        step = 0
        while self.queue:
            subQ = []
            while self.queue:
                temp = self.queue.pop(0)
                for k in range(4):
                    i = temp[0] + self.rowVector[k]
                    j = temp[1] + self.colVector[k]
                    if i < 0 or j < 0 or i > len(A)-1 or j > len(A[0])-1 or self.visited[i][j]:
                        continue
                    if A[i][j] == 1:
                      return step
                    subQ.append((i, j))
                    self.visited[i][j] = True
            self.queue = subQ
            step += 1
        return -1


def main():
    mapa = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
    ]

    bridge = shortestBridge()
    response = bridge(mapa)
    print(response) // 1

    mapa2 = [
        [1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1],
    ]
    response2 = bridge(mapa2)
    print(response2) // 2


if __name__ == "__main__":
    main()

# 8.2. Shortest Bridge Between Islands
# https://www.youtube.com/watch?v=0jNmHPfA_yE
# in cmd: python 8_1_shortest_bridge_betweenIsland.py
