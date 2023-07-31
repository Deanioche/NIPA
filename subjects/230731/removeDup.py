import random

numbers = [random.randint(1, 10) for i in range(1000)]

print(sorted(numbers)) # 1, 1, 1, ... , 10, 10, 10

for i in numbers:
  while numbers.count(i) > 1:
    numbers.remove(i)

print()
print(sorted(numbers)) # 1, 2, 3, ... , 8, 9, 10