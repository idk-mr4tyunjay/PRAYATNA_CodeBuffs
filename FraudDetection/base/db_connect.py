import pymongo

mon_url = "mongodb://localhost:27017"

client = pymongo.MongoClient(mon_url)

db = client['custom_users']
