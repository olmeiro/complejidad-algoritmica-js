# Batalla Naval - Contar Barcos
# Dado un tablero de m x n donde cada celda es un acorazado ‘X’ o un vacío ‘.’, devuelva el número de los barcos en el tablero. Los barcos sólo pueden colocarse horizontal o verticalmente en el tablero. En otras palabras, sólo pueden tener la forma 1 x k (1 fila, k columnas) o k x 1 (k filas, 1 columna), donde k puede ser de cualquier tamaño. Al menos una celda horizontal o vertical separa dos barcos (es decir, no hay barcos adyacentes).

# Ejemplo 1:
# Entrada: tablero = [["X",".",".", "X"],[".",".", "X"],[".",".", "X"]
# Salida: 2

# Ejemplo 2:
# Entrada: tablero = [["."]]
# Salida: 0

# def countBattleships(self, tablero: List[List[str]]) -> int:
def countBattleships(tablero):
    def dfs(i, j):
        if 0 <= i < len(tablero) and 0 <= j < len(tablero[0]) and tablero[i][j] == 'X':
            tablero[i][j] = '.'
            dfs(i+1, j)
            dfs(i-1, j)
            dfs(i, j-1)
            dfs(i, j+1)
    cantidad = 0
    for i in range(len(tablero)):
        for j in range(len(tablero[0])):
            if tablero[i][j] == 'X':
                dfs(i, j)
                cantidad += 1
    return cantidad


tablero = [["X", ".", "X"], [".", ".", "X"], [".", ".", "X"]]
print(countBattleships(tablero))
