# https://leetcode.com/problems/n-queens/
# https://www.youtube.com/watch?v=xFv_Hl4B83A

def solveNQueens( n: int) -> list[list[str]]:
  res = []
  dfs([-1]*n, 0, [], res)
  return res
 
def dfs(numeros, apuntador, construccionActual, res):
   if apuntador == len(numeros):
       res.append(construccionActual)
       return
   for i in range(len(numeros)):
       numeros[apuntador] = i
       if valid(numeros, apuntador):
           tmp = "."*len(numeros)
           dfs(numeros, apuntador+1, construccionActual+[tmp[:i]+"Q"+tmp[i+1:]], res)
 
def valid( numeros, apuntador):
   for i in range(apuntador):
       if abs(numeros[i]-numeros[apuntador]) == apuntador - i or numeros[i] == numeros[apuntador]:
           return False
   return True

""" This is an example for calling this function: """
n = 4
exercise = solveNQueens(n)
print(exercise)