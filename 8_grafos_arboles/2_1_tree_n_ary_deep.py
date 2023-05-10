class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.hijos = []

# Crear el árbol n-ario
raiz = Nodo(1)
raiz.hijos.append(Nodo(2))
raiz.hijos.append(Nodo(3))
raiz.hijos[0].hijos.append(Nodo(4))
raiz.hijos[0].hijos.append(Nodo(5))
raiz.hijos[1].hijos.append(Nodo(7))
raiz.hijos[1].hijos.append(Nodo(8))
raiz.hijos[1].hijos[0].hijos.append(Nodo(9))
raiz.hijos[1].hijos[0].hijos[0].hijos.append(Nodo(10))


def profundidad(raiz):
    if not raiz:
      return 0
    max_profundidad = 0
    for hijo in raiz.hijos:
        max_profundidad = max(max_profundidad, profundidad(hijo))
    return max_profundidad + 1


# Ejecutar la función profundidad
print("La profundidad del árbol es:", profundidad(raiz))


#visualmente nuestro árbol es:
    #      1
    #    /   \
    #   2     3
    #  / \   / \
    # 4   5 7   8
    #       |
    #       9
    #       |
    #       10