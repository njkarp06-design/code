import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

seen = set()
pairs = set()

for num in list_of_numbers:
    complement = target_number - num
    if complement in seen:
        pair = (min(num, complement), max(num, complement))
        pairs.add(pair)
    seen.add(num)

for pair in pairs:
    print(str(pair[0]) + " and " + str(pair[1]) + " sums to " + str(target_number))

print("Total pairs found:", len(pairs))
