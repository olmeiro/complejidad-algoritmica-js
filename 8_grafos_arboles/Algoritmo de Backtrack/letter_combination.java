class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> listaPalabras = new ArrayList<String>(); // lista de palabras
        Map<String, String> pad = new HashMap<String, String>(); // diccionario de teclas
        pad.put("2", "abc");
        pad.put("3", "def");
        pad.put("4", "ghi");
        pad.put("5", "jkl");
        pad.put("6", "mno");
        pad.put("7", "pqrs");
        pad.put("8", "tuv");
        pad.put("9", "wxyz");
        generarCombinaciones(0, digits, "", listaPalabras, pad); // cero es la posicion actual para recorrer el numero celular
        return listaPalabras;
    }
    
    public void generarCombinaciones(int i, String numeroCelular, String path, List<String> listaPalabras, Map<String, String> pad) {
        if (i == numeroCelular.length()) {
            if (!path.equals("")) {
                listaPalabras.add(path);
            }
            return; // termina la recursividad
        }
        for (char ch : pad.get(numeroCelular.substring(i, i+1)).toCharArray()) {
            generarCombinaciones(i+1, numeroCelular, path + ch, listaPalabras, pad);
        }
    }
}

/* This is an example for calling this function: */
class Main {
    public static void main(String[] args) {
        Solution solucion = new Solution();
        String numeroCelular = "23";
        System.out.println(solucion.letterCombinations(numeroCelular));
    }
}

/* This code is contributed by PrinciRaj1992 */
/* This code is modified by me */
// in cmd: java Main