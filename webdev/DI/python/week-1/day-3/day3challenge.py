# Challenge 1
word = input("Enter a word: ")

letter_index = {}
for i in range(len(word)):
    if word[i] in letter_index:
        letter_index[word[i]].append(i)
    else:
        letter_index[word[i]] = [i]
print(letter_index)

# Challenge 2
items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

wallet_amount = int(wallet.replace("$", "").replace(",", ""))

basket = []
for item, price in items_purchase.items():
    item_price = int(price.replace("$", "").replace(",", ""))
    if item_price <= wallet_amount:
        basket.append(item)
        wallet_amount -= item_price

if len(basket) == 0:
    print("Nothing")
else:
    print(sorted(basket))
