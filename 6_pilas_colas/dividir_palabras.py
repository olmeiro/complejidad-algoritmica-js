# Dividir Palabras

# Dada una cadena s y un diccionario de cadenas wordDict, devuelve true si s puede segmentarse en una secuencia separada por espacios de una o más palabras del diccionario. Tenga en cuenta que la misma palabra del diccionario puede reutilizarse varias veces en la segmentación.

# Ejemplo 1:
#     Entrada: s = "leetcode", wordDict = ["leet", "code"]
#     Salida: true
# Explicación: Devuelve true porque "leetcode" puede ser segmentado como "leet code".

# Ejemplo 2:
#     Entrada: s = "manzana-manzana", wordDict = ["manzana", "pluma"]
#     Salida: true
# Explicación: Devuelve true porque "manzana-manzana" se puede segmentar como "manzana-bolígrafo-manzana". (Tenga en cuenta que se permite reutilizar una palabra del diccionario).

def dividirPalabras(self, s: str, wordDict: List[str]) -> bool:
   inicio = 0
   pila = [inicio]
   visitado = set()
   while pila:
       inicio = pila.pop()
       if inicio in visitado:
           continue
       visitado.add(inicio)
       for word in wordDict:

           if s[inicio:].startswith(word):
               x = len(word)
               if x == len(s[inicio:]):
                   return True
               pila.append(inicio + x)
   return False

# Javascript code ->
# function dividirPalabras(s, wordDict) {
#     let inicio = 0
#     let pila = [inicio]
#     let visitado = new Set()
#     while (pila.length > 0) {
#         inicio = pila.pop()
#         if (visitado.has(inicio)) {
#             continue
#         }
#         visitado.add(inicio)
#         for (let word of wordDict) {
#             if (s.slice(inicio).startsWith(word)) {
#                 let x = word.length
#                 if (x == = s.slice(inicio).length) {
#                     return true
#                 }
#                 pila.push(inicio + x)
#             }
#         }
#     }
#     return false
# }
