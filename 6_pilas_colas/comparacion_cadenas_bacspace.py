# Comparación de Cadenas con Backspaces

# Dadas dos cadenas s y t, devuelve true si son iguales cuando ambas se escriben en editores de texto vacíos. ‘#’ significa un carácter de backspace (tecla de restroceso). En el caso de retroceder en una cadena vacía, esta continuará vacía.

# Ejemplo 1:
#     Entrada: s = "ab#c", t = "ad#c"
#     Salida: true
# Explicación: Tanto s como t se convierten en "ac".

# Ejemplo 2:
#     Entrada: s = "ab##", t = "c#d#"
#     Salida: verdadero
# Explicación: Tanto s como t se convierten en "".

def comparacion_backspace(self, string: str, T: str) -> bool:
   if not string or not T:
       return False
   pilaS = []
   pilaT = []
   for caracter in string:
       if caracter == "#":
           if pilaS:
               pilaS.pop()
       else:
           pilaS.append(caracter)
   for caracter in T:
       if caracter == "#":
           if pilaT:
               pilaT.pop()
       else:
           pilaT.append(caracter)
   return pilaT == pilaS
