from datetime import datetime

def get_current_date():
    today = datetime.now()
    print(today.strftime("%Y-%m-%d"))

get_current_date()
