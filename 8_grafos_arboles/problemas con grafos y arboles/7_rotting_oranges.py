class Solution:
  # def orangesRotting(self, cultivo: List[List[int]]) -> int:
  def orangesRotting(cultivo: list[list[int]]) -> int:
    #Si cultivo es nulo o esta vacio, regresamos 0
    if len(cultivo) == 0: return 0
    cantidadFrescas = 0
    #Creamos una cola
    cola = []
    #Recorremos el cultivo
    for i in range(len(cultivo)):
      for j in range(len(cultivo[0])):
        #Si encontramos una naranja podrida, la agregamos a la cola
        if cultivo[i][j] == 2: cola.append([i, j])
        #Si encontramos una naranja fresca, aumentamos la cantidad de frescas
        if cultivo[i][j] == 1: cantidadFrescas += 1
    #complexity: O(n*m) spacial complexity: O(n*m)

    #Si no hay naranjas frescas, regresamos 0
    if cantidadFrescas == 0: return 0 #todas estan podridas

    #ahora implementamos el bfs:
    #Definimos las direcciones en las que podemos movernos
    direcciones = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    dias = 0
    #Mientras la cola no este vacia
    while len(cola) != 0:
      #Aumentamos los dias
      dias += 1
      #Obtenemos el tamaño de la cola
      tamano = len(cola)
      #Recorremos la cola (fifo)
      for i in range(tamano):
        #Obtenemos la naranja podrida
        naranja = cola.pop(0)
        #Recorremos las direcciones
        for direccion in direcciones:
          #Obtenemos la posicion de la naranja
          x = naranja[0] + direccion[0]
          y = naranja[1] + direccion[1]
          #Si la posicion es valida y la naranja es fresca
          if x >= 0 and x < len(cultivo) and y >= 0 and y < len(cultivo[0]) and cultivo[x][y] == 1:
            #Cambiamos la naranja a podrida
            cultivo[x][y] = 2
            #Agregamos la naranja a la cola
            cola.append([x, y])
            #Disminuimos la cantidad de naranjas frescas
            cantidadFrescas -= 1

    #Si aun hay naranjas frescas, regresamos -1
    if cantidadFrescas != 0: return -1
    #Regresamos los dias
    return dias - 1
    #complexity: O(n*m) spacial complexity: O(n*m)

#ahora un ejemplo de implementacion:
# solucion = Solution()
# cultivo = [[2,1,1],[1,1,0],[0,1,1]]
# print(solucion.orangesRotting(cultivo)) #2

cultivo2 = [[2,1,1],[0,1,1],[1,0,1]]
print(Solution.orangesRotting(cultivo2)) #-1

""" This is an example for calling this function:"""
grid = [[2,1,1],[1,1,0],[0,1,1]]
print(Solution.orangesRotting(grid)) #2