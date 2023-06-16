def letterCasePermutation(S: str) -> list[str]:
   res = []
   def dfs(permutacionActual, apuntador):
       if apuntador == len(S):
           res.append(''.join(permutacionActual))
           return
       for i in set([S[apuntador].lower(), S[apuntador].upper()]):
           permutacionActual.append(i)
           dfs(permutacionActual, apuntador+1)
           permutacionActual.pop()
   dfs([],0)
   return res

""" This is an example for calling this function:"""
exercise = letterCasePermutation("a1b2")
print(exercise) #["a1b2", "a1B2", "A1b2", "A1B2"]