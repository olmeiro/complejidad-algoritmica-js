class Nodo:
   def __init__(self, x):
      self.value = x
      self.left = None
      self.right = None

def sum_numbersRecursive(root: Nodo, start_number_with: str = '') -> int:
  if root.left is None and root.right is None:
    return int(start_number_with + str(root.value))

  left = 0
  right = 0

  if root.left is not None:
    left = sum_numbersRecursive(root.left, start_number_with + str(root.value))
  if root.right is not None:
    right = sum_numbersRecursive(root.right, start_number_with + str(root.value))

  return left + right

nodo1 = Nodo(1)
nodo2 = Nodo(2)
nodo3 = Nodo(3)
nodo4 = Nodo(4)
nodo5 = Nodo(5)
nodo6 = Nodo(6)
nodo7 = Nodo(7)
nodo1.left = nodo2
nodo1.right = nodo3
nodo2.left = nodo4
nodo2.right = nodo5
nodo3.left = nodo6
nodo3.right = nodo7

response = sum_numbersRecursive(nodo1)
print(response)
# result 522
# Graficamente: paths: 124+125+136+137=522

  #         1
  #       /   \     
  #     2      3
  #   / \     / \
  # 4    5   6   7