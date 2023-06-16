# Algoritmo de Backtrack para encontrar todas las combinaciones de sumas de un conjunto de números
def combinationSum(candidatos: list[int], target: int) -> list[list[int]]:
    def dfs(sobrante, pila, resultado):
        if not sobrante:
            resultado.append(pila)
            return
        for numero in candidatos:
            if numero > sobrante:
                return
            if not pila or pila[-1] <= numero:
                dfs(sobrante - numero, pila + [numero], resultado)
    resultado = []
    candidatos.sort()
    dfs(target, [], resultado)
    return resultado

""" This is an example for calling this function:"""
exercise = combinationSum([2, 3, 6, 7], 7) 
print(exercise) #[[2, 2, 3], [7]]
