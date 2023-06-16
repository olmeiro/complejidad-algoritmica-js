"""Common methods for data structures"""

# Create a list with different elements
[]
["isabel"]
["isabel", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
["isabel", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ["a", "b", "c"]]
["isabel", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ["a", "b", "c"], {"a": 1, "b": 2, "c": 3}]
["isabel", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ["a", "b", "c"], {"a": 1, "b": 2, "c": 3}, (1, 2, 3)]

# Typical data structures operations in Python
fruits = []
fruits.append("apple")
fruits.append("banana")
fruits.append("orange")
fruits.append("strawberry")
fruits.sort()
fruits.pop()
fruits.insert(0, "strawberry")
fruits.pop(1)
fruits.remove("strawberry")
fruits.reverse()
fruits.clear()
fruits.count("apple")
fruits.index("apple")
fruits.copy()
fruits.extend(["apple", "banana", "orange", "strawberry"])

def pyramid_sum(lower, upper, margin = 0):
    """Returns the sum of the numbers from lower to upper,
    and outputs a trace of the arguments and return values
    on each call."""
    blanks = " " * margin
    print(blanks, lower, upper) # Print the arguments

    if lower > upper:
        print(blanks, 0) # Print the returned value
        return 0
    else:
        result = lower + pyramid_sum(lower + 1, upper, margin + 4)
        print(blanks, result) # Print the returned value
        return result

pyramid_sum(1, 4)