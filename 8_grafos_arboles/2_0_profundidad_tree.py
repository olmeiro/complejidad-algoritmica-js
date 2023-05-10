class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izquierda = None
        self.derecha = None

def profundidad(raiz):
    if not raiz:
      return 0
    izquierda = profundidad(raiz.izquierda)
    derecha = profundidad(raiz.derecha)
    if not izquierda:
        return derecha + 1
    elif not derecha:
        return izquierda + 1
    else:
        return max(izquierda, derecha) + 1

# Crear el árbol binario
raiz = Nodo(1)
raiz.izquierda = Nodo(2)
raiz.derecha = Nodo(3)
raiz.izquierda.izquierda = Nodo(4)
raiz.izquierda.derecha = Nodo(5)
raiz.derecha.izquierda = Nodo(7)
raiz.derecha.derecha = Nodo(8)
raiz.derecha.izquierda.izquierda = Nodo(9)
raiz.derecha.izquierda.izquierda.izquierda = Nodo(10)

# Ejecutar la función profundidad
print("La profundidad del árbol es:", profundidad(raiz))
