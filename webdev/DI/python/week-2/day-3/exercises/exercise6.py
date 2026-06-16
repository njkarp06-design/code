from datetime import datetime

def birthday_minutes(birthdate):
    born = datetime.strptime(birthdate, "%Y-%m-%d")
    now = datetime.now()
    diff = now - born
    minutes = int(diff.total_seconds() / 60)
    print(f"You have lived {minutes} minutes")

birthday_minutes("2000-01-01")
