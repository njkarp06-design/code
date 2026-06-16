import random

class Game:
    def get_user_item(self):
        choice = input("Choose rock, paper, or scissors: ").lower().strip()
        while choice not in ["rock", "paper", "scissors"]:
            choice = input("Invalid. Choose rock, paper, or scissors: ").lower().strip()
        return choice

    def get_computer_item(self):
        options = ["rock", "paper", "scissors"]
        return random.choice(options)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        wins = {"rock": "scissors", "scissors": "paper", "paper": "rock"}
        if wins[user_item] == computer_item:
            return "win"
        return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"You chose {user_item}, computer chose {computer_item}.")
        if result == "win":
            print("You win!")
        elif result == "loss":
            print("You lose!")
        else:
            print("It's a draw!")
        return result
