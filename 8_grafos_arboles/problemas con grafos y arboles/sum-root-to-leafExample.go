package main

import (
	"fmt"
	"strconv"
)

// Definición de la estructura del árbol
type Nodo struct {
	Val       int
	izquierda *Nodo
	derecha   *Nodo
}

// Creación del árbol
var arbolSRLN = &Nodo{
	Val: 1,
	izquierda: &Nodo{
		Val: 3,
		izquierda: &Nodo{
			Val:       5,
			izquierda: nil,
			derecha:   nil,
		},
		derecha: &Nodo{
			Val:       8,
			izquierda: nil,
			derecha:   nil,
		},
	},
	derecha: &Nodo{
		Val:       7,
		izquierda: nil,
		derecha: &Nodo{
			Val:       1,
			izquierda: nil,
			derecha:   nil,
		},
	},
}

// Función que realiza la suma de los números del árbol
func sumNumbers(raiz *Nodo) int {
	if raiz == nil {
		return 0
	}
	total := 0
	dfs(raiz, "", &total)
	return total
}

// Función DFS recursiva para recorrer el árbol y sumar los números
func dfs(raiz *Nodo, caminoActual string, sumaTotal *int) {
	if raiz.izquierda == nil && raiz.derecha == nil {
		valor, _ := strconv.Atoi(caminoActual + strconv.Itoa(raiz.Val))
		*sumaTotal += valor
	}
	if raiz.izquierda != nil {
		dfs(raiz.izquierda, caminoActual+strconv.Itoa(raiz.Val), sumaTotal)
	}
	if raiz.derecha != nil {
		dfs(raiz.derecha, caminoActual+strconv.Itoa(raiz.Val), sumaTotal)
	}
}

func main() {
	fmt.Println(sumNumbers(arbolSRLN))
}

// In console: go build namefile.go
//             .\namefile.exe