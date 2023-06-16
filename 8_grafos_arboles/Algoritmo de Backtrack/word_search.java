class WordExistInBoard {
  public static boolean wordExist(char[][] board, String word) {
    int row = board.length;
    int column = board[0].length;
    boolean resp = false;
    for (int g = 0; g < row; g++) {
      for (int k = 0; k < column; k++) {
        if (word.charAt(0) == board[g][k]) {
          if (dfsBoard(board, g, k, 0, word)) {
            resp = true;
            return resp;
          }
        }
      }
    }
    return resp;
  }

  public static boolean dfsBoard(char[][] board, int i, int j, int counter, String word) {
    int row = board.length;
    int column = board[0].length;
    boolean resp = false;
    if (i < 0 || j < 0 || i >= row || j >= column || board[i][j] != word.charAt(counter)) return resp;
    if (board[i][j] == word.charAt(counter)) {
      board[i][j] = '*';
      if (counter + 1 == word.length()) {
        resp = true;
        return resp;
      }
      resp = dfsBoard(board, i + 1, j, counter + 1, word);
      if (resp) return resp;
      resp = dfsBoard(board, i, j + 1, counter + 1, word);
      if (resp) return resp;
      resp = dfsBoard(board, i - 1, j, counter + 1, word);
      if (resp) return resp;
      resp = dfsBoard(board, i, j - 1, counter + 1, word);
      if (resp) return resp;
      board[i][j] = word.charAt(counter);
    }
    return resp;
  }

/* This is an example for calling this function: */
 char[][] board = {
        {'A', 'B', 'C', 'E'},
        {'S', 'F', 'C', 'S'},
        {'A', 'D', 'E', 'E'},
};
System.out.println(wordExist(board, "ABCCED"));
System.out.println(wordExist(board, "SEE"));
System.out.println(wordExist(board, "ABCB"));