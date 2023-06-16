#array de dos dimensiones
from custom_array import Array

class Array2D():
    def __init__(self,rows,cols,fill_value=None):
        self.data = Array(rows)
        for row in range(rows):
            self.data[row] = Array(cols,fill_value)
    
    def get_num_rows(self):
        return len(self.data)
    
    def get_num_cols(self):
        return len(self.data[0])
    
    def clear(self,fill_value):
        for row in range(self.get_num_rows()):
            self.data[row].clear(fill_value)
    
    def __getitem__(self,index_tuple):
        assert len(index_tuple) == 2, "Invalid number of array subscripts."
        row = index_tuple[0]
        col = index_tuple[1]
        assert row >= 0 and row < self.get_num_rows() \
            and col >= 0 and col < self.get_num_cols(), \
                "Array subscript out of range."
        the_1d_array = self.data[row]
        return the_1d_array[col]
    
    def __setitem__(self,index_tuple,value):
        assert len(index_tuple) == 2, "Invalid number of array subscripts."
        row = index_tuple[0]
        col = index_tuple[1]
        assert row >= 0 and row < self.get_num_rows() \
            and col >= 0 and col < self.get_num_cols(), \
                "Array subscript out of range."
        the_1d_array = self.data[row]
        the_1d_array[col] = value

    #fill array with random numbers
    def randomize(self):
        import random
        for row in range(self.get_num_rows()):
            for col in range(self.get_num_cols()):
                self.data[row][col] = random.randint(0,9)

    def __str__(self) -> str:
        result = ""
        for row in range(self.get_num_rows()):
            for col in range(self.get_num_cols()):
                result += str(self.data[row][col]) + " "
            result += "\n"
        return result
    
    def __iter__(self):
        return _Array2DIterator(self.data)
    
class _Array2DIterator:
    def __init__(self,the_array):
        self._array_ref = the_array
        self._cur_row = 0
        self._cur_col = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self._cur_row < len(self._array_ref):
            item_to_return = self._array_ref[self._cur_row][self._cur_col]
            self._cur_col += 1
            if self._cur_col == len(self._array_ref[self._cur_row]):
                self._cur_row += 1
                self._cur_col = 0
            return item_to_return
        else:
            raise StopIteration
        
#Prueba
# pip install arrays
#cmd: from arrays import Array

a = Array2D(3,5)
#fill with random numbers:
a.randomize()
print(a)



# from 3_arrays import Array2D
# a = Array2D(3,5)
# a[0,0] = 1
# a[0,1] = 2
# a[0,2] = 3
# a[0,3] = 4
# a[0,4] = 5
# a[1,0] = 6
# a[1,1] = 7
# a[1,2] = 8
# a[1,3] = 9
# a[1,4] = 10
# a[2,0] = 11
# a[2,1] = 12
# a[2,2] = 13
# a[2,3] = 14
# a[2,4] = 15
# a[3,0] = 16
# a[3,1] = 17
# a[3,2] = 18