
/* Here is the explanation for the code above:
1. The first function is the driver function which calls the second function.
2. The second function is the recursive function which takes the following arguments:
    i. The current index (i) of the digit we are processing.
    ii. The digits string.
    iii. The current string that we have processed till now.
    iv. The vector of strings containing the final result.
    v. The map that contains the digit to letter mappings.
3. The recursive function does the following:
    i. Base case: if i == digits.length(), then we have processed all the digits and we add the current string to the result vector.
    ii. If i < digits.length(), then we get the digit at the ith index and find the corresponding letters to this digit.
    iii. For each of these letters, we call the recursive function with the following arguments:
        a. The current index (i+1) of the digit we are processing.
        b. The digits string.
        c. The current string that we have processed till now + the current letter.
        d. The vector of strings containing the final result.
        e. The map that contains the digit to letter mappings. */
class Solution {
public:
    vector<string> letterCombinations(string numeroCelular) {
        vector<string> listaPalabras;
        unordered_map<char, string> teclado;
        teclado['2'] = "abc"; 
        teclado['3'] = "def"; 
        teclado['4'] = "ghi"; 
        teclado['5'] = "jkl"; 
        teclado['6'] = "mno"; 
        teclado['7'] = "pqrs"; 
        teclado['8'] = "tuv"; 
        teclado['9'] = "wxyz";
        generarCombinaciones(0, numeroCelular, "", listaPalabras,  teclado); // cero es la posicion actual para recorrer el numero celular
        return listaPalabras;
    }
    
    void generarCombinaciones(int i,string numeroCelular, string path ,vector<string> &listaPalabras, unordered_map<char, string> &pad){
        if (i == numeroCelular.length()){
            if (path != "")
                listaPalabras.push_back(path);
            return; //termina la recursividad
        }
        for (char ch: pad[numeroCelular[i]]){
            generarCombinaciones(i+1, numeroCelular, path + ch, listaPalabras, pad);}
        }
};

/* This is an example for calling this function: */
 int main(){
    string numeroCelular = "23";
    Solution solucion;
    vector<string> listaPalabras;
    listaPalabras = solucion.letterCombinations(numeroCelular);
    for (auto palabra : listaPalabras){
        cout << palabra << endl;
    }
    return 0;
}