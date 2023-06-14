Ask Copilot
import java.util.Arrays;

public class Main {
    public static boolean searchInMatrix(int[][] matriz, int objetivo) {
        int izquierda = 0;
        int derecha = matriz[0].length - 1;
        while (izquierda < derecha) {
            int mitad = (izquierda + derecha) / 2 + 1;
            if (matriz[mitad][0] == objetivo) {
                return true;
            }
            if (matriz[mitad][0] < objetivo) {
                izquierda = mitad;
            } else {
                derecha = mitad - 1;
            }
        }
        int[] fila = matriz[izquierda];
        izquierda = 0;
        derecha = fila.length - 1;
        while (izquierda <= derecha) {
            int mitad = izquierda + (derecha - izquierda) / 2;
            if (fila[mitad] == objetivo) {
                return true;
            }
            if (fila[mitad] < objetivo) {
                izquierda = mitad + 1;
            } else {
                derecha = mitad - 1;
            }
        }

        return false;
    }

    public static void main(String[] args) {
        int[][] matriz = {
                {1, 3, 5, 7},
                {10, 11, 16, 20},
                {23, 30, 34, 60},
        };
        System.out.println(Arrays.deepToString(matriz));

        boolean response = searchInMatrix(matriz, 3);
        System.out.println(response);

        boolean response2 = searchInMatrix(matriz, 12);
        System.out.println(response2);
    }
}