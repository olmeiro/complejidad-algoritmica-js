var wordExist = function (board, word) {

  let row = board.length;
  let column = board[0].length;
  let resp = false;


  const dfsBoard = (board, i, j, counter) => { //funcion recursiva que recorre la matriz en busca de la palabra, counter es el contador de la palabra para saber en que posicion de la palabra se encuentra
    if (i < 0 || j < 0 || i >= row || j >= column || board[i][j] != word[counter]) return; //si se sale de la matriz o la letra en la posicion i,j es diferente a la letra en la posicion counter de la palabra, entonces se retorna
    if (board[i][j] == word[counter]) {
      board[i][j] = '*';
      if (counter + 1 == word.length) { //si el contador es igual al largo de la palabra, entonces se encontro la palabra
        resp = true
        return;
      }
      dfsBoard(board, i + 1, j, counter + 1);
      dfsBoard(board, i, j + 1, counter + 1);
      dfsBoard(board, i - 1, j, counter + 1);
      dfsBoard(board, i, j - 1, counter + 1);
      board[i][j] = word[counter];
    }
  }


  for (let g = 0; g < row; g++) { 
    for (let k = 0; k < column; k++) { //recorre la matriz en busca de la primera letra de la palabra
      if (word[0] === board[g][k]) dfsBoard(board, g, k, 0); //si la primera letra de la palabra es igual a la letra en la posicion g,k de la matriz, entonces se llama a la funcion dfsBoard
      if (resp) return true //si la palabra se encuentra, se retorna true
    }
  }

  return resp;
};

/* This is an example for calling this function: */
var board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
var word = "ABCCED"
let isWordInBoard = wordExist(board, word)
console.log(isWordInBoard) //true