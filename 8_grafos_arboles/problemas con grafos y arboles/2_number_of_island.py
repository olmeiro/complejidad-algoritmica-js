# def numeroDeIslas(self, mapa: List[List[str]]) -> int:
def numeroDeIslas(mapa) -> int:
    def dfs(i, j):
        if 0 <= i < len(mapa) and 0 <= j < len(mapa[0]) and mapa[i][j] == '1': #solo cambiamos a dos si cumple:
            mapa[i][j] = '2' #para saber que ya se chequeo
            dfs(i-1,j) #+izquierda, también fuera del arreglo arroja error #por ello el if. 0<=i<map && 0<=j<mapa[0]
            dfs(i+1,j) #+derecha
            dfs(i,j-1) #+abajo
            dfs(i,j+1) #+arriba
            #dfs(i+1,j+1) #diagonal -> reduce el resultado
    
    cantidadIslas = 0
    for i in range(len(mapa)): #itero sobre el mapa
        for j in range(len(mapa[0])): 
            if mapa[i][j] == '1':
                dfs(i,j)
                cantidadIslas += 1
    return cantidadIslas

#Complejidad temporal O(n^2)

mapa = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
]
response = numeroDeIslas(mapa)
print(response)

mapa = [
    ["1", "1", "0", "0", "1"],
    ["1", "1", "1", "0", "1"],
    ["0", "0", "1", "0", "1"],
    ["0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "1"],
]
response = numeroDeIslas(mapa)
print(response)
