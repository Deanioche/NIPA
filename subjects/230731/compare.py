import random

numbers = random.sample(range(1, 11), 10)
strings = ['AAA', 'AAB', 'ABA', 'ABB', 'BAA', 'BAB', 'BBA', 'BBB']
random.shuffle(strings)

print(numbers)
print(sorted(numbers))
print(strings)
print(sorted(strings))

# [9, 2, 4, 1, 7, 8, 3, 10, 5, 6]
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# ['BBA', 'ABA', 'BAB', 'AAB', 'BBB', 'AAA', 'BAA', 'ABB']
# ['AAA', 'AAB', 'ABA', 'ABB', 'BAA', 'BAB', 'BBA', 'BBB']
