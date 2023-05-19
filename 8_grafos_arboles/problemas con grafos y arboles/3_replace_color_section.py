# def colorearSector(self, imagen: List[List[int]], sr: int, sc: int, nuevoColor: int) -> List[List[int]]:
def colorearSector(imagen, sr: int, sc: int, nuevoColor: int):
    if not imagen or not imagen[0]:
        return imagen
    if imagen[sr][sc] == nuevoColor:
        return imagen

    def dfs(imagen, i, j, colorActual):
        imagen[i][j] = nuevoColor
        for x, y in direcciones:
            print("x,y:", x,y)
            if 0 <= x+i < len(imagen) and 0 <= j+y < len(imagen[0]) and imagen[x+i][j+y] == colorActual:
                dfs(imagen, x+i, j+y, colorActual)

    direcciones = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    dfs(imagen, sr, sc, imagen[sr][sc])
    return imagen


image1 = [[1,1,1],[1,1,0],[1,0,1]];
sr = 1; sc = 1;
color = 2;

print(colorearSector(image1,sr, sc, color ))