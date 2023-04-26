//Programando Parentesis Válido con C++

bool isValid(string s){
    stack<char> pila;
    for (char& caracter : s){
        if (caracter == ')'){
            if(pila.empty()){
                return false;
            }
            pila.pop();
        }
        else if (caracter == '('){
            pila.push('(');
        }
    }
    return pila.empty();
}

// ())(  stack -> return false
//((abc)*d) stact -> true  //complejida temporal O(n) - complejidad espacial O(n)