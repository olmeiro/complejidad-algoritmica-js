def wordExist(board, word):
    row = len(board)
    column = len(board[0])
    resp = False

    def dfsBoard(board, i, j, counter):
        if i < 0 or j < 0 or i >= row or j >= column or board[i][j] != word[counter]: return
        if board[i][j] == word[counter]:
            board[i][j] = '*'
            if counter + 1 == len(word):
                nonlocal resp
                resp = True
                return
            dfsBoard(board, i + 1, j, counter + 1)
            dfsBoard(board, i, j + 1, counter + 1)
            dfsBoard(board, i - 1, j, counter + 1)
            dfsBoard(board, i, j - 1, counter + 1)
            board[i][j] = word[counter]

    for g in range(row):
        for k in range(column):
            if word[0] == board[g][k]:
                dfsBoard(board, g, k, 0)
            if resp:
                return True

    return resp


""" This is an example for calling this function: """
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "ABCCED"
isWordInBoard = wordExist(board, word)
print(isWordInBoard) #true