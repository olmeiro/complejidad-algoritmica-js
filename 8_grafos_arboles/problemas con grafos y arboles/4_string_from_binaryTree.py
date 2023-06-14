# Dada la raíz de un árbol binario, construya una cadena formada por paréntesis y enteros a partir de un árbol binario con el modo de recorrido de preorden, y devuélvala. Omita todos los pares de paréntesis vacíos que no afecten a la relación de mapeo uno a uno entre la cadena y el árbol binario original.

# Ejemplo 1
# Entrada: raíz = [1,2,3,4]
# Salida: "1(2(4))(3)"
# Explicación: Originalmente, tiene que ser “1(2(4)())(3()())”, pero hay que omitir todos los pares de paréntesis vacíos innecesarios. Y será “1(2(4))(3)”

# Ejemplo 2:
# Entrada: raíz = [1,2,3,null,4]
# Salida: "1(2()(4))(3)"
# Explicación: Casi lo mismo que el primer ejemplo, excepto que no podemos omitir el primer par de paréntesis para romper la relación de mapeo uno a uno entre la entrada y la salida.

# Solución

class TreeNode:
    def __init__(self, val=0, izquierda=None, derecha=None):
        self.val = val
        self.izquierda = izquierda
        self.derecha = derecha
        
class Solution:
   def tree2str(self, t: TreeNode) -> str:
       def dfs(raiz):
           if not raiz: return ''
           string = str(raiz.val)
           if not raiz.izquierda and not raiz.derecha:
               return string
           string += '(' + str(dfs(raiz.izquierda)) + ')'
           if raiz.derecha:
               string += '(' + str(dfs(raiz.derecha)) + ')'
           return string
       return dfs(t)
   
   # Ejemplo 1
# Entrada: raíz = [1,2,3,4]
# Salida: "1(2(4))(3)"
raiz = TreeNode(1)
raiz.izquierda = TreeNode(2)
raiz.derecha = TreeNode(3)
raiz.izquierda.izquierda = TreeNode(4)
solucion = Solution()
print(solucion.tree2str(raiz))

# Ejemplo 2:
# Entrada: raíz = [1,2,3,null,4]
# Salida: "1(2()(4))(3)"
raiz = TreeNode(1)
raiz.izquierda = TreeNode(2)
raiz.derecha = TreeNode(3)
raiz.izquierda.derecha = TreeNode(4)
solucion = Solution()
print(solucion.tree2str(raiz))

""" Here is the explanation for the code above:
1. The function tree2str() takes the root of a binary tree as a parameter and returns a string.
2. The function dfs() takes the root of a binary tree as a parameter and returns a string.
3. In the function dfs(), we first check if the root is null, then we return an empty string.
4. Then we create a string and store the value of the root in it.
5. Then we check if the root has a left child and a right child.
6. If the root has a left child and a right child, then we call the function dfs() recursively on the left child and the right child and append the return value of the function to the string.
7. If the root has a left child but not a right child, then we call the function dfs() recursively on the left child and append the return value of the function to the string.
8. If the root has a right child but not a left child, then we append an empty string to the string.
9. Then we return the string.
10. In the tree2str() function, we call the dfs() function with the root as the parameter and return the value returned by the function. """