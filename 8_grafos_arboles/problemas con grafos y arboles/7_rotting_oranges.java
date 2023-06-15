class Solution {
  public int orangesRotting(int[][] cultivo) {
    //Si cultivo es nulo o esta vacio, regresamos 0
    if(cultivo == null || cultivo.length == 0) return 0;
  
    int cantidadFrescas = 0;

    Queue<int[]> cola = new LinkedList<>();
    //Recorremos el cultivo
    for(int i = 0; i < cultivo.length; i++){
      for(int j = 0; j < cultivo[0].length; j++){
        //Si encontramos una naranja podrida, la agregamos a la cola
        if(cultivo[i][j] == 2) cola.add(new int[]{i, j});
        //Si encontramos una naranja fresca, aumentamos la cantidad de frescas
        if(cultivo[i][j] == 1) cantidadFrescas++;
      }
    }//complexity: O(n*m) spacial complexity: O(n*m)

    //Si no hay naranjas frescas, regresamos 0
    if(cantidadFrescas == 0) return 0; //todas estan podridas

    //ahora implementamos el bfs:
    //Definimos las direcciones en las que podemos movernos
    int[][] direcciones = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
    int dias = 0;
    //Mientras la cola no este vacia
    while(!cola.isEmpty()){
      //Aumentamos los dias
      dias++;
      //Obtenemos el tamaño de la cola
      int tamano = cola.size();
      //Recorremos la cola (fifo)
      for(int i = 0; i < tamano; i++){
        //Obtenemos la naranja podrida
        int[] naranja = cola.poll();
        //Recorremos las direcciones
        for(int[] direccion : direcciones){
          //Obtenemos la posicion de la naranja vecina
          int x = naranja[0] + direccion[0];
          int y = naranja[1] + direccion[1];
          //Si la naranja vecina esta dentro del cultivo y es fresca
          if(x >= 0 && x < cultivo.length && y >= 0 && y < cultivo[0].length && cultivo[x][y] != 2){
            //La podrimos
            cultivo[x][y] = 2;
            //La agregamos a la cola
            cola.add(new int[]{x, y});
            //Disminuimos la cantidad de naranjas frescas
            cantidadFrescas--;
          }
        }
      }
    }//complexity: O(n*m) spacial complexity: O(n*m)
    return cantidadFrescas == 0 ? dias - 1 : -1; //todas estan podridas -1 
  }
}

//implementation:
//https://leetcode.com/problems/rotting-oranges/discuss/563686/Java-Explained-Using-BFS-with-Comments-Beats-100-Time-and-100-Space

""" Here is the explanation for the code above:
1. We start by creating a queue of all the rotten oranges. Initially, the size of the queue is 2.
2. Then we get the first element from the queue, i.e., [0, 2]. We rot the orange at [0, 2] by replacing its value by 2. Then we add all the adjacent fresh oranges into the queue. In this case, only [1, 2] is added.
3. Now the queue has [1, 2]. We repeat step 2.
4. Now the queue has [1, 1]. We repeat step 2.
5. Now the queue has [2, 2]. We repeat step 2.
6. Now the queue has [2, 0]. We repeat step 2.
7. Now the queue has [2, 1]. We repeat step 2.
8. Now the queue has [2, 2]. We repeat step 2.
9. Now the queue has [2, 2]. We repeat step 2.
10. Now the queue has [2, 2]. We repeat step 2.
11. Now the queue has [2, 2]. We repeat step 2.
12. Now the queue has [2, 2]. We repeat step 2.
13. Now the queue has [2, 2]. We repeat step 2.
14. Now the queue has [2, 2]. We repeat step 2.
15. Now the queue has [2, 2]. We repeat step 2.
16. Now the queue has [2, 2]. We repeat step 2.
17. Now the queue has [2, 2]. We repeat step 2.
18. Now the queue has [2, 2]. We repeat step 2.
19. Now the queue has [2, 2]. We repeat step 2.
20. Now the queue has [2, 2]. We repeat step 2.
21. Now the queue has [2, 2]. We repeat step 2.
22. Now the queue has [2, 2]. We repeat step 2.
23. Now the queue has [2, 2]. We repeat step 2. """

/* This is an example for calling this function: */
int[][] oranges = {{2,1,1},{1,1,0},{0,1,1}};
int result = orangesRotting(oranges);
System.out.println(result); // 4