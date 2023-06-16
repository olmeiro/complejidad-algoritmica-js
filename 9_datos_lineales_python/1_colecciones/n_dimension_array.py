#array de n dimensiones
from custom_array import Array
class ArrayNd:
    def __init__(self,*dimensions,fill_value=None):
        assert len(dimensions) > 1, "The array must have 2 or more dimensions."
        self._dims = dimensions
        size = 1
        for d in dimensions:
            assert d > 0, "Dimensions must be > 0."
            size *= d
        self._elements = Array(size,fill_value)
        self._factors = Array(len(dimensions))
        self._compute_factors()
    
    def num_dims(self):
        return len(self._dims)
    
    def length(self,dim):
        assert dim >= 1 and dim < len(self._dims), "Dimension component out of range."
        return self._dims[dim]
    
    def clear(self,fill_value=None):
        self._elements.clear(fill_value)
    
    def __getitem__(self,index_tuple):
        assert len(index_tuple) == self.num_dims(), "Invalid # of array subscripts."
        index = self._compute_index(index_tuple)
        assert index is not None, "Array subscript out of range."
        return self._elements[index]
    
    def __setitem__(self,index_tuple,value):
        assert len(index_tuple) == self.num_dims(), "Invalid # of array subscripts."
        for i, dim in enumerate(index_tuple):
            assert dim >= 0 and dim < self._dims[i], "Array subscript out of range."
        index = self._compute_index(index_tuple)
        assert index is not None, "Array subscript out of range."
        self._elements[index] = value
    
    def _compute_factors(self):
        for i in range(len(self._factors)):
            self._factors[i] = 1
        for i in range(len(self._factors)-2,-1,-1):
            self._factors[i] = self._factors[i+1] * self._dims[i+1]
    
    def _compute_index(self,index_tuple):
        offset = 0
        for i in range(len(index_tuple)):
            if index_tuple[i] < 0 or index_tuple[i] >= self._dims[i]:
                return None
            else:
                offset += index_tuple[i] * self._factors[i]
        return offset
    
    def __str__(self):
        result = ""
        for i in range(self._dims[0]):
            result += "["
            for j in range(self._dims[1]):
                result += "["
                for k in range(self._dims[2]):
                    result += str(self.__getitem__((i,j,k)))
                    if k < self._dims[2] - 1:
                        result += ","
                result += "]"
            result += "]"
        return result
    
    def __iter__(self):
        return _ArrayNdIterator(self._elements)
    
class _ArrayNdIterator:
    def __init__(self,the_array):
        self._array_ref = the_array
        self._cur_ndx = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self._cur_ndx < len(self._array_ref):
            entry = self._array_ref[self._cur_ndx]
            self._cur_ndx += 1
            return entry
        else:
            raise StopIteration
        


# from 3_arrays import ArrayNd
a = ArrayNd(3,4,5)
a[0,0,0] = 1
a[0,0,1] = 2
a[0,0,2] = 3
a[0,0,3] = 4
a[0,0,4] = 5
a[0,1,0] = 6
a[0,1,1] = 7
a[0,1,2] = 8
a[0,1,3] = 9
a[0,1,4] = 10
a[0,2,0] = 11
a[0,2,1] = 12
a[0,2,2] = 13
a[0,2,3] = 14
a[0,2,4] = 15
a[0,3,0] = 16
a[0,3,1] = 17
a[0,3,2] = 18
a[0,3,3] = 19
a[0,3,4] = 20
a[1,0,0] = 21
a[1,0,1] = 22
a[1,0,2] = 23
a[1,0,3] = 24
a[1,0,4] = 25
a[1,1,0] = 26
a[1,1,1] = 27
a[1,1,2] = 28
a[1,1,3] = 29
a[1,1,4] = 30
a[1,2,0] = 31
a[1,2,1] = 32
a[1,2,2] = 33
a[1,2,3] = 34
a[1,2,4] = 35
a[1,3,0] = 36
a[1,3,1] = 37
a[1,3,2] = 38
a[1,3,3] = 39
a[1,3,4] = 40
a[2,0,0] = 41
a[2,0,1] = 42
a[2,0,2] = 43
a[2,0,3] = 44
a[2,0,4] = 45
a[2,1,0] = 46
a[2,1,1] = 47
a[2,1,2] = 48
a[2,1,3] = 49
a[2,1,4] = 50
a[2,2,0] = 51
a[2,2,1] = 52
a[2,2,2] = 53
a[2,2,3] = 54
a[2,2,4] = 55
a[2,3,0] = 56
a[2,3,1] = 57
a[2,3,2] = 58
a[2,3,3] = 59
a[2,3,4] = 60

print(a)