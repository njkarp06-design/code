import random

# ANSI colors
RED = "\033[91m"
BLUE = "\033[94m"
GREEN = "\033[92m"
RESET = "\033[0m"


# DISPLAY BOARD

def display_board(board):
    print("\n")
    for i in range(3):
        row = ""
        for j in range(3):
            cell = board[i][j]
            if cell == "X":
                row += f" {RED}X{RESET} "
            elif cell == "O":
                row += f" {BLUE}O{RESET} "
            else:
                row += f" {board[i][j]} "
            if j < 2:
                row += "|"
        print(row)
        if i < 2:
            print("---+---+---")
    print("\n")


# NUMBERED INPUT SYSTEM

def get_position_input(player, board):
    while True:
        try:
            pos = int(input(f"Player {player}, choose a position (1-9): "))

            if pos < 1 or pos > 9:
                print("Choose a number between 1 and 9.")
                continue

            row = (pos - 1) // 3
            col = (pos - 1) % 3

            if board[row][col] != " ":
                print("That spot is taken.")
                continue

            return row, col

        except ValueError:
            print("Enter a valid number.")



# CHECK WIN

def check_win(board, player):
    # Rows
    for row in board:
        if row.count(player) == 3:
            return True

    # Columns
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] == player:
            return True

    # Diagonals
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True

    if board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False



# CHECK TIE

def check_tie(board):
    for row in board:
        if " " in row:
            return False
    return True



# AI EASY (random)

def ai_easy(board):
    empty = [(r, c) for r in range(3) for c in range(3) if board[r][c] == " "]
    return random.choice(empty)



# AI MEDIUM (block or win)

def ai_medium(board, ai, human):
    # Try to win
    for r in range(3):
        for c in range(3):
            if board[r][c] == " ":
                board[r][c] = ai
                if check_win(board, ai):
                    board[r][c] = " "
                    return r, c
                board[r][c] = " "

    # Try to block human
    for r in range(3):
        for c in range(3):
            if board[r][c] == " ":
                board[r][c] = human
                if check_win(board, human):
                    board[r][c] = " "
                    return r, c
                board[r][c] = " "

    # Otherwise random
    return ai_easy(board)



# AI HARD (Minimax - unbeatable)

def minimax(board, depth, is_maximizing, ai, human):
    if check_win(board, ai):
        return 1
    if check_win(board, human):
        return -1
    if check_tie(board):
        return 0

    if is_maximizing:
        best_score = -999
        for r in range(3):
            for c in range(3):
                if board[r][c] == " ":
                    board[r][c] = ai
                    score = minimax(board, depth + 1, False, ai, human)
                    board[r][c] = " "
                    best_score = max(score, best_score)
        return best_score

    else:
        best_score = 999
        for r in range(3):
            for c in range(3):
                if board[r][c] == " ":
                    board[r][c] = human
                    score = minimax(board, depth + 1, True, ai, human)
                    board[r][c] = " "
                    best_score = min(score, best_score)
        return best_score


def ai_hard(board, ai, human):
    best_score = -999
    best_move = None

    for r in range(3):
        for c in range(3):
            if board[r][c] == " ":
                board[r][c] = ai
                score = minimax(board, 0, False, ai, human)
                board[r][c] = " "
                if score > best_score:
                    best_score = score
                    best_move = (r, c)

    return best_move


# MAIN GAME LOOP

def play():
    print("Welcome to Tic Tac Toe!")
    print("Choose game mode:")
    print("1. Human vs Human")
    print("2. Human vs AI (Easy)")
    print("3. Human vs AI (Medium)")
    print("4. Human vs AI (Hard / Unbeatable)")

    mode = input("Enter choice: ")

    while True:
        board = [[" " for _ in range(3)] for _ in range(3)]
        current = "X"

        while True:
            display_board(board)

            # Human turn OR human is X in AI modes
            if mode == "1" or (mode != "1" and current == "X"):
                row, col = get_position_input(current, board)
            else:
                print("AI is thinking...")
                if mode == "2":
                    row, col = ai_easy(board)
                elif mode == "3":
                    row, col = ai_medium(board, "O", "X")
                else:
                    row, col = ai_hard(board, "O", "X")

            board[row][col] = current

            if check_win(board, current):
                display_board(board)
                print(f"{GREEN}Player {current} wins!{RESET}")
                break

            if check_tie(board):
                display_board(board)
                print("It's a tie!")
                break

            current = "O" if current == "X" else "X"

        again = input("Play again? (y/n): ").lower()
        if again != "y":
            print("Thanks for playing!")
            break


# Start the game
play()