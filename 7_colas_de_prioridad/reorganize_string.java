import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class ReorganizeString {
    public static String reorganizeString(String S) {
        // 1. We create a HashMap, which is a dictionary that can be used to count the occurrences of each character in the string. Each character is a key in the dictionary, and the corresponding value is the number of times that character appears in the string.
        Map<Character, Integer> ocurrenciasPorCaracter = new HashMap<>();
        for (char caracter : S.toCharArray()) {
            ocurrenciasPorCaracter.put(caracter, ocurrenciasPorCaracter.getOrDefault(caracter, 0) + 1);
            if (ocurrenciasPorCaracter.get(caracter) > (S.length() + 1) / 2) {
                return "";
            }
        }

        // 2. We create a priority queue, which is a data structure that can be used to keep track of the most important elements in a collection. The priority queue will keep track of the characters in the string, ordered by their frequency. Characters with a higher frequency will be at the front of the priority queue, and characters with a lower frequency will be at the back of the priority queue.
        PriorityQueue<Character> colaPrioridad = new PriorityQueue<>((a, b) ->
                ocurrenciasPorCaracter.get(b) - ocurrenciasPorCaracter.get(a));

        // 3. We iterate through the dictionary, and add each character and its frequency to the priority queue.
        colaPrioridad.addAll(ocurrenciasPorCaracter.keySet());

        // 4. We create an empty list called string_ordered, which we will use to store the characters in the reorganized string.
        StringBuilder stringOrdenada = new StringBuilder();

        // 5. We loop while the priority queue has at least 2 items in it. In each iteration of the loop, we pop the first 2 items from the priority queue. If the first item’s frequency is greater than 0, we add it to the end of string_ordered. If the second item’s frequency is greater than 0, we add it to the end of string_ordered. Then, we decrement the frequencies of both items by 1, and add them back into the priority queue.
        while (2 <= colaPrioridad.size()) {
            char caracter1 = colaPrioridad.remove();
            char caracter2 = colaPrioridad.remove();