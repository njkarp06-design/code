from datetime import datetime

def time_until_new_year():
    now = datetime.now()
    new_year = datetime(now.year + 1, 1, 1)
    diff = new_year - now
    print(diff)

time_until_new_year()
