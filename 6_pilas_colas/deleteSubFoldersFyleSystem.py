# Eliminar Subcarpetas del Sistema de Archivos

# Dada una lista de carpetas, devuelva las carpetas después de eliminar todas las subcarpetas de esas carpetas. Puede devolver la respuesta en cualquier orden.

# Si una carpeta[i] se encuentra dentro de otra carpeta[j], se denomina subcarpeta de ésta.

# El formato de una ruta es una o varias cadenas concatenadas de la forma ‘/’ seguida de una o varias letras inglesas minúsculas.

# Por ejemplo, “/carpeta1” y “/carpeta1/problemas” son rutas válidas, mientras que una cadena vacía y “/” no lo son.

# Ejemplo 1:
#     Entrada: carpeta = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]
#     Salida: ["/a", "/c/d", "/c/f"]
# Explicación: Las carpetas "/a/b" es una subcarpeta de "/a" y "/c/d/e" está dentro de la carpeta "/c/d" en nuestro sistema de archivos.


# Ejemplo 2:
#     Entrada: carpeta = ["/a", "/a/b/c", "/a/b/d"]
#     Salida: ["/a"]
# Explicación: Las carpetas "/a/b/c" y "/a/b/d" serán eliminadas porque son subcarpetas de "/a".

def removeSubfolders(self, carpeta: List[str]) -> List[str]:
   carpeta.sort()
   respuesta = [carpeta[0]]
   for i in range(1, len(carpeta)):
       if not carpeta[i].startswith(respuesta[-1]+'/'):
           respuesta.append(carpeta[i])
   return respuesta
