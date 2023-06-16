#permutation backtracking

def permute(numeros):
   def dfs(listaNumeros, combinaciónActual, permutaciones):
       if not listaNumeros:
           permutaciones.append(combinaciónActual) #append the permutation to the list of permutations
       for i in range(len(listaNumeros)):
           dfs(listaNumeros[:i]+listaNumeros[i+1:], combinaciónActual+[listaNumeros[i]], permutaciones) #recursive call
   permutaciones = []
   dfs(numeros, [], permutaciones)
   return permutaciones

""" This is an example for calling this function:"""
exercise = permute([1, 2, 3])
print(exercise)