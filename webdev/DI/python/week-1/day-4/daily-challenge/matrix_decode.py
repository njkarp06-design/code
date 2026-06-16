MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM#
$a
#t%'''

matrix = []
rows = MATRIX_STR.strip().split('\n')
for row in rows:
    matrix.append(list(row))

col_chars = []
for col in range(len(matrix[0])):
    for row in matrix:
        if col < len(row):
            col_chars.append(row[col])

decoded_message = ""
in_non_alpha = False
for char in col_chars:
    if char.isalpha():
        if in_non_alpha and decoded_message != "":
            decoded_message += " "
        decoded_message += char
        in_non_alpha = False
    else:
        in_non_alpha = True

print(decoded_message)
