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

""" Here is the explanation for the code above:
1. if not image or not image[0]: return image
2. if image[sr][sc] == newColor: return image
3. def dfs(image, i, j, color):
4. image[i][j] = newColor
5. for x, y in directions:
6. if 0 <= x+i < len(image) and 0 <= j+y < len(image[0]) and image[x+i][y+j] == color:
7. dfs(image, x+i, y+j, color)
8. directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
9. dfs(image, sr, sc, image[sr][sc])
10. return image

Explanation:
1. check if the image is empty or not, if it is empty just return the image
2. check if the color of the starting point is the same as the new color, if it is the same, just return the image
3. define a dfs function to do the color change
4. change the color of the starting point
5. for x, y in directions:
6. check if the next point is valid, if it is, do the dfs
7. do the dfs
8. define the directions
9. do the dfs of the starting point
10. return the image """