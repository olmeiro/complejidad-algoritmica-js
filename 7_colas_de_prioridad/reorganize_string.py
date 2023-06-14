# Programando Reorganize String con Python
# from collections import defaultdict
# Dado un string text, debes reordenar sus carácteres para que dos carácteres adyacentes cualesquiera NO sean iguales.

# Si es posible reordenar, retorna el nuevo orden de s. Si no es posible, retorna "".

# Ejemplo 1:

#     # Input
# reorganizeString("aacab")

# # Output
# "abaca"

# Ejemplo 2:

#     # Input
# reorganizeString("aaab")

# # Output
# ""
import heapq
from collections import defaultdict

def reorganizeString( S: str) -> str:
    ocurrenciasPorCaracter = defaultdict(int)
    for caracter in S:
        ocurrenciasPorCaracter[caracter] += 1
        if ocurrenciasPorCaracter[caracter] > (len(S)+1) / 2:
            return ""
    colaPrioridad = []
    for caracter, ocurrencias in ocurrenciasPorCaracter.items():
        colaPrioridad.append((-ocurrencias, caracter))
    heapq.heapify(colaPrioridad)

    stringOrdenada = []
    while 2 <= len(colaPrioridad):
        ocurrencia1, caracter1 = heapq.heappop(colaPrioridad)
        ocurrencia2, caracter2 = heapq.heappop(colaPrioridad)
        stringOrdenada.append(caracter1)
        stringOrdenada.append(caracter2)
        if ocurrencia1 + 1:
            heapq.heappush(colaPrioridad, (ocurrencia1 + 1, caracter1))
        if ocurrencia2 + 1:
            heapq.heappush(colaPrioridad, (ocurrencia2 + 1, caracter2))

    if colaPrioridad:
        return "".join(stringOrdenada) + colaPrioridad[0][1]
    return "".join(stringOrdenada)

result = reorganizeString('aacb');
print(result)

""" Here is the explanation for the code above:
1. We create a defaultdict, which is a dictionary that can be used to count the occurrences of each character in the string. Each character is a key in the dictionary, and the corresponding value is the number of times that character appears in the string.

2. We iterate through the string S, and increment the corresponding character’s value in the dictionary. If the value of any character in the dictionary is greater than (len(S)+1) / 2, then it is impossible to reorganize the string, so we return an empty string.

3. We create a priority queue, which is a data structure that can be used to keep track of the most important elements in a collection. The priority queue will keep track of the characters in the string, ordered by their frequency. Characters with a higher frequency will be at the front of the priority queue, and characters with a lower frequency will be at the back of the priority queue.

4. We iterate through the dictionary, and add each character and its frequency to the priority queue.

5. We create an empty list called string_ordered, which we will use to store the characters in the reorganized string.

6. We loop while the priority queue has at least 2 items in it. In each iteration of the loop, we pop the first 2 items from the priority queue. If the first item’s frequency is greater than 0, we add it to the end of string_ordered. If the second item’s frequency is greater than 0, we add it to the end of string_ordered. Then, we decrement the frequencies of both items by 1, and add them back into the priority queue.

7. If the priority queue is not empty after the loop, then we add the character with the highest frequency to the end of string_ordered.

8. We return string_ordered. """