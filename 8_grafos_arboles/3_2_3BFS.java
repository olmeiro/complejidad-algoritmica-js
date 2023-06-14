public static void BFS(Node raiz) {
    if (raiz == null) {
        return;
    }
    List<Node> respuesta = new ArrayList<Node>();
    List<Node> cola = new ArrayList<Node>();
    int nivel = 1;
    cola.add(raiz);
    while (cola.size() > 0) {
        for (int i = 0; i < cola.size(); i++) {
            Node nodoActual = cola.remove(0);
            System.out.println(nodoActual.valor);
            respuesta.add(nodoActual);
            for (Node hija : nodoActual.hijos) {
                cola.add(hija);
            }
        }
        nivel += 1;
    }
    System.out.println("la cantidad de niveles de este arbol es:" + nivel);
    return respuesta;
}

class Node {
    public int valor;
    public List<Node> hijos;

    public Node(int valor, List<Node> hijos) {
        this.valor = valor;
        this.hijos = hijos;
    }
}

Ejemplo de uso
Node nodo1 = new Node(1, null);
Node nodo2 = new Node(2, null);
Node nodo3 = new Node(3, null);
Node nodo4 = new Node(4, null);
Node nodo5 = new Node(5, null);

nodo1.hijos = Arrays.asList(nodo2, nodo3);
nodo2.hijos = Arrays.asList(nodo4);
nodo3.hijos = Arrays.asList(nodo5);

BFS(nodo1);