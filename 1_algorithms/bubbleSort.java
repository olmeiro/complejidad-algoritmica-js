public static int[] bubbleSort(int[] arreglo) {
    int longitud = arreglo.length;  //O(1)
    for (int i = 0; i < longitud; i++) { //O(n)
        for (int j = 0; j < longitud; j++) { //O(n)
            if (arreglo[j] > arreglo[j + 1]) { //O(1)
                int temporal = arreglo[j]; //O(1)
                arreglo[j] = arreglo[j + 1]; //O(1)
                arreglo[j + 1] = temporal; //O(1)
            }
        }
    }
    return arreglo; //O(1)
}

/* This is an example for calling this function:*/
 int[] arreglo = {5, 1, 6, 2, 3, 4};
bubbleSort(arreglo);
System.out.println(Arrays.toString(arreglo)); 