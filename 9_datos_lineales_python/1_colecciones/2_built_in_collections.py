#lists
list1 = list()
list2 = ['this', 'is', 'a', 'list']
list3 = [number**2 for number in range(1, 6)]

print(list1)
print(list2)
print(list3)

#tuples
tuple1 = tuple()
tuple2 = ('this', 'is', 'a', 'tuple')
tuple3 = tuple([number**2 for number in range(1, 6)])

print()
print(tuple1)
print(tuple2)
print(tuple3)

#sets
set1 = set()
set2 = {'this', 'is', 'a', 'set'}
numbers = [1, 2, 3, 4, 5]
set3 = set(numbers)

print()
print(set1)
print(set2)
print(set3)

#dictionaries
cats1 = {
    'name': 'Gato',
    'age': 3,
    'color': 'black'
}

cats2 = dict(name='Gato', age=3, color='black')
cats3 = dict([('name', 'Gato'), ('age', 3), ('color', 'black')])
cats4 = dict(zip(['name', 'age', 'color'], ['Gato', 3, 'black']))

print()
print(cats1)
print(cats2)
print(cats3)

# weighs of built-in collections
"""
list = 56 bytes
tuple = 40 bytes
dict = 64 bytes
set = 216 bytes
"""
import sys

colecciones = {"list": list(), "tuple": tuple(), "dict": dict(), "set": set()}

for name, value in colecciones.items():
    print(f'{name} = {sys.getsizeof(value)} bytes')