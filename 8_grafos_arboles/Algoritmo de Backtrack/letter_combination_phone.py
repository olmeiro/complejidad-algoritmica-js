# /* Here is the explanation for the code above:
# 1. The first function is the driver function which calls the second function.
# 2. The second function is the recursive function which takes the following arguments:
#     i. The current index (i) of the digit we are processing.
#     ii. The digits string.
#     iii. The current string that we have processed till now.
#     iv. The vector of strings containing the final result.
#     v. The map that contains the digit to letter mappings.
# 3. The recursive function does the following:
#     i. Base case: if i == digits.length(), then we have processed all the digits and we add the current string to the result vector.
#     ii. If i < digits.length(), then we get the digit at the ith index and find the corresponding letters to this digit.
#     iii. For each of these letters, we call the recursive function with the following arguments:
#         a. The current index (i+1) of the digit we are processing.
#         b. The digits string.
#         c. The current string that we have processed till now + the current letter.
#         d. The vector of strings containing the final result.
#         e. The map that contains the digit to letter mappings. */
class Solution:
    def letterCombinations(self, digits: str) -> list[str]:
        listaPalabras = [] # lista de palabras
        pad = {} # diccionario de teclas
        pad['2'] = "abc"
        pad['3'] = "def"
        pad['4'] = "ghi"
        pad['5'] = "jkl"
        pad['6'] = "mno"
        pad['7'] = "pqrs"
        pad['8'] = "tuv"
        pad['9'] = "wxyz"
        self.generarCombinaciones(0, digits, "", listaPalabras, pad) # cero es la posicion actual para recorrer el numero celular
        return listaPalabras
    
    def generarCombinaciones(self, i: int, numeroCelular: str, path: str, listaPalabras: list[str], pad: dict):
        if i == len(numeroCelular):
            if path != "":
                listaPalabras.append(path)
            return # termina la recursividad
        for ch in pad[numeroCelular[i]]:
            self.generarCombinaciones(i+1, numeroCelular, path + ch, listaPalabras, pad)

# /* This is an example for calling this function: */
def main():
    numeroCelular = "23"
    solucion = Solution()
    listaPalabras = solucion.letterCombinations(numeroCelular)
    print(listaPalabras)

if __name__ == "__main__":
    main()

    # /* This code is contributed by PrinciRaj1992 */
    # /* This code is modified by me */
    # in cmd: python letter_combination_phone.py